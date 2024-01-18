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
    define(['ApiClient', 'model/AccessTokenTokenTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessTokenTokenTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.AccessTokenResponse = factory(root.Docusign.ApiClient, root.Docusign.AccessTokenTokenTypes);
  }
}(this, function(ApiClient, AccessTokenTokenTypes) {
  'use strict';


  /**
   * The AccessTokenResponse model module.
   * @module model/AccessTokenResponse
   */

  /**
   * Constructs a new <code>AccessTokenResponse</code>.
   * Access Token response details
   * @alias module:model/AccessTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AccessTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccessTokenResponse} obj Optional instance to populate.
   * @return {module:model/AccessTokenResponse} The populated <code>AccessTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('access_token')) {
        obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
      }
      if (data.hasOwnProperty('expires_in')) {
        obj['expires_in'] = ApiClient.convertToType(data['expires_in'], 'Number');
      }
      if (data.hasOwnProperty('token_type')) {
        obj['token_type'] = AccessTokenTokenTypes.constructFromObject(data['token_type']);
      }
    }
    return obj;
  }

  /**
   * JWT access token
   * @member {String} access_token
   */
  exports.prototype['access_token'] = undefined;
  /**
   * Expires in seconds
   * @member {Number} expires_in
   */
  exports.prototype['expires_in'] = undefined;
  /**
   * @member {module:model/AccessTokenTokenTypes} token_type
   */
  exports.prototype['token_type'] = undefined;



  return exports;
}));


