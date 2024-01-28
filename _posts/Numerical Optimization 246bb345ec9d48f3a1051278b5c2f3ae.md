# Numerical Optimization

- optimization is an important tool in decision science or deep learning
    - the objective depends on certain characteristics of the system
    - variables or unknowns (parameters).
    - often the variables are restricted, or constrained
- an optimization algorithm can be used to find its solution
- training a model is an optimization process
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled.png)
    
- in general, global minimizers are difficult to find
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%201.png)
    
- function, gradient and Hessian
    
    In the context of numerical optimization, the terms "function," "gradient," and "Hessian" are fundamental concepts related to optimizing (minimizing or maximizing) a mathematical function.
    
    1. **Function:**
        - In optimization, the term "function" typically refers to the objective function or cost function that you are trying to optimize.
        - The objective function \( f(x) \) takes a set of parameters \( x \) as input and outputs a real number. The goal of optimization is to find the values of \( x \) that minimize or maximize \( f(x) \).
        - For example, in machine learning, the objective function might represent the error or loss of a model given certain parameters.
    2. **Gradient:**
        - The gradient of a function is a vector that contains all of the partial derivatives of the function with respect to its input variables.
        - For a scalar-valued function \( f(x) \) of a vector variable \( x \), the gradient \( \nabla f(x) \) is a vector where each element is the partial derivative of \( f \) with respect to the corresponding element of \( x \).
        - The gradient points in the direction of the steepest ascent of the function. In optimization, this property is often used to iteratively update the parameters in the direction opposite to the gradient in order to reach a minimum.
    3. **Hessian:**
        - The Hessian matrix is the matrix of second partial derivatives of a scalar-valued function.
        - For a function \( f(x) \) of a vector variable \( x \), the Hessian matrix \( H(x) \) has elements given by \( \frac{\partial^2 f}{\partial x_i \partial x_j} \).
        - The Hessian provides information about the curvature of the objective function. In optimization, it is used to determine the local behavior of the objective function near a critical point (minimum, maximum, or saddle point).
        - The Hessian is particularly important in optimization algorithms like Newton's method, which uses both the gradient and the Hessian to guide the optimization process.
    
    In summary, when performing numerical optimization, you often start with an objective function, compute its gradient to find the direction of steepest ascent, and may also compute the Hessian to gain additional information about the local curvature. Optimization algorithms then use this information to iteratively update the parameters in a way that ideally leads to the minimum (or maximum) of the objective function. Common optimization algorithms include gradient descent, Newton's method, and various quasi-Newton methods.
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%202.png)
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%203.png)
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%204.png)
    
- Three algorithms
    - gradient methods
    - Newton’s methods
    - trust-region methods
    - additional information can be used
        - shape of objective function like Hessian or momentum
        - parameter manifold structure as in natural grad or relative optimization
        - uncertainty of gradient in minibatch as in TONGA
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%205.png)
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%206.png)
    
- batch gradient descent: (use all the samples)
- stochastic gradient descent: (usually use one sample)
    - minibatch
- stochastic gradient descent (SGD)
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%207.png)
    
- exact line search method
    - Assume a quadratic function
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%208.png)
    
- momentum (moving average of gradient)
    - to accelerate learning
    - for small and/or noisy gradients
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%209.png)
    
- Nesterov accelerated gradient (NAG)
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2010.png)
    
- Adagrad
    - the adaptive learning rate for parameters
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2011.png)
    
- RMSprop
    - proposed to resolve Adagrad's radically diminishing learning rates
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2012.png)
    
- RMSprop + NAG
    - RMSprop can use momentum like NAG
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2013.png)
    
- Adam (Adaptive Moments)
    - Adam is a variant on the combination of RMSProp and momentum
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2014.png)
    
1. **Exact Line Search Method:**
    - **Approach:** Determines the step size that minimizes the objective function by searching along the gradient direction.
    - **Pros:** Can converge faster by selecting an optimal step size.
    - **Cons:** Computationally expensive due to the need for line search in each iteration; may not be practical for large datasets or complex models.
