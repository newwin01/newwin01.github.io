---
title:  "Clean Code Chapter 3"
excerpt: "Using Function Properly"

categories:
  - Books
tags:
  - [Blog]
---

How can we make a function communicate its intent?

What attributes can we give that will allow a reader to intuit the kind of program they live inside?

***The function should be very small***

- In 1999, every function was just two, three, or four lines long
    - Each was transparent and led to the next in a compelling order

- Block and Indenting
    - block within if, else, while and so on should be one line long
        - The line must be a function call
        - The function should not be large enough to hold the nested structure
        - The indent level of a function should not be greater than one or two
    
    ***Function Should Do One Thing***
    
- What is one thing?
    - If a function does only that is on one level below the stated name of the function, then the function is doing one thing
    - Decomposing a larger concept
    - Simply restates the code without changing the level of abstraction
    - if you can extract another function from it with a name that is not merely a restatement of its implementation
    - A function that does one thing cannot be divided
- One level of abstraction per function
    - Statements within the function are all at the same level of abstraction
- Reading code from Top to Bottom: The Stepdown Rule
    - Top-down Narrative
    - Reading program, descending one level of abstraction at a time as we read down the list of function
    - Each function introduces the nest, and each function remains at a consistent level of abstraction
- Avoid using switch statements
    - Each statement is buried in a low-level class and is never repeated
    - Switch Statements can be tolerated if they appear only once
    - Used to create polymorphic objects; hidden behind an inheritance relationship
- Simple Responsibility Principle
    - [https://en.wikipedia.org/wiki/Single-responsibility_principle](https://en.wikipedia.org/wiki/Single-responsibility_principle)
- Open Closed Principle
    - [https://en.wikipedia.org/wiki/Open–closed_principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)
- Use Descriptive Names
    - Choose descriptive names to clarify the design of the module in mind
    - Don’t be afraid to make a name long
    - Be consistent in names

***The argument is at a different level of abstraction*** 

- Function Arguments
    - The ideal number argument for a function is zero(niladic)
    - An argument forces the user to know the details
- Arguments are hard at the testing point of a view
    - Need to test all combinations of arguments
    - Output arguments are harder to understand than input arguments
    - Don’t expect information to be going out through arguments

- Common Monadic(one argument) function
    - Usage of arguments
        - Asking questions about arguments
        - Operating on arguments, transforming the arguments
    - *Event: there are input arguments but no output arguments*
        - The intention of calling the event is to use the argument the alter the state of the system
        - Usage should be very clear that reader must notice this function is the event
- Flag Arguments
    - *It is Ugly*
    - Split function instead of flag

Dyadic Functions

- Should be avoided, but there is a situation in that dyadic function is necessary
- Take advantage of what mechanisms may be available to convert them into single-argument functions

Triads Functions

- Very careful to use it

Argument Objects

- When a group of variables is passed together, it is likely part of a concept that deserves a name of its own
- Augment list
    - Functions that take variable arguments can be monads, dyads, or even triads, but no more than that

Verb and Keywords

- Monad case
    - the function and argument should form a very nice verb/noun pair
- Using keywords to form a function name
- Function name and ordering of argument
- No side Effect
    - No temporal coupling
    - State exactly what the function does and split the function if it is possible
- Output arguments
    - Anything that forces you to check the function signature is equivalent to a double-take
    - *this* keyword is intended to act as an output argument
    - Output argument should be avoided

***Do something or answer something, but not both*** 

Command Query Separation

- Separate the command from the query so that ambiguity cannot occur

Prefer Exception to Return Error Codes

- Processing code can be separated from the happy path code and can be simplified
- Extract Try/Catch Block
    - Specific function for error handling
    - It makes help to clarify the function
        - Nice Separation
    - Error Handling is one thing; function should only be one thing
- New exceptions are derivatives of the exception class

Don’t Repeat Yourself

- Duplication may be the root of all evil in software
- Since the invention of the subroutine, innovations have been an ongoing attempt to eliminate duplication from our source code

Structured Programming

- Only be one *return* statement
- No *break* or *continue* statement
- Never *goto* statement
- These rules are beneficial for large functions, not small functions

How to write a function with these rules?

- Write code
- Message and refine the code, shrink and reorder, and keeping the test passing

Conclusion

- Functions are the verb
- Classes are the nouns
- The art of programming is the art of language design
- A function will be short, well-named, nicely organized
- ***Tell the story of the system***
    - need to fit cleanly together in precise language