# Gemini Chat Application

A full-stack chat application built using Google's Gemini AI API, featuring real-time chat interactions and chat sharing capabilities.
**[Live link](https://ai-by-gemini.netlify.app/)**

## Project Structure

The project is divided into two main parts:

### Client (Frontend)
- Built with React + Vite
- Located in the `/client` directory
- Handles user interface and interactions with the Gemini AI API
- Features modern UI components with markdown support

### Server (Backend)
- Built with Node.js and Express.js
- Located in the `/server` directory
- Manages API routes, database operations, and chat sharing functionality
- Uses MongoDB for data persistence

## Tech Stack

### Frontend
- **[React](https://react.dev/)**: ^18.3.1 - UI library
- **[Vite](https://vitejs.dev/)**: Build tool and development server
- **[React Router DOM](https://reactrouter.com/)**: ^7.1.3 - For client-side routing
- **[@google/generative-ai](https://ai.google.dev/docs)**: ^0.21.0 - Google's Gemini AI API client
- **[React Markdown](https://github.com/remarkjs/react-markdown)**: ^9.0.1 - For rendering markdown content
- **[Axios](https://axios-http.com/)**: ^1.7.9 - HTTP client for API requests
- **Additional UI Packages**:
  - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
  - [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
  - [rehype-raw](https://github.com/rehypejs/rehype-raw)
  - [remark-gfm](https://github.com/remarkjs/remark-gfm)

### Backend
- **[Node.js](https://nodejs.org/)** with **[Express.js](https://expressjs.com/)**: ^4.21.2 - Server framework
- **[MongoDB](https://www.mongodb.com/)** with **[Mongoose](https://mongoosejs.com/)**: ^8.9.5 - Database and ODM
- **[CORS](https://github.com/expressjs/cors)**: ^2.8.5 - Cross-Origin Resource Sharing middleware
- **[dotenv](https://github.com/motdotla/dotenv)**: ^16.4.7 - Environment variable management
- **[nodemon](https://nodemon.io/)**: ^3.1.9 - Development server with auto-reload


## Author
Nikhil Nandanwar
