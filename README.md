# Gemini Chat Application

A full-stack chat application built using Google's Gemini AI API, featuring real-time chat interactions and chat sharing capabilities.

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
- **React**: ^18.3.1 - UI library
- **Vite**: Build tool and development server
- **React Router DOM**: ^7.1.3 - For client-side routing
- **@google/generative-ai**: ^0.21.0 - Google's Gemini AI API client
- **React Markdown**: ^9.0.1 - For rendering markdown content
- **Axios**: ^1.7.9 - HTTP client for API requests
- **Additional UI Packages**:
  - react-syntax-highlighter
  - rehype-highlight
  - rehype-raw
  - remark-gfm

### Backend
- **Node.js** with **Express.js**: ^4.21.2 - Server framework
- **MongoDB** with **Mongoose**: ^8.9.5 - Database and ODM
- **CORS**: ^2.8.5 - Cross-Origin Resource Sharing middleware
- **dotenv**: ^16.4.7 - Environment variable management
- **nodemon**: ^3.1.9 - Development server with auto-reload


## Author
Nikhil Nandanwar
