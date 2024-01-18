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
    define(['ApiClient', 'model/ValidationErrors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidationErrors'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.InvalidWorkflowResponse = factory(root.Docusign.ApiClient, root.Docusign.ValidationErrors);
  }
}(this, function(ApiClient, ValidationErrors) {
  'use strict';


  /**
   * The InvalidWorkflowResponse model module.
   * @module model/InvalidWorkflowResponse
   */

  /**
   * Constructs a new <code>InvalidWorkflowResponse</code>.
   * @alias module:model/InvalidWorkflowResponse
   * @class
   * @param message {String} 
   * @param validationErrors {Array.<module:model/ValidationErrors>} 
   */
  var exports = function(message, validationErrors) {
    var _this = this;

    _this['message'] = message;    _this['validationErrors'] = validationErrors;
  };

  /**
   * Constructs a <code>InvalidWorkflowResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvalidWorkflowResponse} obj Optional instance to populate.
   * @return {module:model/InvalidWorkflowResponse} The populated <code>InvalidWorkflowResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('validationErrors')) {
        obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], [ValidationErrors]);
      }
    }
    return obj;
  }

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/ValidationErrors>} validationErrors
   */
  exports.prototype['validationErrors'] = undefined;



  return exports;
}));


