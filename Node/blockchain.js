var blockchainWrapper = function() {};
    
/******************************************

    Step 1 : Mettre en place instance web3.js

******************************************/

var web3, Web3;

/******************************************

    Step 2 : Copier l'ABI du contrat dans la variable abiArray

******************************************/

var abiArray; 

var contractAdresses = [];
var currentContractInstance;
var accounts, coinbase, allEvents, events = [];

// Tester les différentes fonctionnalités du client testrpc
blockchainWrapper.checkTestrpc = function () {
    /******************************************

        Step 3 : Récupérer un tableau d'utilisateurs dans la variable accounts

    ******************************************/

    //console.log("List of accounts : ");
    //console.log(accounts);
    
    /******************************************

        Step 4 : Définir dans web3 l'account par défaut

    ******************************************/

    //console.log("defaultAccount : ");
    

    /******************************************

        Step 5 : Récupérer la coinbase dans la variable

    ******************************************/

    //console.log("coinbase : ");
    //console.log(coinbase);

    /******************************************

        Step 6 : Récupérer le nombre de blocs courant

    ******************************************/
    
    //console.log("Block number : ");  

    /******************************************

        Step 7 : Vérifier si votre noeud est bien en train de miner

    ******************************************/  
    //console.log("Minage ? : ");
}
// Pour tester cette fonction, appelez :
// blockchainWrapper.checkTestrpc();

// Récupérer les comptes depuis le client TestRpc
blockchainWrapper.getAccounts = function () {

    /******************************************

        Step 8 : Récupérer les comptes Ethereum de TestRpc dans la variable accounts

    ******************************************/  
    
    //var accounts;
    //console.log("List of accounts : ");
    //console.log(accounts);
    
    //return accounts;
}
// Pour tester cette fonction, appelez : 
// var test_getAccounts = blockchainWrapper.getAccounts();
// Puis vérifier le contenu de la variable test_getAccounts



// Mets à jour les contenus des différents blocs.
blockchainWrapper.updateBlocks = function () {
    /******************************************

        Step 9 : Mettre à jour la variable blocknumber dans la variable blocknumber

    ******************************************/  
    //var blocknumber;
    //console.log("blocknumber : " + blocknumber);
    
    //var blocks = blockchainWrapper.getBlocks();
    //console.log("Blocks updated");
}
// Pour tester cette fonction, appelez : 
// blockchainWrapper.updateBlocks();



// Retourne la dernière transaction effectuée
blockchainWrapper.getLastTransaction = function () {
    /******************************************

        Step 10 : Récupérer la dernière transaction stockée sur le dernier bloc

    ******************************************/ 
    
    //var transaction = null;
    //console.log("Dernière transaction : ")
    //console.log(transaction);
    //return transaction;
}
// Pour tester cette fonction, appelez :
// var test_getLastTransaction = blockchainWrapper.getLastTransaction();
// Puis vérifier le contenu de la variable test_getLastTransaction



// Vérifie si l'adresse existe bien dans la liste de comptes.
// Retourne :
//      - true : si l'adresse est trouvée
//      - false : sinon
blockchainWrapper.checkTransactionSender = function (address) {
    /******************************************

        Step 11 : Vérifier si l'adresse en paramètre d'entrée existe bien dans la liste de comptes

    ******************************************/ 

    //var founded = false;
    //return founded;
}
// Pour tester cette fonction, appelez :
// var test_checkTransactionSender = blockchainWrapper.checkTransactionSender(accounts[0]);
// Puis vérifier le contenu de la variable test_checkTransactionSender


// Initialiser l'instance du contrat
// Paramètre d'entrée :
//      - l'adresse qui déploiera la contrat
// Retourne :
//      - L'instance du contrat déployé <=> le transaction receipt
blockchainWrapper.initContract = function (senderAddress) {
    /******************************************

        Step 12 : Le but est créer une instance de smart contract sur la blockchain

        1/ Encapsuler dans une variable Contract l'ABI du smart contract
        2/ Vérifier l'existence de la variable senderAddress avec blockchainWrapper.checkTransactionSender()
        3/ Crée une instance du smart contract, en n'oubliant pas d'indiquer que senderAddress le déploie
        4/ Récupérer dans une variable le transaction receipt de la transaction
        5/ Retourner l'instance du smart contract déployé

    ******************************************/ 

    //var Contract; = web3.eth.contract(abiArray);
}
// Pour tester cette fonction, appelez :
// var test_initContract = blockchainWrapper.initContract(accounts[0]);
// Puis vérifier le contenu de la variable test_initContract



