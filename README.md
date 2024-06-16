
# Hestia Interiors
Hi there 👋👋

This is my first end to end MERN stack project  which helps people to find their interios according to their style and taste  .


# Demo

https://github.com/Aditikhasnis/INTERIOR-DESIGN/assets/110238534/1007f3c2-436d-4508-abb0-32acde8ec2cd




In the MERN stack, MongoDB and Express.js are used for the backend, while React.js is used for the front end, and Node.js serves as the runtime environment. Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, facilitating schema-based data modeling and validation. CORS (Cross-Origin Resource Sharing) is a middleware allowing controlled access to resources on a server from different origins. Nodemon is a tool that automatically restarts the Node.js application when file changes are detected, improving development efficiency
## Installation

Install Node.js  from their official website .
Here is the list of dependencies installed
```bash
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "mongoose": "^6.7.2",
    "nodemon": "^2.0.20"
  }
```
```bash
npm init -y  #to generate package.json files
```

To install express.js cors dotenv mongoose
```bash
npm i express cors dotenv mongoose
```
To install nodemon -D
```bash
npm i nodemon  #To automatically restart the server whenever any changes are made.
```
To create a React app

```bash
npx create-react-app .
```


    
## Screenshots
This is the home page , the image you see is a gif , In react we can import web to display gifs.

![image](https://github.com/Aditikhasnis/INTERIOR-DESIGN/assets/110238534/287ed276-c917-4242-bf0d-40804928e479)

After clicking on get started you are directed to servie page ,Were you can select the package you want 

![image](https://github.com/Aditikhasnis/INTERIOR-DESIGN/assets/110238534/962f780c-c424-41bc-8b02-06b76f5ef1cf)

![image](https://github.com/Aditikhasnis/INTERIOR-DESIGN/assets/110238534/9a04c748-3aed-4b88-9630-421a24e00d7f)



After selecting the package you will be directed to the  contact me page ,These details will be saved in the mongodb cluster 

![image](https://github.com/Aditikhasnis/INTERIOR-DESIGN/assets/110238534/9a767263-1e70-459f-bccb-993fff08fb46)

## Mongodb

- Login into your  username and password in Mongodb Atlas.
- Click on new project
- Create a new cluster
- run the cluster
- change the env file accordingly with the name of the cluster your project is running on.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Aditikhasnis/INTERIOR-DESIGN.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
npm install i cors dotenv nodeman mongoose  expresss 

```

Start the server 

```bash
  npm  start
```


