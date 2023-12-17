# Regression

- Regression
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled.png)
    
- function approximation (curve fitting)
    - a function f is a linear
        - if f (ax1 + bx2)  = af(x1) + bf(x2)
    - linear regression y = fw(x)
        - y is a linear combination of the parameters
    - simplest linear model
    - we can extend the model to include nonlinear function of input.
        - basis function models
- linear basis function models
    - Linear basis function models are a type of regression model that extends traditional linear regression by incorporating non-linearities through the use of basis functions. In linear regression, the relationship between the input features (independent variables) and the output (dependent variable) is modeled as a linear combination of the features. However, linear models might not capture complex relationships in the data. Linear basis function models address this limitation by transforming the input features using non-linear basis functions.
    - The general form of a linear basis function model is:
        - y(x,w)=w0+w1ϕ1(x)+w2ϕ2(x)+…+wMϕM(x)y(x,w)=w0+w1ϕ1(x)+w2ϕ2(x)+…+wMϕM(x) where:
            - y(x,w)y(x,w) is the predicted output.
            - ww represents the weight parameters.
            - ϕi(x)ϕi(x) are basis functions applied to the input x.
            - w0 is the bias term.
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%201.png)
    
- loss function
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%202.png)
    
- maximum likelihood
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%203.png)
    
    - maximum likelihood and least square
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%204.png)
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%205.png)
    
    Maximum Likelihood Estimation (MLE) and Least Squares (LS) are two commonly used methods in statistical estimation and optimization. They are applied in various fields to find the parameters of a model that best explain observed data. Let's discuss each method individually:
    
    ### Maximum Likelihood Estimation (MLE):
    
    1. **Objective:**
        - MLE is a method for estimating the parameters of a statistical model. The goal is to find the parameter values that maximize the likelihood function, which measures how well the model explains the observed data.
    2. **Likelihood Function:**
        - The likelihood function, denoted as \( L(\theta | \mathbf{x}) \), represents the probability of observing the given data (\( \mathbf{x} \)) given a set of parameters (\( \theta \)) in the model.
        - The MLE estimates are the values of the parameters that maximize this likelihood function.
    3. **Log-Likelihood:**
        - In practice, it's often more convenient to work with the log-likelihood (\( \ell(\theta | \mathbf{x}) \)), which is the natural logarithm of the likelihood function. Maximizing the log-likelihood is equivalent to maximizing the likelihood itself.
        
        \[ \ell(\theta | \mathbf{x}) = \ln L(\theta | \mathbf{x}) \]
        
    4. **Example:**
        - If you have a set of independent and identically distributed (i.i.d.) observations, the likelihood function for these observations is the product of the individual probability density functions (PDFs) or probability mass functions (PMFs) evaluated at each observation.
    
    ### Least Squares:
    
    1. **Objective:**
        - Least Squares is a method used for fitting a model to data by minimizing the sum of the squared differences between observed and predicted values. It is commonly used in linear regression and nonlinear regression.
    2. **Residuals:**
        - The residuals are the differences between the observed values (\(y_i\)) and the corresponding predicted values (\(f(\mathbf{x}_i, \boldsymbol{\beta})\)), where \(\boldsymbol{\beta}\) represents the parameters of the model.
        
        \[ \text{Residuals: } e_i = y_i - f(\mathbf{x}_i, \boldsymbol{\beta}) \]
        
    3. **Objective Function:**
        - The objective is to minimize the sum of the squared residuals (the sum of squared differences between observed and predicted values):
        
        \[ \text{Objective Function: } \min_{\boldsymbol{\beta}} \sum_{i=1}^{n} (y_i - f(\mathbf{x}_i, \boldsymbol{\beta}))^2 \]
        
    4. **Example:**
        - In linear regression, the least squares method aims to find the coefficients (\(\boldsymbol{\beta}\)) that minimize the sum of squared differences between the observed and predicted values of the dependent variable.
    
    ### Comparison:
    
    - **Optimization:**
        - MLE involves maximizing the likelihood function, which often requires solving an optimization problem.
        - Least Squares involves minimizing the sum of squared differences, typically solved using optimization techniques as well.
    - **Assumptions:**
        - MLE assumes a specific probabilistic model for the data.
        - Least Squares makes no specific assumptions about the distribution of errors but focuses on minimizing the sum of squared differences.
    - **Applicability:**
        - MLE is widely applicable in various statistical modeling contexts.
        - Least Squares is commonly used in regression analysis and is particularly straightforward for linear models.
    
    In summary, MLE and Least Squares are both optimization-based methods, but MLE is rooted in probabilistic modeling, while Least Squares is more focused on minimizing the sum of squared differences between observed and predicted values. The choice between them often depends on the underlying assumptions of the problem at hand.
    
    - radial basis function (RBF) networks
        - a feed-forward neural network
        - the hidden layer does nonlinear transformation
            - higher dimensional space than the input space
            - each hidden neuron responds to a local region of the feature space
        - the linear output layer does linear regression
            - trainable
        - algorithm
            - define the basis functions (means and variances)
                - run a clustering method (e.g., kMeans or MoG)
                    - calculate the means/variances of the clusters
                - or manually define with lattice and prior knowledge for the variance
            - obtain the basis function matrix
            - learn the weight matrix
                - simply pseudo inverse of the basis function matrix
            - then predict the output of test data
        - RBF centers are not guided by the MSE objective function
        
        Radial Basis Function (RBF) networks are a type of artificial neural network used for function approximation, regression, and classification tasks. RBF networks consist of three layers: an input layer, a hidden layer with radial basis functions, and an output layer. Here's a breakdown of the key components and workings of RBF networks:
        
        1. **Input Layer:**
            - The input layer consists of nodes that represent the input features. Each node in the input layer corresponds to a feature of the input data.
        2. **Hidden Layer with Radial Basis Functions:**
            - The hidden layer of an RBF network uses radial basis functions to transform the input data. Radial basis functions are mathematical functions that depend on the distance from a center or prototype. The hidden layer nodes act as radial basis functions, and each node has a center and a spread parameter.
            - The activation of a hidden node \(j\) for an input \(x\) is given by the radial basis function:
                
                \[ \text{activation}_j(x) = \exp\left(-\frac{\|x - \text{center}_j\|^2}{2\sigma_j^2}\right) \]
                
                where \(\text{center}_j\) is the center of the \(j\)-th hidden node, \(\sigma_j\) is the spread parameter, and \(\| \cdot \|\) denotes the Euclidean distance.
                
        3. **Output Layer:**
            - The output layer combines the activations from the hidden layer to produce the final output. The output is often a weighted sum of the hidden layer activations:
                
                \[ y(x) = \sum_{j=1}^{M} w_j \cdot \text{activation}_j(x) \]
                
                where \(w_j\) are the weights associated with each hidden node.
                
        4. **Training:**
            - The training of an RBF network involves determining the optimal parameters: the centers and spreads of the radial basis functions and the weights in the output layer.
            - Training can be done using techniques such as the k-means clustering algorithm to initialize the centers, and methods like least squares or gradient descent to determine the weights.
        5. **Applications:**
            - RBF networks are particularly useful for problems where the underlying relationships are expected to be non-linear. They have been applied in various fields, including function approximation, time series prediction, and pattern recognition.
        6. **Advantages and Considerations:**
            - RBF networks are capable of capturing non-linear patterns in data.
            - The choice of the number and placement of radial basis functions is critical, and techniques such as k-means clustering are often used for initialization.
            - RBF networks are computationally efficient and can perform well on certain types of problems.
        
        In summary, RBF networks leverage radial basis functions in the hidden layer to transform input data and approximate complex relationships. Their architecture allows them to model non-linear mappings effectively.
        
