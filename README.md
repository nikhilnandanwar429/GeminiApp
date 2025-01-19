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
- **[React](https://react.dev/)**: UI library
- **[Vite](https://vitejs.dev/)**: Build tool and development server
- **[React Router DOM](https://reactrouter.com/)**: For client-side routing
- **[@google/generative-ai](https://ai.google.dev/docs)**: Google's Gemini AI API client
- **[React Markdown](https://github.com/remarkjs/react-markdown)**: For rendering markdown content
- **[Axios](https://axios-http.com/)**: HTTP client for API requests
- **Additional UI Packages**:
  - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
  - [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
  - [rehype-raw](https://github.com/rehypejs/rehype-raw)
  - [remark-gfm](https://github.com/remarkjs/remark-gfm)

### Backend
- **[Node.js](https://nodejs.org/)** with **[Express.js](https://expressjs.com/)**: Server framework
- **[MongoDB](https://www.mongodb.com/)** with **[Mongoose](https://mongoosejs.com/)**: Database and ODM
- **[CORS](https://github.com/expressjs/cors)**: Cross-Origin Resource Sharing middleware
- **[dotenv](https://github.com/motdotla/dotenv)**: Environment variable management
- **[nodemon](https://nodemon.io/)**: Development server with auto-reload


## Author
Nikhil Nandanwar
