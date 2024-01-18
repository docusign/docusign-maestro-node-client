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
    define(['ApiClient', 'model/WorkflowDateTime', 'model/WorkflowStepErrorError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowDateTime'), require('./WorkflowStepErrorError'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowStepError = factory(root.Docusign.ApiClient, root.Docusign.WorkflowDateTime, root.Docusign.WorkflowStepErrorError);
  }
}(this, function(ApiClient, WorkflowDateTime, WorkflowStepErrorError) {
  'use strict';


  /**
   * The WorkflowStepError model module.
   * @module model/WorkflowStepError
   */

  /**
   * Constructs a new <code>WorkflowStepError</code>.
   * Workflow Step History Error
   * @alias module:model/WorkflowStepError
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkflowStepError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowStepError} obj Optional instance to populate.
   * @return {module:model/WorkflowStepError} The populated <code>WorkflowStepError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = WorkflowDateTime.constructFromObject(data['endTime']);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = WorkflowStepErrorError.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = WorkflowDateTime.constructFromObject(data['startTime']);
      }
    }
    return obj;
  }

  /**
   * Error code message
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Track the End time of the error retry/processed
   * @member {module:model/WorkflowDateTime} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {module:model/WorkflowStepErrorError} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The workflow step name where the error occurred
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Track Start time of the error occurred
   * @member {module:model/WorkflowDateTime} startTime
   */
  exports.prototype['startTime'] = undefined;



  return exports;
}));


