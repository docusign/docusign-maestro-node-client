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
    root.Docusign.EventTypes = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class EventTypes.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "envelope-sent"
     * @const
     */
    "envelopeSent": "envelope-sent",
    /**
     * value: "envelope-delivered"
     * @const
     */
    "envelopeDelivered": "envelope-delivered",
    /**
     * value: "envelope-completed"
     * @const
     */
    "envelopeCompleted": "envelope-completed",
    /**
     * value: "envelope-declined"
     * @const
     */
    "envelopeDeclined": "envelope-declined",
    /**
     * value: "envelope-voided"
     * @const
     */
    "envelopeVoided": "envelope-voided",
    /**
     * value: "envelope-created"
     * @const
     */
    "envelopeCreated": "envelope-created",
    /**
     * value: "envelope-resent"
     * @const
     */
    "envelopeResent": "envelope-resent",
    /**
     * value: "envelope-corrected"
     * @const
     */
    "envelopeCorrected": "envelope-corrected",
    /**
     * value: "envelope-purge"
     * @const
     */
    "envelopePurge": "envelope-purge",
    /**
     * value: "envelope-deleted"
     * @const
     */
    "envelopeDeleted": "envelope-deleted",
    /**
     * value: "envelope-discard"
     * @const
     */
    "envelopeDiscard": "envelope-discard",
    /**
     * value: "Delivery Failed"
     * @const
     */
    "deliveryFailed": "Delivery Failed",
    /**
     * value: "Authentication Failed"
     * @const
     */
    "authenticationFailed": "Authentication Failed",
    /**
     * value: "Sent"
     * @const
     */
    "sent": "Sent",
    /**
     * value: "Delivered"
     * @const
     */
    "delivered": "Delivered",
    /**
     * value: "Signed"
     * @const
     */
    "signed": "Signed",
    /**
     * value: "Completed"
     * @const
     */
    "completed": "Completed"  };

  /**
   * Returns a <code>EventTypes</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EventTypes} The enum <code>EventTypes</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


