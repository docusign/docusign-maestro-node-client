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
    define(['ApiClient', 'model/DSWorkflowDocGenDocOutputFormat', 'model/RecordStringOrVariableOrTransformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DSWorkflowDocGenDocOutputFormat'), require('./RecordStringOrVariableOrTransformation'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSDocGenStepInput = factory(root.Docusign.ApiClient, root.Docusign.DSWorkflowDocGenDocOutputFormat, root.Docusign.RecordStringOrVariableOrTransformation);
  }
}(this, function(ApiClient, DSWorkflowDocGenDocOutputFormat, RecordStringOrVariableOrTransformation) {
  'use strict';


  /**
   * The DSDocGenStepInput model module.
   * @module model/DSDocGenStepInput
   */

  /**
   * Constructs a new <code>DSDocGenStepInput</code>.
   * @alias module:model/DSDocGenStepInput
   * @class
   * @param dataJson {module:model/RecordStringOrVariableOrTransformation} 
   * @param outputFileName {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @param outputFileNameIsUnique {Boolean} 
   * @param outputFormat {module:model/DSWorkflowDocGenDocOutputFormat} 
   * @param templateId {Object} Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   */
  var exports = function(dataJson, outputFileName, outputFileNameIsUnique, outputFormat, templateId) {
    var _this = this;

    _this['dataJson'] = dataJson;    _this['outputFileName'] = outputFileName;    _this['outputFileNameIsUnique'] = outputFileNameIsUnique;    _this['outputFormat'] = outputFormat;    _this['templateId'] = templateId;
  };

  /**
   * Constructs a <code>DSDocGenStepInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSDocGenStepInput} obj Optional instance to populate.
   * @return {module:model/DSDocGenStepInput} The populated <code>DSDocGenStepInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dataJson')) {
        obj['dataJson'] = RecordStringOrVariableOrTransformation.constructFromObject(data['dataJson']);
      }
      if (data.hasOwnProperty('outputFileName')) {
        obj['outputFileName'] = ApiClient.convertToType(data['outputFileName'], Object);
      }
      if (data.hasOwnProperty('outputFileNameIsUnique')) {
        obj['outputFileNameIsUnique'] = ApiClient.convertToType(data['outputFileNameIsUnique'], 'Boolean');
      }
      if (data.hasOwnProperty('outputFormat')) {
        obj['outputFormat'] = DSWorkflowDocGenDocOutputFormat.constructFromObject(data['outputFormat']);
      }
      if (data.hasOwnProperty('templateId')) {
        obj['templateId'] = ApiClient.convertToType(data['templateId'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecordStringOrVariableOrTransformation} dataJson
   */
  exports.prototype['dataJson'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} outputFileName
   */
  exports.prototype['outputFileName'] = undefined;
  /**
   * @member {Boolean} outputFileNameIsUnique
   */
  exports.prototype['outputFileNameIsUnique'] = undefined;
  /**
   * @member {module:model/DSWorkflowDocGenDocOutputFormat} outputFormat
   */
  exports.prototype['outputFormat'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} templateId
   */
  exports.prototype['templateId'] = undefined;



  return exports;
}));


