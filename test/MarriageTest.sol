//pragma solidity ^0.4.9;
import "../contracts/Marriage.sol";

contract MarriageTest is Marriage {
    
    address owner;
    Marriage marriage;
    
    function MarriageTest() {
        owner = msg.sender;
        marriage = new Marriage();
    }
    
    function testCreateMarriage() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle");
            
        /*var _owner = marriage.getOwner();*/
        var _partner1 = marriage.getPartner1();
        var _partner2 = marriage.getPartner2();
        var _timestamp = marriage.getMarriageDate();
        var _status = marriage.getMarriageStatus();
        var _details = marriage.getMarriageDetails();

        /*if ((owner == msg.sender) */
        if((_partner1 == 0x1a0e610e69d0dfce5818f807991c078f9fefd3fd)
        && (_partner2 == 0xf77aad55e470dd2fe2949ec535bce278bb3cda2c)
        && (_timestamp == 11012011)
        && (_status == "Married")
        && (_details == "Communauté universelle")) {
            testCreateMarriageEvt("testCreateMarriage PASSED");
        } else {
            testCreateMarriageEvt("testCreateMarriage FAILED : Marriage contract has not been created");
        }
    }
    
    function testCreateDivorce() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle");
        
        marriage.createDivorce(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Divorced",
            "50-50");
            
        /*var owner = marriage.getOwner();*/
        var _partner1 = marriage.getPartner1();
        var _partner2 = marriage.getPartner2();
        var _timestamp = marriage.getMarriageDate();
        var _status = marriage.getMarriageStatus();
        var _details = marriage.getMarriageDetails();

        /*if ((owner == msg.sender) */
        if((_partner1 == 0x1a0e610e69d0dfce5818f807991c078f9fefd3fd)
        && (_partner2 == 0xf77aad55e470dd2fe2949ec535bce278bb3cda2c)
        && (_timestamp == 11012011)
        && (_status == "Divorced")
        && (_details == "50-50")) {
            testCreateDivorceEvt("testCreateDivorce PASSED");
        } else {
            testCreateDivorceEvt("testCreateDivorce FAILED : Divorce contract has not been created");
        }
    }
    
    /*function testGetOwner() {
        //Marriage marriage = new Marriage();
        
        var testTmp = marriage.getOwner();
        if (testTmp == msg.sender) {
            testGetOwnerEvt("testGetOwner PASSED", testTmp);
        } else {
            testGetOwnerEvt("testGetOwner FAILED : Owner should be msg.sender", testTmp);
        }
    }*/
    
    function testGetPartner1() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle"
        );
        
        var testTmp = marriage.getPartner1();
        if (testTmp == 0x1a0e610e69d0dfce5818f807991c078f9fefd3fd) {
            testGetPartner1Evt("testGetPartner1 PASSED", testTmp);
        } else {
            testGetPartner1Evt("testGetPartner1 FAILED : Partner1 = ", testTmp);
        }
    }
    
    function testGetPartner2() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle"
        );
        
        var testTmp = marriage.getPartner2();
        if (testTmp == 0xf77aad55e470dd2fe2949ec535bce278bb3cda2c) {
            testGetPartner2Evt("testGetPartner2 PASSED", testTmp);
        } else {
            testGetPartner2Evt("testGetPartner2 FAILED : Partner2 should be 0xf77aad55e470dd2fe2949ec535bce278bb3cda2c", testTmp);
        }
    }
    
    function testGetMarriageDate() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle"
        );
        
        var testTmp = marriage.getMarriageDate();
        if (testTmp == 11012011) {
            testGetMarriageDateEvt("testGetMarriageDate PASSED", testTmp);
        } else {
            testGetMarriageDateEvt("testGetMarriageDate FAILED : MarriageDate should be 11012011", testTmp);
        }
    }
    
    function testGetMarriageStatus() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle"
        );

        var testTmp = marriage.getMarriageStatus();
        if (testTmp == "Married") {
            testGetMarriageStatusEvt("testGetMarriageStatus PASSED", testTmp);
        } else {
            testGetMarriageStatusEvt("testGetMarriageStatus FAILED : MarriageStatus should be Married", testTmp);
        }
    }
    
    function testGetMarriageDetails() {
        //Marriage marriage = new Marriage();

        marriage.createMarriage(
            0x1a0e610e69d0dfce5818f807991c078f9fefd3fd,
            0xf77aad55e470dd2fe2949ec535bce278bb3cda2c,
            11012011,
            "Married",
            "Communauté universelle"
        );
        
        var testTmp = marriage.getMarriageDetails();
        if (testTmp == "Communauté universelle") {
            testGetMarriageDetailsEvt("testGetMarriageDetails PASSED", testTmp);
        } else {
            testGetMarriageDetailsEvt("testGetMarriageDetails FAILED : MarriageDetails should be Communauté universelle", testTmp);
        }
    }
    
    function testAll() {
        /*testGetOwner();*/
        testGetPartner1();
        testGetPartner2();
        testGetMarriageDate();
        testGetMarriageStatus();
        testGetMarriageDetails();
        testCreateMarriage();
        testCreateDivorce();
        
        testAllEvt("testAll PASSED");
    }
    
    event testCreateMarriageEvt(string msg);
    event testCreateDivorceEvt(string msg);
    /*event testGetOwnerEvt(string msg, address addr);*/
    event testGetPartner1Evt(string msg, address addr);
    event testGetPartner2Evt(string msg, address addr);
    event testGetMarriageDateEvt(string msg, uint date);
    event testGetMarriageStatusEvt(string msg, bytes32 status);
    event testGetMarriageDetailsEvt(string msg, bytes32 status);
    event testAllEvt(string msg);
    
    /*function stringsEqual(string _a, string _b) internal returns (bool) {
        bytes memory a = bytes(_a);
        bytes memory b = bytes(_b);
        if (_a == _b) {
            return true;
        } else {
            return false;
        }
    }*/
}