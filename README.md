# Getting Started
# Initial Setup:

1. **Install Node.js :** Node.js is an open-source, cross-platform JavaScript runtime environment. You can download Node.js from the official website at https://nodejs.org/en/download/ or use your system's package manager.

   Check Node.js and npm Installation:
   Open a terminal ( or command prompt on Windows ) and run the following command to ensure Node.js is installed correctly:

   ![image](https://github.com/Harikrishnan14/QuickBite-FoodDeliveryApp/assets/105783562/35c292db-732c-4183-ba9e-1abc9265c70c)

   [ NOTE : npm comes with Node.js by default, you don't have to install it separately ]

2. **Install MongoDB :** MongoDB is a source-available, cross-platform, document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas. You can download MongoDB from the official website at https://www.mongodb.com/try/download/community

   Inorder to run MongoDB locally you need to have MongoDB Shell installed on your computer. You can download MongoDB Shell from the official website at https://www.mongodb.com/try/download/shell

   Check MongoDB Installation:
   Open a terminal (or command prompt on Windows) and run the following command to ensure MongoDB is installed correctly:

   ![image](https://github.com/Harikrishnan14/QuickBite-FoodDeliveryApp/assets/105783562/e798c972-cc0d-4e99-b9aa-452a9a2c2af0)


3. **Install MongoDB Compass :** You can download MongoDB Compass from the official website at https://www.mongodb.com/try/download/compass

4. **Install Dependencies :**
   1. Open the terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) from the root folder and run the following command to install all the dependencies needed to run the Frontend of the application :
      ### `npm i`

   2. Open another terminal ( or command prompt on Windows ) ( or if you are using VS Code, you can use its terminal ) and run the following command to navigate to the Backend ( Server side ) of the application :
      ### `cd Backend`
      Then, 
      ### `npm i`
      This will install all the dependencies needed to run the Backend of the application

5. **Database Setup :**
   1. Open the MongoDBCompass and create a new Database named **'QuickBite'**
   2. Open the newly created Database and create a new collection inside it, Named **'food_category'**. And add the data ( src/components/Data/food_category ) to it.
   3. Create another collection called **'food_items'**. And add the data ( src/components/Data/food_items ) to it. 
      

# Starting the Application:

1. Open the terminal which you used to install the dependencies for the Frontend and run the following command to start Frontend of the application :
   ### `npm start`
2. Open the other terminal which you used to install the dependencies for the Backend and run the following command to start Frontend of the application :
   ### `node .\server.js`
   [ OR, You can use `nodemon .\server.js`, if nodemon is already installed on your system ]
   
3. After these, Go to 'http://localhost:3000'

# Packages Used:

1. **Frontend :**

   1. **Bootstrap :** To make the website responsive. Bootstrap is easy to understand and it has much pre-design class. In CSS, we have to write code from scratch.
   2. **bootstrap-dark-5 :** To use the dark color mode
   3. **Axios :** Axios is a promise-based HTTP library that lets developers make requests to either their own or a third-party server to fetch data. It offers different ways of making requests such as GET , POST , PUT/PATCH , and DELETE.
   4. **React Router :** For routing purpose. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.

2. **Backend :**

   1. **Express :** Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.
   2.  **express-validator :** It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, and so on.
   3.   **CORS :** Cross-origin resource sharing (CORS) is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. For example, you need CORS when you want to pull data from external APIs that are public or authorized.
   4.   **Mongoose :** With Mongoose, creating and managing relationships between data is quick and easy thanks to a strict schema and populate() method. It replaces specific paths, described in the schema with documents from other collections.
   5.    **jsonwebtoken :** JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are.
   6. **bcrypt.js :** It is a cryptographic hash function designed for password hashing and safe storing in the backend of applications in a way that is less susceptible to dictionary-based cyberattacks.