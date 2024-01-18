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
    define(['ApiClient', 'model/DeployStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeployStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DeployRequest = factory(root.Docusign.ApiClient, root.Docusign.DeployStatus);
  }
}(this, function(ApiClient, DeployStatus) {
  'use strict';


  /**
   * The DeployRequest model module.
   * @module model/DeployRequest
   */

  /**
   * Constructs a new <code>DeployRequest</code>.
   * @alias module:model/DeployRequest
   * @class
   * @param deploymentStatus {module:model/DeployStatus} 
   */
  var exports = function(deploymentStatus) {
    var _this = this;

    _this['deploymentStatus'] = deploymentStatus;
  };

  /**
   * Constructs a <code>DeployRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeployRequest} obj Optional instance to populate.
   * @return {module:model/DeployRequest} The populated <code>DeployRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deploymentStatus')) {
        obj['deploymentStatus'] = DeployStatus.constructFromObject(data['deploymentStatus']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DeployStatus} deploymentStatus
   */
  exports.prototype['deploymentStatus'] = undefined;



  return exports;
}));


