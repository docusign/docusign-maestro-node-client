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
    define(['ApiClient', 'model/WorkflowStepError', 'model/WorkflowStepHistoryState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowStepError'), require('./WorkflowStepHistoryState'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowStepHistory = factory(root.Docusign.ApiClient, root.Docusign.WorkflowStepError, root.Docusign.WorkflowStepHistoryState);
  }
}(this, function(ApiClient, WorkflowStepError, WorkflowStepHistoryState) {
  'use strict';


  /**
   * The WorkflowStepHistory model module.
   * @module model/WorkflowStepHistory
   */

  /**
   * Constructs a new <code>WorkflowStepHistory</code>.
   * Details (history) of a Workflow Instance Step
   * @alias module:model/WorkflowStepHistory
   * @class
   * @param dacId {String} 
   * @param stepName {String} Name of the workflow step (DS Scope)
   * @param stepState {module:model/WorkflowStepHistoryState} 
   * @param userId {String} 
   */
  var exports = function(dacId, stepName, stepState, userId) {
    var _this = this;

    _this['dacId'] = dacId;    _this['stepName'] = stepName;    _this['stepState'] = stepState;    _this['userId'] = userId;
  };

  /**
   * Constructs a <code>WorkflowStepHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowStepHistory} obj Optional instance to populate.
   * @return {module:model/WorkflowStepHistory} The populated <code>WorkflowStepHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('dacId')) {
        obj['dacId'] = ApiClient.convertToType(data['dacId'], 'String');
      }
      if (data.hasOwnProperty('dsStepId')) {
        obj['dsStepId'] = ApiClient.convertToType(data['dsStepId'], 'String');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = WorkflowStepError.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('outputModuleProperties')) {
        obj['outputModuleProperties'] = ApiClient.convertToType(data['outputModuleProperties'], Object);
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
      if (data.hasOwnProperty('stepId')) {
        obj['stepId'] = ApiClient.convertToType(data['stepId'], 'String');
      }
      if (data.hasOwnProperty('stepName')) {
        obj['stepName'] = ApiClient.convertToType(data['stepName'], 'String');
      }
      if (data.hasOwnProperty('stepState')) {
        obj['stepState'] = WorkflowStepHistoryState.constructFromObject(data['stepState']);
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} dacId
   */
  exports.prototype['dacId'] = undefined;
  /**
   * @member {String} dsStepId
   */
  exports.prototype['dsStepId'] = undefined;
  /**
   * Track the End time of the Workflow Step
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {module:model/WorkflowStepError} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Object} outputModuleProperties
   */
  exports.prototype['outputModuleProperties'] = undefined;
  /**
   * Track the Start time of the Workflow Step
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * The Step Id of the workflow step in the workflow instance
   * @member {String} stepId
   */
  exports.prototype['stepId'] = undefined;
  /**
   * Name of the workflow step (DS Scope)
   * @member {String} stepName
   */
  exports.prototype['stepName'] = undefined;
  /**
   * @member {module:model/WorkflowStepHistoryState} stepState
   */
  exports.prototype['stepState'] = undefined;
  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


