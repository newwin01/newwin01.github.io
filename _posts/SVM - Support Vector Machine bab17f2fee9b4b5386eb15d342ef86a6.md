# SVM - Support Vector Machine

- empirical risk minimization
    - when we have a goal like (BLEU in translation)
        - it is not differentiable (training is not easy)
- Support Vector Machines (SVMs) are supervised machine learning models used for classification and regression tasks. SVMs are particularly effective in high-dimensional spaces and are well-suited for scenarios where clear margins of separation exist between different classes.
    
    Key components of SVM:
    
    1. **Objective:**
        - In classification, the objective of an SVM is to find a hyperplane that best separates the data into different classes while maximizing the margin, which is the distance between the hyperplane and the nearest data points from each class.
    2. **Hyperplane:**
        - The hyperplane is the decision boundary that separates the data. In a two-dimensional space, it is a line; in three dimensions, it is a plane. In higher-dimensional spaces, it's referred to as a hyperplane.
    3. **Margin:**
        - The margin is the distance between the hyperplane and the nearest data points from each class. SVM aims to find the hyperplane that maximizes this margin, providing better generalization to unseen data.
    4. **Support Vectors:**
        - Support vectors are the data points that lie closest to the hyperplane and influence the positioning of the hyperplane. These are the critical elements in defining the margin.
    5. **Kernel Trick:**
        - SVMs can handle non-linear decision boundaries by using the kernel trick. This involves implicitly mapping the input data into a higher-dimensional space, where a hyperplane can effectively separate the classes. Common kernel functions include polynomial, radial basis function (RBF), and sigmoid.
    6. **C Parameter:**
        - The C parameter in SVM controls the trade-off between achieving a smooth decision boundary and classifying the training points correctly. A smaller C encourages a wider margin, allowing for more misclassifications, while a larger C leads to a narrower margin but fewer misclassifications.
    7. **Soft Margin SVM:**
        - In situations where the data is not perfectly separable, SVM can be extended to a soft margin approach, allowing for some misclassifications. The C parameter plays a role in controlling the penalty for misclassifications.
    8. **Applications:**
        - SVMs are widely used in image classification, text classification, handwriting recognition, bioinformatics, and various other fields where effective classification is required.
    
    SVMs are known for their versatility, ability to handle high-dimensional data, and effectiveness in scenarios where the classes are not linearly separable. However, SVMs may become computationally expensive for large datasets, and the choice of the appropriate kernel function and parameters requires careful consideration.
    
- Vapnik-Chervonenkis (VC) dimension
    - the VC dimension measures the model complexity or capacity of f
        - measure the largest number of example that can be explained by f
        - VC(f): the size of the largest dataset that can be shattered by the set of f
    - if f can explain the training samples with a small capacity
        - then we can expect that it will work on new samples.
- Structural risk minimization (SRM)
    - the VC dimension provides an upper bound on the risk
        - as a function of the empirical risk and the number of available examples
        - in statistical learning theory
        
        ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled.png)
        

**VC Dimension:**
The Vapnik-Chervonenkis (VC) dimension is a concept in statistical learning theory that measures the capacity or complexity of a hypothesis space. It represents the maximum number of points that a classifier can shatter (separate into all possible dichotomies) for any arrangement of those points. A smaller VC dimension suggests better generalization performance and bounds the number of training samples needed for effective learning. 

**Structural Risk Minimization (SRM):**
Structural Risk Minimization is a principle in machine learning that aims to balance model complexity and the fit to the training data. SRM suggests choosing a model with the right amount of complexity to avoid overfitting or underfitting by incorporating both empirical risk (training error) and a regularization term penalizing model complexity. It provides a framework for model selection that considers the trade-off between fitting the training data well and having a simpler, more generalizable model.

- optimal separating hyperplanes
    - for nonlinear models, computing the upper bound is not tractable
    - to find a separating hyperplane for a linearly separable dataset
        
        ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%201.png)
        
- maximizing the margin minimizes the upper bound
    - maximizing the margin is minimizing the VC dimension
    - therefore, the maximum margin minimizes the structural risk
    - In summary, the Vapnik-Chervonenkis theorem establishes a connection between the margin in SVMs and the VC dimension, suggesting that maximizing the margin during training helps control the complexity of the model, leading to improved generalization performance. This theoretical foundation contributes to the success of SVMs in achieving a good trade-off between fitting the training data and avoiding overfitting.
    - In summary, by maximizing the margin in SVMs, the model is not only aiming to fit the training data well but also implicitly minimizing the structural risk by promoting a simpler and more generalizable decision boundary. This connection contributes to the effectiveness of SVMs in achieving a good trade-off between training fit and generalization.
    - a large margin makes the model’s capacity lower
