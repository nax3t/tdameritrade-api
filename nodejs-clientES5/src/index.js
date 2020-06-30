/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountSecuritiesAccount', 'model/AssetType', 'model/Bond', 'model/CandleList', 'model/CandleListCandles', 'model/CashAccount', 'model/CashAccountBalances', 'model/CashAccountCurrentBalances', 'model/CashAccountInitialBalances', 'model/CashEquivalent', 'model/Duration', 'model/EASObject', 'model/Equity', 'model/EquityAssetType', 'model/Execution', 'model/ExecutionExecutionLegs', 'model/FixedIncome', 'model/FrequencyType', 'model/Fundamental', 'model/FundamentalData', 'model/FundamentalFundamental', 'model/Hours', 'model/HoursSessionHours', 'model/InlineResponse200', 'model/Instrument', 'model/MarginAccount', 'model/MarginAccountBalances', 'model/MarginAccountCurrentBalances', 'model/MarginAccountInitialBalances', 'model/MarginAccountOrderStrategies', 'model/MarginAccountPositions', 'model/Mover', 'model/MutualFund', 'model/Option', 'model/OptionOptionDeliverables', 'model/OrderActivity', 'model/OrderGet', 'model/OrderGetCancelTime', 'model/OrderGetDuration', 'model/OrderGetInstrument', 'model/OrderGetOrderActivityCollection', 'model/OrderGetOrderLegCollection', 'model/OrderGetOrderType', 'model/OrderGetSession', 'model/OrderType', 'model/PeriodType', 'model/Positions', 'model/PositionsInner', 'model/PositionsInnerInstrument', 'model/PostAccessBody', 'model/SearchInstrument', 'model/SecuritiesAccount', 'model/Session', 'api/AccountsApi', 'api/AuthenticationApi', 'api/MarketHoursApi', 'api/MoversApi', 'api/OrdersApi', 'api/PriceHistoryApi', 'api/SavedOrdersApi', 'api/SearchInstrumentsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountSecuritiesAccount'), require('./model/AssetType'), require('./model/Bond'), require('./model/CandleList'), require('./model/CandleListCandles'), require('./model/CashAccount'), require('./model/CashAccountBalances'), require('./model/CashAccountCurrentBalances'), require('./model/CashAccountInitialBalances'), require('./model/CashEquivalent'), require('./model/Duration'), require('./model/EASObject'), require('./model/Equity'), require('./model/EquityAssetType'), require('./model/Execution'), require('./model/ExecutionExecutionLegs'), require('./model/FixedIncome'), require('./model/FrequencyType'), require('./model/Fundamental'), require('./model/FundamentalData'), require('./model/FundamentalFundamental'), require('./model/Hours'), require('./model/HoursSessionHours'), require('./model/InlineResponse200'), require('./model/Instrument'), require('./model/MarginAccount'), require('./model/MarginAccountBalances'), require('./model/MarginAccountCurrentBalances'), require('./model/MarginAccountInitialBalances'), require('./model/MarginAccountOrderStrategies'), require('./model/MarginAccountPositions'), require('./model/Mover'), require('./model/MutualFund'), require('./model/Option'), require('./model/OptionOptionDeliverables'), require('./model/OrderActivity'), require('./model/OrderGet'), require('./model/OrderGetCancelTime'), require('./model/OrderGetDuration'), require('./model/OrderGetInstrument'), require('./model/OrderGetOrderActivityCollection'), require('./model/OrderGetOrderLegCollection'), require('./model/OrderGetOrderType'), require('./model/OrderGetSession'), require('./model/OrderType'), require('./model/PeriodType'), require('./model/Positions'), require('./model/PositionsInner'), require('./model/PositionsInnerInstrument'), require('./model/PostAccessBody'), require('./model/SearchInstrument'), require('./model/SecuritiesAccount'), require('./model/Session'), require('./api/AccountsApi'), require('./api/AuthenticationApi'), require('./api/MarketHoursApi'), require('./api/MoversApi'), require('./api/OrdersApi'), require('./api/PriceHistoryApi'), require('./api/SavedOrdersApi'), require('./api/SearchInstrumentsApi'));
  }
}(function(ApiClient, Account, AccountSecuritiesAccount, AssetType, Bond, CandleList, CandleListCandles, CashAccount, CashAccountBalances, CashAccountCurrentBalances, CashAccountInitialBalances, CashEquivalent, Duration, EASObject, Equity, EquityAssetType, Execution, ExecutionExecutionLegs, FixedIncome, FrequencyType, Fundamental, FundamentalData, FundamentalFundamental, Hours, HoursSessionHours, InlineResponse200, Instrument, MarginAccount, MarginAccountBalances, MarginAccountCurrentBalances, MarginAccountInitialBalances, MarginAccountOrderStrategies, MarginAccountPositions, Mover, MutualFund, Option, OptionOptionDeliverables, OrderActivity, OrderGet, OrderGetCancelTime, OrderGetDuration, OrderGetInstrument, OrderGetOrderActivityCollection, OrderGetOrderLegCollection, OrderGetOrderType, OrderGetSession, OrderType, PeriodType, Positions, PositionsInner, PositionsInnerInstrument, PostAccessBody, SearchInstrument, SecuritiesAccount, Session, AccountsApi, AuthenticationApi, MarketHoursApi, MoversApi, OrdersApi, PriceHistoryApi, SavedOrdersApi, SearchInstrumentsApi) {
  'use strict';

  /**
   * TD Ameritrade API node javascript client code..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var GitChrisQueen_TDA_JS = require('index'); // See note below*.
   * var xxxSvc = new GitChrisQueen_TDA_JS.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new GitChrisQueen_TDA_JS.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new GitChrisQueen_TDA_JS.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new GitChrisQueen_TDA_JS.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountSecuritiesAccount model constructor.
     * @property {module:model/AccountSecuritiesAccount}
     */
    AccountSecuritiesAccount: AccountSecuritiesAccount,
    /**
     * The AssetType model constructor.
     * @property {module:model/AssetType}
     */
    AssetType: AssetType,
    /**
     * The Bond model constructor.
     * @property {module:model/Bond}
     */
    Bond: Bond,
    /**
     * The CandleList model constructor.
     * @property {module:model/CandleList}
     */
    CandleList: CandleList,
    /**
     * The CandleListCandles model constructor.
     * @property {module:model/CandleListCandles}
     */
    CandleListCandles: CandleListCandles,
    /**
     * The CashAccount model constructor.
     * @property {module:model/CashAccount}
     */
    CashAccount: CashAccount,
    /**
     * The CashAccountBalances model constructor.
     * @property {module:model/CashAccountBalances}
     */
    CashAccountBalances: CashAccountBalances,
    /**
     * The CashAccountCurrentBalances model constructor.
     * @property {module:model/CashAccountCurrentBalances}
     */
    CashAccountCurrentBalances: CashAccountCurrentBalances,
    /**
     * The CashAccountInitialBalances model constructor.
     * @property {module:model/CashAccountInitialBalances}
     */
    CashAccountInitialBalances: CashAccountInitialBalances,
    /**
     * The CashEquivalent model constructor.
     * @property {module:model/CashEquivalent}
     */
    CashEquivalent: CashEquivalent,
    /**
     * The Duration model constructor.
     * @property {module:model/Duration}
     */
    Duration: Duration,
    /**
     * The EASObject model constructor.
     * @property {module:model/EASObject}
     */
    EASObject: EASObject,
    /**
     * The Equity model constructor.
     * @property {module:model/Equity}
     */
    Equity: Equity,
    /**
     * The EquityAssetType model constructor.
     * @property {module:model/EquityAssetType}
     */
    EquityAssetType: EquityAssetType,
    /**
     * The Execution model constructor.
     * @property {module:model/Execution}
     */
    Execution: Execution,
    /**
     * The ExecutionExecutionLegs model constructor.
     * @property {module:model/ExecutionExecutionLegs}
     */
    ExecutionExecutionLegs: ExecutionExecutionLegs,
    /**
     * The FixedIncome model constructor.
     * @property {module:model/FixedIncome}
     */
    FixedIncome: FixedIncome,
    /**
     * The FrequencyType model constructor.
     * @property {module:model/FrequencyType}
     */
    FrequencyType: FrequencyType,
    /**
     * The Fundamental model constructor.
     * @property {module:model/Fundamental}
     */
    Fundamental: Fundamental,
    /**
     * The FundamentalData model constructor.
     * @property {module:model/FundamentalData}
     */
    FundamentalData: FundamentalData,
    /**
     * The FundamentalFundamental model constructor.
     * @property {module:model/FundamentalFundamental}
     */
    FundamentalFundamental: FundamentalFundamental,
    /**
     * The Hours model constructor.
     * @property {module:model/Hours}
     */
    Hours: Hours,
    /**
     * The HoursSessionHours model constructor.
     * @property {module:model/HoursSessionHours}
     */
    HoursSessionHours: HoursSessionHours,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The Instrument model constructor.
     * @property {module:model/Instrument}
     */
    Instrument: Instrument,
    /**
     * The MarginAccount model constructor.
     * @property {module:model/MarginAccount}
     */
    MarginAccount: MarginAccount,
    /**
     * The MarginAccountBalances model constructor.
     * @property {module:model/MarginAccountBalances}
     */
    MarginAccountBalances: MarginAccountBalances,
    /**
     * The MarginAccountCurrentBalances model constructor.
     * @property {module:model/MarginAccountCurrentBalances}
     */
    MarginAccountCurrentBalances: MarginAccountCurrentBalances,
    /**
     * The MarginAccountInitialBalances model constructor.
     * @property {module:model/MarginAccountInitialBalances}
     */
    MarginAccountInitialBalances: MarginAccountInitialBalances,
    /**
     * The MarginAccountOrderStrategies model constructor.
     * @property {module:model/MarginAccountOrderStrategies}
     */
    MarginAccountOrderStrategies: MarginAccountOrderStrategies,
    /**
     * The MarginAccountPositions model constructor.
     * @property {module:model/MarginAccountPositions}
     */
    MarginAccountPositions: MarginAccountPositions,
    /**
     * The Mover model constructor.
     * @property {module:model/Mover}
     */
    Mover: Mover,
    /**
     * The MutualFund model constructor.
     * @property {module:model/MutualFund}
     */
    MutualFund: MutualFund,
    /**
     * The Option model constructor.
     * @property {module:model/Option}
     */
    Option: Option,
    /**
     * The OptionOptionDeliverables model constructor.
     * @property {module:model/OptionOptionDeliverables}
     */
    OptionOptionDeliverables: OptionOptionDeliverables,
    /**
     * The OrderActivity model constructor.
     * @property {module:model/OrderActivity}
     */
    OrderActivity: OrderActivity,
    /**
     * The OrderGet model constructor.
     * @property {module:model/OrderGet}
     */
    OrderGet: OrderGet,
    /**
     * The OrderGetCancelTime model constructor.
     * @property {module:model/OrderGetCancelTime}
     */
    OrderGetCancelTime: OrderGetCancelTime,
    /**
     * The OrderGetDuration model constructor.
     * @property {module:model/OrderGetDuration}
     */
    OrderGetDuration: OrderGetDuration,
    /**
     * The OrderGetInstrument model constructor.
     * @property {module:model/OrderGetInstrument}
     */
    OrderGetInstrument: OrderGetInstrument,
    /**
     * The OrderGetOrderActivityCollection model constructor.
     * @property {module:model/OrderGetOrderActivityCollection}
     */
    OrderGetOrderActivityCollection: OrderGetOrderActivityCollection,
    /**
     * The OrderGetOrderLegCollection model constructor.
     * @property {module:model/OrderGetOrderLegCollection}
     */
    OrderGetOrderLegCollection: OrderGetOrderLegCollection,
    /**
     * The OrderGetOrderType model constructor.
     * @property {module:model/OrderGetOrderType}
     */
    OrderGetOrderType: OrderGetOrderType,
    /**
     * The OrderGetSession model constructor.
     * @property {module:model/OrderGetSession}
     */
    OrderGetSession: OrderGetSession,
    /**
     * The OrderType model constructor.
     * @property {module:model/OrderType}
     */
    OrderType: OrderType,
    /**
     * The PeriodType model constructor.
     * @property {module:model/PeriodType}
     */
    PeriodType: PeriodType,
    /**
     * The Positions model constructor.
     * @property {module:model/Positions}
     */
    Positions: Positions,
    /**
     * The PositionsInner model constructor.
     * @property {module:model/PositionsInner}
     */
    PositionsInner: PositionsInner,
    /**
     * The PositionsInnerInstrument model constructor.
     * @property {module:model/PositionsInnerInstrument}
     */
    PositionsInnerInstrument: PositionsInnerInstrument,
    /**
     * The PostAccessBody model constructor.
     * @property {module:model/PostAccessBody}
     */
    PostAccessBody: PostAccessBody,
    /**
     * The SearchInstrument model constructor.
     * @property {module:model/SearchInstrument}
     */
    SearchInstrument: SearchInstrument,
    /**
     * The SecuritiesAccount model constructor.
     * @property {module:model/SecuritiesAccount}
     */
    SecuritiesAccount: SecuritiesAccount,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi,
    /**
     * The MarketHoursApi service constructor.
     * @property {module:api/MarketHoursApi}
     */
    MarketHoursApi: MarketHoursApi,
    /**
     * The MoversApi service constructor.
     * @property {module:api/MoversApi}
     */
    MoversApi: MoversApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PriceHistoryApi service constructor.
     * @property {module:api/PriceHistoryApi}
     */
    PriceHistoryApi: PriceHistoryApi,
    /**
     * The SavedOrdersApi service constructor.
     * @property {module:api/SavedOrdersApi}
     */
    SavedOrdersApi: SavedOrdersApi,
    /**
     * The SearchInstrumentsApi service constructor.
     * @property {module:api/SearchInstrumentsApi}
     */
    SearchInstrumentsApi: SearchInstrumentsApi
  };

  return exports;
}));
