var appRouter = function(app) {
    
    var blockchainWrapper = require('./blockchain.js');

    app.get('/blocks', function(req, res, next){
        console.log("\n---------------------------\nGET BLOCKS\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        
    	var results = blockchainWrapper.getBlocks();
        if (results == null) results = [{extraData: "emptyBlockchain"}];
        /*console.log("getBlocks success : ");
        console.log(results);*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    
    app.get('/accounts', function(req, res, next){
        console.log("\n---------------------------\nGET ACCOUNTS\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        
    	var results = blockchainWrapper.getAccounts();
        if (results == null) results = [{extraData: "No accounts"}];
        /*console.log("getAccounts success : ");
        console.log(results);*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    
    app.get('/lastTransaction', function(req, res, next){
        console.log("\n---------------------------\nGET LAST TRANSACTION\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        
    	var results = blockchainWrapper.getLastTransaction();
        if (results == null) results = [{extraData: "No Transaction"}];
        /*console.log("getAccounts success : ");
        console.log(results);*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    
    
    app.get('/initContract', function(req, res, next){
        console.log("\n---------------------------\nINIT CONTRACT\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        
    	var results = blockchainWrapper.initContract();
        /*console.log("initContract success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    
    app.post('/callContract', function(req, res, next){
        console.log("\n---------------------------\nCALLING CONTRACT\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, contractData.functionToCall, contractData.partner1, contractData);
        //var results = blockchainWrapper.createMarriage(contractData.contractHash, contractData.partner1, contractData);
        /*console.log("createMarriage success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getContractContent', function(req, res, next){
        console.log("\n---------------------------\nGET CONTRACT CONTENT\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.getContractContent(contractData.contractHash, "allGetters", contractData.partner1, contractData);
        //var results = blockchainWrapper.createMarriage(contractData.contractHash, contractData.partner1, contractData);
        /*console.log("createMarriage success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/createMarriage', function(req, res, next){
        console.log("\n---------------------------\nCREATE MARRIAGE\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "createMarriage", contractData.partner1, contractData);
        //var results = blockchainWrapper.createMarriage(contractData.contractHash, contractData.partner1, contractData);
        /*console.log("createMarriage success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/createDivorce', function(req, res, next){
        console.log("\n---------------------------\nCREATE DIVORCE\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "createDivorce", contractData.partner1, contractData);
        //var results = blockchainWrapper.createDivorce(contractData.contractHash, contractData.partner1, contractData);
        /*console.log("createDivorce success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getPartner1', function(req, res, next){
        console.log("\n---------------------------\nGET PARTNER1\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "getPartner1", contractData.partner1, contractData);
        //var results = blockchainWrapper.getPartner1(contractData.partner1, contractData);
        /*console.log("getPartner1 success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getPartner2', function(req, res, next){
        console.log("\n---------------------------\nGET PARTNER2\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "getPartner2", contractData.partner1, contractData);
        //var results = blockchainWrapper.getPartner2(contractData.partner1, contractData);
        /*console.log("getPartner2 success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getTimestamp', function(req, res, next){
        console.log("\n---------------------------\nGET TIMESTAMP\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "getMarriageDate", contractData.partner1, contractData);
        //var results = blockchainWrapper.getTimestamp(contractData.partner1, contractData);
        /*console.log("getTimestamp success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getMarriageStatus', function(req, res, next){
        console.log("\n---------------------------\nGET MARRIAGE STATUS\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "getMarriageStatus", contractData.partner1, contractData);
        //var results = blockchainWrapper.getMarriageStatus(contractData.partner1, contractData);
        /*console.log("getMarriageStatus success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    /* UNUSED */
    app.post('/getMarriageDetails', function(req, res, next){
        console.log("\n---------------------------\nGET MARRIAGE DETAILS\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        var contractData = req.body;
        var results = blockchainWrapper.callFunction(contractData.contractHash, "getMarriageDetails", contractData.partner1, contractData);
        //var results = blockchainWrapper.getMarriageDetails(contractData.partner1, contractData);
        /*console.log("getMarriageDetails success : " + JSON.stringify(results));*/
        console.log("\n---------------------------\n");
    	res.json(results);
    });
    
    app.post('/unitTests', function(req, res, next){
        console.log("\n---------------------------\nUNIT TEST THE DAPP\n---------------------------\n");
    	/*console.log("req.body : ");
        console.log(req.body);*/
        res.setHeader('Content-Type', 'application/json');
        
        var unitTest = blockchainWrapper.unitTests();
        //var unitTestStringify = JSON.stringify(unitTest);
        /*console.log("unitTests success : " + JSON.stringify(unitTest));*/
        console.log("\n---------------------------\n");
    	//res.json(unitTestStringify);
    	res.json(unitTest);
    });
    

}

module.exports = appRouter;