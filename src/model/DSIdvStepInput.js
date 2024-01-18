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
    root.Docusign.DSIdvStepInput = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DSIdvStepInput model module.
   * @module model/DSIdvStepInput
   */

  /**
   * Constructs a new <code>DSIdvStepInput</code>.
   * @alias module:model/DSIdvStepInput
   * @class
   * @param backgroundColorBranding {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param expectedFullName {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param retryLimit {Object} This object should be any of the following object models or types: [number, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param textColorBranding {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   */
  var exports = function(backgroundColorBranding, expectedFullName, retryLimit, textColorBranding) {
    var _this = this;

    _this['backgroundColorBranding'] = backgroundColorBranding;    _this['expectedFullName'] = expectedFullName;    _this['retryLimit'] = retryLimit;    _this['textColorBranding'] = textColorBranding;
  };

  /**
   * Constructs a <code>DSIdvStepInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSIdvStepInput} obj Optional instance to populate.
   * @return {module:model/DSIdvStepInput} The populated <code>DSIdvStepInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('backgroundColorBranding')) {
        obj['backgroundColorBranding'] = ApiClient.convertToType(data['backgroundColorBranding'], Object);
      }
      if (data.hasOwnProperty('expectedFullName')) {
        obj['expectedFullName'] = ApiClient.convertToType(data['expectedFullName'], Object);
      }
      if (data.hasOwnProperty('retryLimit')) {
        obj['retryLimit'] = ApiClient.convertToType(data['retryLimit'], Object);
      }
      if (data.hasOwnProperty('textColorBranding')) {
        obj['textColorBranding'] = ApiClient.convertToType(data['textColorBranding'], Object);
      }
    }
    return obj;
  }

  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} backgroundColorBranding
   */
  exports.prototype['backgroundColorBranding'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} expectedFullName
   */
  exports.prototype['expectedFullName'] = undefined;
  /**
   * This object should be any of the following object models or types: [number, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} retryLimit
   */
  exports.prototype['retryLimit'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} textColorBranding
   */
  exports.prototype['textColorBranding'] = undefined;



  return exports;
}));


