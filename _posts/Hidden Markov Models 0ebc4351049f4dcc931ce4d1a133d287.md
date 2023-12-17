# Hidden Markov Models

Hidden Markov Models (HMMs) are statistical models used to describe systems that evolve over time, where the underlying system state is not directly observable ("hidden") but can be inferred from observable outputs. HMMs are widely used in various fields, including speech recognition, bioinformatics, natural language processing, and finance. Here's an overview of the key components of Hidden Markov Models:

1. **Markov Chain:**
    - An HMM is an extension of a Markov chain, which is a mathematical model describing a sequence of events where the probability of transitioning from one state to another depends only on the current state.
    - In a Markov chain, each state is directly observable. However, in an HMM, the system has both observable outputs (emissions) and hidden states.
2. **Components of an HMM:**
    - **Hidden States (X):** The underlying, unobservable states that the system goes through over time.
    - **Observations or Emissions (Y):** Observable outputs or data associated with each state. These emissions are influenced by the hidden state but are not fully deterministic.
    - **Transition Probabilities (A):** Probabilities of transitioning from one hidden state to another. Represented by a matrix A, where \(A[i][j]\) is the probability of transitioning from state i to state j.
    - **Emission Probabilities (B):** Probabilities of observing a particular emission given the current hidden state. Represented by a matrix B, where \(B[i][j]\) is the probability of emitting observation j given the hidden state i.
    - **Initial State Distribution (π):** The probability distribution over the initial hidden states.
3. **Three Fundamental Problems in HMMs:**
    - **Evaluation:** Given an HMM and a sequence of observations, compute the probability of observing that sequence.
    - **Decoding:** Determine the most likely sequence of hidden states given the observations.
    - **Learning:** Adjust the model parameters (A, B, and π) based on observed data to maximize the likelihood of the data.
4. **Applications:**
    - **Speech Recognition:** HMMs are used to model phonemes and recognize spoken words.
    - **Bioinformatics:** HMMs are employed in sequence analysis, such as gene prediction and protein structure prediction.
    - **Natural Language Processing:** HMMs can be used for part-of-speech tagging and named entity recognition.
    - **Finance:** HMMs are applied to model financial time series data and detect regime changes.
5. **Training HMMs:**
    - The parameters of an HMM (A, B, and π) are typically trained using the Expectation-Maximization (EM) algorithm, where the Baum-Welch algorithm is a specific application of EM for HMMs.

Hidden Markov Models are versatile tools for modeling sequential data, capturing the underlying dynamics and providing a framework for making predictions and inferences based on observable outputs.

- Sequential Data
    - i.i.d assumption → likelihood can be expressed as product over all data points
        - However, the assumption is not valid for sequential data
    - Stationary sequential data
        - the order should be considered
            - temporal dependence is important to understand the data
        - the length is flexible, and the speed is flexible
            - for example, when a speaker reads a sentence, the speed changes
        - the time resolutions of input and output might be different
            - for speech recognition system
            - for language translation
    
    ![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled.png)
    
- Sequence modeling
    
    ![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%201.png)
    
- Markov Model
    
    ![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%202.png)
    

A Markov Model, or more specifically a Markov Chain, is a mathematical model that describes a sequence of events where the probability of transitioning from one state to another depends only on the current state and not on the sequence of events that preceded it. It is a type of stochastic process that exhibits the Markov property.

Here are the key components and concepts related to Markov Models:

1. **States:**
    - A Markov Chain consists of a set of states, denoted by \(S\). Each state represents a possible condition or situation of the system.
2. **Transitions:**
    - Transitions between states occur probabilistically. The probability of moving from one state to another is described by a transition probability matrix, often denoted by \(P\). The element \(P_{ij}\) represents the probability of transitioning from state \(i\) to state \(j\).
3. **Markov Property:**
    - The Markov property states that the future behavior of the system is independent of its past given its current state. In other words, the probability of transitioning to a future state depends only on the current state and not on how the system arrived at the current state.