- Logistic Regression
    - logistic regression: to model categorical variables (Bernoulli)
    - multinomial logistic regression (softmax regression) - categorical
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%206.png)
    
    - objective function
        - linear regression
            - an error function like root mean square error
        - logistic regression
            - targets binary variables
            - Bernoulli and categorical distribution
- negative log-likelihood
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%207.png)
    
    - [https://csm-kr.tistory.com/49](https://csm-kr.tistory.com/49)
- MSE and CE
    - In summary, MSE is often used for regression tasks, where the goal is to predict continuous values, while cross-entropy is commonly used for classification tasks, where the goal is to assign discrete class labels. The choice between these metrics depends on the nature of the problem you are trying to solve.
    1. **Mean Squared Error (MSE):**
        - **Use Case:** Commonly used for regression tasks.
        - **Calculation:** MSE measures the average squared difference between the predicted values and the actual values. It is calculated as the mean of the squared differences between each predicted value and its corresponding true value.
        - MSE=1n∑i=1n(yi−y^i)2MSE=n1∑i=1n(yi−y^i)2
        - **Interpretation:** A lower MSE indicates better performance, and the metric is sensitive to outliers due to the squared differences.
    2. **Cross-Entropy (CE):**
        - **Use Case:** Commonly used for classification tasks.
        - **Calculation:** Cross-Entropy measures the dissimilarity between the predicted probability distributions and the true probability distributions. It is often used in scenarios where the task involves assigning a class label to each instance.
        - For binary classification:
        CE=−n1∑i=1n[yilog(y^i)+(1−yi)log(1−y^i)]
            
            CE=−1n∑i=1n[yilog⁡(y^i)+(1−yi)log⁡(1−y^i)]
            
        - For multiclass classification:
        CE=−n1∑i=1n∑j=1Cyijlog(y^ij)
        where C is the number of classes.
            
            CE=−1n∑i=1n∑j=1Cyijlog⁡(y^ij)
            
            C
            
        - **Interpretation:** A lower cross-entropy indicates better performance. Cross-entropy is more suitable for classification tasks and is less sensitive to outliers compared to MSE.
- kernel approach for linear regression
    - The kernel approach for linear regression involves transforming the input features using a kernel function to enable the modeling of non-linear relationships within a linear regression framework. By implicitly mapping the input data into a higher-dimensional space, the kernel trick allows linear regression to capture complex patterns that may be non-linear in the original feature space. This technique is particularly useful when dealing with data that exhibits non-linear dependencies, providing a more flexible and powerful regression model.
- linear regression as a Gaussian process
    - linear regression as a Gaussian process
    
    ![Untitled](Regression%20ce549a79d8ec41899ae7c04acd46d855/Untitled%208.png)
    
    - Gaussian Processes (GPs) are a non-parametric Bayesian approach to regression that models the entire distribution over functions rather than estimating specific parameters. In Gaussian process regression, instead of predicting a single point estimate, the model provides a distribution over possible functions, allowing for uncertainty quantification. GPs are defined by a mean function and a covariance (kernel) function, which encode prior beliefs about the data, and they naturally accommodate flexible and adaptive regression in a probabilistic framework.