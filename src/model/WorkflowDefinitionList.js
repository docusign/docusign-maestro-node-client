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
    define(['ApiClient', 'model/WorkflowDefinitionMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowDefinitionMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowDefinitionList = factory(root.Docusign.ApiClient, root.Docusign.WorkflowDefinitionMetadata);
  }
}(this, function(ApiClient, WorkflowDefinitionMetadata) {
  'use strict';


  /**
   * The WorkflowDefinitionList model module.
   * @module model/WorkflowDefinitionList
   */

  /**
   * Constructs a new <code>WorkflowDefinitionList</code>.
   * Returns a list of workflow definitions' metadata (0 or more).
   * @alias module:model/WorkflowDefinitionList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkflowDefinitionList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowDefinitionList} obj Optional instance to populate.
   * @return {module:model/WorkflowDefinitionList} The populated <code>WorkflowDefinitionList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], [WorkflowDefinitionMetadata]);
      }
    }
    return obj;
  }

  /**
   * Total number of definitions returned
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Array of workflow definition metadata
   * @member {Array.<module:model/WorkflowDefinitionMetadata>} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