4. **Homogeneous Markov Chain:**
    - In a homogeneous Markov Chain, the transition probabilities remain constant over time. This means that the system's behavior doesn't change with time, making it time-homogeneous.
5. **Irreducibility:**
    - A Markov Chain is irreducible if it is possible to reach any state from any other state, either directly or through a sequence of transitions.
6. **Absorbing States:**
    - Some states in a Markov Chain may be absorbing, meaning that once the system enters such a state, it stays there indefinitely.
7. **Stationary Distribution:**
    - For a homogeneous irreducible Markov Chain, there exists a stationary distribution, a probability distribution over states that remains unchanged by the transition process.
8. **Applications:**
    - Markov Chains find applications in various fields, including physics, biology, economics, and computer science. Examples include modeling the weather, predicting stock prices, and simulating the behavior of molecules.
9. **Examples:**
    - A classic example of a Markov Chain is the random walk, where a particle moves randomly in discrete steps, with the probability of moving left or right only depending on its current position.

In summary, Markov Models provide a probabilistic framework for modeling systems that exhibit memorylessness, where the future state of the system is determined solely by its current state. They are foundational in various areas of science and engineering for modeling and analyzing dynamic processes.

A Hidden Markov Model (HMM) is an extension of a Markov Chain where the underlying states are not directly observable but generate observable outputs. The model involves two sets of probabilities: transition probabilities (A), representing the likelihood of transitioning between hidden states, and emission probabilities (B), representing the likelihood of emitting observable outputs given the hidden states. These probabilities are essential for characterizing the dynamics of systems with hidden states, making HMMs widely used in applications such as speech recognition and bioinformatics.

![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%203.png)

The three fundamental problems in Hidden Markov Models (HMMs) are:

1. **Evaluation (Likelihood):**
    - **Problem:** Given an HMM model \(\lambda\) and a sequence of observations \(O\), compute the likelihood \(P(O|\lambda)\), i.e., the probability of observing the sequence given the model.
    - **Solution:** The forward algorithm is commonly used to efficiently calculate the likelihood by summing over all possible paths.
2. **Decoding (State Sequence):**
    - **Problem:** Given an HMM model \(\lambda\) and a sequence of observations \(O\), determine the most likely sequence of hidden states \(Q\), i.e., the path that maximizes \(P(Q|O, \lambda)\).
    - **Solution:** The Viterbi algorithm is commonly used to find the most likely state sequence by efficiently considering the joint probability of the observed sequence and the state sequence.
3. **Learning (Training):**
    - **Problem:** Given a set of observations \(O\) and the number of hidden states, estimate the parameters of the HMM model \(\lambda = (A, B, \pi)\), i.e., the transition probabilities (A), emission probabilities (B), and initial state distribution (\(\pi\)), to maximize the likelihood of the data.
    - **Solution:** The Baum-Welch algorithm, a variant of the Expectation-Maximization (EM) algorithm, is commonly used to iteratively update the model parameters based on the observed data, optimizing the likelihood of the model.

These three problems are fundamental to working with Hidden Markov Models and are often referred to as the "three basic problems" in HMMs. They cover aspects of likelihood computation, state sequence determination, and model parameter estimation.

- HMM - Evaluation
    - compute the likelihood of an observation sequence
    - unfeasible for K states with N time steps

The forward and backward procedures are key components of the Forward-Backward algorithm, which is used to efficiently compute the likelihood (evaluation problem) of a given sequence of observations in a Hidden Markov Model (HMM).

1. **Forward Procedure:**
    - **Objective:** The forward procedure calculates the probability of observing a particular sequence of observations up to a certain point in time, given the HMM model.
    - **Algorithm:**
        - Initialize the forward probabilities at time \(t=1\) using the initial state distribution \(\pi\) and the emission probability \(B\).
        - Recursively calculate the forward probabilities for each time step \(t\) using the current state's emission probability and the sum of probabilities from the previous time step multiplied by the transition probabilities.
        - The final likelihood of the entire sequence is obtained by summing the forward probabilities at the last time step.
