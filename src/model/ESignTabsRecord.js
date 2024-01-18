/**
 * Maestro API
 * Maestro authors and executes experiences that allow non-coders the ability to define Simple Business Process without having to write code and to deploy them seamlessly without having to have development expertise
 *
 * OpenAPI spec version: 1.0.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ESignTabs'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESignTabs'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignTabsRecord = factory(root.Docusign.ApiClient, root.Docusign.ESignTabs);
  }
}(this, function(ApiClient, ESignTabs) {
  'use strict';


  /**
   * The ESignTabsRecord model module.
   * @module model/ESignTabsRecord
   */

  /**
   * Constructs a new <code>ESignTabsRecord</code>.
   * @alias module:model/ESignTabsRecord
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ESignTabsRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignTabsRecord} obj Optional instance to populate.
   * @return {module:model/ESignTabsRecord} The populated <code>ESignTabsRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dateSignedTabs')) {
        obj['dateSignedTabs'] = ApiClient.convertToType(data['dateSignedTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('emailAddressTabs')) {
        obj['emailAddressTabs'] = ApiClient.convertToType(data['emailAddressTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('firstNameTabs')) {
        obj['firstNameTabs'] = ApiClient.convertToType(data['firstNameTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('fullNameTabs')) {
        obj['fullNameTabs'] = ApiClient.convertToType(data['fullNameTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('lastNameTabs')) {
        obj['lastNameTabs'] = ApiClient.convertToType(data['lastNameTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('signHereTabs')) {
        obj['signHereTabs'] = ApiClient.convertToType(data['signHereTabs'], [ESignTabs]);
      }
      if (data.hasOwnProperty('textTabs')) {
        obj['textTabs'] = ApiClient.convertToType(data['textTabs'], [ESignTabs]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ESignTabs>} dateSignedTabs
   */
  exports.prototype['dateSignedTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} emailAddressTabs
   */
  exports.prototype['emailAddressTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} firstNameTabs
   */
  exports.prototype['firstNameTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} fullNameTabs
   */
  exports.prototype['fullNameTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} lastNameTabs
   */
  exports.prototype['lastNameTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} signHereTabs
   */
  exports.prototype['signHereTabs'] = undefined;
  /**
   * @member {Array.<module:model/ESignTabs>} textTabs
   */
  exports.prototype['textTabs'] = undefined;



  return exports;
}));


