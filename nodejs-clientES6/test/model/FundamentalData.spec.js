/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.FundamentalData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('FundamentalData', function() {
    it('should create an instance of FundamentalData', function() {
      // uncomment below and update the code to test FundamentalData
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.FundamentalData);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property high52 (base name: "high52")', function() {
      // uncomment below and update the code to test the property high52
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property low52 (base name: "low52")', function() {
      // uncomment below and update the code to test the property low52
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property dividendAmount (base name: "dividendAmount")', function() {
      // uncomment below and update the code to test the property dividendAmount
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property dividendYield (base name: "dividendYield")', function() {
      // uncomment below and update the code to test the property dividendYield
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property dividendDate (base name: "dividendDate")', function() {
      // uncomment below and update the code to test the property dividendDate
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property peRatio (base name: "peRatio")', function() {
      // uncomment below and update the code to test the property peRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property pegRatio (base name: "pegRatio")', function() {
      // uncomment below and update the code to test the property pegRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property pbRatio (base name: "pbRatio")', function() {
      // uncomment below and update the code to test the property pbRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property prRatio (base name: "prRatio")', function() {
      // uncomment below and update the code to test the property prRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property pcfRatio (base name: "pcfRatio")', function() {
      // uncomment below and update the code to test the property pcfRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property grossMarginTTM (base name: "grossMarginTTM")', function() {
      // uncomment below and update the code to test the property grossMarginTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property grossMarginMRQ (base name: "grossMarginMRQ")', function() {
      // uncomment below and update the code to test the property grossMarginMRQ
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property netProfitMarginTTM (base name: "netProfitMarginTTM")', function() {
      // uncomment below and update the code to test the property netProfitMarginTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property netProfitMarginMRQ (base name: "netProfitMarginMRQ")', function() {
      // uncomment below and update the code to test the property netProfitMarginMRQ
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property operatingMarginTTM (base name: "operatingMarginTTM")', function() {
      // uncomment below and update the code to test the property operatingMarginTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property operatingMarginMRQ (base name: "operatingMarginMRQ")', function() {
      // uncomment below and update the code to test the property operatingMarginMRQ
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property returnOnEquity (base name: "returnOnEquity")', function() {
      // uncomment below and update the code to test the property returnOnEquity
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property returnOnAssets (base name: "returnOnAssets")', function() {
      // uncomment below and update the code to test the property returnOnAssets
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property returnOnInvestment (base name: "returnOnInvestment")', function() {
      // uncomment below and update the code to test the property returnOnInvestment
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property quickRatio (base name: "quickRatio")', function() {
      // uncomment below and update the code to test the property quickRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property currentRatio (base name: "currentRatio")', function() {
      // uncomment below and update the code to test the property currentRatio
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property interestCoverage (base name: "interestCoverage")', function() {
      // uncomment below and update the code to test the property interestCoverage
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property totalDebtToCapital (base name: "totalDebtToCapital")', function() {
      // uncomment below and update the code to test the property totalDebtToCapital
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property ltDebtToEquity (base name: "ltDebtToEquity")', function() {
      // uncomment below and update the code to test the property ltDebtToEquity
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property totalDebtToEquity (base name: "totalDebtToEquity")', function() {
      // uncomment below and update the code to test the property totalDebtToEquity
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property epsTTM (base name: "epsTTM")', function() {
      // uncomment below and update the code to test the property epsTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property epsChangePercentTTM (base name: "epsChangePercentTTM")', function() {
      // uncomment below and update the code to test the property epsChangePercentTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property epsChangeYear (base name: "epsChangeYear")', function() {
      // uncomment below and update the code to test the property epsChangeYear
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property epsChange (base name: "epsChange")', function() {
      // uncomment below and update the code to test the property epsChange
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property revChangeYear (base name: "revChangeYear")', function() {
      // uncomment below and update the code to test the property revChangeYear
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property revChangeTTM (base name: "revChangeTTM")', function() {
      // uncomment below and update the code to test the property revChangeTTM
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property revChangeIn (base name: "revChangeIn")', function() {
      // uncomment below and update the code to test the property revChangeIn
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property sharesOutstanding (base name: "sharesOutstanding")', function() {
      // uncomment below and update the code to test the property sharesOutstanding
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property marketCapFloat (base name: "marketCapFloat")', function() {
      // uncomment below and update the code to test the property marketCapFloat
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property marketCap (base name: "marketCap")', function() {
      // uncomment below and update the code to test the property marketCap
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property bookValuePerShare (base name: "bookValuePerShare")', function() {
      // uncomment below and update the code to test the property bookValuePerShare
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property shortIntToFloat (base name: "shortIntToFloat")', function() {
      // uncomment below and update the code to test the property shortIntToFloat
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property shortIntDayToCover (base name: "shortIntDayToCover")', function() {
      // uncomment below and update the code to test the property shortIntDayToCover
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property divGrowthRate3Year (base name: "divGrowthRate3Year")', function() {
      // uncomment below and update the code to test the property divGrowthRate3Year
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property dividendPayAmount (base name: "dividendPayAmount")', function() {
      // uncomment below and update the code to test the property dividendPayAmount
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property dividendPayDate (base name: "dividendPayDate")', function() {
      // uncomment below and update the code to test the property dividendPayDate
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property beta (base name: "beta")', function() {
      // uncomment below and update the code to test the property beta
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property vol1DayAvg (base name: "vol1DayAvg")', function() {
      // uncomment below and update the code to test the property vol1DayAvg
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property vol10DayAvg (base name: "vol10DayAvg")', function() {
      // uncomment below and update the code to test the property vol10DayAvg
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

    it('should have the property vol3MonthAvg (base name: "vol3MonthAvg")', function() {
      // uncomment below and update the code to test the property vol3MonthAvg
      //var instane = new GitChrisQueen_TDA_JS.FundamentalData();
      //expect(instance).to.be();
    });

  });

}));