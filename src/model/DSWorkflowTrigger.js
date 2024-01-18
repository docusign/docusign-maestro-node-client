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
    define(['ApiClient', 'model/DSWorkflowTriggerTypes', 'model/DSWorkflowVariableRecord', 'model/EventTypes', 'model/HttpTypes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowTriggerTypes'), require('./DSWorkflowVariableRecord'), require('./EventTypes'), require('./HttpTypes'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowTrigger = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowTriggerTypes, root.Docusign.DSWorkflowVariableRecord, root.Docusign.EventTypes, root.Docusign.HttpTypes);
  }
}(this, function(ApiClient, DSWorkflowTriggerTypes, DSWorkflowVariableRecord, EventTypes, HttpTypes) {
  'use strict';


  /**
   * The DSWorkflowTrigger model module.
   * @module model/DSWorkflowTrigger
   */

  /**
   * Constructs a new <code>DSWorkflowTrigger</code>.
   * A DS workflow trigger.
   * @alias module:model/DSWorkflowTrigger
   * @class
   * @param httpType {module:model/HttpTypes} 
   * @param id {String} 
   * @param input {module:model/DSWorkflowVariableRecord} 
   * @param name {String} 
   * @param output {module:model/DSWorkflowVariableRecord} 
   * @param type {module:model/DSWorkflowTriggerTypes} 
   */
  var exports = function(httpType, id, input, name, output, type) {
    var _this = this;

    _this['httpType'] = httpType;    _this['id'] = id;    _this['input'] = input;    _this['name'] = name;    _this['output'] = output;    _this['type'] = type;
  };

  /**
   * Constructs a <code>DSWorkflowTrigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowTrigger} obj Optional instance to populate.
   * @return {module:model/DSWorkflowTrigger} The populated <code>DSWorkflowTrigger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = EventTypes.constructFromObject(data['eventType']);
      }
      if (data.hasOwnProperty('httpType')) {
        obj['httpType'] = HttpTypes.constructFromObject(data['httpType']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('input')) {
        obj['input'] = DSWorkflowVariableRecord.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = DSWorkflowVariableRecord.constructFromObject(data['output']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = DSWorkflowTriggerTypes.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EventTypes} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * @member {module:model/HttpTypes} httpType
   */
  exports.prototype['httpType'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/DSWorkflowVariableRecord} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/DSWorkflowVariableRecord} output
   */
  exports.prototype['output'] = undefined;
  /**
   * @member {module:model/DSWorkflowTriggerTypes} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