- distance between a point and a line
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%202.png)
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%203.png)
    
- problem formulation
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%204.png)
    
- KKT condition
    - The KKT conditions collectively provide a set of necessary conditions for a point to be optimal in a constrained optimization problem. They play a crucial role in solving optimization problems using techniques like the Karush-Kuhn-Tucker theorem and are fundamental in mathematical programming and optimization theory.
- support vectors and optimal separating hyperplane
    - [https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47](https://towardsdatascience.com/support-vector-machine-introduction-to-machine-learning-algorithms-934a444fca47)
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%205.png)
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%206.png)
    
- slack variables
    - slack variables relax the constraint of ‘linear separability’
    - In summary, slack variables in SVMs enable the formulation of soft margin classifiers that can handle noisy or partially separable datasets. They provide a mechanism for balancing the goal of achieving a larger margin with the need to allow for a controlled amount of misclassification.
- dual problem with slack variables
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%207.png)
    
- kernel trick
    - many ML algorithms are based on relations between samples
        
        ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%208.png)
        
- Mercer’s theorem
- SVMs with the kernel trick
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%209.png)
    
- optimization for SVMs
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%2010.png)
    
- SVM and logistic regression
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%2011.png)
    
- Properties
    
    ![Untitled](SVM%20-%20Support%20Vector%20Machine%20bab17f2fee9b4b5386eb15d342ef86a6/Untitled%2012.png)
    

Support Vector Machines (SVMs) and deep learning are both powerful techniques in machine learning, but they have distinct characteristics and are suited to different scenarios. Here's a comparison between SVMs and deep learning, highlighting the benefits of SVMs:

**Benefits of SVMs:**

1. **Effective in High-Dimensional Spaces:**
    - SVMs perform well in high-dimensional spaces, making them suitable for scenarios with many features. They are effective in tasks like text classification or image recognition, where the number of features can be large.
2. **Robust to Overfitting:**
    - SVMs are less prone to overfitting, especially in high-dimensional spaces. The use of the margin concept and regularization helps control model complexity and generalizes well to unseen data.
3. **Intuitive Geometric Interpretation:**
    - SVMs have an intuitive geometric interpretation, as they aim to find the hyperplane that maximizes the margin between different classes. This makes the decision boundary more interpretable.
4. **Well-Suited for Small to Medium-Sized Datasets:**
    - SVMs can perform well with small to medium-sized datasets. They are particularly useful when labeled data is limited, as they can effectively handle the training of models in such situations.
5. **Memory Efficiency:**
    - SVMs typically require less memory during inference compared to deep learning models. This can be crucial in scenarios with limited computational resources.

**Comparison with Deep Learning:**

1. **Data Size and Complexity:**
    - Deep learning models, particularly neural networks, tend to excel in tasks with large amounts of data and complex patterns. They often outperform SVMs when the dataset is massive and exhibits intricate relationships.
2. **Feature Engineering:**
    - SVMs require careful feature engineering to extract relevant information from the data. In contrast, deep learning models can automatically learn hierarchical representations of features, reducing the need for extensive manual feature engineering.
3. **Computational Resources:**
    - Deep learning models, especially deep neural networks, demand significant computational resources for training, often requiring specialized hardware like GPUs or TPUs. SVMs, being less computationally intensive, can be more feasible in resource-constrained environments.
4. **Interpretability:**
    - SVMs offer a more interpretable decision boundary, which can be crucial in certain applications. Deep learning models, being more complex, are often considered as "black boxes," making it challenging to interpret their decision-making processes.
5. **Versatility:**
    - Deep learning models are versatile and have achieved state-of-the-art performance in various domains, including computer vision, natural language processing, and speech recognition. SVMs, while powerful, may not match the same level of performance in highly complex tasks.

In summary, SVMs are advantageous in scenarios with limited data, where interpretability is essential, or where computational resources are constrained. Deep learning, on the other hand, shines in tasks with large, complex datasets, where automatic feature learning is crucial for achieving superior performance. The choice between SVMs and deep learning depends on the specific characteristics and requirements of the problem at hand.