// Initialise l'instance de contrat pour les tests
// -> Fonction seulement à utiliser !
blockchainWrapper.initContractTest = function (senderAddress) {
    var instance = blockchainWrapper.initContract(senderAddress);
    contractAddress = instance.contractAddress;
    transactionHash = instance.transactionHash;
        
    var Marriage = Contract.at(contractAddress);
    Marriage.transactionHash = transactionHash;
    return Marriage;
}

// Encapsule les différentes fonctions du smart contract 
// -> rediriger n'importe quelle appel depuis le front-end vers le smart contract
// Paramètres d'entrée :
//     - contractInstance : l'instance du contrat, contenant toutes ses fonctions
//     - functionName : nom de la fonction à appeler (type string)
//     - contractData : paramètres d'entrée de la fonction du smart contract à appeler (type objet)
// Retourne : 
//     - La valeur retournée par l'appel de la fonction
blockchainWrapper.contractWrapper = function (contractInstance, functionName, contractData) {
    /******************************************

        Step 13 : Vérifier la valeur de functionName, pour appeler la bonne fonction du smart contract
        -> Le faire pour chaque fonction du smart contract !

        Récupérer la valeur de retour de l'appel de la fonction dans la variable marriage

        Eventuellement, récupérer le receipt de la transaction avant de faire un return.

        Soient les différentes valeurs que peuvent prendre la variable functionName :
            - "createMarriage"
            - "createDivorce"
            - "getPartner1"
            - "getPartner2"
            - "getMarriageDate"
            - "getAllAssetsAmount"
            - "getMarriageStatus"
            - "getMarriageContractType"
            - "getMarriageDetails"

        -> Vérifiez si le paramètre d'entrée functionName est égale à l'une de ces différentes valeurs,
        Puis redirigez vers la fonction du smart contract associée

    ******************************************/ 
    //var marriage;
    //return marriage;
}
// Pour tester cette fonction, appelez : 
// var _contractData = { functionToCall: "", previousContractAddress: "", contractAddress: "", previousTransactionHash: "", transactionHash: "", partner1: accounts[1], partner2: accounts[0], timeStamp: 10012001, allAssetsAmount: 900000, marriageStatus: "Married", marriageContract: "Communauté universelle", marriageDetails: "Just Married"};
// var test_contractWrapper = blockchainWrapper.contractWrapper(blockchainWrapper.initContractTest(accounts[0]), "createMarriage", _contractData);
// Puis vérifier le contenu de la variable test_contractWrapper



// Appelle une fonction du smart contract
// Paramètres d'entrée :
//      - contractAddress : l'adresse du smart contrat si celui-ci a déjà été déployé
//      - functionName : le nom de la fonction du smart contract à appeler
//      - senderAddress : l'adresse du membre qui va déployer le smart contract
//      - contractData : objet qui regroupe les différents paramètres d'entrées des fonctions du smart contract
// Retourne :
//      - une instance du smart contract
blockchainWrapper.eventWrapper = function (contractInstance) {
    /******************************************

        Step 14 : Le but est d'écouter les events du smart contract

        1/ Stocker dans chacune des cases du tableau events, les events du smart contract 
        (depuis l'instance) depuis le bloc 0 jusqu'au dernier bloc
        2/ Appliquer un watch à chacun des events du smart contract 
        -> Ne pas oublier la fonction de callback !!!!!

    ******************************************/ 
}
// Pour tester cette fonction, appelez : 
// blockchainWrapper.eventWrapper(blockchainWrapper.initContractTest(accounts[0]));



