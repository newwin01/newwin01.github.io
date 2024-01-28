---
title:  "2023-HGU-ML Lecture 3. Probability and Statistics for ML"
excerpt: "Prob and Stats are the fundamentals. by Prof. Henry Choi"

categories:
  - ML
tags:
  - [ML]
---

# Probability and Statistics for ML

- Probability
    - IID: independent identically distributed
    - Simpson’s Paradox
    - Probability is a number assigned to an event indicating “how likely” the event will occur when randomly selected
    - uncertainty can make the model simpler. A simple/uncertain model rather than a complex/certain one, even when modeling the true/deterministic rule is possible
    - mathematical probability measures the likelihood that events will occur
    - empirical statistics is science of collecting and analyzing numerical data in large quantities
    - Random Variable
        - a variable whose possible values are numerical outcomes of a random phenomenon
        - is a measurable function from a set of possible outcomes to a measurable space
    
    <img src = "../../../assets/ML/ProbAndStats/Untitled.png">

    <img src = "../../../assets/ML/ProbAndStats/Untitled 1.png">
    
    - marginal, joint, and conditional probabilities
    
    <img src = "../../../assets/ML/ProbAndStats/Untitled 2.png">
    
    <img src = "../../../assets/ML/ProbAndStats/Untitled 3.png">
    
    <img src = "../../../assets/ML/ProbAndStats/Untitled 4.png">
    
    - Bayes rule presents the transformation process of our beliefs.
        - subjective belief on Y changes with X
    - learning is
        - nothing but to update our confidence from prior to posterior.
        - the key factor is likelihood which is based on data.
    - Bayesianism (Thomas Bayes) vs. frequentism (Ronald A. Fisher)
        
        Bayesianism and frequentism are two distinct approaches to statistical inference, and they differ in their fundamental principles and interpretations of probability. Thomas Bayes and Ronald A. Fisher were prominent figures associated with these respective approaches.
        
        Bayesianism (Thomas Bayes):
        
        1. **Probability as Belief:**
            - In Bayesian statistics, probability is interpreted as a measure of belief or confidence in a particular hypothesis. It reflects the degree of certainty or uncertainty given available information.
            - Bayesians start with a prior probability distribution, representing initial beliefs about a hypothesis before observing data.
        2. **Bayes' Theorem:**
            - The cornerstone of Bayesian statistics is Bayes' theorem, which updates the prior belief based on observed data to obtain a posterior probability distribution.
            - Bayes' theorem relates the posterior probability (probability of the hypothesis given the data) to the prior probability and the likelihood of the data given the hypothesis.
            
            $$ P(H|D) = \frac{P(D|H) \cdot P(H)}{P(D)} $$
            
            - $$ P(H|D) $$ is the posterior probability, 
            $$( P(D|H) )$$ is the likelihood, 
            $$( P(H) )$$ is the prior probability, and 
            $$( P(D) )$$ is the probability of the data.
        3. **Incorporation of Prior Knowledge:**
            - Bayesian analysis allows the incorporation of prior knowledge into the analysis, enabling the adjustment of beliefs based on both prior information and new data.
        
        Frequentism (Ronald A. Fisher):
        
        1. **Probability as Frequency:**
            - Frequentist statistics, on the other hand, views probability as a long-run frequency or limit of relative frequencies. Probability is associated with the repeated occurrence of events in a hypothetical infinite sequence of trials.
        2. **No Prior Probability:**
            - Unlike Bayesianism, frequentist statistics does not involve prior probabilities. It relies solely on observed data and the likelihood of obtaining that data under different hypotheses.
        3. **Hypothesis Testing and Confidence Intervals:**
            - Frequentist methods often focus on hypothesis testing and confidence intervals. Hypothesis testing involves assessing the evidence against a null hypothesis, and confidence intervals provide a range of plausible values for an unknown parameter.
        4. **Objective and Reproducible:**
            - Frequentist methods are considered more objective and reproducible, as they do not rely on subjective prior beliefs.
        
        Comparison:
        
        - **Subjectivity:**
            - Bayesianism is often criticized for being subjective due to the reliance on prior beliefs. Frequentism is considered more objective since it doesn't involve prior probabilities.
        - **Flexibility vs. Objectivity:**
            - Bayesian methods provide a flexible framework for incorporating prior information, but this flexibility is seen by some as a weakness. Frequentism, being more rigid, is valued for its objectivity and reproducibility.
        - **Interpretation of Probability:**
            - Bayesianism interprets probability as a measure of belief, while frequentism interprets it as a long-term frequency.
        
        Both Bayesian and frequentist approaches have their strengths and weaknesses, and the choice between them often depends on the nature of the problem, available data, and the philosophical stance of the statistician or researcher. In practice, researchers sometimes use a combination of both approaches, known as Bayesian-frequentist synthesis.
        
        - parameters
            - updated (represented probabilistically) vs. fixed
            - with prior vs. no prior
        - data
            - fixed vs. random samples
        - example
            - diagnosis vs. dice
        - focused on
            - posterior vs likelihood
    
    <img src = "../../../assets/ML/ProbAndStats/Untitled 5.png">
    
    - conjugate distributions
        - [https://en.wikipedia.org/wiki/Conjugate_prior](https://en.wikipedia.org/wiki/Conjugate_prior)
        - Prior and posterior distribution is in the same family
    - Central Limit Theorem
    - Cramer’s theorem
        - [https://carstart.tistory.com/160](https://carstart.tistory.com/160)
    - multivariate Gaussian
        - [https://dhpark1212.tistory.com/entry/다변량-가우시안-분포Multivariate-Gaussian-Distribution](https://dhpark1212.tistory.com/entry/%EB%8B%A4%EB%B3%80%EB%9F%89-%EA%B0%80%EC%9A%B0%EC%8B%9C%EC%95%88-%EB%B6%84%ED%8F%ACMultivariate-Gaussian-Distribution)
    - transformed Gaussian
    - whitening transformation
        - it transforms a random variable vector with covariance into a new variable vector whose covariance is the identity matrix
    - transformed densities
    - limitations of Gaussian distribution
        - there are too many parameters in general
        - it is intrinsically unimodal
    - stationary process
    - basic distributions: uniform
    - basic distributions: Bernoulli
        - Discrete probability distribution
    - basic distributions: binomial
        - the probability of observing occurrences of in a set of samples from a Bernoulli distribution
    - basic distributions: categorical and multinomial