2. **Momentum:**
    - **Approach:** Accumulates a moving average of past gradients to dampen oscillations and speed up convergence.
    - **Pros:** Helps overcome oscillations and accelerates convergence on certain surfaces.
    - **Cons:** Requires tuning of momentum parameter; can overshoot minima and oscillate on some surfaces.
3. **Nesterov Accelerated Gradient (NAG):**
    - **Approach:** A modification of momentum that updates the parameters based on an estimate of the future gradient.
    - **Pros:** Can converge faster than traditional momentum; reduces oscillations.
    - **Cons:** Requires tuning of momentum parameter; may not provide significant advantages in all cases.
4. **Adagrad:**
    - **Approach:** Adapt the learning rates for each parameter based on the historical gradient information.
    - **Pros:** Automatically adapts learning rates, which can be beneficial for sparse features.
    - **Cons:** Learning rates may become too small over time, leading to slow convergence; not suitable for non-stationary problems.
5. **RMSprop + NAG:**
    - **Approach:** RMSprop adapts the learning rates for each parameter based on the moving average of squared gradients, similar to Adagrad but with a decay term. Combining it with Nesterov Accelerated Gradient (NAG) involves updating parameters based on an estimate of the future gradient.
    - **Pros:** NAG helps reduce oscillations and accelerates convergence, while RMSprop adapts learning rates. This combination can provide stability and faster convergence in certain scenarios.
    - **Cons:** Requires tuning of hyperparameters, and the effectiveness may vary across different optimization landscapes.
6. **Adam (Adaptive Moment Estimation):**
    - **Approach:** Adam combines the ideas of momentum and RMSprop. It maintains moving averages of both gradients and squared gradients and adapts the learning rates accordingly. It also includes bias correction terms to handle the initialization bias in the moving averages.
    - **Pros:** Efficiently combines momentum and adaptive learning rates; well-suited for a wide range of optimization problems; often requires less hyperparameter tuning.
    - **Cons:** May not always outperform other algorithms, and sensitivity to hyperparameters still exists.
- parameter initialization with Gaussian distribution
    - parameters are randomly initialized.
    - if the distribution is Gaussian
        
        ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2015.png)
        
    - Xavier initialization
- parameter initialization with uniform distribution
    - Gaussian vs. uniform
        - Gaussian distribution can generate really large numbers, which makes the training process hard
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2016.png)
    
- Parallelized learning
    - model parallelization
        - e.g., AlexNet and GNMT
    - data parallelization
        - distribute data samples to the slaves
        - integrate them into the master model
- decaying the learning rate after training enough
    - reduces the random fluctuations in the error
    - regularization
        - Lp norm, dropout, weight noise injection, early stopping
