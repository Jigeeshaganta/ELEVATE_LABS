 User Directory 
Overview
The User Directory is a simple web application that fetches user information from a public API and displays it in a modern, responsive layout.
It demonstrates how to work with the JavaScript Fetch API, handle errors gracefully, and apply neumorphism-style dark UI design.

 Features
Fetch Users from Public API
Retrieves user data (Name, Email, Address) from:

text
https://jsonplaceholder.typicode.com/users
Display in Responsive Grid
Data is shown as individual user cards with a modern neumorphic black theme.

Reload Button
Allows you to re-fetch the data without refreshing the whole page.

Loading Spinner
A smooth CSS animation displays while data is being fetched.

Error Handling
Network or API errors are caught and show a friendly error message.

Neumorphism Dark UI
Uses subtle shadows, highlights, and dark color palettes for a premium feel.

Responsive Design
Adjusts to different screen sizes for mobile and desktop viewing.

🛠️ Tech Stack
HTML5 – page structure

CSS3 – neumorphic dark theme, responsive grid, animations

JavaScript (ES6+) – Fetch API calls, DOM manipulation, error handling

Public API – JSONPlaceholder fake REST API for demo data

📂 Project Structure
text
/project-folder
│
├── index.html   # Main HTML file
├── style.css    # Neumorphic dark theme styles
├── script.js    # Fetch logic and interactivity
├── task7_ss1.png # Screenshot of the UI
└── README.md    # This file
How to Run
Download or Clone the project.

Make sure you have index.html, style.css, script.js, and task7_ss1.png in the same folder.

Open index.html in your browser.

On page load, the app will fetch the user list from the public API.

Click Reload Users to refresh the data.

Turn off your internet and press reload to test error handling.

📸 Preview
Below is a screenshot of the User Directory :

![User Directory Screenshot](task7_ss1.png)

The app uses the free JSONPlaceholder API, which requires no authentication.

The design style is Neumorphism Dark Mode, using soft inset and outset shadows to create depth.

This is a frontend-only project — no backend or database is used.

Perfect as a beginner-friendly demo for learning Fetch API + modern CSS design.



