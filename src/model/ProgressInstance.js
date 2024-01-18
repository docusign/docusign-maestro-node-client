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
    root.Docusign.ProgressInstance = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ProgressInstance model module.
   * @module model/ProgressInstance
   */

  /**
   * Constructs a new <code>ProgressInstance</code>.
   * The progress information for a workflow instance
   * @alias module:model/ProgressInstance
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ProgressInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProgressInstance} obj Optional instance to populate.
   * @return {module:model/ProgressInstance} The populated <code>ProgressInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('completedSteps')) {
        obj['completedSteps'] = ApiClient.convertToType(data['completedSteps'], 'Number');
      }
      if (data.hasOwnProperty('currentCompletedStepName')) {
        obj['currentCompletedStepName'] = ApiClient.convertToType(data['currentCompletedStepName'], 'String');
      }
      if (data.hasOwnProperty('totalSteps')) {
        obj['totalSteps'] = ApiClient.convertToType(data['totalSteps'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of completed steps for this workflow instance
   * @member {Number} completedSteps
   */
  exports.prototype['completedSteps'] = undefined;
  /**
   * The last completed step name
   * @member {String} currentCompletedStepName
   */
  exports.prototype['currentCompletedStepName'] = undefined;
  /**
   * The total number of steps for this workflow instance
   * @member {Number} totalSteps
   */
  exports.prototype['totalSteps'] = undefined;



  return exports;
}));


