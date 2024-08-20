# blog-app-backend


This project is a simple RESTful API for managing blogs. It is built using Node.js, Express, and MongoDB. The API allows users to create, read, update, and delete blog posts, with each blog associated with a specific user.

## Features

- **Create a Blog**: Add a new blog post with a title, description, image, and associated user.
- **Get All Blogs**: Retrieve a list of all blogs stored in the database.
- **User Association**: Each blog post is associated with a user, and users can have multiple blogs.
- **Transaction Management**: Uses MongoDB sessions to ensure consistency when creating blogs and associating them with users.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing blog and user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Postman**: **Postman**: API development environment used for testing and interacting with the API endpoints.


## Installation

1. **Clone the repository:**

   ```bash
   git clone hhttps://github.com/ritammaity55/blog-app-backend.git

2. **Change the directory to the backend folder:**
    ```bash
    cd .\blog-app-backend\
3. **Install dependencies:**
    ```bash
    npm install
    npm install nodemon
    npm install express
    npm install mongoose
    npm install bcryptjs
4. **Run the server:**
   ```bash
    npm start
The server will start on http://localhost:5000.