2. **Backward Procedure:**
    - **Objective:** The backward procedure calculates the probability of observing the remaining part of the sequence given the current state at a particular time.
    - **Algorithm:**
        - Initialize the backward probabilities at the last time step using all states emitting the last observation.
        - Recursively calculate the backward probabilities for each time step, moving backward in time. This involves summing the probabilities of transitioning to the next state multiplied by the emission probability of the next observation.
        - The final likelihood of the entire sequence is obtained by summing the product of the initial state distribution \(\pi\), the emission probability for the first observation, and the backward probabilities at the first time step.
3. **Combining Forward and Backward Probabilities:**
    - The product of the forward and backward probabilities at each time step provides the joint probability of the observed sequence up to that point and the state at that point.
    - Using these joint probabilities, the Forward-Backward algorithm can efficiently compute the marginal probability of being in a particular state at a particular time, as well as the likelihood of the entire observed sequence.
4. **Use in Evaluation (Likelihood):**
    - By combining the forward and backward procedures, the Forward-Backward algorithm efficiently computes the likelihood of the observed sequence given the HMM model. The joint probabilities obtained during this process are crucial for subsequent steps in HMM-based applications, such as parameter estimation (Baum-Welch algorithm) and state sequence decoding (Viterbi algorithm).

In summary, the forward and backward procedures play a key role in the efficient computation of the likelihood of a given sequence in an HMM, providing a foundation for various inference and learning tasks associated with HMMs.

![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%204.png)

![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%205.png)

- Decoding
    - the optimal sequence Z is the best state sequence path
    
    ![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%206.png)
    
    ![Untitled](Hidden%20Markov%20Models%200ebc4351049f4dcc931ce4d1a133d287/Untitled%207.png)
    
    In the context of Hidden Markov Models (HMMs), decoding refers to the process of determining the most likely sequence of hidden states given a sequence of observed emissions. The goal is to find the optimal path through the hidden states that best explains the observed data. 
    
    There are two commonly used decoding algorithms for HMMs: the Viterbi algorithm and the posterior decoding algorithm.
    
    1. **Viterbi Algorithm:**
        - **Objective:** The Viterbi algorithm seeks to find the most likely sequence of hidden states, often referred to as the "Viterbi path," given a sequence of observations.
        - **Algorithm:**
            - Initialize the Viterbi probabilities for each state at the first observation based on the product of the initial state distribution (π) and the emission probabilities.
                
                π
                
            - Recursively calculate the Viterbi probabilities for each state at each subsequent observation by considering the maximum probability path from the previous observation.
            - Backtrack through the Viterbi probabilities to find the optimal path with the highest likelihood.
        - **Application:** The Viterbi algorithm is widely used in speech recognition, bioinformatics, and various other applications where determining the most likely sequence of hidden states is crucial.
