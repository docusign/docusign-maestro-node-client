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
    define(['ApiClient', 'model/DSWorkflowExpressionTypesParallelExpression', 'model/RecordStringBoolean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowExpressionTypesParallelExpression'), require('./RecordStringBoolean'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowParallelExpression = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowExpressionTypesParallelExpression, root.Docusign.RecordStringBoolean);
  }
}(this, function(ApiClient, DSWorkflowExpressionTypesParallelExpression, RecordStringBoolean) {
  'use strict';


  /**
   * The DSWorkflowParallelExpression model module.
   * @module model/DSWorkflowParallelExpression
   */

  /**
   * Constructs a new <code>DSWorkflowParallelExpression</code>.
   * @alias module:model/DSWorkflowParallelExpression
   * @class
   * @param parallelCompletionSettings {module:model/RecordStringBoolean} 
   * @param type {module:model/DSWorkflowExpressionTypesParallelExpression} 
   */
  var exports = function(parallelCompletionSettings, type) {
    var _this = this;

    _this['parallelCompletionSettings'] = parallelCompletionSettings;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowParallelExpression</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowParallelExpression} obj Optional instance to populate.
   * @return {module:model/DSWorkflowParallelExpression} The populated <code>DSWorkflowParallelExpression</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('parallelCompletionSettings')) {
        obj['parallelCompletionSettings'] = RecordStringBoolean.constructFromObject(data['parallelCompletionSettings']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowExpressionTypesParallelExpression.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecordStringBoolean} parallelCompletionSettings
   */
  exports.prototype['parallelCompletionSettings'] = undefined;
  /**
   * @member {module:model/DSWorkflowExpressionTypesParallelExpression} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


