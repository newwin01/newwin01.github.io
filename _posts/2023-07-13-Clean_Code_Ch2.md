---
title:  "Clean Code Chapter 2"
excerpt: "How to name clearly"

categories:
  - Books
tags:
  - [Blog]
---

**Using the appropriate Name will pay off in the short term and continue to pay in the long run** 

- Using Intention-Revealing Names
    - Choosing good names takes time but saves more than it takes
    - Choosing a name that specifies what is being measured and the unit of that measurement
    - Things need to think
        - What kind are in
        - What is returned
        - zeroth subscript and value
    - Do not use **O *and l***
- Avoid Disinformation
    - Avoiding words whose entrenched meanings vary from intention
    - Spelling similar concepts similarly
        - No inconsistent spelling
    - ~~Using different font??~~
- Meaningful Distinction
    - **a** for a local variable, **the** for all function arguments
    - Less redundant words
    - Distinguishing names in a way that readers know what the difference offer
- Using Pronounceable Names
    - Essential for communication
- Using Searchable Names
    - Single-letter names can ONLY be used as local variables inside short methods
    - The length of a name should correspond to the size of its scope
- Avoiding Encoding
- Hungarian Notation
    - The compiler knows the type nowadays
- Member Prefixes
    - unseen clutter and a marker of older code…
- Interface and Implementation
    - Why would I let user knows I’m handling them with an interface?
    - Marking at the implementation
- Avoid Mental Mapping
    - In most contexts, a single letter for a loop is a poor choice (such as i, j, k)
    - *Clarity is king*
- Class Names
    - should have noun or noun phrase names
- Method Names
    - should have verb or verb phase names
    - When constructors are overloaded, use the static method with names that describe the argument
        - Make corresponding constructors private
- Don’t be cute
    - No too “user-specific name”
- Pick One Word per Concept
    - Pick one word for one abstract concept
    - The name will express two different types of object
- Don’t Pun
    - Avoiding using the same word for two purposes
    - Even if it has a similar concept, it must have a different name if it is semantically different
    - ***It is the author’s responsibility***
- Use Solution Domain Names
    - People who read your code will be programmers
        - CS terms, algorithm names, pattern names, math terms, etc.
- Use Problem Domain Names
    - Separating solution and problem domain concept
- Add Meaningful Context
    - Place the name in context for the reader
        - enclosing classes, functions, or namespaces
    - break it into smaller functions if it is necessary
- But Don’t Add Gratuitous Context
    - Shorter names are generally better
        - As long as they are clear