# node_app
Dockerizing NodeJS application

Following are the steps to create NodeJS project and packaging in Docker.  

1. npm init -y
2. npm install
3. npm i --save express
4. add app.js and write application server code in it. 
5. node app.js to ensure server is running and message apepars on the terminal 'Listening on 8080' 
6.  Use Ctrl + c to disconnect the server
7.  Add Dockerfile
8.  Update Dockerfile to build an image
9.  npm i docker
10.  docker --version
11.  docker build -t dockerized_node_app .
12.  docker image ls to ensure docker image has been created successfully
13.  Create docker container using command docker run --name node_app_container -d -p 8080:8080 dockerized_node_app
14.  docker ps to ensure docker container has been created and running successfully
15.  Attach & launch MS Edge browser
16.  From Terminal, access PORT tab
17.  Add port 8080 to forward port. 
18.  Access MS Edge link as http://127.0.0.1:8080
19.  "Node App works" message should be displayed on the browser. This message occurring since app.get('/') statement is sending a response. 
20.  Stop container after use using command docker stop node_app_container
21.  Remove container after stopping using command docker rm node_app_container
22.  docker ps to ensure docker container no longer exists
23.  Remove docker image using docker rmi dockerized_node_app
24.  docker image ls to ensure docker image has been removed successfully. 
25.  Commit the changes from Codespace branch to main branch

  
