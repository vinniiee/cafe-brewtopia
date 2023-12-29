# BREWTOPIA Cafe Website

Welcome to the BREWTOPIA Cafe Website GitHub repository. We're thrilled to have you here and are excited about your potential contributions to our project. This repository contains the source code for our cafe's website, which aims to provide a delightful online experience for our customers.
- **Deployed On**: [Vercel](https://cafe-brewtopia.vercel.app/)

## Table of Contents
- [Project Overview](#project-overview)
- [Design and Development Resources](#design-and-development-resources)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Reporting Issues](#reporting-issues)
- [License](#license)

## Project Overview
The BREWTOPIA Cafe Website is designed to serve as an online platform for our cafe. It consists of six main pages:

1. **Menu Page:** Displaying our diverse menu, including coffee, pastries, and specialty drinks.
2. **Landing Page:** Welcoming visitors to our cafe's online space and providing essential information.
3. **Cart Page:** Allowing customers to review and modify their orders before placing them.
4. **Error Page:** Handling errors gracefully, ensuring a user-friendly experience.
5. **Order Placement Page:** Where customers can confirm and place their orders.
6. **Order Status Page:** Showing the order status after it has been placed.

## Design and Development Resources

### Figma Files
- You can find the design mockups for our cafe's website in the Figma files:
  - [Figma Designs - Landing Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)
  - [Figma Designs - Menu Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)
  - [Figma Designs - Cart Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)
  - [Figma Designs - Error Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)
  - [Figma Designs - Order Placement Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)
  - [Figma Designs - Order Status Page](https://www.figma.com/file/1Qnxj97JsntBx3BUcLQfmF/Untitled?type=design&node-id=0%3A1&mode=design&t=wKewrM3uwK99sLSc-1)

  For now all the figma files are pooled together but will be put in proper file structure in near future. Feel free to do it and update the links here.

### Technology Stack- **React:** [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
- **Redux Toolkit:** [![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-1.9.7-purple.svg)](https://redux-toolkit.js.org/)
- **Supabase JS:** [![Supabase JS](https://img.shields.io/badge/Supabase_JS-2.38.4-orange.svg)](https://supabase.io/)
- **React Query:** [![React Query](https://img.shields.io/badge/React_Query-5.8.4-green.svg)](https://react-query.tanstack.com/)
- **Framer Motion:** [![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-pink.svg)](https://www.framer.com/motion/)
- **React Hook Form:** [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.48.2-blue.svg)](https://react-hook-form.com/)
- **React Router DOM:** [![React Router DOM](https://img.shields.io/badge/React_Router_DOM-6.18.0-purple.svg)](https://reactrouter.com/)
- **React Redux:** [![React Redux](https://img.shields.io/badge/React_Redux-8.1.3-blue.svg)](https://react-redux.js.org/)
- **React Toastify:** [![React Toastify](https://img.shields.io/badge/React_Toastify-9.1.3-yellow.svg)](https://fkhadra.github.io/react-toastify/)


This tech stack is selected to be on par with a modern and efficient setup for developing a React-based web application with Vite as the build tool. It includes tools for routing, styling, linting, type checking, and animation. The project seems well-equipped for building a dynamic and responsive web application.


## Getting Started
To get started with the development environment, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/BREWTOPIA/BREWTOPIA-Cafe-Website.git

1. Install any necessary dependencies.

2. Make your desired changes to the codebase.

3. Test your changes locally to ensure they work as expected.

4. Commit your changes:
    ```bash
    git commit -m "Your descriptive commit message"

5. Push your changes to your forked repository:
    ```bash
    git push origin your-branch

6. Open a pull request (PR) to our main repository, describing the changes you've made.

## Contributing
We welcome and encourage contributions from the open-source community. Whether you're a developer, designer, or just passionate about coffee, your ideas and improvements are valuable to us. Here are some ways to contribute:


- **Feature Development:** Implement new features, functionalities, or design enhancements.
- **Bug Fixes:** Help us identify and fix issues to enhance the website's user experience.
- **Documentation:** Improve or expand the project's documentation for clarity.
- **Testing:** Provide feedback by testing the website and reporting any issues you encounter.

Please review our contribution guidelines for more details on our workflow.

## Reporting Issues
If you find any issues or have suggestions for improvements, please open an issue on this repository. We appreciate your feedback and will work to address and resolve issues promptly.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Known Issues
  - Menu Items Carousel: It is not draggable initially because the offset of draggableElemnt w.r.t its mask element is not being set on initial render. But on
                         clicking any of its children, the useEffect with children as its dependency is triggered and the offset is being set.

Thank you for considering contributing to the BREWTOPIA Cafe Website. We look forward to collaborating with you to create a great online experience for coffee lovers!
