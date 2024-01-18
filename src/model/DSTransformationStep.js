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
    define(['ApiClient', 'model/DSWorkflowStepTypesDSTransformation', 'model/RecordStringOrVariableOrTransformation', 'model/RecordToNever'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowStepTypesDSTransformation'), require('./RecordStringOrVariableOrTransformation'), require('./RecordToNever'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSTransformationStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowStepTypesDSTransformation, root.Docusign.RecordStringOrVariableOrTransformation, root.Docusign.RecordToNever);
  }
}(this, function(ApiClient, DSWorkflowStepTypesDSTransformation, RecordStringOrVariableOrTransformation, RecordToNever) {
  'use strict';


  /**
   * The DSTransformationStep model module.
   * @module model/DSTransformationStep
   */

  /**
   * Constructs a new <code>DSTransformationStep</code>.
   * @alias module:model/DSTransformationStep
   * @class
   * @param config {module:model/RecordToNever} 
   * @param expression {Object} DS Workflow Transformation Expression object. This object should be any of the following object models: [#/definitions/DSWorkflowReplaceExpression, #/definitions/DSWorkflowToLowerExpression, #/definitions/DSWorkflowToUpperExpression, #/components/schemas/DSWorkflowLastIndexOfExpression, #/components/schemas/DSWorkflowIndexOfExpression, #/components/schemas/DSWorkflowSubstringExpression, #/components/schemas/DSWorkflowConcatExpression]
   * @param id {String} 
   * @param input {module:model/RecordStringOrVariableOrTransformation} 
   * @param name {String} 
   * @param output {module:model/RecordStringOrVariableOrTransformation} 
   * @param type {module:model/DSWorkflowStepTypesDSTransformation} 
   */
  var exports = function(config, expression, id, input, name, output, type) {
    var _this = this;

    _this['config'] = config;    _this['expression'] = expression;    _this['id'] = id;    _this['input'] = input;    _this['name'] = name;    _this['output'] = output;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSTransformationStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSTransformationStep} obj Optional instance to populate.
   * @return {module:model/DSTransformationStep} The populated <code>DSTransformationStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('config')) {
        obj['config'] = RecordToNever.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('expression')) {
        obj['expression'] = ApiClient.convertToType(data['expression'], Object);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = RecordStringOrVariableOrTransformation.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = RecordStringOrVariableOrTransformation.constructFromObject(data['output']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesDSTransformation.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecordToNever} config
   */
  exports.prototype['config'] = undefined;
  /**
   * DS Workflow Transformation Expression object. This object should be any of the following object models: [#/definitions/DSWorkflowReplaceExpression, #/definitions/DSWorkflowToLowerExpression, #/definitions/DSWorkflowToUpperExpression, #/components/schemas/DSWorkflowLastIndexOfExpression, #/components/schemas/DSWorkflowIndexOfExpression, #/components/schemas/DSWorkflowSubstringExpression, #/components/schemas/DSWorkflowConcatExpression]
   * @member {Object} expression
   */
  exports.prototype['expression'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/RecordStringOrVariableOrTransformation} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/RecordStringOrVariableOrTransformation} output
   */
  exports.prototype['output'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesDSTransformation} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


