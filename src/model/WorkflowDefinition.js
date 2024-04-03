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
    define(['ApiClient', 'model/DSWorkflowTrigger', 'model/Participant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowTrigger'), require('./Participant'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowDefinition = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowTrigger, root.Docusign.Participant);
  }
}(this, function(ApiClient, DSWorkflowTrigger, Participant) {
  'use strict';


  /**
   * The WorkflowDefinition model module.
   * @module model/WorkflowDefinition
   */

  /**
   * Constructs a new <code>WorkflowDefinition</code>.
   * A DS workflow definition.
   * @alias module:model/WorkflowDefinition
   * @class
   * @param accountId {String} 
   * @param documentVersion {String} 
   * @param schemaVersion {String} 
   * @param steps {Array.<Object>} A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param trigger {module:model/DSWorkflowTrigger} 
   * @param variables {Object.<String, Object>} A DS Workflow variable record
   * @param workflowDescription {String} 
   * @param workflowName {String} 
   */
  var exports = function(accountId, documentVersion, schemaVersion, steps, trigger, variables, workflowDescription, workflowName) {
    var _this = this;

    _this['accountId'] = accountId;    _this['documentVersion'] = documentVersion;    _this['schemaVersion'] = schemaVersion;    _this['steps'] = steps;    _this['trigger'] = trigger;    _this['variables'] = variables;    _this['workflowDescription'] = workflowDescription;    _this['workflowName'] = workflowName;
  };

  /**
   * Constructs a <code>WorkflowDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowDefinition} obj Optional instance to populate.
   * @return {module:model/WorkflowDefinition} The populated <code>WorkflowDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('createdByName')) {
        obj['createdByName'] = ApiClient.convertToType(data['createdByName'], 'String');
      }
      if (data.hasOwnProperty('documentVersion')) {
        obj['documentVersion'] = ApiClient.convertToType(data['documentVersion'], 'String');
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], {'String': Participant});
      }
      if (data.hasOwnProperty('schemaVersion')) {
        obj['schemaVersion'] = ApiClient.convertToType(data['schemaVersion'], 'String');
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [Object]);
      }
      if (data.hasOwnProperty('trigger')) {
        obj['trigger'] = DSWorkflowTrigger.constructFromObject(data['trigger']);
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], {'String': Object});
      }
      if (data.hasOwnProperty('workflowDescription')) {
        obj['workflowDescription'] = ApiClient.convertToType(data['workflowDescription'], 'String');
      }
      if (data.hasOwnProperty('workflowName')) {
        obj['workflowName'] = ApiClient.convertToType(data['workflowName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The name of the user who created this workflow definition
   * @member {String} createdByName
   */
  exports.prototype['createdByName'] = undefined;
  /**
   * @member {String} documentVersion
   */
  exports.prototype['documentVersion'] = undefined;
  /**
   * A DS Workflow participant record
   * @member {Object.<String, module:model/Participant>} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * @member {String} schemaVersion
   */
  exports.prototype['schemaVersion'] = undefined;
  /**
   * A list of #/definitions/DSWorkflowStep. Each element is: A DS Workflow Step. This object should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * @member {module:model/DSWorkflowTrigger} trigger
   */
  exports.prototype['trigger'] = undefined;
  /**
   * A DS Workflow variable record
   * @member {Object.<String, Object>} variables
   */
  exports.prototype['variables'] = undefined;
  /**
   * @member {String} workflowDescription
   */
  exports.prototype['workflowDescription'] = undefined;
  /**
   * @member {String} workflowName
   */
  exports.prototype['workflowName'] = undefined;



  return exports;
}));


