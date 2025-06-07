# Form Submission Application

A simple web application that demonstrates server-side rendering and form handling using Node.js, Express, and EJS.

## Features

- HTML form with user input fields
- Server-side form processing
- Dynamic page rendering using EJS
- Form submission feedback
- Responsive design

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. Open your browser and navigate to:

```
http://localhost:3000
```

## Project Structure

- `server.js` - Main server file with Express setup and routes
- `views/index.ejs` - EJS template for the form and dynamic content
- `package.json` - Project dependencies and scripts
This section explains the key files in the project:
- `server.js`: Contains the Express server configuration, routes, and form handling logic
- `views/index.ejs`: The template file that defines the HTML structure and form
- `package.json`: Defines project metadata and dependencies

The application uses these technologies:
1. **Node.js**: The runtime environment for running JavaScript on the server
2. **Express**: A web framework for Node.js that handles routing and HTTP requests
3. **EJS**: A templating engine that allows embedding JavaScript in HTML
4. **body-parser**: Middleware for parsing incoming request bodies

When you run the application:
1. The server starts on port 3001
2. You can access the form through your web browser
3. When you submit the form: