# Reactify
## An Educational Website
### (SERVER SIDE CODE)  

- Requirements: [Github](https://github.com/foy4748/reactify/blob/main/REQUIREMENTS.md)  

- CLIENT Repo Link: [Github](https://github.com/foy4748/reactify) 
- Live Website: [Netlify](https://p-hero-foy4748-assignment-10.netlify.app/) 

- SERVER Repo Link: [Github](https://github.com/foy4748/reactify-server)
- Server Link: [Vercel](https://ph-server-assignment-10.vercel.app/)  


# API Endpoints Documentation
- "/"
    - Returns all posts available.
    - { error: Boolean, working: Boolean, data: JSON}
- "/:postId"
    - Returns an individual post 
    - { id: String, title: String, post: MarkDown }
- "/titles"
    - Returns an array of titles of the available posts.
    - [{id: String, title: String, brief: String},...]
