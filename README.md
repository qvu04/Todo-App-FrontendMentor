📝 Modern Todo App - Frontend Mentor Challenge
A professional, responsive, and highly functional Todo application built with React, Redux Toolkit, and Tailwind CSS v4. This project focuses on state management, data persistence, and seamless user experience.

🚀 Features
Full CRUD Operations: Create, Read, Toggle, and Delete todos effortlessly.

State Management: Powered by Redux Toolkit for predictable and centralized data flow.

Advanced Filtering: Switch between All, Active, and Completed views without losing data.

Dark Mode Support: Seamless theme switching using React Context API and Tailwind CSS v4 (CSS variables & custom variants).

Data Persistence: Your tasks and theme preferences are saved locally using a custom useLocalStorage hook and Redux store.subscribe.

Responsive Design: Mobile-first approach ensuring a great look on all screen sizes.

🛠️ Tech Stack
Framework: React (Vite)

Language: TypeScript

State Management: Redux Toolkit (RTK)

Styling: Tailwind CSS v4

Persistence: Browser LocalStorage

Context API: For Global Theme Management

🏗️ Architecture Highlights
1. Persistent State
I implemented a robust persistence layer by subscribing to the Redux store. Every change is automatically synced to localStorage, ensuring the user's data survives page refreshes.

2. Tailwind v4 Dark Mode
Utilizing the latest Tailwind CSS v4 features, I used @theme variables and @custom-variant to handle dark mode styling through a single .dark class on the root element.

3. Custom Hooks
Created a reusable useLocalStorage hook to encapsulate the logic for reading and writing to the browser's storage, keeping the components clean and DRY.

🏁 Getting Started
Clone the repository:

Bash
git clone https://github.com/qvu04/Todo-App-FrontendMentor.git
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
📜 License
This project is open-source and available under the MIT License.