# ecommerce_Micro_FrontEnds
ecommerce_Micro_FrontEnds with Module Federation plugin webpack

We have two major functionalities here we need to implement




The old way is to implement both on the same project. THIS IS WRONG AND DANGEROUS



The rigth way is to develop TWO ISOLATED PROJECTS






![image](https://user-images.githubusercontent.com/14879580/121702572-60a9f680-caa8-11eb-9053-e47bfff03167.png)


We will have 3 projects to implement.

Container : One project that will decide when and where to show each of the two microFrontEnds (ProductList and Cart).



![image](https://user-images.githubusercontent.com/14879580/121702158-01e47d00-caa8-11eb-88a8-1a4cd2abc3bb.png)


npm install webpack@5.4.0 webpack-cli@4.5.0 webpack-dev-server@3.11.0 faker@5.1.0 html-webpack-plugin@5.1.0 

Update to 
  npm install  nodemon webpack@5.3.2 webpack-cli@4.5.0 webpack-dev-server@3.11.0 html-webpack-plugin@5.1.0

Class constructor ServeCommand cannot be invoked without 'new'
or
TypeError: cli.isValidationError is not a function
You will need to update the webpack-cli and html-webpack-plugin versions in your package.json:
    "webpack-cli": "^4.5.0",
    "html-webpack-plugin": "^5.1.0",
Then, delete your node_modules and package-lock.json files and run a new npm install




![image](https://user-images.githubusercontent.com/14879580/121702207-0c067b80-caa8-11eb-871a-f4115c7834e8.png)

 npm install webpack@5.4.0 webpack-cli@4.5.0 webpack-dev-server@3.11.0 faker@5.1.0 html-webpack-plugin@5.1.0 

Update to 
  npm install  nodemon webpack@5.3.2 webpack-cli@4.5.0 webpack-dev-server@3.11.0 html-webpack-plugin@5.1.0

Class constructor ServeCommand cannot be invoked without 'new'
or
TypeError: cli.isValidationError is not a function
You will need to update the webpack-cli and html-webpack-plugin versions in your package.json:
    "webpack-cli": "^4.5.0",
    "html-webpack-plugin": "^5.1.0",
Then, delete your node_modules and package-lock.json files and run a new npm install




![image](https://user-images.githubusercontent.com/14879580/121702241-16287a00-caa8-11eb-8ecf-eccb4f70961d.png)




Below in the Products project we define what JS file will be available to other projects.
In this case the index.js will be.


Below we will use WebPack plugin named Module federation 












The file bootstrap.js contains the data that will import products.
The index.js calls the bootstrap file









TRYING TO RUN LOCALHOST:8080 ON WEBBROWSER

This error I checked and there are some mispelled strings like Uppercase or lowercase. You need to check all settings




Results are







How things work




![image](https://user-images.githubusercontent.com/14879580/121702327-27718680-caa8-11eb-99eb-805d82f85d3a.png)

Copy same implementation as product and replicate on Cart and Container project




![image](https://user-images.githubusercontent.com/14879580/121702281-1fb1e200-caa8-11eb-919a-958b1605bec1.png)



When you must render app ( On Dev. Or prod)



To implement the above context





Change the exposes tag to bootstrap instead of index. Thats because we are exporting bootstrap on code-behind so Container can import it




CART







![image](https://user-images.githubusercontent.com/14879580/121702384-35bfa280-caa8-11eb-9bed-660f1bcc9b94.png)


