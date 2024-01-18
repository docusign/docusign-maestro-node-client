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
    define(['ApiClient', 'model/DSWorkflowTransformationExpressionTypesConcatExpression'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowTransformationExpressionTypesConcatExpression'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowConcatExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowTransformationExpressionTypesConcatExpression);
  }
}(this, function(ApiClient, DSWorkflowTransformationExpressionTypesConcatExpression) {
  'use strict';


  /**
   * The DSWorkflowConcatExpression model module.
   * @module model/DSWorkflowConcatExpression
   */

  /**
   * Constructs a new <code>DSWorkflowConcatExpression</code>.
   * @alias module:model/DSWorkflowConcatExpression
   * @class
   * @param type {module:model/DSWorkflowTransformationExpressionTypesConcatExpression} 
   */
  var exports = function(type) {
    var _this = this;

    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowConcatExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowConcatExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowConcatExpression} The populated <code>DSWorkflowConcatExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('inputs')) {
        obj['inputs'] = ApiClient.convertToType(data['inputs'], [Object]);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowTransformationExpressionTypesConcatExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * A list of StringOrVariableOrTransformation. Each element in the list should be any of the following object models: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Array.<Object>} inputs
   */
  exports.prototype['inputs'] = undefined;
  /**
   * @member {module:model/DSWorkflowTransformationExpressionTypesConcatExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


