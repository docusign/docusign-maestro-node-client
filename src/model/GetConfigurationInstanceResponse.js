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
    root.Docusign.GetConfigurationInstanceResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The GetConfigurationInstanceResponse model module.
   * @module model/GetConfigurationInstanceResponse
   */

  /**
   * Constructs a new <code>GetConfigurationInstanceResponse</code>.
   * @alias module:model/GetConfigurationInstanceResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetConfigurationInstanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetConfigurationInstanceResponse} obj Optional instance to populate.
   * @return {module:model/GetConfigurationInstanceResponse} The populated <code>GetConfigurationInstanceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('savedValues')) {
        obj['savedValues'] = ApiClient.convertToType(data['savedValues'], Object);
      }
      if (data.hasOwnProperty('stepId')) {
        obj['stepId'] = ApiClient.convertToType(data['stepId'], 'String');
      }
      if (data.hasOwnProperty('workflowDefinitionId')) {
        obj['workflowDefinitionId'] = ApiClient.convertToType(data['workflowDefinitionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Object} savedValues
   */
  exports.prototype['savedValues'] = undefined;
  /**
   * @member {String} stepId
   */
  exports.prototype['stepId'] = undefined;
  /**
   * @member {String} workflowDefinitionId
   */
  exports.prototype['workflowDefinitionId'] = undefined;



  return exports;
}));