- Newton’s method
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2017.png)
    
    - Newton’s method is based on second order approximation
    - Newton’s method utilizes the shape of function by Hessian
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2018.png)
    
    - 
    
    Newton's method, also known as the Newton-Raphson method, is an iterative optimization algorithm used to find the roots (zeros) of a real-valued function or to minimize a differentiable function. In the context of optimization, it is often referred to as Newton's method for optimization or Newton's optimization algorithm. Here's a concise explanation:
    
    1. **Objective:**
        - Newton's method aims to find the minimum of a differentiable function \(f(x)\) by iteratively updating the estimate of the minimum.
    2. **Iterative Update:**
        - The algorithm starts with an initial guess \(x_0\). In each iteration, it updates the estimate \(x\) using the formula:
        \[ x_{n+1} = x_n - \frac{f'(x_n)}{f''(x_n)} \]
        where \(f'(x_n)\) is the first derivative (gradient) of \(f\) with respect to \(x\), and \(f''(x_n)\) is the second derivative (Hessian) of \(f\) with respect to \(x\).
    3. **Convergence:**
        - Newton's method tends to converge rapidly, especially near the minimum, and it can provide quadratic convergence in well-behaved cases.
    4. **Hessian Matrix:**
        - The Hessian matrix, which contains the second partial derivatives of the function, plays a crucial role in Newton's method. The Hessian provides information about the local curvature of the function and guides the updates toward the minimum.
    5. **Newton's Method for Root Finding:**
        - When applied to root finding, Newton's method aims to find a solution to the equation \(f(x) = 0\). In this case, the update rule becomes:
        \[ x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} \]
        The method iteratively refines the estimate of the root until convergence.
    6. **Sensitivity to Initial Guess:**
        - The success of Newton's method can be sensitive to the choice of the initial guess. Convergence is not guaranteed in all cases, and the algorithm may diverge or converge to a local minimum or maximum.
    
    While Newton's method is powerful and efficient, its reliance on the Hessian matrix and sensitivity to initial conditions can be limitations. Variants like the quasi-Newton methods, such as Broyden-Fletcher-Goldfarb-Shanno (BFGS), address some of these challenges and are widely used in practice for optimization tasks.
    
- conjugate gradient (CG) descent
    - Conjugate Gradient (CG) Descent is an iterative optimization algorithm used for solving linear systems and quadratic optimization problems. In the context of quadratic functions, CG aims to find the minimum of a quadratic form by iteratively moving along conjugate directions, efficiently combining the benefits of gradient descent and direct methods. CG is particularly well-suited for large-scale problems, where computing the full Hessian matrix may be impractical, and it exhibits fast convergence for well-conditioned quadratic objectives.
    - [https://m.blog.naver.com/besarme/222209845217](https://m.blog.naver.com/besarme/222209845217)
        
        ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2019.png)
        
    - conjugate vector set
    - CG descent algorithm
        - Conjugate Gradient (CG) Descent is an iterative optimization algorithm primarily used for solving linear systems of equations or minimizing quadratic functions. In each iteration, CG efficiently combines information from the gradient and previous search directions to find the optimal step size and a new search direction, ensuring conjugacy between successive directions. This method is particularly advantageous for large-scale problems where computing and storing the full Hessian matrix is impractical, as CG achieves convergence with a relatively small number of iterations.
            
            ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2020.png)
            
- trust-region methods
    - [https://darkpgmr.tistory.com/149](https://darkpgmr.tistory.com/149)
    - trust-region methods take the best part of the two approaches
        - The trust-region method is an iterative optimization algorithm used for minimizing a nonlinear objective function. It works by defining a trust region around the current iterate and iteratively solving a subproblem within this region. The algorithm adjusts the size and shape of the trust region based on the agreement between the actual reduction in the objective function and the reduction predicted by a local model, typically a quadratic approximation. This adaptive approach allows the trust-region method to navigate through both linear and nonlinear regions of the objective function, making it suitable for handling non-convex optimization problems.
- symbolic and numerical differentiation
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2021.png)
    
- parameter space and likelihood
    
    ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2022.png)
    
- natural gradient
    - [https://sabumjung.wordpress.com/2021/04/28/natural-gradient/](https://sabumjung.wordpress.com/2021/04/28/natural-gradient/)
    - parameter space might not be Euclidean
        - then, gradient might not be the steepest direction, but natural gradient is
    - The natural gradient is a concept in optimization and machine learning that extends the idea of gradient descent to Riemannian manifolds. In traditional gradient descent, the update is performed in the parameter space, but the natural gradient considers the geometry of the parameter space, particularly in the context of statistical models. When applied to optimization, the natural gradient takes into account the Fisher information matrix, providing a more meaningful and efficient update direction that considers the curvature of the parameter space. This approach is especially useful in scenarios where the standard gradient descent may converge slowly or inefficiently, such as in high-dimensional or curved parameter spaces.
    - use KL divergence rather than Euclidean distance in optimization
        
        ![Untitled](Numerical%20Optimization%20246bb345ec9d48f3a1051278b5c2f3ae/Untitled%2023.png)