// Sorte de chef d'orchestre pour appeler une fonction du smart contract
blockchainWrapper.callFunction = function (contractAddress, functionName, senderAddress, contractData) {
    /******************************************

        Step 15 : Le but est d'appeler une fonction du smart contract

        1/ Encapsuler dans une variable Contract l'ABI du smart contract
        2/ Vérifier l'existence de la variable senderAddress avec blockchainWrapper.checkTransactionSender()
        3/ Si senderAddress est null ou undefined, ou que isSenderAddressOK est égal à false, 
        alors senderAddress prendra par défaut la valeur du 1er compte du tableau de comptes
        4/ Distinguez 2 cas (if/else) :
            A/ Le contrat n'est pas instancé (ou pas complètement) : 
            L'instance currentContractInstance n'est pas / ou mal défini, 
            ainsi que ses attributs contractAddress et transactionHash
                a/ Dans ce cas-là, initializez à nouveau la variable currentContractInstance avec initContract
                b/ Mettez à jour les nouvelles valeurs de contractAddress et transactionHash 
                avec les valeurs de currentContractInstance
                c/ Instancez la variable Marriage avec la variable Contract à la nouvelle adresse du contrat
                d/ Mettez à jour l'attribut transactionHash de l'objet Marriage
                e/ Appelez eventWrapper
            B/ Le contrat est déjà instancé
                a/ Mettez à jour les nouvelles valeurs de contractAddress et transactionHash 
                avec les valeurs de currentContractInstance
                b/ Instancez la variable Marriage avec la variable Contract à la nouvelle adresse du contrat
                c/ Mettez à jour l'attribut transactionHash de l'objet Marriage
        5/ Appelez contractWrapper et récupérer le hash de la transaction
        6/ Mettez à jour l'attribut transactionHash de currentContractInstance 
        7/ Retournez l'instance du contrat

    ******************************************/ 
    //var Contract, Marriage, transactionHash, isSenderAddressOK;
    //transactionHash = contractData.transactionHash;
}
// Pour tester cette fonction, appelez :
// var _contractData = { functionToCall: "", previousContractAddress: "", contractAddress: "", previousTransactionHash: "", transactionHash: "", partner1: accounts[1], partner2: accounts[0], timeStamp: 10012001, allAssetsAmount: 900000, marriageStatus: "Married", marriageContract: "Communauté universelle", marriageDetails: "Just Married"};
// var test_callFunction = blockchainWrapper.callFunction(null, "createMarriage", accounts[0], _contractData);
// Puis vérifier le contenu de la variable test_callFunction



// Réaliser les tests unitaires du smart contract
blockchainWrapper.unitTests = function () {
    /******************************************

        Step 16 : Le but est d'obtenir les résultats des tests unitaires du smart contract

        1/ Encapsuler dans une variable Contract l'ABI du smart contract de test
        2/ Instancez la variable Contrat dans la variable testContract
        3/ Récupérez dans la variable contractInfo le receipt de la dernière transaction du contrat
        4/ Appelez updateContractRecorder()
        5/ Instancez la variable TestContract avec la variable Contract à la nouvelle adresse du contrat
        6/ Mettez à jour l'attribut transactionHash de TestContract
        7/ Dans chacune des cases du tableau testRes, remplissez pour chaque test : 
            {
                address: contract.evt1, 
                testedFunction: "function1()", 
                testStatus: ""
            };
        8/ Pour chaque testStatus, indiquez "Passed" ou "Failed" en fonction du résultat du test
        9/ Retournez le tableau testRes

    ******************************************/ 
    //var Contract, testContract, contractInfo;
    //var testRes = [];
}
// Pour tester cette fonction, appelez 
// var test_unitTests = blockchainWrapper.unitTests();
// Puis vérifier le contenu de la variable test_unitTests

// Transforme un tableau de blocs en un tableau de tableaux de blocs
// Retourne un résultat de type tableau [][]
blockchainWrapper.getBlocks = function () {
    var blocknumber = web3.eth.blockNumber;
    var j = 0, k = 0;
    var maxlig = ((blocknumber-(blocknumber%10))/10)+1;
    var blocks = new Array(maxlig);
    blocks[0] = new Array(10);
    
    if (blocknumber < 1) return null;
    else {
        for(var i = 0; i < blocknumber; i++){
            j = i%10;
            if ((i != 0) && (j == 0)){
                k++;
                blocks[k] = new Array(10);
            }
            blocks[k][j] = web3.eth.getBlock(i);
        }
        return blocks;
    }
}

// Retourne l'index du contrat dans le tableau d'adresses
blockchainWrapper.findPreviousContractIndex = function (hash) {
    for(var i = 0; i < contractAdresses.length; i++){
        if (contractAdresses[i].contract == hash) {
            return i;
            break;
        }
    }
    return null;
}

// Mets à jour les différentes informations contenues dans le contrat
blockchainWrapper.updateContractRecorder = function (hash) {
    var index, info = web3.eth.getTransactionReceipt(hash);
    
    if ((info !== null) && (info !== undefined)) {
        index = blockchainWrapper.findPreviousContractIndex(info.contractAddress);
    } else {
        index = null;
    }
    
    if ((index === null) || (index === undefined)) {
        // New contract
        contractAdresses[contractAdresses.length] = {
            contract: info.contractAddress,
            transaction : info.transactionHash
        };
    } else {
        // Contract to update
        contractAdresses[index].transaction = info.transactionHash;
    }
} 

module.exports = blockchainWrapper;