var blockchainWrapper = function() {};
    
/*******************************************
            VARIABLES GLOBALES
*******************************************/

var contractAdresses = []; // Liste des adresses des contrats
var currentContractInstance; // Instance courante du contrat
var currentContractReceipt; // Receipt courant du contrat
var accounts, coinbase, allEvents, events = []; // Variable globales utilisées par les fonctions à implémenter

/******************************************

    Step 1 : Mettre en place instance web3.js

******************************************/

var web3, Web3;

/******************************************

    Step 2 : Copier l'ABI du contrat dans les variables ci-dessous :
        - abiArray : Interface JSON du contrat Marriage sur ethereum.browser.io
        - abiArrayTest : Interface JSON du contrat MarriageTest sur ethereum.browser.io
    (En pratique, on doit lire un fichier json contenant l'ABI au lieu de la stocker en dure dans une variable du code côté serveur)

******************************************/

var abiArray, abiArrayTest; 

/*******************************************
            FONCTIONS A UTILISER
*******************************************/

// Transforme un tableau de blocs en un tableau de tableaux de blocs
// Retourne un résultat de type tableau [][]
blockchainWrapper.getBlocks=function(){var t=web3.eth.blockNumber,n=0,a=0,r=(t-t%10)/10+1,e=Array(r);if(e[0]=Array(10),1>t)return null;for(var c=0;t>c;c++)n=c%10,0!=c&&0==n&&(a++,e[a]=Array(10)),e[a][n]=web3.eth.getBlock(c);return e};

// Retourne l'index du contrat dans le tableau d'adresses
// Paramètre d'entrée : adresse d'un contrat
blockchainWrapper.findPreviousContractIndex=function(t){for(var n=0;n<contractAdresses.length;n++)if(contractAdresses[n].contract==t)return n;return null};

// Mets à jour les différentes informations contenues dans le contrat
// Paramètre d'entrée : hash de transaction du contrat
blockchainWrapper.updateContractRecorder=function(t){var n,r=web3.eth.getTransactionReceipt(t);n=null!==r&&void 0!==r?blockchainWrapper.findPreviousContractIndex(r.contractAddress):null,null===n||void 0===n?contractAdresses[contractAdresses.length]={contract:r.contractAddress,transaction:r.transactionHash}:contractAdresses[n].transaction=r.transactionHash};


/*******************************************
            FONCTIONS A IMPLEMENTER
*******************************************/

// Tester les différentes fonctionnalités du client testrpc
blockchainWrapper.checkTestrpc = function () {
    /******************************************

        Step 3 : Récupérer un tableau d'utilisateurs dans la variable accounts

    ******************************************/

    // TODO : A décommenter !
    /*
    console.log("List of accounts : ");
    console.log(accounts);
    */
    
    /******************************************

        Step 4 : Définir dans web3 l'account par défaut

    ******************************************/

    // TODO : A décommenter !
    /*
    console.log("defaultAccount : ");
    */

    /******************************************

        Step 5 : Récupérer la coinbase dans la variable

    ******************************************/

    // TODO : A décommenter !
    /*
    console.log("coinbase : ");
    console.log(coinbase);
    */

    /******************************************

        Step 6 : Récupérer le nombre de blocs courant

    ******************************************/

    // TODO : A décommenter !
    /*
    console.log("Block number : ");  
    */

    /******************************************

        Step 7 : Vérifier si votre noeud est bien en train de miner

    ******************************************/  

    // TODO : A décommenter !
    /*
    console.log("Minage ? : ");
    */
}
// Pour tester cette fonction, appelez :
// blockchainWrapper.checkTestrpc();



// Récupérer les comptes depuis le client TestRpc
blockchainWrapper.getAccounts = function () {

    /******************************************

        Step 8 : Récupérer les comptes Ethereum de TestRpc dans la variable accounts

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var accounts;
    console.log("List of accounts : ");
    console.log(accounts);
    
    return accounts;
    */
}
// Pour tester cette fonction, appelez : 
/*
var test_getAccounts = blockchainWrapper.getAccounts();
console.log("************\nTesting getAccounts\n************");
console.log(test_getAccounts); // 
*/



// Mets à jour les contenus des différents blocs.
blockchainWrapper.getNbBlocks = function () {
    /******************************************

        Step 9 : Retourner le nombre de blocs

    ******************************************/  

    // TODO : A décommenter !
    /*
    var blocknumber;
    console.log("blocknumber : " + blocknumber);
    return blocknumber;
    */
}
// Pour tester cette fonction, appelez : 
/*
var test_getNbBlocks = blockchainWrapper.getNbBlocks();
console.log("************\nTesting getNbBlocks\n************");
console.log(test_getNbBlocks);
*/



