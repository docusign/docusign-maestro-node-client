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
    define(['ApiClient', 'model/DSWorkflowTransformationExpressionTypesIndexOfExpression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowTransformationExpressionTypesIndexOfExpression'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowIndexOfExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowTransformationExpressionTypesIndexOfExpression);
  }
}(this, function(ApiClient, DSWorkflowTransformationExpressionTypesIndexOfExpression) {
  'use strict';


  /**
   * The DSWorkflowIndexOfExpression model module.
   * @module model/DSWorkflowIndexOfExpression
   */

  /**
   * Constructs a new <code>DSWorkflowIndexOfExpression</code>.
   * @alias module:model/DSWorkflowIndexOfExpression
   * @class
   * @param searchText {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param text {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param type {module:model/DSWorkflowTransformationExpressionTypesIndexOfExpression} 
   */
  var exports = function(searchText, text, type) {
    var _this = this;

    _this['searchText'] = searchText;    _this['text'] = text;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowIndexOfExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowIndexOfExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowIndexOfExpression} The populated <code>DSWorkflowIndexOfExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('searchText')) {
        obj['searchText'] = ApiClient.convertToType(data['searchText'], Object);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowTransformationExpressionTypesIndexOfExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} searchText
   */
  exports.prototype['searchText'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/DSWorkflowTransformationExpressionTypesIndexOfExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


