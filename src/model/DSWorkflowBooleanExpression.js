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
    define(['ApiClient', 'model/DSWorkflowExpressionTypesBooleanExpression', 'model/DSWorkflowLogicalOperatorTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowExpressionTypesBooleanExpression'), require('./DSWorkflowLogicalOperatorTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowBooleanExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowExpressionTypesBooleanExpression, root.Docusign.DSWorkflowLogicalOperatorTypes);
  }
}(this, function(ApiClient, DSWorkflowExpressionTypesBooleanExpression, DSWorkflowLogicalOperatorTypes) {
  'use strict';


  /**
   * The DSWorkflowBooleanExpression model module.
   * @module model/DSWorkflowBooleanExpression
   */

  /**
   * Constructs a new <code>DSWorkflowBooleanExpression</code>.
   * @alias module:model/DSWorkflowBooleanExpression
   * @class
   * @param expressions {Array.<Object>} A list wherein each element should be any of the following object models: [#/definitions/DSWorkflowBooleanExpression, #/definitions/DSWorkflowComparisonExpression]
   * @param logicalOperator {module:model/DSWorkflowLogicalOperatorTypes} 
   * @param type {module:model/DSWorkflowExpressionTypesBooleanExpression} 
   */
  var exports = function(expressions, logicalOperator, type) {
    var _this = this;

    _this['expressions'] = expressions;    _this['logicalOperator'] = logicalOperator;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowBooleanExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowBooleanExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowBooleanExpression} The populated <code>DSWorkflowBooleanExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expressions')) {
        obj['expressions'] = ApiClient.convertToType(data['expressions'], [Object]);
      }
      if (data.hasOwnProperty('logicalOperator')) {
        obj['logicalOperator'] = DSWorkflowLogicalOperatorTypes.constructFromObject(data['logicalOperator']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowExpressionTypesBooleanExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * A list wherein each element should be any of the following object models: [#/definitions/DSWorkflowBooleanExpression, #/definitions/DSWorkflowComparisonExpression]
   * @member {Array.<Object>} expressions
   */
  exports.prototype['expressions'] = undefined;
  /**
   * @member {module:model/DSWorkflowLogicalOperatorTypes} logicalOperator
   */
  exports.prototype['logicalOperator'] = undefined;
  /**
   * @member {module:model/DSWorkflowExpressionTypesBooleanExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


