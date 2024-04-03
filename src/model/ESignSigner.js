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
    define(['ApiClient', 'model/ESignTabsRecord'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESignTabsRecord'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignSigner = factory(root.Docusign.ApiClient, root.Docusign.ESignTabsRecord);
  }
}(this, function(ApiClient, ESignTabsRecord) {
  'use strict';


  /**
   * The ESignSigner model module.
   * @module model/ESignSigner
   */

  /**
   * Constructs a new <code>ESignSigner</code>.
   * @alias module:model/ESignSigner
   * @class
   * @param email {Object} Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param note {Object} Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param routingOrder {String} 
   * @param tabs {module:model/ESignTabsRecord} 
   * @param userName {Object} Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   */
  var exports = function(email, note, routingOrder, tabs, userName) {
    var _this = this;

    _this['email'] = email;    _this['note'] = note;    _this['routingOrder'] = routingOrder;    _this['tabs'] = tabs;    _this['userName'] = userName;
  };

  /**
   * Constructs a <code>ESignSigner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignSigner} obj Optional instance to populate.
   * @return {module:model/ESignSigner} The populated <code>ESignSigner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], Object);
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], Object);
      }
      if (data.hasOwnProperty('routingOrder')) {
        obj['routingOrder'] = ApiClient.convertToType(data['routingOrder'], 'String');
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = ESignTabsRecord.constructFromObject(data['tabs']);
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], Object);
      }
    }
    return obj;
  }

  /**
   * Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} note
   */
  exports.prototype['note'] = undefined;
  /**
   * @member {String} routingOrder
   */
  exports.prototype['routingOrder'] = undefined;
  /**
   * @member {module:model/ESignTabsRecord} tabs
   */
  exports.prototype['tabs'] = undefined;
  /**
   * Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


