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
    define(['ApiClient', 'model/WorkflowDefinition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowDefinition'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CreateOrUpdateWorkflowDefinitionRequestBody = factory(root.Docusign.ApiClient, root.Docusign.WorkflowDefinition);
  }
}(this, function(ApiClient, WorkflowDefinition) {
  'use strict';


  /**
   * The CreateOrUpdateWorkflowDefinitionRequestBody model module.
   * @module model/CreateOrUpdateWorkflowDefinitionRequestBody
   */

  /**
   * Constructs a new <code>CreateOrUpdateWorkflowDefinitionRequestBody</code>.
   * A request body that used for create or update workflow definition
   * @alias module:model/CreateOrUpdateWorkflowDefinitionRequestBody
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CreateOrUpdateWorkflowDefinitionRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateOrUpdateWorkflowDefinitionRequestBody} obj Optional instance to populate.
   * @return {module:model/CreateOrUpdateWorkflowDefinitionRequestBody} The populated <code>CreateOrUpdateWorkflowDefinitionRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('workflowDefinition')) {
        obj['workflowDefinition'] = WorkflowDefinition.constructFromObject(data['workflowDefinition']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WorkflowDefinition} workflowDefinition
   */
  exports.prototype['workflowDefinition'] = undefined;



  return exports;
}));


