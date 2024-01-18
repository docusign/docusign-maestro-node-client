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
    define(['ApiClient', 'model/DSWorkflowTransformationExpressionTypesReplaceExpression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowTransformationExpressionTypesReplaceExpression'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowReplaceExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowTransformationExpressionTypesReplaceExpression);
  }
}(this, function(ApiClient, DSWorkflowTransformationExpressionTypesReplaceExpression) {
  'use strict';


  /**
   * The DSWorkflowReplaceExpression model module.
   * @module model/DSWorkflowReplaceExpression
   */

  /**
   * Constructs a new <code>DSWorkflowReplaceExpression</code>.
   * @alias module:model/DSWorkflowReplaceExpression
   * @class
   * @param newText {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param oldText {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param text {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param type {module:model/DSWorkflowTransformationExpressionTypesReplaceExpression} 
   */
  var exports = function(newText, oldText, text, type) {
    var _this = this;

    _this['newText'] = newText;    _this['oldText'] = oldText;    _this['text'] = text;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowReplaceExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowReplaceExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowReplaceExpression} The populated <code>DSWorkflowReplaceExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('newText')) {
        obj['newText'] = ApiClient.convertToType(data['newText'], Object);
      }
      if (data.hasOwnProperty('oldText')) {
        obj['oldText'] = ApiClient.convertToType(data['oldText'], Object);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowTransformationExpressionTypesReplaceExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} newText
   */
  exports.prototype['newText'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} oldText
   */
  exports.prototype['oldText'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/DSWorkflowTransformationExpressionTypesReplaceExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


