
# NoteApp

**NoteApp** is a feature-rich note-taking application built with the MERN stack. It provides a seamless experience for managing your notes, whether you're on desktop or mobile.

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **CRUD Operations**: Create, read, update, and delete notes effortlessly.
- **Search and Filter**: Quickly find notes based on keywords.
- **Responsive Design**: Works beautifully on all devices.
- **RESTful API**: Well-structured backend for smooth frontend-backend interaction.

---

## Tech Stack

- **Frontend**: React, Axios  
- **Backend**: Express, Node.js  
- **Database**: MongoDB with Mongoose  
- **Authentication**: JSON Web Tokens (JWT)

---

## Screenshots

![NoteApp Home](https://via.placeholder.com/800x400)  
_Screenshot of the NoteApp home page._

---

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB instance running

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/charlesaloaye/NoteApp-Fullstack.git
   ```

2. **Backend Setup**:
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `/backend` directory:
   ```plaintext
   MONGO_CONNECTION_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
   AUTH_TOKEN=<your_jwt_secret>
   PORT=4000
   ```

   Start the server:
   ```bash
   npm run backend
   ```

3. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   ```

   Start the React app:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## API Endpoints

### Authentication
- **POST** `/api/user/register` – Register a new user  
- **POST** `/api/user/login` – Log in a user  
- **GET** `/api/user/authenticate` – Verify logged-in user  

### Notes
- **GET** `/api/note` – Fetch all notes  
- **POST** `/api/note/add` – Create a new note  
- **PUT** `/api/note/:id` – Update a note  
- **DELETE** `/api/note/:id` – Delete a note  

---

## Contribution

We welcome contributions! To get started:

1. Fork the repo and create a new branch:
   ```bash
   git checkout -b feature-name
   ```

2. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```

3. Push to the branch:
   ```bash
   git push origin feature-name
   ```

4. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [MIT](LICENSE) file for details.

---

## Contact

For inquiries or support, reach out to:

- **Email**: charlestechy0@gmail.com  
