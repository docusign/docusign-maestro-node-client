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
    define(['ApiClient', 'model/DSWorkflowComparisonExpression', 'model/DSWorkflowStepTypesDoUntil'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowComparisonExpression'), require('./DSWorkflowStepTypesDoUntil'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSDoUntilStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowComparisonExpression, root.Docusign.DSWorkflowStepTypesDoUntil);
  }
}(this, function(ApiClient, DSWorkflowComparisonExpression, DSWorkflowStepTypesDoUntil) {
  'use strict';


  /**
   * The DSDoUntilStep model module.
   * @module model/DSDoUntilStep
   */

  /**
   * Constructs a new <code>DSDoUntilStep</code>.
   * @alias module:model/DSDoUntilStep
   * @class
   * @param doSteps {Array.<Object>} A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param expression {module:model/DSWorkflowComparisonExpression} 
   * @param id {String} 
   * @param name {String} 
   * @param type {module:model/DSWorkflowStepTypesDoUntil} 
   */
  var exports = function(doSteps, expression, id, name, type) {
    var _this = this;

    _this['doSteps'] = doSteps;    _this['expression'] = expression;    _this['id'] = id;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSDoUntilStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSDoUntilStep} obj Optional instance to populate.
   * @return {module:model/DSDoUntilStep} The populated <code>DSDoUntilStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('doSteps')) {
        obj['doSteps'] = ApiClient.convertToType(data['doSteps'], [Object]);
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = DSWorkflowComparisonExpression.constructFromObject(data['expression']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesDoUntil.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} doSteps
   */
  exports.prototype['doSteps'] = undefined;
  /**
   * @member {module:model/DSWorkflowComparisonExpression} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesDoUntil} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


