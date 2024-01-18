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
    define(['ApiClient', 'model/WorkflowStepHistory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowStepHistory'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowStepHistoryList = factory(root.Docusign.ApiClient, root.Docusign.WorkflowStepHistory);
  }
}(this, function(ApiClient, WorkflowStepHistory) {
  'use strict';


  /**
   * The WorkflowStepHistoryList model module.
   * @module model/WorkflowStepHistoryList
   */

  /**
   * Constructs a new <code>WorkflowStepHistoryList</code>.
   * Returns the history of the workflow instance steps.
   * @alias module:model/WorkflowStepHistoryList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkflowStepHistoryList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowStepHistoryList} obj Optional instance to populate.
   * @return {module:model/WorkflowStepHistoryList} The populated <code>WorkflowStepHistoryList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resultSize')) {
        obj['resultSize'] = ApiClient.convertToType(data['resultSize'], 'Number');
      }
      if (data.hasOwnProperty('stepHistory')) {
        obj['stepHistory'] = ApiClient.convertToType(data['stepHistory'], [WorkflowStepHistory]);
      }
    }
    return obj;
  }

  /**
   * Total number of workflow step history returned
   * @member {Number} resultSize
   */
  exports.prototype['resultSize'] = undefined;
  /**
   * Array of Workflow Step History
   * @member {Array.<module:model/WorkflowStepHistory>} stepHistory
   */
  exports.prototype['stepHistory'] = undefined;



  return exports;
}));


