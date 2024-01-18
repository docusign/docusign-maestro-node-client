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
    define(['ApiClient', 'model/DSSignStepInput', 'model/DSWorkflowStepTypesDSSign', 'model/RecordStringOrVariableOrTransformation', 'model/RecordToNever'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSSignStepInput'), require('./DSWorkflowStepTypesDSSign'), require('./RecordStringOrVariableOrTransformation'), require('./RecordToNever'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSSignStep = factory(root.Docusign.ApiClient, root.Docusign.DSSignStepInput, root.Docusign.DSWorkflowStepTypesDSSign, root.Docusign.RecordStringOrVariableOrTransformation, root.Docusign.RecordToNever);
  }
}(this, function(ApiClient, DSSignStepInput, DSWorkflowStepTypesDSSign, RecordStringOrVariableOrTransformation, RecordToNever) {
  'use strict';


  /**
   * The DSSignStep model module.
   * @module model/DSSignStep
   */

  /**
   * Constructs a new <code>DSSignStep</code>.
   * @alias module:model/DSSignStep
   * @class
   * @param config {module:model/RecordToNever} 
   * @param id {String} 
   * @param input {module:model/DSSignStepInput} 
   * @param name {String} 
   * @param output {module:model/RecordStringOrVariableOrTransformation} 
   * @param type {module:model/DSWorkflowStepTypesDSSign} 
   */
  var exports = function(config, id, input, name, output, type) {
    var _this = this;

    _this['config'] = config;    _this['id'] = id;    _this['input'] = input;    _this['name'] = name;    _this['output'] = output;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSSignStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSSignStep} obj Optional instance to populate.
   * @return {module:model/DSSignStep} The populated <code>DSSignStep</code> instance.
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
        obj['input'] = DSSignStepInput.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = RecordStringOrVariableOrTransformation.constructFromObject(data['output']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowStepTypesDSSign.constructFromObject(data['type']);
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
   * @member {module:model/DSSignStepInput} input
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
   * @member {module:model/DSWorkflowStepTypesDSSign} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


