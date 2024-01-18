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
    root.Docusign.Participant = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The Participant model module.
   * @module model/Participant
   */

  /**
   * Constructs a new <code>Participant</code>.
   * A DS Workflow participant
   * @alias module:model/Participant
   * @class
   * @param participantEmail {String} 
   * @param participantFirstName {String} 
   * @param participantLastName {String} 
   * @param participantRole {String} 
   */
  var exports = function(participantEmail, participantFirstName, participantLastName, participantRole) {
    var _this = this;

    _this['participantEmail'] = participantEmail;    _this['participantFirstName'] = participantFirstName;    _this['participantLastName'] = participantLastName;    _this['participantRole'] = participantRole;
  };

  /**
   * Constructs a <code>Participant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Participant} obj Optional instance to populate.
   * @return {module:model/Participant} The populated <code>Participant</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('participantEmail')) {
        obj['participantEmail'] = ApiClient.convertToType(data['participantEmail'], 'String');
      }
      if (data.hasOwnProperty('participantFirstName')) {
        obj['participantFirstName'] = ApiClient.convertToType(data['participantFirstName'], 'String');
      }
      if (data.hasOwnProperty('participantLastName')) {
        obj['participantLastName'] = ApiClient.convertToType(data['participantLastName'], 'String');
      }
      if (data.hasOwnProperty('participantRole')) {
        obj['participantRole'] = ApiClient.convertToType(data['participantRole'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} participantEmail
   */
  exports.prototype['participantEmail'] = undefined;
  /**
   * @member {String} participantFirstName
   */
  exports.prototype['participantFirstName'] = undefined;
  /**
   * @member {String} participantLastName
   */
  exports.prototype['participantLastName'] = undefined;
  /**
   * @member {String} participantRole
   */
  exports.prototype['participantRole'] = undefined;



  return exports;
}));


