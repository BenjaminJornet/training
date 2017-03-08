var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons']);
'use strict';
app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', '$mdToast', '$http', 'HttpServ', 
	function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $mdToast, $http, HttpServ) {

  var Web3 = require('web3');
  var web3 = new Web3();

  $scope.contractData = {
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
      marriageDetails: ""
  };
  
  $scope.accounts = [];
  $scope.accounts_ = [];
  
  $scope.smartContractContent = $scope.contractData;
  
  $scope.unitTestsRes;
  
  $scope.isWaitingServer = false;
  
  $scope.isCheckboxChecked = true;
  $scope.transactionListDisplayed;
  $scope.transactionList;
  $scope.istransactionListReadable = false;
  $scope.transactionListReadable;
  $scope.lastTransaction;
  
  $scope.seeSmartContractContent = false;
  $scope.seeTestedFunctions = false;

  $scope.toggleSidenav = function(menuId) {
      $mdSidenav(menuId).toggle();
  };
  
  $scope.updateBlockInfo = function (blockNumber) {
      $scope.transactionListDisplayed[blockNumber].showBlock = !$scope.transactionListDisplayed[blockNumber].showBlock;
  };
  
  $scope.updateTransactionInfo = function (blockNumber) {
      $scope.transactionListDisplayed[blockNumber].showTransaction = !$scope.transactionListDisplayed[blockNumber].showTransaction;
  };
  
  $scope.updateBlockContentReadable = function () {
      $scope.transactionListDisplayed = [];
      if ($scope.istransactionListReadable === true) {
          $scope.transactionListDisplayed = $scope.transactionListReadable;
      } else {
          $scope.transactionListDisplayed = $scope.transactionList;
      }
  }
  
  $scope.showBlockInfo = function (blockNumber) {
      if ($scope.transactionListDisplayed.length !== 0){
          return $scope.transactionListDisplayed[blockNumber].showBlock;
      }
  };
  
  $scope.showTransactionInfo = function (blockNumber) {
      if ($scope.transactionListDisplayed[blockNumber].transactionsNumber == 0){
          return false;
      } else {
          if ($scope.transactionListDisplayed[blockNumber].length !== 0) {
              return $scope.transactionListDisplayed[blockNumber].showTransaction;
          }
      }
  };
  
  $scope.showBlockContentReadable = function () {
      return $scope.istransactionListReadable;
  }
  
  $scope.setupAccountPartner1 = function (publicKey) {
     $scope.contractData.partner1 = publicKey;
     console.log("New Partner 1 : " + $scope.contractData.partner1);
  }
  
  $scope.setupAccountPartner2 = function (publicKey) {
     $scope.contractData.partner2 = publicKey;
     console.log("New Partner 2 : " + $scope.contractData.partner2);
  }
  
  $scope.showSimpleToast = function(message) {
    var toastTemplate = '<md-toast><span class="md-toast-text" flex>'+message+'</span></md-toast>';
    $mdToast.show({
      hideDelay   : 10000,
      position    : 'top',
      template : toastTemplate
    });
  };
  
  $scope.$watch($scope.isCheckboxChecked, function () {
      if ($scope.isCheckboxChecked === true){
          $scope.contractData.previousContractAddress = $scope.contractData.contractAddress;
          $scope.contractData.contractAddress = "";
          $scope.contractData.previousTransactionHash = $scope.contractData.transactionHash;
          $scope.contractData.transactionHash = "";
      } else {
          $scope.contractData.contractAddress = $scope.contractData.previousContractAddress;
          $scope.contractData.previousContractAddress = "";
          $scope.contractData.transactionHash = $scope.contractData.previousTransactionHash;
          $scope.contractData.previousTransactionHash = "";
      }
  });
  
    
  $scope.handleBlocksTab = function (blocksTabs) {
      console.log("typeof(data.data) : " + typeof(blocksTabs));
      var transactionListTmp;
      if (blocksTabs[0].extraData == "emptyBlockchain") {
          transactionListTmp = [];
      } else if (typeof(blocksTabs) == "string") {
          transactionListTmp = JSON.parse(blocksTabs);
      } else {
          transactionListTmp = blocksTabs;
      }

      $scope.transactionList = [];
      var k = 0;

      if (transactionListTmp.length != 0) {
        for(var i = 0; i < transactionListTmp.length; i++) {
          if (transactionListTmp[i] !== null) {
            for(var j = 0; j < transactionListTmp[i].length; j++) {
              if ((transactionListTmp[i][j] !== null)&&(transactionListTmp[i][j] !== undefined)) {
                  transactionListTmp[i][j].showBlock = false;
                  transactionListTmp[i][j].showTransaction = false;
                  transactionListTmp[i][j].transactionsNumber = transactionListTmp[i][j].transactions.length;
                  $scope.transactionList[k] = transactionListTmp[i][j];
                  k++;
              }
            }
          }
        }
      }
      $scope.transactionListDisplayed = $scope.transactionList;
      /*$scope.updateBlockContentReadable();*/
     /* $scope.translateTransactionsList($scope.transactionList);*/
  }
  
  $scope.translateTransactionsList = function (tab) {

    $scope.transactionListReadable = new Array();
    var TransactionListTmp = new Array();
    var TransactionListTmp = tab;
    if (TransactionListTmp.length != 0) {
      for (var i = 0; i < TransactionListTmp.length; i++) {
        if ((TransactionListTmp[i] !== null)&&(TransactionListTmp[i] !== undefined)) {
          
          $scope.transactionListReadable[i] = TransactionListTmp[i];
          $scope.transactionListReadable[i].hash = web3.toAscii(TransactionListTmp[i].hash);
          $scope.transactionListReadable[i].nonce = web3.toAscii(TransactionListTmp[i].nonce);
          $scope.transactionListReadable[i].miner = web3.toAscii(TransactionListTmp[i].miner);
          $scope.transactionListReadable[i].transactionsRoot = web3.toAscii(TransactionListTmp[i].transactionsRoot);
          $scope.transactionListReadable[i].receiptRoot = web3.toAscii(TransactionListTmp[i].receiptRoot);
          $scope.transactionListReadable[i].stateRoot = web3.toAscii(TransactionListTmp[i].stateRoot);
          $scope.transactionListReadable[i].sha3Uncles = web3.toAscii(TransactionListTmp[i].sha3Uncles);
          $scope.transactionListReadable[i].logsBloom = web3.toAscii(TransactionListTmp[i].logsBloom);
          $scope.transactionListReadable[i].extraData = web3.toAscii(TransactionListTmp[i].extraData);
          
          if (TransactionListTmp[i].transactions.length !== 0) {
            for (var j = 0; j < TransactionListTmp[i].transactions.length; j++) {
              
              $scope.transactionListReadable[i].transactions[j].hash = web3.toAscii(TransactionListTmp[i].transactions[j].hash);
              $scope.transactionListReadable[i].transactions[j].from = web3.toAscii(TransactionListTmp[i].transactions[j].from);
              $scope.transactionListReadable[i].transactions[j].to = web3.toAscii(TransactionListTmp[i].transactions[j].to);
              $scope.transactionListReadable[i].transactions[j].input = web3.toAscii(TransactionListTmp[i].transactions[j].input);
              $scope.transactionListReadable[i].transactions[j].blockHash = web3.toAscii(TransactionListTmp[i].transactions[j].blockHash);
            }
          }
        }
      }
    }
    console.log("$scope.transactionListReadable");
    console.log($scope.transactionListReadable);
    console.log("$scope.transactionList");
    console.log($scope.transactionList);
    $scope.updateBlockContentReadable();
  }
  
  $scope.updateUI = function (data) {
      $scope.contractData.contractAddress = data.contractAddress;
      $scope.contractData.previousContractAddress = data.contractAddress;
      $scope.contractData.transactionHash = data.transactionHash;
      $scope.contractData.previousTransactionHash = data.transactionHash;
      console.log("$scope.contractData");
      console.log($scope.contractData);
  }
  
  $scope.getAccounts = function () {
      var _url = '/accounts?x=1';//'0.0.0.0:8080/blocks';
      var _data = JSON.stringify({test: 0});

      return $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(data, status, headers, config) {
        console.log("getAccounts success : ");
        console.log(data);
        $scope.accounts = data.data;
        $scope.accounts_ = data.data;
        return data;
      }, function errorCallback(data, status, headers, config) {
        console.log("getAccounts error : ");
        console.log(data);
        return data;
      });
  }
  
  $scope.getBlocks = function () {
      var _url = '/blocks?x=1';//'0.0.0.0:8080/blocks';
      var _data = JSON.stringify({test: 0});

      return $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(data, status, headers, config) {
        console.log("getBlocks success : ");
        console.log(data);
        $scope.handleBlocksTab(data.data);
        return data;
      }, function errorCallback(data, status, headers, config) {
        console.log("getBlocks error : ");
        console.log(data);
        return data;
      });
  }
  
  $scope.getLastTransaction = function () {
      var _url = '/lastTransaction?x=1';//'0.0.0.0:8080/blocks';
      var _data = JSON.stringify({test: 0});

      return $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(data, status, headers, config) {
        console.log("lastTransaction success : ");
        console.log(data);
        $scope.lastTransaction = data.data;
        console.log($scope.lastTransaction);
        return data;
      }, function errorCallback(data, status, headers, config) {
        console.log("lastTransaction error : ");
        console.log(data);
        return data;
      });
    
  }
  
  $scope.initContract = function () {
      var _url = '/initContract';
      var _data = JSON.stringify({test: 0});

      return $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(response) {
        console.log("initContract success : ");
        console.log(response);
        $scope.showSimpleToast("Block created ! Contract deployed on Blockchain");
        return response;
      }, function errorCallback(response) {
        console.log("initContract error : ");
        console.log(response);
        $scope.showSimpleToast("Block has not been created...");
        return response;
      });
  }
  
  $scope.createMarriage = function () {
      $scope.contractData.functionToCall = "createMarriage";
      console.log("$scope.contractData : ");
      console.log($scope.contractData);
      
      var _url = "callContract";/*'/createMarriage';*/
      var _data = $scope.contractData;
      
      if ($scope.isCheckboxChecked === true) {
          _data.contractAddress = "";
          _data.transactionHash = "";
      }
      
      var result = HttpServ.POST(_url, _data)
      .then(function (data) {
          console.log("createMarriage success  : " + JSON.stringify(data));
          $scope.updateUI(data.data);
          $scope.showSimpleToast("Block created ! Your marriage contract has been released successfully");
          var updateBlocks = $scope.getBlocks()
          .then(function (data) {
              console.log("getBlocks success : ");
              console.log(data.data);
              return data.data;
            }, function (err) {
              console.log("getBlocks error : ");
              console.log(err);
            });
      }, function (data) {
          console.log("createMarriage error  : " + data);
          $scope.showSimpleToast("Block has not been created...");
      });
  }
  
  $scope.createDivorce = function () {
      $scope.contractData.functionToCall = "createDivorce";
      console.log("$scope.contractData : ");
      console.log($scope.contractData);
      
      var _url = 'callContract';//'/createDivorce';
      var _data = $scope.contractData;
      
      var result = HttpServ.POST(_url, _data)
      .then(function (data) {
          console.log("createDivorce success  : " + JSON.stringify(data));
          $scope.updateUI(data);
          $scope.showSimpleToast("Block created ! You have been divorced successfully");
          var updateBlocks = $scope.getBlocks()
          .then(function (data) {
            console.log("getBlocks success : ");
            console.log(data);
            return data;
          }, function (err) {
            console.log("getBlocks error : ");
            console.log(err);
          });
      }, function (data) {
          console.log("createDivorce error  : " + data);
          $scope.showSimpleToast("Block has not been created...");
      });
  }
     
  $scope.getSmartContractContent = function () {
      var _url = '/callContract';
      var _data = $scope.smartContractContent;
      _data.functionToCall = "getPartner1";
      $scope.seeSmartContractContent = false;
      $scope.seeTestedFunctions = false;
      $scope.isWaitingServer = true;
      
      var res = HttpServ.POST(_url, _data)
      .then(function (data) {
        console.log("getPartner1 success  : " + JSON.stringify(data));
        $scope.smartContractContent.partner1 = data.data.transactionHash;
        _data.functionToCall = "getPartner2";
        
        return HttpServ.POST(_url, _data)
        .then(function (data) {
          console.log("getPartner2 success  : " + JSON.stringify(data));
          $scope.smartContractContent.partner2 = data.data.transactionHash;
          _data.functionToCall = "getMarriageDate";
          
          return HttpServ.POST(_url, _data)
          .then(function (data) {
            console.log("getMarriageDate success  : " + JSON.stringify(data));
            $scope.smartContractContent.timeStamp = data.data.transactionHash;
            _data.functionToCall = "getAllAssetsAmount";
          
            return HttpServ.POST(_url, _data)
            .then(function (data) {
              console.log("getAllAssetsAmount success  : " + JSON.stringify(data));
              $scope.smartContractContent.allAssetsAmount = data.data.transactionHash;
              _data.functionToCall = "getMarriageStatus";
              
              return HttpServ.POST(_url, _data)
              .then(function (data) {
                console.log("getMarriageStatus success  : " + JSON.stringify(data));
                $scope.smartContractContent.marriageStatus = data.data.transactionHash;
                _data.functionToCall = "getMarriageContractType";
                
                return HttpServ.POST(_url, _data)
                .then(function (data) {
                  console.log("getMarriageContractType success  : " + JSON.stringify(data));
                  $scope.smartContractContent.marriageContract = data.data.transactionHash;
                  _data.functionToCall = "getMarriageDetails";
                  
                  return HttpServ.POST(_url, _data)
                  .then(function (data) {
                    console.log("getMarriageDetails success  : " + JSON.stringify(data));
                    $scope.smartContractContent.marriageDetails = data.data.transactionHash;
                    $scope.isWaitingServer = false;
                    $scope.seeSmartContractContent = true;
                    $scope.showSimpleToast("Block created !");
                    var updateBlocks = $scope.getBlocks()
                    .then(function (data) {
                      console.log("getBlocks success : ");
                      console.log(data);
                      return data;
                    }, function (err) {
                      console.log("getBlocks error : ");
                      console.log(err);
                    });
                    
                  }, function (data) {
                    console.log("getMarriageDetails error  : " + data);
                    $scope.showSimpleToast("Block has not been created...");
                  });
                }, function (data) {
                  console.log("getMarriageContractType error  : " + data);
                  $scope.showSimpleToast("Block has not been created...");
                });
              }, function (data) {
                console.log("getMarriageStatus error  : " + data);
                $scope.showSimpleToast("Block has not been created...");
              });
            }, function (data) {
              console.log("getAllAssetsAmount error  : " + data);
              $scope.showSimpleToast("Block has not been created...");
            });
          }, function (data) {
            console.log("getMarriageDate error  : " + data);
            $scope.showSimpleToast("Block has not been created...");
          });
        }, function (data) {
          console.log("getPartner2 error  : " + data);
          $scope.showSimpleToast("Block has not been created...");
        });
      }, function (data) {
        console.log("getPartner1 error  : " + data);
        $scope.showSimpleToast("Block has not been created...");
      });
  }
  
  $scope.unitTests = function () {
      var _url = '/unitTests?x=1';//'0.0.0.0:8080/blocks';
      var _data = JSON.stringify({test: 0});
      $scope.isWaitingServer = true;

      return $http({
        method: 'POST',
        url: _url
      }).then(function successCallback(data, status, headers, config) {
        console.log("unitTests success : ");
        console.log(data);
         $scope.isWaitingServer = false;
        $scope.seeSmartContractContent = false;
        $scope.seeTestedFunctions = true;
        $scope.unitTestsRes = data.data;
        return data;
      }, function errorCallback(data, status, headers, config) {
        console.log("unitTests error : ");
        console.log(data);
        $scope.isWaitingServer = false;
        return data;
      });
  }
  
  $scope.fillInput = function () {
      if ($scope.accounts.length != 0) {
          $scope.contractData.partner1 = $scope.accounts[0];
          $scope.contractData.partner2 = $scope.accounts[1];
          $scope.contractData.timeStamp = 10012001;
          $scope.contractData.allAssetsAmount = 90000;
          $scope.contractData.marriageStatus = "Married";
          $scope.contractData.marriageContract = "Separated Assets";
          $scope.contractData.marriageDetails = "Just Married";
      }
  }

  var getBlocksRes = $scope.getBlocks()
  .then(function (data) {
      console.log("getBlocks success : ");
      console.log(data);
      return data;
  }, function (err) {
      console.log("getBlocks error : ");
      console.log(err);
  });
  
  var getAccountsRes = $scope.getAccounts()
  .then(function (data) {
      console.log("getAccounts success : ");
      console.log(data);
      return data;
  }, function (err) {
      console.log("getAccounts error : ");
      console.log(err);
  });
}]);