# Memories MERN Website
Memories MERN Website is a full-stack application built using the MERN (MongoDB, Express, React, Redux, Node.js) stack. It seamlessly integrates a user-friendly frontend interface with a powerful backend, allowing users to effortlessly manage and explore their memories. From signing up to sharing moments, from liking memories to personalizing them, this platform offers a range of features that cater to users' desire for reliving and preserving their experiences.

## Features
User Authentication: Register for an account or log in using your email and password. Alternatively, you can quickly sign in using your Google account for added convenience.

Memory Management: Create new memories complete with captivating images and meaningful descriptions. Easily edit your memories to add more content or update details. If you ever wish to remove a memory, the delete feature is just a click away.

Engagement: Express your appreciation for memories by liking them. Don't worry if you change your mind; the option to remove a like is readily available.

This project showcases the power of the MERN stack in creating a seamless and interactive experience for users to capture and relive their life's most precious moments. Dive into the world of Memories and embark on a journey down memory lane.

## Getting Started

To get the Memories MERN Website up and running on your local machine, follow these steps:

1. Clone the Repository:
  ```bash
  git clone https://github.com/your-username/memories-mern.git
  cd memories-mern
  ```
2. Install Dependencies:
   - For the server:
    ```bash
    cd server
    npm install
    ```
   - For the client:
    ```bash
    cd client
    npm install
    ```
3. Server Configuration:
  Navigate to the server directory and create a .env file.
  Update the environment variables in the .env file, including MongoDB connection details and JWT secret.
4. Running the Application:
   - In the server directory, run the Express server:
  ```bash
  npm start
  ```
   - In the client directory, run the React development server:
  ```bash
  npm start
  ```
5. Access the website at http://localhost:3000.
6. Authentication Setup:
  Configure your Google API credentials for the sign-in with Google feature.

## Technologies Used
 - Frontend: React.js, Redux, Material-UI
 - Backend: Node.js, Express.js, MongoDB, bcrypt, JSON Web Tokens (JWT)
## Contributing
Contributions are welcome! If you have suggestions, enhancements, or bug fixes, please feel free to submit pull requests or create issues in the repository.
## License
This project is licensed under the MIT License.
