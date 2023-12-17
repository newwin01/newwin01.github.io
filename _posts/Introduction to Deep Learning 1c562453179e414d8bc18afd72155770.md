# Introduction to Deep Learning

- AI starts beating humans
    - German traffic sign recognition competition
        - IDISA 11
    - Merck Drug Discovery
        - U of Tronto, 12
    - object recognition
    - automatic speech recognition (ASR)
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled.png)
        
    - real time object detection
    - neural machine translation (NMT)
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%201.png)
        
    - summarization is a kind of NMT
        - from text to news headline using the same model as the NMT
    - text generation (deep writing)
    - algebra with image and text
        - data regularities are captured in multimodal vector space.
    - image caption generation
        - attention lets you know where to look at.
    - question and answering system
        - based on image or figure
    - deeparts
        - style and content representations are separable
- neuroscientific basis: neuronal level
    
    ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%202.png)
    
    - ANNs are computational models inspired by brain.
        - processing units (nodes vs. neurons)
        - connections  (weights vs. synapses)
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%203.png)
        
- beginning of deep learning
    - Neocognitron
    - LeNet: 1989
    - reducing the dimensionality of data with neural networks: 2006
    - all ML algorithms before DL belong to shallow learning
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%204.png)
        
- paradigm shift on pattern recognition
    - “deep” means more layers.
        - the representation gets more hierarchical and abstract.
        - it increases the model complexity, which leads to better performance.
    
    ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%205.png)
    
- backpropagation may not work well with deep networks
    - because of the vanishing gradient problem
    - the lower layers may not learn much about the task
    - derivative of the nonlinear function would be 0.
    - determinant of the weight matrix < 1 → the lower layers are not updated enough.
    - thus, good initialization is crucial, unless learning is more efficient
- pretraining
    - layer-wise pretraining can set the weights in a good place
        - it can be understood as an optimization trick and/or regularization
    - if this is regularization, then there are other regularization techniques too
    - optimization
        - without training, the parameters converge to a bad local minimum
    - regularization
        - regularization helps the network avoid local minima or get overfitted
        - some units make learning more efficient
        - dropout
        - sparseness
        - activation function
        - flow control
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%206.png)
        
- convolutional neural networks (CNNs)
    - a class of deep neural networks, most commonly applied to image
    - one of the few models that can be trained purely supervised
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%207.png)
        
- recurrent neural networks (RNNs)
    - compared to FFNNs, RNNs have additional recurrent connections.
    - compared to HMMs, RNNs have infinite number of states.
        - power of distributed representation
        
        ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%208.png)
        
    - RNNs can be applied to different input output relations
- memory in RNNs
    - vanishing gradient
    - LSTM
- generative models: DBN
    - it has a “mind”, internal representation of an external world
- recent generative models
    - auto-regressive (AR) models
    - variational auto-encoders (VAEs)
        - latent variables + explicit, but intractable likelihood p(x)
    - generative adversarial networks (GANs)
        - implicit probabilistic models0
    - normalizing flows
    - diffusion model
- representation learning
    - representation of data
        - patient is represented by features like blood pressure, temperature, etc.
        - image is a set of pixel values.
        - speech is a sequence of amplitude values.
    - handcrafting features vs. learning them
    - representation learning: manifold learning or feature learning
- representation learning is crucial to AI
- data representation (manifold)
    - most manifold learning methods are kernel machines
    - kernel machines
        - do not scale well with the data sample size,
        - are based on matching local templates
- data manifold with neural networks
    - from kernel machines back to parametric models
    - “data representation” assumes a manifold of the variations
- hierarchy in the human brain
    - hierarchy in deep learning
    - manifold in multiple levels
- Manifold in multiple levels
    - the higher the level is, the more abstract the concept is
        - interpolation should follow the manifold of the higher level.
        - a manifold in a higher level is more flattened.
- distributed representation
    - SVMs vs. ANNs
- sparse representation
- knowledge transfer
    - knowledge from previous learning can be transferred
    - different tasks can share intermediate layers from the input layer
    - different modalities can share intermediate layers from the output layers
- dark knowledge (knowledge distillation)
    - Dark knowledge, also known as knowledge distillation, is a model compression technique in machine learning where a smaller model, often referred to as the student model, is trained to mimic the behavior of a larger, more complex model, known as the teacher model. The term "dark knowledge" arises from the idea that the information learned by the teacher model, which may be in the form of soft probabilities or decision boundaries, is transferred to the student model. This process allows the student model to benefit from the nuanced insights and generalization capabilities of the teacher model while being more lightweight and computationally efficient.
- CNNs in self-driving car
    - data collection
- issues and topics
    - we can see what the model learned
    - fitting random labels and random pixel
- explainable AI (XAI)
- Meta Learning
    - meta learning is learning to learn.
    - if you have learned lots of tasks, then you can learn for a new task easily
- continual learning
    
    ![Untitled](Introduction%20to%20Deep%20Learning%201c562453179e414d8bc18afd72155770/Untitled%209.png)