# Neural Networks

- brain-inspired ANNs
    - ANNs are computational models inspired by brain
        - nodes vs. neurons
        - wights vs. synapses
    
    ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled.png)
    
- two schools of AI
    - computationalism vs. connectionism
- the perceptrons were proposed by Rosenblatt
    - Marvin Minsky → The limitation of Rosenblatt’s perceptron is proved.
- artificial neural networks
    - 1982: John Hopfield
        - a certain class of recurrent ANNs
    - 1986: Rumelhart, Hinton and Williams
        - the discovery of a method that allowed a network for not linearly separable classes
        - “backward propagation of errors” (backpropagation, backprop, or bprop) 
        David Parker (1982, 1985) and Yann LeCun (1986) published similar discoveries
    - 1989: Yann LeCun
        - convolutional neural networks (CNNs)
    - 1997: Sepp Hochreiter and Jürgen Schmidhuber
        - LSTM
    - 2006: Geoff Hinton and Ruslan Salakhutdinov
        - opening of deep learning era
    - 2012: Alex Krizhevsky, Ilya Sutskever and Geoff Hinton
        - ImagNet classification with deep convolutional neural networks
- Perceptron and XOR problem
    - 3 layers: sensory, association and response
    - it can solve linearly separable problems
    - XOR problem: binary classification, but not linearly separable
        - need to increase the dimension or transform the data by nonlinear functions
- neural network layers
    
    ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled%201.png)
    
- activation functions, between layers
    - linear
    - threshold
    - piecewise linear
    - sin(x) till saturation
    - tanh(x)
    - logistic 1/(1+exp(-x))
    - ReLU
        - leaky ReLU
        - parametric ReLU
- Forward Propagation
    - prediction or classification can be done by forward propagation
    - propagation goes from input to output
- the last function
    - logistic regression: to model categorical variables
        - logistic sigmoid function
    - multinomial logistic regression
        - softmax regression
- Backward propagation
    - learning is to update the weights
        - to minimize the objective function by gradient descent methods
        - backward propagation from the loss function to the first layer
- feed-forward neural networks
- MLE
    - maximizing a likelihood function
    - the observed data will be most probable
    - estimated parameter maximizing the likelihood function
- objective function to train
    - likelihood for single input and target label (x, t)
    - negative log-likelihood (NLL) or cross-entropy (CE)
        - NLL can be interpreted as KL divergence between target distribution and estimated one
- error backward propagation in the last layer
    - we will use the chain rule›
    
    ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled%202.png)
    
    ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled%203.png)
    
    ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled%204.png)
    
- [https://theneuralblog.com/forward-pass-backpropagation-example/](https://theneuralblog.com/forward-pass-backpropagation-example/)
- [https://towardsdatascience.com/neural-networks-forward-pass-and-backpropagation-be3b75a1cfcc](https://towardsdatascience.com/neural-networks-forward-pass-and-backpropagation-be3b75a1cfcc)
- gradient for optimization
    - the direction of parameter update to optimize the function
- Automatic differentiation
    - we used to take derivatives and implement them to train networks
        
        ![Untitled](Neural%20Networks%2074b0d25073fd45beaed2dcea5b67f61c/Untitled%205.png)
        
- universality of neural networks
    - The Universal Approximation Theorem states that a feedforward neural network with a single hidden layer containing a sufficient number of neurons can approximate any continuous function on a compact input domain to arbitrary precision. In essence, it implies that neural networks, even with a simple architecture, have the capacity to represent a wide range of complex functions.
    - This theorem played a foundational role in demonstrating the expressive power of neural networks and contributed to their popularity in various machine-learning tasks.
- neural networks compared to RBFNs
    - a fixed number of basis functions are adaptive
        - i.e., parametric forms for the basis functions
        - cf. RBFNs have predefined basis functions.
    - distributed representation
        - the features are distributed factors (not local)
        - RBFN are based on local representation
    - the objective function is not convex of the parameters
        - hard to train
        - RBFN has linear regression on top of fixed features
- deep neural networks
    - there are many hidden layers
    - possible to model a more complicated relation between input and output
    - as the number of layers increases, it is hard to train
        - including vanishing gradient problem