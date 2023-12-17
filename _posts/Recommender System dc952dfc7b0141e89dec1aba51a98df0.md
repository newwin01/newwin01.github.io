# Recommender System

- one of the most popular ML algorithms
    - can provide personalized service
- the recommendation can be applied to everywhere
- Given:
    - users
    - items
- Goal:
    - find relevance score
    - recommend most relevant items
- Issue
    - relevance → context-dependent
    - tensor instead of a user-item matrix
- Content-based filtering
    - based on a description of the item and a profile of the user
- Collaborative filtering
    - based on community
- Pros and Cons
    
    ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled.png)
    
- Content-based filtering
    - we need
        - information about the items
        - some user profile describing what user likes
    - the task
        - user preference
        - recommend items that are similar to the user preference
    - Simple approach
        - compute the similarity of an unseen item with the user profile based on the keyword overlap
    - Standard measure
        - TFIDF
            - TF: measure how often a term appears
            - IDF: aims to reduce the weight of terms that appear in all documents
            
            ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%201.png)
            
- Collaborative filtering
    - the most prominent approach to generating recommendations
    - used by large, commercial e-commerce sites
    - applicable in various fields
    - Approach
        - use the wisdom of crowd
    - Basic Assumption and Idea
        - users give ratings to catalog items
        - customers who had similar tastes in the past, will have similar tastes in the future
    - similarities in collaborative filtering
        - Jaccard distance
        - Cosine distance
        - Pearson correlation
        
        ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%202.png)
        
- user-oriented neighborhood method
    
    ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%203.png)
    
- item-oriented neighborhood method
    
    ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%204.png)
    
- Latent factor apporach
    - users and items are represented in a continuous vector space
- matrix factorization methods
    - Singular Value Decomposition
    - non-negative matrix factorization
        
        ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%205.png)
        
        ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%206.png)
        
- Types of feedback
    - explicit feedback
        - star, tumb ups, preference
    - implicit feedback
        - purchase, click, browsing history, search patterns
        - confidence
- CF for implicit feedback
    
    ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%207.png)
    
- evaluation of recommendation
    - difficult
    - total sales numbers
    - promotion of certain items
    - click through rates
    - interactivity on platform
    - customer return rates
    - customer satisfaction and loyalty
- evaluation for developers
    - laboratory studies
        - controlled experiments
    - offline experiments
        - based on historical data
    
    ![Untitled](Recommender%20System%20dc952dfc7b0141e89dec1aba51a98df0/Untitled%208.png)