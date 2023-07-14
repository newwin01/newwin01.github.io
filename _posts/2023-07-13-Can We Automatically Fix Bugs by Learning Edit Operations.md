---
title:  "Can We Automatically Fix Bugs by Learning Edit Operations?"
excerpt: "Generalizing the change is helpful...?"

categories:
  - APR
tags:
  - [APR]
---

## "Can We Automatically Fix Bugs by Learning Edit Operations?"

## [Paper](https://www.cs.wm.edu/~denys/pubs/SANER-RENE-BugFixing.pdf)

### Summary:

- Implementing Hephaestus, a novel method to improve the accuracy of APR through learning to apply edit operations. Leverages neural machine translation and attempts to produce the edit operations needed.
    
    Learning edit operations does not offer an advantage over the standard approach of translating directly from buggy code to fixed code. However, interestingly, Hephaestus exhibited lower translation accuracy than the baseline, able to perform successful bug repair.
    

### Points:

1. Introduction
    1. The naive approach attempts some sort of comparison algorithm that identifies the type of bug and replaces it with a prescribed bugs
        1. Time Consuming
    2. Learning approach using neural machine translation
    3. Directly applying the NMT approach to source code is inefficient
        1. Many bugs fixes involve changes to a few sentences
            1. Results in suboptimal performances
        2. Attempt to mitigate the inefficiency by predicting the specific statement on AST
        3. Attempting on individual tokens would be more optimal
    4. Hephaestus leverages NMT to predict edit operation, derived from Levenshtein Distance Algorithm
        1. Working at the token level of source code
        2. Work on any language without language-specific parsers
2. Related Works
    1. Tufano et al.
        1. Repairing code through identification of bug-fix patterns in large software repositories
        2. Usage of Deep Learning Approach regarding “meaningful” change
    2. Chen et al.
        1. Focus on single-line bug
    3. Jiang et al.
        1. The correct fix for a given bug does not exist within the model’s output space and the model’s lack of awareness of syntax
        2. Pre-train model on the programming language in question
    4. Yuan and Banzhaf
        1. grouping fine-granularity edits into larger statement-level edits
    5. Mousavi et al.
        1. Overfitting and Disparity between predicted bug and fix operation and would mimic a human software developer
3. Background
    1. Fixing buggy code to fixed code using traditional language translation matter of the buggy to fix a variety of language
    2. Traditional translation replaces the majority of the input sequence which is natural language.
        1. Fix in code might be minimal
        2. repair translation should not have the same meaning as the input
4. Approach
    1. Levenshtein Edit Operation
        1. the bug is input sequence, the NMT model attempts to produce edit operations
        2. Basic Operations
            1. Insertion
            2. Deletion
            3. Replacement
    2. Compound Edit Operations
        1. Group of one or more edit operations; sequence of operations
        2. Condensing: A grouping process to compound operations
    3. Dataset Construction
        1. Control Dataset: baseline, not involved with edit operations
        2. Machine String: In order to include edit operations, transforming edit operations
            1. Typed
            2. General
        3. We make the distinction between typed and general form to determine if the form of machine string used during training affects the Hephaestus models’ abilities to learn edit operations.
    4. Experimental Dataset
        1. translate the bug into its corresponding fix, showing Levenshetein edit distance between the bug and fix
        2. all basic compound operation sequences which transform the bug into the fix, strict is the minimal sequence of the strict compound operation sequences, and loose is the minimal sequence of the loose compound operation sequences
    5. Model Construction
        1. LSTM+General
        2. GRU+General
        3. LSTM+Typed
    6. The CEC ensures that error signals fed forward into the LSTM layers and backpropagated to the LSTM layers are resistant to the effects of the vanishing gradient problem.
5. Experimental Design
    1. Perfect Prediction Accuracy
    2. Failed Prediction Rate
    3. Edit Distance Decrease
    4. Training Accuracy
6. Result
    1. PPA: The control model (baseline model) outperformed the rest, with no much difference
    2. FPR: The control model maintained 100% capability, the string can always be interpreted as a sequence of Java method tokens
    3. EDD: every model generates “bug fixes” that were further away from the fixed code than the original buggy code
    4. Training Accuracy: Every model exceeded 90%
7. RQ
    1. RQ1: Is learning edit operations an effective approach to automatic bug repair?
        1. learning edit operations does not offer advantages over the baseline approach. The experimental Hephaestus models must determine a sequence of edit operations, decode them, and apply them to the inputted buggy method in order to predict fixed source code
    2. RQ2: What effect does each condensing strategy and machine string form have on the accuracy of bug repair?
        1. The differences in PPA between the basic, strict, and loose models are negligible, but there are differences according to the training accuracy and average EDD values. Despite having significantly lower final training accuracy, the strict and loose models had slightly more positive EDD values than the basic models (a difference of about 0.96). Thus, it is evidenced that condensing edit operations into strict and loose forms are beneficial over not condensing them at all
    3. RQ3: What is the effect of using an LSTM-based architecture versus a GRU-based architecture on the accuracy of bug repair?
        1. the variation is not meaningful enough to consider as a key difference between the models.
    4. Future Work
        1. It was determined that most failed predictions were caused by generated indices outside the valid range for a given string. What changes can be made to this model to restrict the prediction range?
        2. does changing the abstraction method of the training dataset affect this metric?
        3. Other NLP Tools
        4. Extra software layers in addition to the methods presented in our study.
    5. Conclusion
        1. The introduction of these specific methods for training NMTbased systems to learn bug fixes did not provide a benefit to the task
        2. Edit operations are capable of performing automated bug repair to some degree

### Knowledge:

- NMT (Neural Machine Translation): [Neural machine translation - Wikipedia](https://en.wikipedia.org/wiki/Neural_machine_translation)uses an artificial neural work to predict the likelihood of a sequence of words
- Levenshtein Distance Algorithm: A string metric for measuring the difference between two sequences. This is likely due to the experimental models experiencing higher entropy than the control when making predictions.

### Terminology:

- Condensing Strategies:
    - Basic Condensing: basic compound operation corresponds with exactly one change
    - Loose Condensing: iff the application of its constituent operation is equivalent to the application of some singular op
        - Modify a contiguous section of tokens
    - Strict Condensing: iff it is loosely compatible and every operation is of the same flavor
- Machine Strings:
    - Typed: f is one of ins, del, or rep, depending on if the flavor of the represented edit operation is insertion, deletion, or replacement, respectively
    - General: general form machine strings do not explicitly store the flavor of their represented edit operations

### Tool:

[GitHub - WM-SEMERU/hephaestus](https://github.com/WM-SEMERU/hephaestus)

### Questions: