# GitHub Profile Explorer

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![MIT License](https://img.shields.io/badge/License-MIT-green)

A modern React app for searching and exploring GitHub user profiles. Browse multiple users, view individual profiles, and get live data directly from the GitHub API.

---

## Features

- **Browse Multiple Profiles:** Fetch and display a list of GitHub users.
- **Search Individual Profiles:** Look up any GitHub user by username.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Modern UI:** Clean, user-friendly interface.
- **Loading & Error States:** Clear feedback for loading and errors.

---

## Project Showcase

Here are some screenshots of GitHub Profile Explorer:

### Multiple User Mode 
<img width="1899" height="933" alt="image" src="https://github.com/user-attachments/assets/d537cafa-3f63-4040-b8fb-3f602a321bba" />

### Individual User Mode
<img width="1899" height="933" alt="image" src="https://github.com/user-attachments/assets/a563ada3-cf1d-45ec-b436-b1bc66d862f6" />

---

## Public API

This project uses the free [GitHub Users API](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28):

- List users:  
  `https://api.github.com/users?per_page=10`
- List users (custom count):  
  `https://api.github.com/users?per_page=${count}`
- Individual user:  
  `https://api.github.com/users/{username}`
- Paginated users:  
  `https://api.github.com/users?since=6000&per_page=20`

---

## Tech Stack

- **React** — For building interactive UIs.
- **JavaScript (ES6+)** — Core programming language.
- **HTML5 & CSS3** — Structure and styling.

---

## File Structure

```
.
├── Component
│   ├── Body.jsx
│   ├── Header.jsx
│   └── useFetchProfiles.jsx
├── index.html
├── package.json
├── package-lock.json
├── readme.md
└── src
    ├── script.jsx
    └── styles.css
```

---

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js and npm (or yarn) installed.
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your_username/github-profile-explorer.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd github-profile-explorer
    ```
3.  Install dependencies:
    ```sh
    npm install
    ```
4.  Start the development server:
    ```sh
    npm start
    ```

The app will be available at `http://localhost:3000`.

---

## 🤝 Contribution

Contributions are welcome!

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a pull request

---

**Made with ❤️ for open source!**

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## 📧 Contact

<a href="https://x.com/hridewel" style="text-decoration: none; margin-right: 20px;">
  <img src="https://cdn-icons-png.flaticon.com/24/733/733579.png" alt="Twitter" style="vertical-align: middle;" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/hridoychowdhury/" style="text-decoration: none;">
  <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" style="vertical-align: middle;" /> 
</a>

Feel free to reach out for
