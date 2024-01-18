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
    define(['ApiClient', 'model/DSWorkflowVariableSourceTypesStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowVariableSourceTypesStep'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowVariableFromStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowVariableSourceTypesStep);
  }
}(this, function(ApiClient, DSWorkflowVariableSourceTypesStep) {
  'use strict';


  /**
   * The DSWorkflowVariableFromStep model module.
   * @module model/DSWorkflowVariableFromStep
   */

  /**
   * Constructs a new <code>DSWorkflowVariableFromStep</code>.
   * DS Workflow Variable from a Step
   * @alias module:model/DSWorkflowVariableFromStep
   * @class
   * @param key {String} 
   * @param propertyName {String} 
   * @param source {module:model/DSWorkflowVariableSourceTypesStep} 
   * @param stepId {String} 
   */
  var exports = function(key, propertyName, source, stepId) {
    var _this = this;

    _this['key'] = key;    _this['propertyName'] = propertyName;    _this['source'] = source;    _this['stepId'] = stepId;
  };

  /**
   * Constructs a <code>DSWorkflowVariableFromStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowVariableFromStep} obj Optional instance to populate.
   * @return {module:model/DSWorkflowVariableFromStep} The populated <code>DSWorkflowVariableFromStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('propertyName')) {
        obj['propertyName'] = ApiClient.convertToType(data['propertyName'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = DSWorkflowVariableSourceTypesStep.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('stepId')) {
        obj['stepId'] = ApiClient.convertToType(data['stepId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} propertyName
   */
  exports.prototype['propertyName'] = undefined;
  /**
   * @member {module:model/DSWorkflowVariableSourceTypesStep} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {String} stepId
   */
  exports.prototype['stepId'] = undefined;



  return exports;
}));


