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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.TriggerWorkflowViaPostResponse = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TriggerWorkflowViaPostResponse model module.
   * @module model/TriggerWorkflowViaPostResponse
   */

  /**
   * Constructs a new <code>TriggerWorkflowViaPostResponse</code>.
   * Trigger workflow via POST response details
   * @alias module:model/TriggerWorkflowViaPostResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TriggerWorkflowViaPostResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TriggerWorkflowViaPostResponse} obj Optional instance to populate.
   * @return {module:model/TriggerWorkflowViaPostResponse} The populated <code>TriggerWorkflowViaPostResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instanceId')) {
        obj['instanceId'] = ApiClient.convertToType(data['instanceId'], 'String');
      }
      if (data.hasOwnProperty('workflowInstanceUrl')) {
        obj['workflowInstanceUrl'] = ApiClient.convertToType(data['workflowInstanceUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} instanceId
   */
  exports.prototype['instanceId'] = undefined;
  /**
   * Instance specific url that can be used to be redirected to a workflow instance
   * @member {String} workflowInstanceUrl
   */
  exports.prototype['workflowInstanceUrl'] = undefined;



  return exports;
}));


