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
    root.Docusign.StartedByInstance = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The StartedByInstance model module.
   * @module model/StartedByInstance
   */

  /**
   * Constructs a new <code>StartedByInstance</code>.
   * The started by information for a workflow instance
   * @alias module:model/StartedByInstance
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>StartedByInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartedByInstance} obj Optional instance to populate.
   * @return {module:model/StartedByInstance} The populated <code>StartedByInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startedById')) {
        obj['startedById'] = ApiClient.convertToType(data['startedById'], 'String');
      }
      if (data.hasOwnProperty('startedByName')) {
        obj['startedByName'] = ApiClient.convertToType(data['startedByName'], 'String');
      }
      if (data.hasOwnProperty('startedByType')) {
        obj['startedByType'] = ApiClient.convertToType(data['startedByType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} startedById
   */
  exports.prototype['startedById'] = undefined;
  /**
   * The user name of the person who starts a workflow Instance
   * @member {String} startedByName
   */
  exports.prototype['startedByName'] = undefined;
  /**
   * @member {module:model/StartedByInstance.StartedByTypeEnum} startedByType
   */
  exports.prototype['startedByType'] = undefined;


  /**
   * Allowed values for the <code>startedByType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StartedByTypeEnum = {
    /**
     * value: "Anonymous"
     * @const
     */
    anonymous: "Anonymous",

    /**
     * value: "Preparer"
     * @const
     */
    preparer: "Preparer",

    /**
     * value: "Participant"
     * @const
     */
    participant: "Participant"
  };


  return exports;
}));


