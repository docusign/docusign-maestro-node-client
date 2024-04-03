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
    define(['ApiClient', 'model/WorkflowInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkflowInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WorkflowInstancesList = factory(root.Docusign.ApiClient, root.Docusign.WorkflowInstance);
  }
}(this, function(ApiClient, WorkflowInstance) {
  'use strict';


  /**
   * The WorkflowInstancesList model module.
   * @module model/WorkflowInstancesList
   */

  /**
   * Constructs a new <code>WorkflowInstancesList</code>.
   * A list of workflow instances (0 or more).
   * @alias module:model/WorkflowInstancesList
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);



    return _this;
  };

  /**
   * Constructs a <code>WorkflowInstancesList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowInstancesList} obj Optional instance to populate.
   * @return {module:model/WorkflowInstancesList} The populated <code>WorkflowInstancesList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'WorkflowInstance');

    }
    return obj;
  }




  return exports;
}));


