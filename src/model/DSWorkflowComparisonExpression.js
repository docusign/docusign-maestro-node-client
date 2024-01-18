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
    define(['ApiClient', 'model/DSWorkflowComparisonOperatorTypes', 'model/DSWorkflowExpressionTypesComparisonExpression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowComparisonOperatorTypes'), require('./DSWorkflowExpressionTypesComparisonExpression'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowComparisonExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowComparisonOperatorTypes, root.Docusign.DSWorkflowExpressionTypesComparisonExpression);
  }
}(this, function(ApiClient, DSWorkflowComparisonOperatorTypes, DSWorkflowExpressionTypesComparisonExpression) {
  'use strict';


  /**
   * The DSWorkflowComparisonExpression model module.
   * @module model/DSWorkflowComparisonExpression
   */

  /**
   * Constructs a new <code>DSWorkflowComparisonExpression</code>.
   * @alias module:model/DSWorkflowComparisonExpression
   * @class
   * @param comparisonOperator {module:model/DSWorkflowComparisonOperatorTypes} 
   * @param leftOperand {Object} This model should be any of the following object models or types: [number, boolean, #/definitions/StringOrVariableOrTransformation]
   * @param rightOperand {Object} This model should be any of the following object models or types: [number, boolean, #/definitions/StringOrVariableOrTransformation]
   * @param type {module:model/DSWorkflowExpressionTypesComparisonExpression} 
   */
  var exports = function(comparisonOperator, leftOperand, rightOperand, type) {
    var _this = this;

    _this['comparisonOperator'] = comparisonOperator;    _this['leftOperand'] = leftOperand;    _this['rightOperand'] = rightOperand;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowComparisonExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowComparisonExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowComparisonExpression} The populated <code>DSWorkflowComparisonExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comparisonOperator')) {
        obj['comparisonOperator'] = DSWorkflowComparisonOperatorTypes.constructFromObject(data['comparisonOperator']);
      }
      if (data.hasOwnProperty('leftOperand')) {
        obj['leftOperand'] = ApiClient.convertToType(data['leftOperand'], Object);
      }
      if (data.hasOwnProperty('rightOperand')) {
        obj['rightOperand'] = ApiClient.convertToType(data['rightOperand'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowExpressionTypesComparisonExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DSWorkflowComparisonOperatorTypes} comparisonOperator
   */
  exports.prototype['comparisonOperator'] = undefined;
  /**
   * This model should be any of the following object models or types: [number, boolean, #/definitions/StringOrVariableOrTransformation]
   * @member {Object} leftOperand
   */
  exports.prototype['leftOperand'] = undefined;
  /**
   * This model should be any of the following object models or types: [number, boolean, #/definitions/StringOrVariableOrTransformation]
   * @member {Object} rightOperand
   */
  exports.prototype['rightOperand'] = undefined;
  /**
   * @member {module:model/DSWorkflowExpressionTypesComparisonExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


