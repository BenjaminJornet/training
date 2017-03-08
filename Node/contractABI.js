var ContractABI = function() {};

var fs = require('fs');

ContractABI.getMarriageABI = function() {
    var content;
    // First I want to read the file
    fs.readFile('./ABI/MarriageABI.json', 'UTF-8', function read(err, data) {
        if (err) {
            throw err;
        }
        console.log(content);
        processFile();
    });
    
    function processFile() {
        return content;
    }
};

ContractABI.getMarriageTestABI = function() {
    var content;
    // First I want to read the file
    fs.readFile('./ABI/MarriageTestABI.json', 'UTF-8', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    
        console.log(content);
        processFile();
    });
    
    function processFile() {
        return content;
    }
};

ContractABI.readFileWrapper = function(file) {
    var content;
    // First I want to read the file
    fs.readFile(file, 'UTF-8', function read(err, data) {
        if (err) {
            throw err;
        }
        content = data;
    
        console.log(content);
        processFile();
    });
    
    function processFile() {
        return content;
    }
};

/*var test = ContractABI.readFileWrapper(
    './ABI/MarriageTestABI.json', 
    function read(err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        return data;
});*/


module.exports = ContractABI;