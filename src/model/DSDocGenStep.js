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
    define(['ApiClient', 'model/DSDocGenStepInput', 'model/DSWorkflowStepTypesDSDocGen', 'model/RecordToNever'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSDocGenStepInput'), require('./DSWorkflowStepTypesDSDocGen'), require('./RecordToNever'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSDocGenStep = factory(root.Docusign.ApiClient, root.Docusign.DSDocGenStepInput, root.Docusign.DSWorkflowStepTypesDSDocGen, root.Docusign.RecordToNever);
  }
}(this, function(ApiClient, DSDocGenStepInput, DSWorkflowStepTypesDSDocGen, RecordToNever) {
  'use strict';


  /**
   * The DSDocGenStep model module.
   * @module model/DSDocGenStep
   */

  /**
   * Constructs a new <code>DSDocGenStep</code>.
   * @alias module:model/DSDocGenStep
   * @class
   * @param config {module:model/RecordToNever} 
   * @param id {String} 
   * @param input {module:model/DSDocGenStepInput} 
   * @param name {String} 
   * @param output {Object.<String, Object>} A Record of strings to Strings, Variables, or Transformation Expressions
   * @param type {module:model/DSWorkflowStepTypesDSDocGen} 
   */
  var exports = function(config, id, input, name, output, type) {
    var _this = this;

    _this['config'] = config;    _this['id'] = id;    _this['input'] = input;    _this['name'] = name;    _this['output'] = output;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSDocGenStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSDocGenStep} obj Optional instance to populate.
   * @return {module:model/DSDocGenStep} The populated <code>DSDocGenStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('config')) {
        obj['config'] = RecordToNever.constructFromObject(data['config']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = DSDocGenStepInput.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = ApiClient.convertToType(data['output'], {'String': Object});
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesDSDocGen.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecordToNever} config
   */
  exports.prototype['config'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/DSDocGenStepInput} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A Record of strings to Strings, Variables, or Transformation Expressions
   * @member {Object.<String, Object>} output
   */
  exports.prototype['output'] = undefined;
  /**
   * @member {module:model/DSWorkflowStepTypesDSDocGen} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


