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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DeployResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DeployResponse model module.
   * @module model/DeployResponse
   */

  /**
   * Constructs a new <code>DeployResponse</code>.
   * @alias module:model/DeployResponse
   * @class
   * @param message {String} 
   * @param pollUrl {String} 
   */
  var exports = function(message, pollUrl) {
    var _this = this;

    _this['message'] = message;    _this['pollUrl'] = pollUrl;
  };

  /**
   * Constructs a <code>DeployResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployResponse} obj Optional instance to populate.
   * @return {module:model/DeployResponse} The populated <code>DeployResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('pollUrl')) {
        obj['pollUrl'] = ApiClient.convertToType(data['pollUrl'], 'String');
      }
      if (data.hasOwnProperty('receivedTime')) {
        obj['receivedTime'] = ApiClient.convertToType(data['receivedTime'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * @member {String} pollUrl
   */
  exports.prototype['pollUrl'] = undefined;
  /**
   * @member {Date} receivedTime
   */
  exports.prototype['receivedTime'] = undefined;



  return exports;
}));


