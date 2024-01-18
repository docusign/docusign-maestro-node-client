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
    root.Docusign.DSWorkflowLane = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DSWorkflowLane model module.
   * @module model/DSWorkflowLane
   */

  /**
   * Constructs a new <code>DSWorkflowLane</code>.
   * @alias module:model/DSWorkflowLane
   * @class
   * @param laneId {String} 
   * @param laneSteps {Array.<Object>} A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   */
  var exports = function(laneId, laneSteps) {
    var _this = this;

    _this['laneId'] = laneId;    _this['laneSteps'] = laneSteps;
  };

  /**
   * Constructs a <code>DSWorkflowLane</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowLane} obj Optional instance to populate.
   * @return {module:model/DSWorkflowLane} The populated <code>DSWorkflowLane</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('laneId')) {
        obj['laneId'] = ApiClient.convertToType(data['laneId'], 'String');
      }
      if (data.hasOwnProperty('laneSteps')) {
        obj['laneSteps'] = ApiClient.convertToType(data['laneSteps'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} laneId
   */
  exports.prototype['laneId'] = undefined;
  /**
   * A list of DS Workflow Steps. Each element in the list should be any of the following object models: [#/definitions/DSServiceStep, #/definitions/DSTransformationStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @member {Array.<Object>} laneSteps
   */
  exports.prototype['laneSteps'] = undefined;



  return exports;
}));


