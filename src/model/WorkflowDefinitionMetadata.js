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
    define(['ApiClient', 'model/WorkflowMetadataStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowMetadataStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowDefinitionMetadata = factory(root.Docusign.ApiClient, root.Docusign.WorkflowMetadataStatus);
  }
}(this, function(ApiClient, WorkflowMetadataStatus) {
  'use strict';


  /**
   * The WorkflowDefinitionMetadata model module.
   * @module model/WorkflowDefinitionMetadata
   */

  /**
   * Constructs a new <code>WorkflowDefinitionMetadata</code>.
   * A DS workflow definition's metadata.
   * @alias module:model/WorkflowDefinitionMetadata
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>WorkflowDefinitionMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowDefinitionMetadata} obj Optional instance to populate.
   * @return {module:model/WorkflowDefinitionMetadata} The populated <code>WorkflowDefinitionMetadata</code> instance.
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
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('isDraft')) {
        obj['isDraft'] = ApiClient.convertToType(data['isDraft'], 'Boolean');
      }
      if (data.hasOwnProperty('lastDeployedId')) {
        obj['lastDeployedId'] = ApiClient.convertToType(data['lastDeployedId'], 'String');
      }
      if (data.hasOwnProperty('lastDeployedVersion')) {
        obj['lastDeployedVersion'] = ApiClient.convertToType(data['lastDeployedVersion'], 'String');
      }
      if (data.hasOwnProperty('lastUpdatedDate')) {
        obj['lastUpdatedDate'] = ApiClient.convertToType(data['lastUpdatedDate'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = WorkflowMetadataStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('triggerUrl')) {
        obj['triggerUrl'] = ApiClient.convertToType(data['triggerUrl'], 'String');
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} isDraft
   */
  exports.prototype['isDraft'] = undefined;
  /**
   * @member {String} lastDeployedId
   */
  exports.prototype['lastDeployedId'] = undefined;
  /**
   * @member {String} lastDeployedVersion
   */
  exports.prototype['lastDeployedVersion'] = undefined;
  /**
   * The date the workflow was last updated
   * @member {Date} lastUpdatedDate
   */
  exports.prototype['lastUpdatedDate'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/WorkflowMetadataStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} triggerUrl
   */
  exports.prototype['triggerUrl'] = undefined;



  return exports;
}));


