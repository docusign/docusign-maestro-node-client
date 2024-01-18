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
    root.Docusign.DSWorkflowComparisonOperatorTypes = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class DSWorkflowComparisonOperatorTypes.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Contains"
     * @const
     */
    "contains": "Contains",
    /**
     * value: "NotContains"
     * @const
     */
    "notContains": "NotContains",
    /**
     * value: "Equal"
     * @const
     */
    "equal": "Equal",
    /**
     * value: "NotEqual"
     * @const
     */
    "notEqual": "NotEqual",
    /**
     * value: "GreaterThan"
     * @const
     */
    "greaterThan": "GreaterThan",
    /**
     * value: "GreaterThanOrEqual"
     * @const
     */
    "greaterThanOrEqual": "GreaterThanOrEqual",
    /**
     * value: "LessThan"
     * @const
     */
    "lessThan": "LessThan",
    /**
     * value: "LessThanOrEqual"
     * @const
     */
    "lessThanOrEqual": "LessThanOrEqual",
    /**
     * value: "StartsWith"
     * @const
     */
    "startsWith": "StartsWith",
    /**
     * value: "NotStartsWith"
     * @const
     */
    "notStartsWith": "NotStartsWith",
    /**
     * value: "EndsWith"
     * @const
     */
    "endsWith": "EndsWith",
    /**
     * value: "NotEndsWith"
     * @const
     */
    "notEndsWith": "NotEndsWith"  };

  /**
   * Returns a <code>DSWorkflowComparisonOperatorTypes</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/DSWorkflowComparisonOperatorTypes} The enum <code>DSWorkflowComparisonOperatorTypes</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


