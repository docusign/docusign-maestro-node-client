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
    root.Docusign.ESignDocuments = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The ESignDocuments model module.
   * @module model/ESignDocuments
   */

  /**
   * Constructs a new <code>ESignDocuments</code>.
   * ESignDocument Object. This object should be any of the following object models: [#/definitions/ESignDocumentFromPreviousStep, #/definitions/ESignDocumentFromESignTemplate]
   * @alias module:model/ESignDocuments
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ESignDocuments</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignDocuments} obj Optional instance to populate.
   * @return {module:model/ESignDocuments} The populated <code>ESignDocuments</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