- learning
    - can be done by the Baum Welch algorithm
    
    Hidden Markov Models (HMMs) can be classified into two main types based on the nature of their observations: discrete HMMs and continuous HMMs.
    
    1. **Discrete HMMs:**
        - **Observations:** In discrete HMMs, the observations emitted by each state are discrete symbols or events. These symbols could represent, for example, different words in a speech recognition system, nucleotides in a DNA sequence, or specific image features.
        - **Emission Probabilities:** The emission probabilities in a discrete HMM describe the probability of emitting a particular symbol from each state. These probabilities are organized into an emission probability matrix, often denoted as \(B\).
        - **Applications:** Discrete HMMs are commonly used in applications where observations naturally fall into distinct categories, and the transition between states involves emitting specific symbols.
    2. **Continuous HMMs:**
        - **Observations:** In continuous HMMs, the observations are continuous values, typically vectors of real numbers. Examples of continuous observations include acoustic features in speech recognition, sensor readings in robotics, or pixel intensities in image processing.
        - **Emission Probabilities:** The emission probabilities in continuous HMMs are modeled using continuous probability density functions (PDFs) rather than discrete probabilities. Common choices for PDFs include Gaussian distributions or mixtures of Gaussian distributions.
        - **Applications:** Continuous HMMs are well-suited for tasks where the underlying data is naturally represented as continuous variables. They are widely used in speech and audio processing, gesture recognition, and other applications involving continuous sensor data.
    
    **Comparison:**
    
    - **Complexity:** Continuous HMMs are often more complex than discrete HMMs due to the need to model continuous probability distributions.
    - **Applications:** The choice between discrete and continuous HMMs depends on the nature of the data and the application. Discrete HMMs are simpler and more interpretable, while continuous HMMs are better suited for tasks with continuous and analog data.
    - **Training:** Continuous HMMs typically require more sophisticated training techniques, such as the Expectation-Maximization (EM) algorithm with Gaussian Mixture Models (GMMs).
    
    In practice, the choice between discrete and continuous HMMs depends on the specific characteristics of the data and the requirements of the modeling task. Discrete HMMs are often used in scenarios where observations naturally fall into distinct categories, while continuous HMMs are employed when dealing with continuous and analog data.
    
    The Baum-Welch algorithm, also known as the Forward-Backward algorithm, is an iterative procedure used for training Hidden Markov Models (HMMs). This algorithm is a specific application of the Expectation-Maximization (EM) algorithm, and it aims to estimate the parameters of an HMM when the underlying states are not observed directly but are associated with a sequence of observable emissions. 
    
    Here's an overview of the steps involved in the Baum-Welch algorithm:
    
    1. **Initialization:**
        - Initialize the transition probabilities matrix \(A\), the emission probabilities matrix \(B\), and the initial state distribution \(\pi\) with random or predefined values.
    2. **Expectation (E-step):**
        - Use the Forward-Backward algorithm (described earlier) to compute the probabilities of being in each state at each time step (\(\gamma\)) and the joint probabilities of being in state \(i\) at time \(t\) and in state \(j\) at time \(t+1\) (\(\xi\)).
    3. **Maximization (M-step):**
        - Update the model parameters based on the expectations calculated in the E-step.
            - **Transition Probabilities (\(A\)):** Update the entries of the transition matrix \(A\) using the normalized expected counts from the \(\xi\) values.
            - **Emission Probabilities (\(B\)):** Update the entries of the emission matrix \(B\) using the normalized expected counts from the \(\gamma\) values.
            - **Initial State Distribution (\(\pi\)):** Update the initial state distribution \(\pi\) using the normalized expected counts from the \(\gamma\) values at the first time step.
    4. **Convergence Check:**
        - Check for convergence by comparing the change in log-likelihood between iterations. If the change is below a predefined threshold or the algorithm reaches a maximum number of iterations, consider the training process complete.
    5. **Iterate:**
        - Repeat the E-step and M-step until convergence is achieved.
    
    **Key Points:**
    
    - The Baum-Welch algorithm iteratively refines the model parameters based on the observed data without knowing the underlying states.
    - It is used for training HMMs in various applications such as speech recognition, bioinformatics, and natural language processing.
    - The algorithm is sensitive to the initial parameter values, and multiple initializations may be performed to avoid local optima.
    - The convergence of the algorithm does not guarantee finding the global maximum, so multiple runs with different initializations may be beneficial.
    
    The Baum-Welch algorithm plays a crucial role in learning the parameters of HMMs from observed data, making it a fundamental tool in the field of probabilistic modeling and sequential data analysis.
    
    The learning problem in Hidden Markov Models (HMMs) is closely related to the Expectation-Maximization (EM) algorithm. The EM algorithm addresses the challenge of estimating the model parameters (transition probabilities, emission probabilities, and initial state distribution) when the underlying states are not directly observed. In the E-step, the algorithm computes the expected values of the hidden states given the observed data, and in the M-step, it maximizes the likelihood of the observed data by updating the model parameters based on these expectations.