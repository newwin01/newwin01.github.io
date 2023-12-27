---
title:  "2023-HGU-ML Lecture 1. Introduction to AI and ML"
excerpt: "AI and ML Intro. by Prof. Henry Choi"

categories:
  - ML
tags:
  - [ML]
---

# Introduction to AI & ML

Came from Henry Choi's Lecture and ChatGPT's explanation

- Introduction to AI
    - Weak and Strong AI
        - strong AI: understanding Chinese
        - weak AI: simulating the ability to understand Chinese
    - Applied AI and General AI
    - Computationalism and Connectionism
        - Computationalism
            - thoughts are computation on symbols
                - Symbolic, interpretable
                - e.g) Turing Machine
        - Connectionism
            - Information is represented in neurons and networks
                - Low-level, black-box
                - Neural Networks
    - Turing Test
    - Implementation level and algorithmic level
        - Implmentation level: how the system is physically realized
            - AI and Human Intelligence are different
        - Algorithmic level: how the system does, what representation or process it uses
            - 3 level for intelligent system
                - Learning, Computational level(what the system does and why), Algorithmic level
            - Can achieve some intelligence on approximation
    - Superintelligence
        - bootstrapping from “child machine”, brain emulation, biological cognition, brain-computer interface, networks, and organizations
    - Deep Neural Networks
        - Hebbian learning, perceptron, multilayer perceptron, deep neural networks
    - Practical AI risks
        - affected by viruses
        - misused by people with bad intentions
        - biased AI
        - taking over roles
        - unable to reject AI’s decision
- Introduction to ML
    - What is learning
        - a computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, **if its performance at the tasks improves with the experiences**
        - simple model (e.g., linear regression)
        - for supervised learning
            - Learning
            - Recognition
        - Complex models
    - Machine learning
        - Takes data and output  → Makes program
        - source of knowledge is data
    - Workflow of machine learning
        - acquisition - data is gathered/collected from various sources
        - preparation - data is cleaned, preprocessed, and eventually becomes a dataset
        - analysis - data is evaluated to run and customize reports
        - modeling - data is patternized and generalized as models
        - visualization
        - deployment and maintenance
    - Components of ML
        - data: features, label, format
        - models: SVM, NN, K-means
        - objectives: cross-entropy, RMSE, likelihood
        - optimization - gradient descent, Newton, linear programming, convex optimization
    - Data
        - structured/unstructured
    - Categories
        - unsupervised learning
            - e.g., clustering, dimension reduction
        - supervised learning
            - e.g., speech/face recognition
        - semi-supervised learning
            - e.g., cancer detection
        - reinforcement learning
            - e.g., AlphaGo, self-driving car
    - Discriminative model and Generative model
        - Discriminative models: p(t|x)
            - only for supervising
        - Generative model: p(t, x) or p(x|t)
            - applicable to unlabeled data
            - focusing on modeling each class’ distribution
    - Pattern Recognition
        - measuring → preprocessing → dimensionality reduction → prediction → model selection
    -