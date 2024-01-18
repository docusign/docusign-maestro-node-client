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
    define(['ApiClient', 'model/DSWorkflowVariableSourceTypesParticipant', 'model/ParticipantKeys'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowVariableSourceTypesParticipant'), require('./ParticipantKeys'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSWorkflowVariableFromParticipant = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowVariableSourceTypesParticipant, root.Docusign.ParticipantKeys);
  }
}(this, function(ApiClient, DSWorkflowVariableSourceTypesParticipant, ParticipantKeys) {
  'use strict';


  /**
   * The DSWorkflowVariableFromParticipant model module.
   * @module model/DSWorkflowVariableFromParticipant
   */

  /**
   * Constructs a new <code>DSWorkflowVariableFromParticipant</code>.
   * DS Workflow Variable from a Participant
   * @alias module:model/DSWorkflowVariableFromParticipant
   * @class
   * @param key {module:model/ParticipantKeys} 
   * @param participantId {String} 
   * @param source {module:model/DSWorkflowVariableSourceTypesParticipant} 
   */
  var exports = function(key, participantId, source) {
    var _this = this;

    _this['key'] = key;    _this['participantId'] = participantId;    _this['source'] = source;
  };

  /**
   * Constructs a <code>DSWorkflowVariableFromParticipant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSWorkflowVariableFromParticipant} obj Optional instance to populate.
   * @return {module:model/DSWorkflowVariableFromParticipant} The populated <code>DSWorkflowVariableFromParticipant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ParticipantKeys.constructFromObject(data['key']);
      }
      if (data.hasOwnProperty('participantId')) {
        obj['participantId'] = ApiClient.convertToType(data['participantId'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = DSWorkflowVariableSourceTypesParticipant.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ParticipantKeys} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} participantId
   */
  exports.prototype['participantId'] = undefined;
  /**
   * @member {module:model/DSWorkflowVariableSourceTypesParticipant} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


