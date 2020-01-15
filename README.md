<h1 align="center">
  <img src="https://i.imgur.com/kp4BS9C.png" alt="Login" height="80">
  </br>
  <b>MyMenu</b>
</h1>


<p align="center"><i >"Save your special foods"</i> </p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

## :camera: Images & Gifs

<p align='center'>
  <img src="https://i.imgur.com/Z3Tgwga.jpg" alt="Login" height="400">
  <img src="https://i.imgur.com/iCijOAP.jpg" alt="Register" height="400">
  <img src="https://i.imgur.com/Q267KRI.jpg" alt="Login" height="400">
  </br>
  </br> 
  <img src="https://i.imgur.com/tLHyVUo.jpg" alt="Login" height="400">
  <img src="https://i.imgur.com/LaYh4gc.jpg" alt="Login" height="400">
  <img src="https://i.imgur.com/mAN5OOv.jpg" alt="Login" height="400">
</p>


<div id="how-to-use">
  
  ## Getting started
</div>

Clone the project from Github :
```sh
git clone git@github.com:brunogusta/entria-challenge-MyMenu.git
```

The mobile folder contains all front-end code made with react-native.

Check out this [Rocketseat](https://docs.rocketseat.dev/ambiente-react-native/introducao) page to learn how to set up your environment to run a mobile version with React Native.

You will start by cloning or downloading this repository. After that we will start configuring the Server folder.

Don't forget to install the dependencies of each folder using your preferred package manager (npm, yarn etc).
```sh
$ yarn or npm install
```

Create a **.env** file in _server_ folder and copy the content of **env_example**

```bash
#Enviroment
NODE_ENV=development

# MongoDB
MONGO_URL=mongodb://localhost/database-name

#GraphQL settings
GRAPHQL_PORT=5000

#Security
JWT_KEY=awesome_secret_key

```

Then you need to create a **uploads/resized** folders in **src** to store the images.

**Note**: The backend uses MongoDB as a database, you must have it installed or use MongoDB Atlas for proper operation.



Start the server with **yarn start** or **npm start**.

In the mobile folder, after you have installed the dependencies you will need to change the ip in the **src/service/api.js** folder to the local ip of your machine.

At the terminal use the command **yarn relay** or **npm relay** to compile the queries and then **yarn start** to start the application.


After that if everything goes well the application can already be used.


<div id='license'>
  <h2>:page_facing_up: License</h2>
</div>

MIT

---

> LinkedIn [Bruno Gustavo](https://www.linkedin.com/in/bruno-gustavo-90502a13a/)

<p align='center'>
  Made with :hearts: by Bruno Gustavo.
</p>
