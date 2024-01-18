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
    root.Docusign.TriggerPayload = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TriggerPayload model module.
   * @module model/TriggerPayload
   */

  /**
   * Constructs a new <code>TriggerPayload</code>.
   * JSON payload that will be passed to the triggered workflow
   * @alias module:model/TriggerPayload
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TriggerPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TriggerPayload} obj Optional instance to populate.
   * @return {module:model/TriggerPayload} The populated <code>TriggerPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('instanceName')) {
        obj['instanceName'] = ApiClient.convertToType(data['instanceName'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
      }
      if (data.hasOwnProperty('participants')) {
        obj['participants'] = ApiClient.convertToType(data['participants'], Object);
      }
      if (data.hasOwnProperty('payload')) {
        obj['payload'] = ApiClient.convertToType(data['payload'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} instanceName
   */
  exports.prototype['instanceName'] = undefined;
  /**
   * @member {Object} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Object} participants
   */
  exports.prototype['participants'] = undefined;
  /**
   * @member {Object} payload
   */
  exports.prototype['payload'] = undefined;



  return exports;
}));


