# Ensemble Learning

- random forest
    - random forest: an example of ensemble learning
- ensemble learning in ML
    - an ensemble of classifiers is a set of classifiers
    - whose decisions are combined to classify new examples
    - a random forest is an ensemble of decision trees
    - take simple algorithms and transform them into a super classifier without requiring any new algorithm
- train multiple simple classifiers
- run the classifiers on the test sample independently.
- classify by majority vote (or weighted sum)
- different ways of ensemble learning
    - depending on
        - selection of training data for individual classifiers
        - the specific procedure to train ensemble members
        - the combination rule for obtaining the ensemble decision
- [https://dokhakdubini.tistory.com/237](https://dokhakdubini.tistory.com/237)
- bagging (bootstrap aggregation)
    - given an original data set consisting of N data points
    - generate M data sets each of size N
    - each is created by drawing N points at random from X, with replacement
    - training and testing
        
        ![Untitled](Ensemble%20Learning%202b64c5424469437c998ab697dfab65f3/Untitled.png)
        
- boosting
    - combine multiple base classifiers (weak learners)
    - the base classifiers are trained in sequence
        - each base classifier is trained using a weighted form of the data
        - new learners focus on the instances misclassified by the previous classifiers
    - AdaBoost: adaptive boosting
        - **Adaptiveness:** AdaBoost adapts to the mistakes made by previous weak learners, focusing on instances that are challenging to classify.
        - **Weighted Voting:** Each weak learner's contribution to the final decision is weighted based on its accuracy, with more accurate learners having a greater influence.
        - **Sequential Training:** Weak learners are trained sequentially, with each iteration refining the model based on the errors of the previous iterations.
        - **Ensemble Effectiveness:** AdaBoost often yields strong ensemble models that can outperform individual weak learners and other traditional algorithms.
        
        AdaBoost is effective in practice and is widely used in applications such as face detection, text categorization, and other binary classification problems. It is robust and less prone to overfitting compared to individual weak learners. However, it can be sensitive to noisy data and outliers.
        
    
    ![Untitled](Ensemble%20Learning%202b64c5424469437c998ab697dfab65f3/Untitled%201.png)
    
- mixture of experts (MoE)
    - multiple experts divide the problem space into several subspaces
    - basic models work locally for a given task
    
    ![Untitled](Ensemble%20Learning%202b64c5424469437c998ab697dfab65f3/Untitled%202.png)
    
    - A Mixture of Experts (MoE) is a machine learning model that combines the strengths of both global models (experts) and local models to handle complex and diverse datasets. The idea behind MoE is to divide the input space into different regions and have an "expert" model assigned to each region. These local models are then combined or weighted based on the input data to make predictions
- Why does an ensemble work?
    - variance reduction: The average of diverse models reduces variance without affecting bias
        - bagging
        - by reducing sensitivity to individual data points
    - bias reduction: for simple models, the average of models reduces bias without affecting variance
        - boosting
        - by increasing capacity with more models, and controlling variance by fitting one component at a time
        
        ![Untitled](Ensemble%20Learning%202b64c5424469437c998ab697dfab65f3/Untitled%203.png)
        
    
    ![Untitled](Ensemble%20Learning%202b64c5424469437c998ab697dfab65f3/Untitled%204.png)
    
-