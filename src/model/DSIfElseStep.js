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
    define(['ApiClient', 'model/DSWorkflowBooleanExpression', 'model/DSWorkflowStepTypesDSIfElse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowBooleanExpression'), require('./DSWorkflowStepTypesDSIfElse'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSIfElseStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowBooleanExpression, root.Docusign.DSWorkflowStepTypesDSIfElse);
  }
}(this, function(ApiClient, DSWorkflowBooleanExpression, DSWorkflowStepTypesDSIfElse) {
  'use strict';


  /**
   * The DSIfElseStep model module.
   * @module model/DSIfElseStep
   */

  /**
   * Constructs a new <code>DSIfElseStep</code>.
   * @alias module:model/DSIfElseStep
   * @class
   * @param elseSteps {Array.<Object>} A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param expression {module:model/DSWorkflowBooleanExpression} 
   * @param id {String} 
   * @param ifSteps {Array.<Object>} A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param name {String} 
   * @param type {module:model/DSWorkflowStepTypesDSIfElse} 
   */
  var exports = function(elseSteps, expression, id, ifSteps, name, type) {
    var _this = this;

    _this['elseSteps'] = elseSteps;    _this['expression'] = expression;    _this['id'] = id;    _this['ifSteps'] = ifSteps;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSIfElseStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSIfElseStep} obj Optional instance to populate.
   * @return {module:model/DSIfElseStep} The populated <code>DSIfElseStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elseSteps')) {
        obj['elseSteps'] = ApiClient.convertToType(data['elseSteps'], [Object]);
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = DSWorkflowBooleanExpression.constructFromObject(data['expression']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ifSteps')) {
        obj['ifSteps'] = ApiClient.convertToType(data['ifSteps'], [Object]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesDSIfElse.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} elseSteps
   */
  exports.prototype['elseSteps'] = undefined;
  /**
   * @member {module:model/DSWorkflowBooleanExpression} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} ifSteps
   */
  exports.prototype['ifSteps'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesDSIfElse} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


