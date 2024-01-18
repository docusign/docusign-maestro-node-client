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
    define(['ApiClient', 'model/ESignSigner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESignSigner'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.DSSignStepInput = factory(root.Docusign.ApiClient, root.Docusign.ESignSigner);
  }
}(this, function(ApiClient, ESignSigner) {
  'use strict';


  /**
   * The DSSignStepInput model module.
   * @module model/DSSignStepInput
   */

  /**
   * Constructs a new <code>DSSignStepInput</code>.
   * @alias module:model/DSSignStepInput
   * @class
   * @param documents {Array.<Object>} ESignDocuments Object list. Each element within the list should be any of the following object models: [#/definitions/ESignDocumentFromPreviousStep, #/definitions/ESignDocumentFromESignTemplate]
   * @param isEmbeddedSign {Boolean} 
   * @param signers {Array.<module:model/ESignSigner>} 
   */
  var exports = function(documents, isEmbeddedSign, signers) {
    var _this = this;

    _this['documents'] = documents;    _this['isEmbeddedSign'] = isEmbeddedSign;    _this['signers'] = signers;
  };

  /**
   * Constructs a <code>DSSignStepInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSSignStepInput} obj Optional instance to populate.
   * @return {module:model/DSSignStepInput} The populated <code>DSSignStepInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('documents')) {
        obj['documents'] = ApiClient.convertToType(data['documents'], [Object]);
      }
      if (data.hasOwnProperty('emailBlurb')) {
        obj['emailBlurb'] = ApiClient.convertToType(data['emailBlurb'], Object);
      }
      if (data.hasOwnProperty('emailSubject')) {
        obj['emailSubject'] = ApiClient.convertToType(data['emailSubject'], Object);
      }
      if (data.hasOwnProperty('isEmbeddedSign')) {
        obj['isEmbeddedSign'] = ApiClient.convertToType(data['isEmbeddedSign'], 'Boolean');
      }
      if (data.hasOwnProperty('signers')) {
        obj['signers'] = ApiClient.convertToType(data['signers'], [ESignSigner]);
      }
    }
    return obj;
  }

  /**
   * ESignDocuments Object list. Each element within the list should be any of the following object models: [#/definitions/ESignDocumentFromPreviousStep, #/definitions/ESignDocumentFromESignTemplate]
   * @member {Array.<Object>} documents
   */
  exports.prototype['documents'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} emailBlurb
   */
  exports.prototype['emailBlurb'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} emailSubject
   */
  exports.prototype['emailSubject'] = undefined;
  /**
   * @member {Boolean} isEmbeddedSign
   */
  exports.prototype['isEmbeddedSign'] = undefined;
  /**
   * @member {Array.<module:model/ESignSigner>} signers
   */
  exports.prototype['signers'] = undefined;



  return exports;
}));


