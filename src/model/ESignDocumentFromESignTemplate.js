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
    define(['ApiClient', 'model/DSWorkflowDocGenDocOutputFormat', 'model/ESignDocumentTypesFromDSTemplate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowDocGenDocOutputFormat'), require('./ESignDocumentTypesFromDSTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignDocumentFromESignTemplate = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowDocGenDocOutputFormat, root.Docusign.ESignDocumentTypesFromDSTemplate);
  }
}(this, function(ApiClient, DSWorkflowDocGenDocOutputFormat, ESignDocumentTypesFromDSTemplate) {
  'use strict';


  /**
   * The ESignDocumentFromESignTemplate model module.
   * @module model/ESignDocumentFromESignTemplate
   */

  /**
   * Constructs a new <code>ESignDocumentFromESignTemplate</code>.
   * @alias module:model/ESignDocumentFromESignTemplate
   * @class
   * @param eSignTemplateId {String} 
   * @param fileExtension {module:model/DSWorkflowDocGenDocOutputFormat} 
   * @param name {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param type {module:model/ESignDocumentTypesFromDSTemplate} 
   */
  var exports = function(eSignTemplateId, fileExtension, name, type) {
    var _this = this;

    _this['eSignTemplateId'] = eSignTemplateId;    _this['fileExtension'] = fileExtension;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>ESignDocumentFromESignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignDocumentFromESignTemplate} obj Optional instance to populate.
   * @return {module:model/ESignDocumentFromESignTemplate} The populated <code>ESignDocumentFromESignTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eSignTemplateId')) {
        obj['eSignTemplateId'] = ApiClient.convertToType(data['eSignTemplateId'], 'String');
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = DSWorkflowDocGenDocOutputFormat.constructFromObject(data['fileExtension']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ESignDocumentTypesFromDSTemplate.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * @member {String} eSignTemplateId
   */
  exports.prototype['eSignTemplateId'] = undefined;
  /**
   * @member {module:model/DSWorkflowDocGenDocOutputFormat} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ESignDocumentTypesFromDSTemplate} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


