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
    define(['ApiClient', 'model/ProgressInstance', 'model/StartedByInstance', 'model/WorkflowInstanceState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProgressInstance'), require('./StartedByInstance'), require('./WorkflowInstanceState'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowInstance = factory(root.Docusign.ApiClient, root.Docusign.ProgressInstance, root.Docusign.StartedByInstance, root.Docusign.WorkflowInstanceState);
  }
}(this, function(ApiClient, ProgressInstance, StartedByInstance, WorkflowInstanceState) {
  'use strict';


  /**
   * The WorkflowInstance model module.
   * @module model/WorkflowInstance
   */

  /**
   * Constructs a new <code>WorkflowInstance</code>.
   * Details of a Workflow Instance triggered for a Workflow Definition
   * @alias module:model/WorkflowInstance
   * @class
   * @param creatorId {String} 
   * @param dacId {String} 
   * @param instanceState {module:model/WorkflowInstanceState} 
   * @param templateId {String} 
   * @param users {Object.<String, String>} Contains the list of Users and Steps mapping
   */
  var exports = function(creatorId, dacId, instanceState, templateId, users) {
    var _this = this;

    _this['creatorId'] = creatorId;    _this['dacId'] = dacId;    _this['instanceState'] = instanceState;    _this['templateId'] = templateId;    _this['users'] = users;
  };

  /**
   * Constructs a <code>WorkflowInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowInstance} obj Optional instance to populate.
   * @return {module:model/WorkflowInstance} The populated <code>WorkflowInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('creatorId')) {
        obj['creatorId'] = ApiClient.convertToType(data['creatorId'], 'String');
      }
      if (data.hasOwnProperty('dacId')) {
        obj['dacId'] = ApiClient.convertToType(data['dacId'], 'String');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('instanceName')) {
        obj['instanceName'] = ApiClient.convertToType(data['instanceName'], 'String');
      }
      if (data.hasOwnProperty('instanceState')) {
        obj['instanceState'] = WorkflowInstanceState.constructFromObject(data['instanceState']);
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ProgressInstance.constructFromObject(data['progress']);
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
      if (data.hasOwnProperty('startedBy')) {
        obj['startedBy'] = StartedByInstance.constructFromObject(data['startedBy']);
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], 'String');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} creatorId
   */
  exports.prototype['creatorId'] = undefined;
  /**
   * @member {String} dacId
   */
  exports.prototype['dacId'] = undefined;
  /**
   * Track the End time of the Workflow Instance
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * The friendly name of the particular workflow instance
   * @member {String} instanceName
   */
  exports.prototype['instanceName'] = undefined;
  /**
   * @member {module:model/WorkflowInstanceState} instanceState
   */
  exports.prototype['instanceState'] = undefined;
  /**
   * @member {module:model/ProgressInstance} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * Track the Start time of the Workflow Instance
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {module:model/StartedByInstance} startedBy
   */
  exports.prototype['startedBy'] = undefined;
  /**
   * @member {String} templateId
   */
  exports.prototype['templateId'] = undefined;
  /**
   * Contains the list of Users and Steps mapping
   * @member {Object.<String, String>} users
   */
  exports.prototype['users'] = undefined;



  return exports;
}));


