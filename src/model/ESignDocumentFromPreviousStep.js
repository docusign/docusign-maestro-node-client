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
    define(['ApiClient', 'model/DSWorkflowDocGenDocOutputFormat', 'model/ESignDocumentTypesFromPreviousStep'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowDocGenDocOutputFormat'), require('./ESignDocumentTypesFromPreviousStep'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignDocumentFromPreviousStep = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowDocGenDocOutputFormat, root.Docusign.ESignDocumentTypesFromPreviousStep);
  }
}(this, function(ApiClient, DSWorkflowDocGenDocOutputFormat, ESignDocumentTypesFromPreviousStep) {
  'use strict';


  /**
   * The ESignDocumentFromPreviousStep model module.
   * @module model/ESignDocumentFromPreviousStep
   */

  /**
   * Constructs a new <code>ESignDocumentFromPreviousStep</code>.
   * @alias module:model/ESignDocumentFromPreviousStep
   * @class
   * @param documentFromPreviousStep {Object} Reference of #/definitions/DSWorkflowVariable. DS Workflow Variables
   * @param fileExtension {module:model/DSWorkflowDocGenDocOutputFormat} 
   * @param name {Object} Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param type {module:model/ESignDocumentTypesFromPreviousStep} 
   */
  var exports = function(documentFromPreviousStep, fileExtension, name, type) {
    var _this = this;

    _this['documentFromPreviousStep'] = documentFromPreviousStep;    _this['fileExtension'] = fileExtension;    _this['name'] = name;    _this['type'] = type;
  };

  /**
   * Constructs a <code>ESignDocumentFromPreviousStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignDocumentFromPreviousStep} obj Optional instance to populate.
   * @return {module:model/ESignDocumentFromPreviousStep} The populated <code>ESignDocumentFromPreviousStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documentFromPreviousStep')) {
        obj['documentFromPreviousStep'] = ApiClient.convertToType(data['documentFromPreviousStep'], Object);
      }
      if (data.hasOwnProperty('fileExtension')) {
        obj['fileExtension'] = DSWorkflowDocGenDocOutputFormat.constructFromObject(data['fileExtension']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], Object);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ESignDocumentTypesFromPreviousStep.constructFromObject(data['type']);
      }
    }
    return obj;
  }

  /**
   * Reference of #/definitions/DSWorkflowVariable. DS Workflow Variables
   * @member {Object} documentFromPreviousStep
   */
  exports.prototype['documentFromPreviousStep'] = undefined;
  /**
   * @member {module:model/DSWorkflowDocGenDocOutputFormat} fileExtension
   */
  exports.prototype['fileExtension'] = undefined;
  /**
   * Reference of #/definitions/StringOrVariableOrTransformation. Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ESignDocumentTypesFromPreviousStep} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


