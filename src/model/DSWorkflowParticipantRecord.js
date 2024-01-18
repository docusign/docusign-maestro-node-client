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
    define(['ApiClient', 'model/Participant'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Participant'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowParticipantRecord = factory(root.Docusign.ApiClient, root.Docusign.Participant);
  }
}(this, function(ApiClient, Participant) {
  'use strict';


  /**
   * The DSWorkflowParticipantRecord model module.
   * @module model/DSWorkflowParticipantRecord
   */

  /**
   * Constructs a new <code>DSWorkflowParticipantRecord</code>.
   * A DS Workflow participant record
   * @alias module:model/DSWorkflowParticipantRecord
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;



    return _this;
  };

  /**
   * Constructs a <code>DSWorkflowParticipantRecord</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowParticipantRecord} obj Optional instance to populate.
   * @return {module:model/DSWorkflowParticipantRecord} The populated <code>DSWorkflowParticipantRecord</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Participant');

    }
    return obj;
  }




  return exports;
}));


