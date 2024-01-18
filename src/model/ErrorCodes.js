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
    root.Docusign.ErrorCodes = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class ErrorCodes.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "ERR_10001"
     * @const
     */
    "_10001": "ERR_10001",
    /**
     * value: "ERR_10002"
     * @const
     */
    "_10002": "ERR_10002",
    /**
     * value: "ERR_10003"
     * @const
     */
    "_10003": "ERR_10003",
    /**
     * value: "ERR_10004"
     * @const
     */
    "_10004": "ERR_10004",
    /**
     * value: "ERR_10005"
     * @const
     */
    "_10005": "ERR_10005",
    /**
     * value: "ERR_10006"
     * @const
     */
    "_10006": "ERR_10006",
    /**
     * value: "ERR_10007"
     * @const
     */
    "_10007": "ERR_10007",
    /**
     * value: "ERR_10008"
     * @const
     */
    "_10008": "ERR_10008",
    /**
     * value: "ERR_10009"
     * @const
     */
    "_10009": "ERR_10009",
    /**
     * value: "ERR_10101"
     * @const
     */
    "_10101": "ERR_10101",
    /**
     * value: "ERR_10201"
     * @const
     */
    "_10201": "ERR_10201",
    /**
     * value: "ERR_10202"
     * @const
     */
    "_10202": "ERR_10202",
    /**
     * value: "ERR_10301"
     * @const
     */
    "_10301": "ERR_10301",
    /**
     * value: "ERR_10302"
     * @const
     */
    "_10302": "ERR_10302",
    /**
     * value: "ERR_10801"
     * @const
     */
    "_10801": "ERR_10801",
    /**
     * value: "ERR_10802"
     * @const
     */
    "_10802": "ERR_10802",
    /**
     * value: "ERR_10999"
     * @const
     */
    "_10999": "ERR_10999"  };

  /**
   * Returns a <code>ErrorCodes</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ErrorCodes} The enum <code>ErrorCodes</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


