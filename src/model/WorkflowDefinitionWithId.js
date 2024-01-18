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
    define(['ApiClient', 'model/AowUUID', 'model/LastDeployedId', 'model/ValidationErrors', 'model/WorkflowDefinition', 'model/WorkflowMetadataStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AowUUID'), require('./LastDeployedId'), require('./ValidationErrors'), require('./WorkflowDefinition'), require('./WorkflowMetadataStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowDefinitionWithId = factory(root.Docusign.ApiClient, root.Docusign.AowUUID, root.Docusign.LastDeployedId, root.Docusign.ValidationErrors, root.Docusign.WorkflowDefinition, root.Docusign.WorkflowMetadataStatus);
  }
}(this, function(ApiClient, AowUUID, LastDeployedId, ValidationErrors, WorkflowDefinition, WorkflowMetadataStatus) {
  'use strict';


  /**
   * The WorkflowDefinitionWithId model module.
   * @module model/WorkflowDefinitionWithId
   */

  /**
   * Constructs a new <code>WorkflowDefinitionWithId</code>.
   * A DS workflow definition with metadata.
   * @alias module:model/WorkflowDefinitionWithId
   * @class
   * @param id {module:model/AowUUID} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>WorkflowDefinitionWithId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowDefinitionWithId} obj Optional instance to populate.
   * @return {module:model/WorkflowDefinitionWithId} The populated <code>WorkflowDefinitionWithId</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = AowUUID.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('isDraft')) {
        obj['isDraft'] = ApiClient.convertToType(data['isDraft'], 'Boolean');
      }
      if (data.hasOwnProperty('lastDeployedId')) {
        obj['lastDeployedId'] = LastDeployedId.constructFromObject(data['lastDeployedId']);
      }
      if (data.hasOwnProperty('lastDeployedVersion')) {
        obj['lastDeployedVersion'] = ApiClient.convertToType(data['lastDeployedVersion'], 'String');
      }
      if (data.hasOwnProperty('lastDeployedWorkflowDefinition')) {
        obj['lastDeployedWorkflowDefinition'] = WorkflowDefinition.constructFromObject(data['lastDeployedWorkflowDefinition']);
      }
      if (data.hasOwnProperty('lastUpdatedDate')) {
        obj['lastUpdatedDate'] = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = WorkflowMetadataStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('triggerUrl')) {
        obj['triggerUrl'] = ApiClient.convertToType(data['triggerUrl'], 'String');
      }
      if (data.hasOwnProperty('validationErrors')) {
        obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], [ValidationErrors]);
      }
      if (data.hasOwnProperty('workflowDefinition')) {
        obj['workflowDefinition'] = WorkflowDefinition.constructFromObject(data['workflowDefinition']);
      }
    }
    return obj;
  }

  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * The date the workflow was created
   * @member {Date} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * @member {module:model/AowUUID} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} isDraft
   */
  exports.prototype['isDraft'] = undefined;
  /**
   * @member {module:model/LastDeployedId} lastDeployedId
   */
  exports.prototype['lastDeployedId'] = undefined;
  /**
   * @member {String} lastDeployedVersion
   */
  exports.prototype['lastDeployedVersion'] = undefined;
  /**
   * @member {module:model/WorkflowDefinition} lastDeployedWorkflowDefinition
   */
  exports.prototype['lastDeployedWorkflowDefinition'] = undefined;
  /**
   * The date the workflow was last updated
   * @member {Date} lastUpdatedDate
   */
  exports.prototype['lastUpdatedDate'] = undefined;
  /**
   * @member {module:model/WorkflowMetadataStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} triggerUrl
   */
  exports.prototype['triggerUrl'] = undefined;
  /**
   * @member {Array.<module:model/ValidationErrors>} validationErrors
   */
  exports.prototype['validationErrors'] = undefined;
  /**
   * @member {module:model/WorkflowDefinition} workflowDefinition
   */
  exports.prototype['workflowDefinition'] = undefined;



  return exports;
}));

