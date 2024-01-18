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
    root.Docusign.DSServiceStep = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The DSServiceStep model module.
   * @module model/DSServiceStep
   */

  /**
   * Constructs a new <code>DSServiceStep</code>.
   * A DS Workflow Service Step. This object should be any of the following object models: [#/definitions/DSWebFormsStep, #/definitions/DSIdvStep, #/definitions/DSDocGenStep, #/definitions/DSSignStep]
   * @alias module:model/DSServiceStep
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DSServiceStep</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DSServiceStep} obj Optional instance to populate.
   * @return {module:model/DSServiceStep} The populated <code>DSServiceStep</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


