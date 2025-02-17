# InvoPro - Your Personalised Invoicer

## Project Idea

InvoPro is designed to provide a tailored billing solution for businesses that currently rely on manual invoicing methods. This application addresses the common challenges faced by businesses in managing their billing processes efficiently.

## Problem Statement

Many businesses lack a basic billing application and often resort to using pen and paper for invoicing. This approach not only consumes valuable time but also increases the risk of errors in billing and generating statements. Additionally, some existing applications are native to specific machines, leading to potential data loss and limited accessibility across different devices.

## Technical Analysis

### MongoDB

- **Data Storage**: InvoPro will utilize MongoDB to store billing data, including sales and purchase records.
- **Statement Generation**: The application will facilitate the generation of statements for easy tracking and management.

### Express/Node.js

- **Authentication and Authorization**: The backend will implement secure authentication and authorization mechanisms to protect user data.
- **API Endpoints**: Express will provide API endpoints for CRUD (Create, Read, Update, Delete) operations, enabling seamless interaction with the database.

### React

- **Interactive User Interface**: The frontend will be built using React, ensuring an interactive and responsive user experience.
- **Ease of Use**: The application will be designed to be user-friendly, allowing users to navigate effortlessly.
- **Customizable**: Users will have the ability to customize their invoicing experience according to their specific needs.

## Day-by-Day Plan

- **12-02-2025**: Complete the Low-Fidelity Design (LoFiD).
- **13-02-2025**: Work on the High-Fidelity Design (HiFiD).
- **14-02-2025**: Using GET API in my project
- **15-02-2025**: Using POST API in my project
- **16-02-2025**: Using PUT API in my project

---

## Initialized a react/frontend application

Here I have initialized a frontend react app in the `Client` folder.

I have used `npm create vite@latest` to create a new vite app. This is a simple and fast way to create a new react app.

---

## Added Schema for the backend

- **Models Folder**: A new folder named `model` has been created to organize the data models for the application.
- **User Model**: Defines the structure for user data, including fields for name, email, and password.
- **Product Model**: Defines the structure for product data, including fields for name, price, description, quantity, and image.

## Added GET API Endpoints

- **GET /users**: Retrieves a list of all users.
- **GET /products**: Retrieves a list of all products.
- **GET /users/single**: Retrieves a single user.
- **GET /products/single**: Retrieves a single product.

## Added POST API Endpoints

- **POST /users**: Creates a new user.
- **POST /products**: Creates a new product.

## Added PUT API Endpoints

- **PUT /users**: Updates an existing user.
- **PUT /products**: Updates an existing product.

## Added DELETE API Endpoints For CURD operation

- **DELETE /users**: Deletes a user.
- **DELETE /products**: Deletes a product.

## Added RELATION between DATABASE

- **User Model**: Has many products.
- **Product Model**: Belongs to user.
