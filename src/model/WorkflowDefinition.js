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
    define(['ApiClient', 'model/DSWorkflowParticipantRecord', 'model/DSWorkflowTrigger', 'model/DSWorkflowVariableRecord', 'model/VersionString'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowParticipantRecord'), require('./DSWorkflowTrigger'), require('./DSWorkflowVariableRecord'), require('./VersionString'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowDefinition = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowParticipantRecord, root.Docusign.DSWorkflowTrigger, root.Docusign.DSWorkflowVariableRecord, root.Docusign.VersionString);
  }
}(this, function(ApiClient, DSWorkflowParticipantRecord, DSWorkflowTrigger, DSWorkflowVariableRecord, VersionString) {
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
   * @param documentVersion {module:model/VersionString} 
   * @param schemaVersion {module:model/VersionString} 
   * @param steps {Array.<Object>} A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @param trigger {module:model/DSWorkflowTrigger} 
   * @param variables {module:model/DSWorkflowVariableRecord} 
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
        obj['documentVersion'] = VersionString.constructFromObject(data['documentVersion']);
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = DSWorkflowParticipantRecord.constructFromObject(data['participants']);
      }
      if (data.hasOwnProperty('schemaVersion')) {
        obj['schemaVersion'] = VersionString.constructFromObject(data['schemaVersion']);
      }
      if (data.hasOwnProperty('steps')) {
        obj['steps'] = ApiClient.convertToType(data['steps'], [Object]);
      }
      if (data.hasOwnProperty('trigger')) {
        obj['trigger'] = DSWorkflowTrigger.constructFromObject(data['trigger']);
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = DSWorkflowVariableRecord.constructFromObject(data['variables']);
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
   * @member {module:model/VersionString} documentVersion
   */
  exports.prototype['documentVersion'] = undefined;
  /**
   * @member {module:model/DSWorkflowParticipantRecord} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * @member {module:model/VersionString} schemaVersion
   */
  exports.prototype['schemaVersion'] = undefined;
  /**
   * A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} steps
   */
  exports.prototype['steps'] = undefined;
  /**
   * @member {module:model/DSWorkflowTrigger} trigger
   */
  exports.prototype['trigger'] = undefined;
  /**
   * @member {module:model/DSWorkflowVariableRecord} variables
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


