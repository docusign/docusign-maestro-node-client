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
    define(['ApiClient', 'model/DSWorkflowComparisonExpression', 'model/DSWorkflowStepTypesLoop'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowComparisonExpression'), require('./DSWorkflowStepTypesLoop'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSLoopStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowComparisonExpression, root.Docusign.DSWorkflowStepTypesLoop);
  }
}(this, function(ApiClient, DSWorkflowComparisonExpression, DSWorkflowStepTypesLoop) {
  'use strict';


  /**
   * The DSLoopStep model module.
   * @module model/DSLoopStep
   */

  /**
   * Constructs a new <code>DSLoopStep</code>.
   * @alias module:model/DSLoopStep
   * @class
   * @param expression {module:model/DSWorkflowComparisonExpression} 
   * @param id {String} 
   * @param loopSteps {Array.<Object>} A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param name {String} 
   * @param type {module:model/DSWorkflowStepTypesLoop} 
   */
  var exports = function(expression, id, loopSteps, name, type) {
    var _this = this;

    _this['expression'] = expression;    _this['id'] = id;    _this['loopSteps'] = loopSteps;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSLoopStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSLoopStep} obj Optional instance to populate.
   * @return {module:model/DSLoopStep} The populated <code>DSLoopStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expression')) {
        obj['expression'] = DSWorkflowComparisonExpression.constructFromObject(data['expression']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('loopSteps')) {
        obj['loopSteps'] = ApiClient.convertToType(data['loopSteps'], [Object]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesLoop.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DSWorkflowComparisonExpression} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} loopSteps
   */
  exports.prototype['loopSteps'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesLoop} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


