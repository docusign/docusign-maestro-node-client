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
    root.Docusign.DSWebFormsStepConfig = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DSWebFormsStepConfig model module.
   * @module model/DSWebFormsStepConfig
   */

  /**
   * Constructs a new <code>DSWebFormsStepConfig</code>.
   * @alias module:model/DSWebFormsStepConfig
   * @class
   * @param pageUrl {String} 
   */
  var exports = function(pageUrl) {
    var _this = this;

    _this['pageUrl'] = pageUrl;
  };

  /**
   * Constructs a <code>DSWebFormsStepConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWebFormsStepConfig} obj Optional instance to populate.
   * @return {module:model/DSWebFormsStepConfig} The populated <code>DSWebFormsStepConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pageUrl')) {
        obj['pageUrl'] = ApiClient.convertToType(data['pageUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} pageUrl
   */
  exports.prototype['pageUrl'] = undefined;



  return exports;
}));


