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
    define(['ApiClient', 'model/ValidationErrors', 'model/WorkflowDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ValidationErrors'), require('./WorkflowDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.NewOrUpdatedWorkflowDefinitionResponse = factory(root.Docusign.ApiClient, root.Docusign.ValidationErrors, root.Docusign.WorkflowDefinition);
  }
}(this, function(ApiClient, ValidationErrors, WorkflowDefinition) {
  'use strict';


  /**
   * The NewOrUpdatedWorkflowDefinitionResponse model module.
   * @module model/NewOrUpdatedWorkflowDefinitionResponse
   */

  /**
   * Constructs a new <code>NewOrUpdatedWorkflowDefinitionResponse</code>.
   * @alias module:model/NewOrUpdatedWorkflowDefinitionResponse
   * @class
   * @param isValidWorkflowDefinition {Boolean} 
   * @param validationErrors {Array.<module:model/ValidationErrors>} 
   * @param workflowDefinition {module:model/WorkflowDefinition} 
   * @param workflowDefinitionId {String} 
   */
  var exports = function(isValidWorkflowDefinition, validationErrors, workflowDefinition, workflowDefinitionId) {
    var _this = this;

    _this['isValidWorkflowDefinition'] = isValidWorkflowDefinition;    _this['validationErrors'] = validationErrors;    _this['workflowDefinition'] = workflowDefinition;    _this['workflowDefinitionId'] = workflowDefinitionId;
  };

  /**
   * Constructs a <code>NewOrUpdatedWorkflowDefinitionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewOrUpdatedWorkflowDefinitionResponse} obj Optional instance to populate.
   * @return {module:model/NewOrUpdatedWorkflowDefinitionResponse} The populated <code>NewOrUpdatedWorkflowDefinitionResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isValidWorkflowDefinition')) {
        obj['isValidWorkflowDefinition'] = ApiClient.convertToType(data['isValidWorkflowDefinition'], 'Boolean');
      }
      if (data.hasOwnProperty('validationErrors')) {
        obj['validationErrors'] = ApiClient.convertToType(data['validationErrors'], [ValidationErrors]);
      }
      if (data.hasOwnProperty('workflowDefinition')) {
        obj['workflowDefinition'] = WorkflowDefinition.constructFromObject(data['workflowDefinition']);
      }
      if (data.hasOwnProperty('workflowDefinitionId')) {
        obj['workflowDefinitionId'] = ApiClient.convertToType(data['workflowDefinitionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isValidWorkflowDefinition
   */
  exports.prototype['isValidWorkflowDefinition'] = undefined;
  /**
   * @member {Array.<module:model/ValidationErrors>} validationErrors
   */
  exports.prototype['validationErrors'] = undefined;
  /**
   * @member {module:model/WorkflowDefinition} workflowDefinition
   */
  exports.prototype['workflowDefinition'] = undefined;
  /**
   * @member {String} workflowDefinitionId
   */
  exports.prototype['workflowDefinitionId'] = undefined;



  return exports;
}));


