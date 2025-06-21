# Jigyansoo Das - Professional Portfolio

[![Deploy Portfolio to GitHub Pages](https://github.com/jigyansoodas/my-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/jigyansoodas/my-portfolio/actions/workflows/deploy.yml)

Welcome to the repository for my professional portfolio website, accessible live at [jigyansoodas.github.io/my-portfolio](https://jigyansoodas.github.io/my-portfolio).

This project is a comprehensive showcase of my skills in modern frontend development, my professional experience, and my personal projects. It was built from the ground up using React and Material-UI.

## A Modern Development Process: Human-AI Collaboration

A unique aspect of this project is its development methodology. This entire portfolio was built in a dynamic pair-programming session with **Cursor**, an AI assistant. My role was to direct the entire development lifecycle through strategic **prompt engineering**—from initial project setup and component creation to styling, responsive design, and final deployment.

This approach demonstrates a cutting-edge workflow, highlighting my ability to leverage AI tools to accelerate development while maintaining high standards of code quality and design.

## Key Features

- **Responsive Design**: The site is fully optimized for a seamless experience on all devices, from mobile phones to desktops.
- **Dynamic Content**: The Experience and Projects sections are data-driven, making them easy to update and maintain.
- **Interactive UI**: The portfolio is built with Material-UI, featuring a clean, modern aesthetic with smooth page transitions and interactive elements.
- **Functional Contact Form**: Includes a secure, backend-less contact form powered by EmailJS, with client-side validation.

## Automated Deployment with GitHub Actions

The repository is configured with a professional Continuous Integration/Continuous Deployment (CI/CD) pipeline using **GitHub Actions**.

- **Automatic Deployments**: Every push to the `main` branch automatically triggers the workflow.
- **Secure Build Process**: The workflow securely injects secret keys (like EmailJS credentials) into the build process, ensuring they are never exposed in the source code.
- **Optimized Build**: The process uses `npm ci` for fast, reliable, and reproducible builds, creating an optimized static output for production.
- **Deployment to GitHub Pages**: The built site is automatically deployed to the `gh-pages` branch and published.

## Tech Stack & Tools

- **Frontend**: React, TypeScript
- **Styling**: Material-UI
- **Email Service**: EmailJS
- **CI/CD**: GitHub Actions
- **Development Process**: Prompt Engineering with Cursor (AI)

## Getting Started Locally

To run this project on your local machine:

1.  Clone the repository:
    ```bash
    git clone https://github.com/jigyansoodas/my-portfolio.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd my-portfolio
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root of the project and add your EmailJS credentials:
    ```
    REACT_APP_EMAILJS_SERVICE_ID=your_service_id
    REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
    REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```
5.  Start the development server:
    ```bash
    npm start
    ```