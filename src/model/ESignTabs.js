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
    define(['ApiClient', 'model/ESignLocalePolicy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ESignLocalePolicy'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ESignTabs = factory(root.Docusign.ApiClient, root.Docusign.ESignLocalePolicy);
  }
}(this, function(ApiClient, ESignLocalePolicy) {
  'use strict';


  /**
   * The ESignTabs model module.
   * @module model/ESignTabs
   */

  /**
   * Constructs a new <code>ESignTabs</code>.
   * @alias module:model/ESignTabs
   * @class
   * @param tabId {String} 
   */
  var exports = function(tabId) {
    var _this = this;

    _this['tabId'] = tabId;
  };

  /**
   * Constructs a <code>ESignTabs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ESignTabs} obj Optional instance to populate.
   * @return {module:model/ESignTabs} The populated <code>ESignTabs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('anchorString')) {
        obj['anchorString'] = ApiClient.convertToType(data['anchorString'], 'String');
      }
      if (data.hasOwnProperty('bold')) {
        obj['bold'] = ApiClient.convertToType(data['bold'], 'String');
      }
      if (data.hasOwnProperty('documentId')) {
        obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
      }
      if (data.hasOwnProperty('font')) {
        obj['font'] = ApiClient.convertToType(data['font'], 'String');
      }
      if (data.hasOwnProperty('fontColor')) {
        obj['fontColor'] = ApiClient.convertToType(data['fontColor'], 'String');
      }
      if (data.hasOwnProperty('fontSize')) {
        obj['fontSize'] = ApiClient.convertToType(data['fontSize'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'String');
      }
      if (data.hasOwnProperty('italic')) {
        obj['italic'] = ApiClient.convertToType(data['italic'], 'String');
      }
      if (data.hasOwnProperty('localePolicy')) {
        obj['localePolicy'] = ESignLocalePolicy.constructFromObject(data['localePolicy']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('optional')) {
        obj['optional'] = ApiClient.convertToType(data['optional'], 'String');
      }
      if (data.hasOwnProperty('pageNumber')) {
        obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'String');
      }
      if (data.hasOwnProperty('recipientId')) {
        obj['recipientId'] = ApiClient.convertToType(data['recipientId'], 'String');
      }
      if (data.hasOwnProperty('scaleValue')) {
        obj['scaleValue'] = ApiClient.convertToType(data['scaleValue'], 'String');
      }
      if (data.hasOwnProperty('stampType')) {
        obj['stampType'] = ApiClient.convertToType(data['stampType'], 'String');
      }
      if (data.hasOwnProperty('tabId')) {
        obj['tabId'] = ApiClient.convertToType(data['tabId'], 'String');
      }
      if (data.hasOwnProperty('tabLabel')) {
        obj['tabLabel'] = ApiClient.convertToType(data['tabLabel'], 'String');
      }
      if (data.hasOwnProperty('tabType')) {
        obj['tabType'] = ApiClient.convertToType(data['tabType'], 'String');
      }
      if (data.hasOwnProperty('templateLocked')) {
        obj['templateLocked'] = ApiClient.convertToType(data['templateLocked'], 'String');
      }
      if (data.hasOwnProperty('templateRequired')) {
        obj['templateRequired'] = ApiClient.convertToType(data['templateRequired'], 'String');
      }
      if (data.hasOwnProperty('tooltip')) {
        obj['tooltip'] = ApiClient.convertToType(data['tooltip'], 'String');
      }
      if (data.hasOwnProperty('underline')) {
        obj['underline'] = ApiClient.convertToType(data['underline'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'String');
      }
      if (data.hasOwnProperty('xPosition')) {
        obj['xPosition'] = ApiClient.convertToType(data['xPosition'], 'String');
      }
      if (data.hasOwnProperty('yPosition')) {
        obj['yPosition'] = ApiClient.convertToType(data['yPosition'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} anchorString
   */
  exports.prototype['anchorString'] = undefined;
  /**
   * @member {String} bold
   */
  exports.prototype['bold'] = undefined;
  /**
   * @member {String} documentId
   */
  exports.prototype['documentId'] = undefined;
  /**
   * @member {String} font
   */
  exports.prototype['font'] = undefined;
  /**
   * @member {String} fontColor
   */
  exports.prototype['fontColor'] = undefined;
  /**
   * @member {String} fontSize
   */
  exports.prototype['fontSize'] = undefined;
  /**
   * @member {String} height
   */
  exports.prototype['height'] = undefined;
  /**
   * @member {String} italic
   */
  exports.prototype['italic'] = undefined;
  /**
   * @member {module:model/ESignLocalePolicy} localePolicy
   */
  exports.prototype['localePolicy'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} optional
   */
  exports.prototype['optional'] = undefined;
  /**
   * @member {String} pageNumber
   */
  exports.prototype['pageNumber'] = undefined;
  /**
   * @member {String} recipientId
   */
  exports.prototype['recipientId'] = undefined;
  /**
   * @member {String} scaleValue
   */
  exports.prototype['scaleValue'] = undefined;
  /**
   * @member {String} stampType
   */
  exports.prototype['stampType'] = undefined;
  /**
   * @member {String} tabId
   */
  exports.prototype['tabId'] = undefined;
  /**
   * @member {String} tabLabel
   */
  exports.prototype['tabLabel'] = undefined;
  /**
   * @member {String} tabType
   */
  exports.prototype['tabType'] = undefined;
  /**
   * @member {String} templateLocked
   */
  exports.prototype['templateLocked'] = undefined;
  /**
   * @member {String} templateRequired
   */
  exports.prototype['templateRequired'] = undefined;
  /**
   * @member {String} tooltip
   */
  exports.prototype['tooltip'] = undefined;
  /**
   * @member {String} underline
   */
  exports.prototype['underline'] = undefined;
  /**
   * Object stands for a String or a Variable or a Transformation. This object should be any of the following object models or types: [string, #/definitions/DSWorkflowVariable, #/definitions/DSWorkflowTransformationExpression]
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} width
   */
  exports.prototype['width'] = undefined;
  /**
   * @member {String} xPosition
   */
  exports.prototype['xPosition'] = undefined;
  /**
   * @member {String} yPosition
   */
  exports.prototype['yPosition'] = undefined;



  return exports;
}));