// Vérifie si l'adresse existe bien dans la liste de comptes.
// Retourne :
//      - true : si l'adresse est trouvée
//      - false : sinon
blockchainWrapper.checkTransactionSender = function (address) {
    /******************************************

        Step 10 : Vérifier si l'adresse en paramètre d'entrée existe bien dans la liste de comptes

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var founded = false;
    return founded;
    */
}
// Pour tester cette fonction, appelez :
/*
var test_account = blockchainWrapper.getAccounts();
var test_checkTransactionSender = blockchainWrapper.checkTransactionSender(test_account[0]);
console.log("************\nTesting checkTransactionSender\n************");
console.log(test_checkTransactionSender);
*/



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

        Step 11 : Le but est d'écouter les events du smart contract

        1/ Définir web3.eth.defaultAccount
        2/ Stocker dans chacune des cases du tableau events, les events du smart contract 
        (depuis l'instance) depuis le bloc 0 jusqu'au dernier bloc
        3/ Appliquer un watch à chacun des events du smart contract 
        -> Ne pas oublier la fonction de callback !!!!!

    ******************************************/ 
}
// Pour tester cette fonction, appelez : 
// blockchainWrapper.eventWrapper(blockchainWrapper.initContractTest(accounts[0]));



// Initialiser l'instance du contrat
// Paramètre d'entrée :
//      - l'adresse qui déploiera la contrat
// Retourne :
//      - L'instance du contrat déployé <=> le transaction receipt
blockchainWrapper.initContract = function (senderAddress) {
    /******************************************

        Step 12 : Le but est créer une instance de smart contract sur la blockchain

        1/ Encapsuler dans une variable Contract l'ABI du smart contract
        2/ Vérifier l'existence de la variable senderAddress avec blockchainWrapper.checkTransactionSender(),
        ainsi que si le paramètre d'entrée senderAddress est différent de null et undefined
        -> Si c'est le cas, donnez à senderAddress une des adresses générées par le client par défaut (via getAccounts)
        3/ Crée une instance du smart contract, en n'oubliant pas d'indiquer que senderAddress le déploie
        4/ Récupérer le receipt de la transaction dans la variable globale : currentContractReceipt
        5/ Stocker dans la variable ContractDeployed l'instance de Contract à l'adresse précédemment récupérée dans le receipt
       (6/ Metter à jour l'attribut transactionHash de ContractDeployed avec la dernière transactionHash récupérée dans le receipt
        7/ Appeler la fonction blockchainWrapper.eventWrapper avec le contrat déployé
        8/ Retourner le contrat déployé

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var Contract, ContractDeployed;
    */
}
// Pour tester cette fonction, appelez :
/*
var test_account = blockchainWrapper.getAccounts();
var test_initContract = blockchainWrapper.initContractTest(test_account[0]);
console.log("************\nTesting initContract\n************");
console.log(test_initContract);
*/


// Initialise l'instance de contrat pour les tests
// -> Fonction seulement à utiliser !
blockchainWrapper.initContractTest = function (senderAddress) {
    var Contract = web3.eth.contract(abiArray);
    var receipt = blockchainWrapper.initContract(senderAddress);
    contractAddress = receipt.contractAddress;
    transactionHash = receipt.transactionHash;
        
    var Marriage = Contract.at(contractAddress);
    Marriage.transactionHash = transactionHash;
    return Marriage;
}

// Récupère le précédent contrat déployé sur la blockchain
// Paramètre d'entrée : un contrat
// Retourne : le contrat déployé
blockchainWrapper.getPreviousContractData = function (contract) {
    /******************************************

        Step 13 : Le but est de récupérer une instance de smart contract déployée sur la blockchain

        1/ Stocker dans la variable contractDeployed l'instance du paramètre d'entrée contract 
        à l'adresse du contrat, stockée dans la variable globale currentContractReceipt
       (2/ Metter à jour l'attribut transactionHash de contractDeployed avec la dernière transactionHash 
       récupérée dans le receipt)
        3/ Retourner le contrat déployé

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var contractDeployed;
    return contractDeployed;
    */
}



