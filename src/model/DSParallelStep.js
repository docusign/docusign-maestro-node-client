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
    define(['ApiClient', 'model/DSWorkflowLane', 'model/DSWorkflowParallelExpression', 'model/DSWorkflowStepTypesParallel'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowLane'), require('./DSWorkflowParallelExpression'), require('./DSWorkflowStepTypesParallel'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSParallelStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowLane, root.Docusign.DSWorkflowParallelExpression, root.Docusign.DSWorkflowStepTypesParallel);
  }
}(this, function(ApiClient, DSWorkflowLane, DSWorkflowParallelExpression, DSWorkflowStepTypesParallel) {
  'use strict';


  /**
   * The DSParallelStep model module.
   * @module model/DSParallelStep
   */

  /**
   * Constructs a new <code>DSParallelStep</code>.
   * @alias module:model/DSParallelStep
   * @class
   * @param expression {module:model/DSWorkflowParallelExpression} 
   * @param id {String} 
   * @param lanes {Object.<String, module:model/DSWorkflowLane>} 
   * @param name {String} 
   * @param type {module:model/DSWorkflowStepTypesParallel} 
   */
  var exports = function(expression, id, lanes, name, type) {
    var _this = this;

    _this['expression'] = expression;    _this['id'] = id;    _this['lanes'] = lanes;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSParallelStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSParallelStep} obj Optional instance to populate.
   * @return {module:model/DSParallelStep} The populated <code>DSParallelStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expression')) {
        obj['expression'] = DSWorkflowParallelExpression.constructFromObject(data['expression']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('lanes')) {
        obj['lanes'] = ApiClient.convertToType(data['lanes'], {'String': DSWorkflowLane});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesParallel.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DSWorkflowParallelExpression} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Object.<String, module:model/DSWorkflowLane>} lanes
   */
  exports.prototype['lanes'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesParallel} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


