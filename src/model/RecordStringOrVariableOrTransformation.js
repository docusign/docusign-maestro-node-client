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
    root.Docusign.RecordStringOrVariableOrTransformation = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The RecordStringOrVariableOrTransformation model module.
   * @module model/RecordStringOrVariableOrTransformation
   */

  /**
   * Constructs a new <code>RecordStringOrVariableOrTransformation</code>.
   * A Record of strings to Strings, Variables, or Transformation Expressions
   * @alias module:model/RecordStringOrVariableOrTransformation
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;



    return _this;
  };

  /**
   * Constructs a <code>RecordStringOrVariableOrTransformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordStringOrVariableOrTransformation} obj Optional instance to populate.
   * @return {module:model/RecordStringOrVariableOrTransformation} The populated <code>RecordStringOrVariableOrTransformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');

    }
    return obj;
  }




  return exports;
}));