// Encapsule les différentes fonctions du smart contract 
// -> rediriger n'importe quelle appel depuis le front-end vers le smart contract
// Paramètres d'entrée :
//     - contractInstance : l'instance du contrat, contenant toutes ses fonctions
//     - functionName : nom de la fonction à appeler (type string)
//     - contractData : paramètres d'entrée de la fonction du smart contract à appeler (type objet).
//     -> Soit la structure de l'objet contractData (récupéré depuis le front-end) : 
/*    contractData = {
          functionToCall: "",
          previousContractAddress: "",
          contractAddress: "",
          previousTransactionHash: "",
          transactionHash: "",
          partner1: "",
          partner2: "",
          timeStamp: 00000000,
          allAssetsAmount: 0,
          marriageStatus: "",
          marriageContract: "",
          marriageDetails: ""};
*/
// Retourne : 
//     - La valeur retournée par l'appel de la fonction
blockchainWrapper.contractWrapper = function (contractInstance, functionName, contractData) {
    /******************************************

        Step 14 : Vérifier la valeur de functionName, pour appeler la bonne fonction du smart contract
        -> Le faire pour chaque fonction du smart contract !

        Récupérer la valeur de retour de l'appel de la fonction dans la variable marriage
        Eventuellement, récupérer le receipt de la transaction avant de faire un return.

        Soient les différentes valeurs (depuis le front-end) que peuvent prendre la variable functionName :
            - "createMarriage"
            - "createDivorce"
            - "getPartner1"
            - "getPartner2"
            - "getMarriageDate"
            - "getAllAssetsAmount"
            - "getMarriageStatus"
            - "getMarriageContractType"
            - "getMarriageDetails"
        -> ATTENTION : Les fonctions de votre contrat ne portent pas forçement le même nom !!!!

        -> Vérifiez si le paramètre d'entrée functionName est égale à l'une de ces différentes valeurs,
        Puis redirigez vers la fonction du smart contract associée
        (En pratique, nous devrions tester les paramètres d'entrée, nous nous en passerons dans le cadre du TP)

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var marriage;
    return marriage;
    */
}
// Pour tester cette fonction, appelez : 
/*
var _contractData = { functionToCall: "", previousContractAddress: "", contractAddress: "", previousTransactionHash: "", transactionHash: "", partner1: accounts[1], partner2: accounts[0], timeStamp: 10012001, allAssetsAmount: 900000, marriageStatus: "Married", marriageContract: "Communauté universelle", marriageDetails: "Just Married"};
var test_contractWrapper = blockchainWrapper.contractWrapper(blockchainWrapper.initContractTest(accounts[0]), "createMarriage", _contractData);
console.log("************\nTesting contractWrapper\n************");
console.log(test_contractWrapper);
*/




// Ces 3 fonctions sont à commenter si vous vous lancez dans les BONUS
blockchainWrapper.callFunction=function(t,n,r,a){{var e,c=web3.eth.contract(abiArray),s=blockchainWrapper.checkTransactionSender(r);a.transactionHash}(null===r||void 0===r||s===!1)&&(r=accounts[0]),e=void 0===currentContractReceipt||null===currentContractReceipt.contractAddress||void 0===currentContractReceipt.contractAddress||""===currentContractReceipt.contractAddress||null===currentContractReceipt.transactionHash||void 0===currentContractReceipt.transactionHash||""===currentContractReceipt.transactionHash?blockchainWrapper.initContract(r):blockchainWrapper.getPreviousContractData(c);var o=web3.eth.getTransactionReceipt(e.transactionHash);console.log("*****************\nPrevious Receipt\n"+JSON.stringify(o)+"\n*****************");var i=blockchainWrapper.contractWrapper(e,n,a);currentContractReceipt.transactionHash=i;var u=web3.eth.getTransactionReceipt(i);return console.log("*****************\nNew Receipt\n"+JSON.stringify(u)+"\n*****************"),u.contractAddress=o.contractAddress,currentContractReceipt};
blockchainWrapper.unitTests=function(){var t=web3.eth.contract(abiArrayTest),n=t.new({from:accounts[0]}),a=web3.eth.getTransactionReceipt(n.transactionHash);blockchainWrapper.updateContractRecorder(n.transactionHash);var r=t.at(a.contractAddress);r.transactionHash=a.transactionHash;var e=[];e[0]={address:r.testCreateMarriage(),testedFunction:"CreateMarriage()",testStatus:""},e[1]={address:r.testCreateDivorce(),testedFunction:"CreateDivorce()",testStatus:""},e[2]={address:r.testGetPartner1(),testedFunction:"GetPartner1()",testStatus:""},e[3]={address:r.testGetPartner2(),testedFunction:"GetPartner2()",testStatus:""},e[4]={address:r.testGetMarriageDate(),testedFunction:"GetMarriageDate()",testStatus:""},e[5]={address:r.testGetAllAssetsAmount(),testedFunction:"GetAllAssetsAmount()",testStatus:""},e[6]={address:r.testGetMarriageStatus(),testedFunction:"GetMarriageStatus()",testStatus:""},e[7]={address:r.testGetMarriageContractType(),testedFunction:"GetMarriageContractType()",testStatus:""},e[8]={address:r.testGetMarriageDetails(),testedFunction:"GetMarriageDetails()",testStatus:""},e[9]={address:r.testAll(),testedFunction:"testAll()",testStatus:""};for(var c=0;c<e.length;c++)console.log("testRes["+c+"] : "+e[c].address+", length : "+e[c].address.length+"\n"),e[c].testStatus=66==e[c].address.length?"Test n°"+c+" : Passed":"Test n°"+c+" : Failed";var s={};return s.contract=r,s.unitTest=e,e};
blockchainWrapper.getLastTransaction=function(){var t=null;try{t=web3.eth.getTransactionFromBlock("latest",1)}catch(n){console.log("getLatestTransaction error : "+n)}return t};

