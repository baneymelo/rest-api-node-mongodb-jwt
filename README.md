# **REST API with Node.js & MongoDB**

REST-API with roles (JWT to authentication and authorization) to access to data.
CRUD of products, allows to authenticate users and establish roles for the authorization of routes in the server.

# Stack
* Back
	*  *Node.js*
	*  *Express*
* DB
	*  *MongoDB*
* Auth
	* JWT


# Setting Up

Create *package.json*

    npm init -y

Set dependencies

    npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet

* *express.js* : Node.js framework
* *bcryptjs* : data encrypting.
* *cors* : communicate the back-end to another servers.
* *dotenv* :  allows create runtime variables
* *jsonwebtoken* : API authentication/authorization
* *mongoose* :  module to communicate with DDBB
* *morgan* : show queries to arrive from server
* *helmet* : helps protect the application from some known web vulnerabilities by properly 		setting HTTP headers

Set devDependencies

`npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D`

* *babel/core* : JS compiler
* *babel/cli* : can be used to compile files from the command li.
* *babel/node* : works exactly the same as the Node.js CLI  (compiling).
* *babel/preset-env* :  allows you to use the latest JavaScript.
* *nodemon* : restarting the node application when file changes 

Create **src** folder 
* **src**
	* index.js
```
import express from 'express';
const app = express();
app.listen(3000);
```

* .babelrc

 `{ "presets": ["@babel/preset-env"] }`

Add script to *package.json*
```
"scripts" : {
    "build" : "babel src --out-dir build",
    "dev": "nodemon src/index.js --exec babel-node",
    "start" : "node build/index.js"
}
...	
```