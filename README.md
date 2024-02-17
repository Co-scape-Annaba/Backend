# StartMeUp - Backend  (Co-Scape)

## Description
This repository contains the backend implementation for StartMeUp (our solution). The backend is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and provides the necessary APIs and functionalities to support the frontend.

## Folder Structure
- **config:** Contains database connection setup.
- **controllers:** Houses the main functionalities and services of the server.
- **middlewares:** Includes middleware functions for authentication, authorization, etc.
- **models:** Defines the database schemas using Mongoose.
- **routes:** Defines all the routes and endpoints provided by the server.
- **.env:** Stores sensitive information such as database credentials.
- **app.js:** Entry point for the server creation.

## Dependencies
- bcrypt: ^5.1.1
- cors: ^2.8.5
- dotenv: ^16.4.4
- express: ^4.18.2
- jsonwebtoken: ^9.0.2
- mongoose: ^8.1.2
- nodemailer: ^6.9.9
- nodemon: ^3.0.3

## Functionality
- Implemented user authentication using JSON Web Tokens (JWT).
- Integrated forget and reset password functionalities using Nodemailer.
- Communicated with an external Flask server for AI functionalities.

## Usage
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables in the `.env` file.
4. Run the server using `npm start` or `nodemon`.

## Endpoints
- **/users/:** Authentication endpoints and User-related endpoints.
- **/ideas/:** implementation of the basic CRUD.
- **/courses/:** implementation of the basic CRUD.

## Contact
For any inquiries or issues, please contact Raouf at abderraouf.abdallah1812@gmail.com
.