// Sorte de chef d'orchestre pour appeler une fonction du smart contract
//blockchainWrapper.callFunction = function (contractAddress, functionName, senderAddress, contractData) {
    /******************************************

        BONUS : Le but est d'appeler une fonction du smart contract

        1/ Encapsuler dans une variable Contract l'ABI du smart contract
        2/ Vérifier l'existence de la variable senderAddress avec blockchainWrapper.checkTransactionSender()
        3/ Si senderAddress est null ou undefined, ou que isSenderAddressOK est égal à false, 
        alors mettre par défaut une des adresses générées par le client testrpc  
        4/ Distinguez 2 cas (if/else) :
            A/ Le contrat n'est pas instancé (ou pas complètement) : 
            Le receipt currentContractReceipt n'est pas / ou mal défini, 
            ainsi que ses attributs contractAddress et transactionHash
                a/ Dans ce cas-là, appeler la fonction blockchainWrapper.initContract
            B/ Le contrat est déjà instancé
                a/ Dans ce cas-là, appeler la fonction blockchainWrapper.getPreviousContractData
        5/ Appelez contractWrapper et récupérer le hash de la transaction
        6/ Mettez à jour l'attribut transactionHash de currentContractReceipt 
        7/ Retournez currentContractReceipt

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var Contract, Marriage, transactionHash, isSenderAddressOK;
    transactionHash = contractData.transactionHash;
    */
//}
// Pour tester cette fonction, appelez :
/*
var _contractData = { functionToCall: "", previousContractAddress: "", contractAddress: "", previousTransactionHash: "", transactionHash: "", partner1: accounts[1], partner2: accounts[0], timeStamp: 10012001, allAssetsAmount: 900000, marriageStatus: "Married", marriageContract: "Communauté universelle", marriageDetails: "Just Married"};
var test_callFunction = blockchainWrapper.callFunction(null, "createMarriage", accounts[0], _contractData);
console.log("************\nTesting callFunction\n************");
console.log(test_callFunction);
*/



// Réaliser les tests unitaires du smart contract
//blockchainWrapper.unitTests = function () {
    /******************************************

        BONUS : Le but est d'obtenir les résultats des tests unitaires du smart contract

        1/ Encapsuler dans une variable Contract l'ABI du smart contract de Tests
        2/ Instancez la variable Contrat dans la variable testContract à une des adresses générées par le client
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

    // TODO : A décommenter !
    /*
    var Contract, testContract, contractInfo;
    var testRes = [];
    */
//}
// Pour tester cette fonction, appelez 
/*
var test_unitTests = blockchainWrapper.unitTests();
console.log("************\nTesting unitTests\n************");
console.log(test_unitTests);
*/



// Retourne la dernière transaction effectuée
//blockchainWrapper.getLastTransaction = function () {
    /******************************************

        BONUS : Récupérer la dernière transaction stockée sur le dernier bloc

    ******************************************/ 

    // TODO : A décommenter !
    /*
    var transaction = null;
    console.log("Dernière transaction : ")
    console.log(transaction);
    return transaction;
    */
//}
// Pour tester cette fonction, appelez :
/*
var test_getLastTransaction = blockchainWrapper.getLastTransaction();
console.log("************\nTesting getLastTransaction\n************");
console.log(test_getLastTransaction);
*/

module.exports = blockchainWrapper;