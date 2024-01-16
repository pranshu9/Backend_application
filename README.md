
# Backend Application

The task is to create a backend application that supports user authentication, note management, and search
functionality. The application should allow users to sign up, sign in, create, read, update, delete, and search their
notes. Each user should only have access to their own notes, ensuring data privacy.


## Technical Requirements

NodeJS
Express
MongoDB
Mongoose
JWT
Postman

## Files
"index.js"

This is the main entry point of the application. It sets up the Express server, connects to MongoDB, and defines routes for user authentication (/auth) and note management (/notes). The server listens on the specified port.

"note.js"

This file contains the schema and model for the Note object. Each note has a unique ID (noteId), a title, content, and is associated with a user.

"notes.js"

This file defines the routes related to note management. It includes:

Create a New Note (POST /notes): Allows users to create a new note. Uses JWT for authentication and generates a unique noteId using the uuid library.

Update a Note (PUT /notes/:noteId): Enables users to update the content or title of an existing note. Requires authentication.

Mark a Note as Read/Unread (PATCH /notes/:noteId): Allows users to mark a note as read or unread. Requires authentication.

Delete a Note (DELETE /notes/:noteId): Allows users to delete a note. Requires authentication.

Search for Notes (GET /notes/search): Provides a search functionality for notes based on a keyword in the title. Requires authentication.

"middleware_auth.js"

This file contains the middleware for authenticating users using JWT. It checks the Authorization header for a valid JWT token.

"models_user.js"

This file defines the schema and model for the User object. It includes fields for username, email, and hashed password. The password is hashed before saving to the database.

"route_auth.js"

This file defines the routes related to user authentication. It includes:

User Signup (POST /auth/signup): Allows users to register by providing a username, email, and password.

User Signin (POST /auth/signin): Allows users to sign in by providing their email and password. It returns a JWT token upon successful authentication.
## Getting Started

1-Clone the repository.  \
2-Install dependencies using npm install.(npm install express mongoose body-parser jsonwebtoken bcrypt)  \
3-Set up a MongoDB database and Update the connection string in your index.js file to connect to MongoDB instance:
  To obtain the connection string for MongoDB, you'll need to follow these steps:  \

->Set Up a MongoDB Database:

If you don't have MongoDB installed locally, you can use a cloud-based solution like MongoDB Atlas.
Sign up for an account on MongoDB Atlas.
Create a new cluster (a cluster is a group of MongoDB servers).  \
->Create a Database:

Once your cluster is set up, create a new database.
You can name the database based on your project, such as "notes_app."  \
->Create a Database User:

In MongoDB Atlas, navigate to your cluster and click on "Database Access" under the Security section.
Add a new database user with the necessary permissions. Remember the username and password you set for this user.  \
->Get the Connection String:

In MongoDB Atlas, go to the "Clusters" section and click on "Connect."

You'll be presented with different connection options. Choose "Connect Your Application."

Copy the connection string  \
4-Run your Node.js application: node index.js
Note- Also install uuid library which is used in notes.js file.
Open the terminal and run the command: npm install uuid  \
5-Test Endpoints with Postman
Use Postman to test your API endpoints.
Create a Postman collection to organize your requests.  \
6-Share Postman Collection
Export your Postman collection and share it with others who may want to test your API.

## Test your endpoints using Postman  \
Start the Server:  \
Make sure your Node.js server is running. You can start it by running the command "node index.js" in the terminal inside your project folder.  \
Step 1: Install Postman  \
If you don't have Postman installed, you can download it from the official website.  \

Step 2: Open Postman  \
Open the Postman application.  \

Step 3: Sign Up  

Create a new request and send a POST request to http://localhost:5010/auth/signup(use your port number in place of "5010") with the following JSON payload in the request body:  \
{
  "username": "your_username",
  "email": "your_email@example.com",
  "password": "your_password"
}  \
Step 4: Sign In  \

Send a POST request to http://localhost:5010/auth/signin with the JSON payload:   \
{
  "email": "your_email@example.com",
  "password": "your_password"
}  \
Copy the token from the response.  \
Step 5: Create a Note:  \

Send a POST request to http://localhost:5010/notes with the following JSON payload:  \
{
  "title": "Note Title",
  "content": "Note Content"
}  \
Include the Authorization header(type - Bearer token) with the value <your_token>.  \
Step 6:Update Note  \

Send a PUT request to http://localhost:5010/notes/<note_id> with the following JSON payload:  
{
  "title": "Updated Note Title",
  "content": "Updated Note Content"
}  
Step 7:Search request   
Send a GET request to http://localhost:5010/notes/search/<keyword> where <keyword> is the title keyword you want to search for.  
Step 8:Delete Node  
Send a DELETE request to http://localhost:5010/notes/<note_id> with the Authorization header.  



