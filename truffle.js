//var DefaultBuilder = require("./truffle-default-builder");

module.exports = {
  /*build: new DefaultBuilder({*/
  build: {
        "index.html": "index.html",
        
        /*"contracts/Marriage.sol": "contracts/Marriage.sol",*/
        
        "js/app.js": ["js/app.js"],
        "js/contractHandler.js": "js/contractHandler.js",
        
        "js/lib/angular-animate.min.js": "js/lib/angular-animate.min.js",
        "js/lib/angular-aria.min.js": "js/lib/angular-aria.min.js",
        "js/lib/angular-material-icons.min.js": "js/lib/angular-material-icons.min.js",
        "js/lib/angular-material.min.js": "js/lib/angular-material.min.js",
        "js/lib/angular.min.js": "js/lib/angular.min.js",
        
        "js/lib/truffle-contract.min.js": "js/lib/truffle-contract.min.js",
        "js/lib/web3.min.js": "js/lib/web3.min.js",
        "js/lib/web3-events.js": "js/lib/web3-events.js",
        
        "socket.io/socket.io.js": "socket.io/socket.io.js",
        
        "css/style.css": ["css/style.css"],
        "css/lib/angular-material.min.css": "css/lib/angular-material.min.css",
        
/*        "img/": "img/",*/        
        "img/cube.jpg": "img/cube.jpg"
  },
  /*}),*/
  rpc: {
    host: "ethereum-workshop-projet-info5.c9users.io/app",//"localhost",
    port: 8080, //8545
    before_timeout: 300,
    test_timeout: 300 
  },
  networks: {
    dev: {
      host: "ethereum-workshop-projet-info5.c9users.io/app",
      port: 8545,
      network_id: "*",
      before_timeout: 300,             //  <=== NEW
      test_timeout: 300 
    }
  }
};
