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
    define(['ApiClient', 'model/GetConfigurationInstancesResponseConfigInstances'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetConfigurationInstancesResponseConfigInstances'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.GetConfigurationInstancesResponse = factory(root.Docusign.ApiClient, root.Docusign.GetConfigurationInstancesResponseConfigInstances);
  }
}(this, function(ApiClient, GetConfigurationInstancesResponseConfigInstances) {
  'use strict';


  /**
   * The GetConfigurationInstancesResponse model module.
   * @module model/GetConfigurationInstancesResponse
   */

  /**
   * Constructs a new <code>GetConfigurationInstancesResponse</code>.
   * @alias module:model/GetConfigurationInstancesResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetConfigurationInstancesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetConfigurationInstancesResponse} obj Optional instance to populate.
   * @return {module:model/GetConfigurationInstancesResponse} The populated <code>GetConfigurationInstancesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('configInstances')) {
        obj['configInstances'] = ApiClient.convertToType(data['configInstances'], [GetConfigurationInstancesResponseConfigInstances]);
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('workflowDefinitionId')) {
        obj['workflowDefinitionId'] = ApiClient.convertToType(data['workflowDefinitionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GetConfigurationInstancesResponseConfigInstances>} configInstances
   */
  exports.prototype['configInstances'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {String} workflowDefinitionId
   */
  exports.prototype['workflowDefinitionId'] = undefined;



  return exports;
}));


