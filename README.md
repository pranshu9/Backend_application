
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

1-Clone the repository.
2-Install dependencies using npm install.
3-Set up a MongoDB database and provide the connection string in the .env file.
4-Start the server using npm start.
Note- Also install uuid library which is used in notes.js file.
Open the terminal and run the command: npm install uuid




