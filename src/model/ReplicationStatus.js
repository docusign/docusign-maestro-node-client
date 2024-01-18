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
    root.Docusign.ReplicationStatus = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class ReplicationStatus.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Deploy Replication In Progress"
     * @const
     */
    "deployReplicationInProgress": "Deploy Replication In Progress",
    /**
     * value: "Deploy Replicated"
     * @const
     */
    "deployReplicated": "Deploy Replicated",
    /**
     * value: "Deploy Replication Failed"
     * @const
     */
    "deployReplicationFailed": "Deploy Replication Failed",
    /**
     * value: "Not Replicated"
     * @const
     */
    "notReplicated": "Not Replicated",
    /**
     * value: "Delete Replication in Progress"
     * @const
     */
    "deleteReplicationInProgress": "Delete Replication in Progress",
    /**
     * value: "Delete Replicated"
     * @const
     */
    "deleteReplicated": "Delete Replicated",
    /**
     * value: "Delete Replication Failed"
     * @const
     */
    "deleteReplicationFailed": "Delete Replication Failed",
    /**
     * value: "Unpublish replication in Progress"
     * @const
     */
    "unpublishReplicationInProgress": "Unpublish replication in Progress",
    /**
     * value: "Unpublish Replicated"
     * @const
     */
    "unpublishReplicated": "Unpublish Replicated",
    /**
     * value: "Unpublish Replication Failed"
     * @const
     */
    "unpublishReplicationFailed": "Unpublish Replication Failed"  };

  /**
   * Returns a <code>ReplicationStatus</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/ReplicationStatus} The enum <code>ReplicationStatus</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


