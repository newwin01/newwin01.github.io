# Regularization

- underfitting and overfitting
    - Occam’s razor
        - choose the simplest one
- to avoid overfitting
    - make the model architecture simpler
        - smaller model
    - focus on underlying abstraction/explanatory factors
        - feature selection
    - restriction on the parameter space
        - shrinkage method
        - early stopping
    - spread out the probability mass from the training samples
        - adding noise
        - data augmentation
- bias-variance trade off
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled.png)
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%201.png)
    
- model complexity in linear regression
    - linear regression is simple and interpretable with good performance
    - adding predictors always decreases the training error
        - while increasing the model complexity
    - adding predictors does not necessarily improve the test error
- feature selection methods
    - subset selection approaches
        - forward selection
        - backward selection
        - plus-L minus-R selection
        - cross-validation is used for each step
    - dimension reduction approach
        - PCR
        - dimension reduction
- shrinkage method
    - the idea is to regularize or shrink (or push) the coefficients toward 0
        - this introduces bias and decreases the variance
        - if the latter effect is more significant, this would decrease the test error
        - the smaller the norm is, the simpler the model i
    - shrinkage methods: moving the values closer to zero
        - when weights converge to zeros, the model complexity decreases.
        
        ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%202.png)
        
    - shrinkage regularization
        - penalty term for the size of the weights
        
        ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%203.png)
        
- shrinkage regularization in linear regression
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%204.png)
    
    Shrinkage regularization approaches, also known as regularization or penalty methods, are techniques used in machine learning and statistics to prevent overfitting and improve the generalization performance of models. These methods introduce a penalty term to the optimization objective, discouraging the model from fitting the training data too closely. Two common types of shrinkage regularization are L1 regularization (Lasso) and L2 regularization (Ridge):
    
    1. **L1 Regularization (Lasso):**
        - **Penalty Term:** Adds the sum of the absolute values of the model parameters to the objective function.
        - \[ \text{L1 regularization term:} \quad \lambda \sum_{i=1}^{n} |w_i| \]
        - **Effect:** Encourages sparsity in the model by pushing some coefficients to exactly zero, effectively performing feature selection.
        - **Use Case:** Suitable when there is a belief that many features are irrelevant or when a simpler, more interpretable model is desired.
    2. **L2 Regularization (Ridge):**
        - **Penalty Term:** Adds the sum of the squared values of the model parameters to the objective function.
        - \[ \text{L2 regularization term:} \quad \lambda \sum_{i=1}^{n} w_i^2 \]
        - **Effect:** Encourages small but non-zero coefficients for all features, preventing any one feature from dominating the model.
        - **Use Case:** Suitable for preventing multicollinearity among features and when a balance between complexity and sparsity is desired.
    3. **Elastic Net:**
        - **Combination of L1 and L2:** Elastic Net combines both L1 and L2 regularization terms, providing a balance between sparsity and feature grouping.
        - \[ \text{Elastic Net term:} \quad \lambda_1 \sum_{i=1}^{n} |w_i| + \lambda_2 \sum_{i=1}^{n} w_i^2 \]
        - **Use Case:** Useful when there are groups of correlated features and when a compromise between Lasso and Ridge regularization is needed.
    4. **Shrinkage in Bayesian Statistics:**
        - In Bayesian statistics, shrinkage is achieved through prior distributions that place more mass around certain values, effectively regularizing the estimates towards those values.
        - **Use Case:** Bayesian methods allow for the incorporation of prior beliefs or information into the model, making them suitable for scenarios with limited data.
    
    Shrinkage regularization methods are powerful tools for preventing overfitting, improving model stability, and enhancing interpretability. The regularization strength parameter (\(\lambda\) or \(\alpha\)) controls the trade-off between fitting the training data and keeping the model parameters small. The choice of the appropriate regularization method depends on the specific characteristics of the dataset and the modeling goals.
    
- Bayesian point of view
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%205.png)
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%206.png)
    
    ![Untitled](Regularization%206e9b2a19c0ed446487d4b0a7edd03d88/Untitled%207.png)
    
    Shrinkage regularization and the Bayesian point of view are related concepts that address overfitting by incorporating prior information about model parameters. Here's a comparison between the two:
    
    1. **Shrinkage Regularization:**
        - **Philosophy:** Frequentist approach that involves modifying the objective function by adding a penalty term based on the size of the model parameters.
        - **Objective Function Modification:** In L1 regularization (Lasso), the penalty term is based on the sum of absolute values of parameters, encouraging sparsity. In L2 regularization (Ridge), the penalty term is based on the sum of squared values, encouraging small but non-zero parameters.
        - **Parameter Tuning:** The strength of regularization (\(\lambda\)) is a hyperparameter that needs to be tuned based on cross-validation or other model selection criteria.
        - **Interpretation:** Regularization terms in the objective function penalize complexity, and the choice between L1 and L2 regularization depends on the desired properties of the model.
    2. **Bayesian Point of View:**
        - **Philosophy:** Bayesian approach that involves specifying prior distributions for model parameters before observing the data. The prior reflects beliefs or information about the parameters before seeing the data.
        - **Parameter Estimation:** The prior is combined with the likelihood (data-driven component) using Bayes' theorem to obtain a posterior distribution, which represents the updated beliefs about parameters given the observed data.
        - **Shrinkage Effect:** Informative priors or priors with concentrated mass around certain values act as a form of shrinkage, guiding the parameter estimates towards those values.
        - **Uncertainty Representation:** Bayesian methods provide a full posterior distribution, allowing for the representation of uncertainty in parameter estimates.
    3. **Overlap and Connection:**
        - **Overlap:** There is an overlap between Bayesian methods and shrinkage regularization, as both involve a form of penalization or constraint on the model parameters.
        - **Connection:** Some regularization techniques, such as Ridge regularization, can be interpreted as imposing a Gaussian prior on the parameters from a Bayesian perspective.
    4. **Computational Aspects:**
        - **Computational Complexity:** Shrinkage regularization is often computationally more efficient and easier to implement compared to full Bayesian inference, which may involve techniques like Markov Chain Monte Carlo (MCMC) sampling.
        - **Flexibility:** Bayesian methods offer greater flexibility in incorporating prior knowledge and dealing with complex models, but they can be computationally demanding, especially for large datasets.
    
    In summary, while both shrinkage regularization and the Bayesian point of view aim to address overfitting and incorporate prior information, they differ in their philosophical foundations, computational approaches, and the nature of the prior information they utilize. The choice between the two often depends on the specific requirements of the modeling task, the amount of available data, and the computational resources at hand.
    
- early stopping
    - a regularization method
        - while increasing the model complexity, evaluate the validation dataset
        - stop increasing when the error of validation does not decrease
    - for training iterations
        - put up with k times (patience), when validation error does not decrease
- additional noise
    - drop out
    - drop connect
    - weight noise
    - noisy connection
- data augmentation
    - a solution to the limited data problem
    - better generalization avoiding the overfitting problem
-