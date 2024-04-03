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
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AccessTokenResponse', 'model/AccessTokenTokenTypes', 'model/CancelResponse', 'model/CreateOrUpdateWorkflowDefinitionRequestBody', 'model/DSDoUntilStep', 'model/DSDocGenStep', 'model/DSDocGenStepInput', 'model/DSIdvStep', 'model/DSIdvStepInput', 'model/DSIfElseStep', 'model/DSLoopStep', 'model/DSParallelStep', 'model/DSServiceStep', 'model/DSSignStep', 'model/DSSignStepInput', 'model/DSTransformationStep', 'model/DSWebFormsStep', 'model/DSWebFormsStepConfig', 'model/DSWorkflowBooleanExpression', 'model/DSWorkflowComparisonExpression', 'model/DSWorkflowComparisonOperatorTypes', 'model/DSWorkflowConcatExpression', 'model/DSWorkflowDocGenDocOutputFormat', 'model/DSWorkflowExpressionTypesBooleanExpression', 'model/DSWorkflowExpressionTypesComparisonExpression', 'model/DSWorkflowExpressionTypesParallelExpression', 'model/DSWorkflowIndexOfExpression', 'model/DSWorkflowLane', 'model/DSWorkflowLanesRecord', 'model/DSWorkflowLastIndexOfExpression', 'model/DSWorkflowLogicalOperatorTypes', 'model/DSWorkflowParallelExpression', 'model/DSWorkflowParticipantRecord', 'model/DSWorkflowReplaceExpression', 'model/DSWorkflowStep', 'model/DSWorkflowStepTypesDSDocGen', 'model/DSWorkflowStepTypesDSIdv', 'model/DSWorkflowStepTypesDSIfElse', 'model/DSWorkflowStepTypesDSSign', 'model/DSWorkflowStepTypesDSTransformation', 'model/DSWorkflowStepTypesDSWebForms', 'model/DSWorkflowStepTypesDoUntil', 'model/DSWorkflowStepTypesLoop', 'model/DSWorkflowStepTypesParallel', 'model/DSWorkflowSubstringExpression', 'model/DSWorkflowToLowerExpression', 'model/DSWorkflowToUpperExpression', 'model/DSWorkflowTransformationExpression', 'model/DSWorkflowTransformationExpressionTypesConcatExpression', 'model/DSWorkflowTransformationExpressionTypesIndexOfExpression', 'model/DSWorkflowTransformationExpressionTypesLastIndexOfExpression', 'model/DSWorkflowTransformationExpressionTypesReplaceExpression', 'model/DSWorkflowTransformationExpressionTypesSubstringExpression', 'model/DSWorkflowTransformationExpressionTypesToLowerExpression', 'model/DSWorkflowTransformationExpressionTypesToUpperExpression', 'model/DSWorkflowTrigger', 'model/DSWorkflowTriggerTypes', 'model/DSWorkflowVariable', 'model/DSWorkflowVariableFromParticipant', 'model/DSWorkflowVariableFromStep', 'model/DSWorkflowVariableFromVariable', 'model/DSWorkflowVariableRecord', 'model/DSWorkflowVariableSourceTypesParticipant', 'model/DSWorkflowVariableSourceTypesStep', 'model/DSWorkflowVariableSourceTypesVariable', 'model/DeployRequest', 'model/DeployResponse', 'model/DeployStatus', 'model/DeploymentStatus', 'model/ESignDocumentFromESignTemplate', 'model/ESignDocumentFromPreviousStep', 'model/ESignDocumentTypesFromDSTemplate', 'model/ESignDocumentTypesFromPreviousStep', 'model/ESignDocuments', 'model/ESignLocalePolicy', 'model/ESignSigner', 'model/ESignTabs', 'model/ESignTabsRecord', 'model/ErrorCodes', 'model/ErrorResponse', 'model/EventTypes', 'model/GetConfigurationInstanceResponse', 'model/GetConfigurationInstancesResponse', 'model/GetConfigurationInstancesResponseConfigInstances', 'model/HttpTypes', 'model/InvalidWorkflowResponse', 'model/NewOrUpdatedWorkflowDefinitionResponse', 'model/NumberOrVariable', 'model/Participant', 'model/ParticipantKeys', 'model/ProgressInstance', 'model/RecordStringBoolean', 'model/RecordStringOrVariableOrTransformation', 'model/RecordToNever', 'model/ReplicationStatus', 'model/StartedByInstance', 'model/StringOrVariableOrTransformation', 'model/SuccessMessageResponse', 'model/TriggerPayload', 'model/TriggerWorkflowViaPostResponse', 'model/ValidationErrors', 'model/WorkflowDefinition', 'model/WorkflowDefinitionList', 'model/WorkflowDefinitionMetadata', 'model/WorkflowDefinitionWithId', 'model/WorkflowDeleteResponse', 'model/WorkflowInstance', 'model/WorkflowInstanceMap', 'model/WorkflowInstanceState', 'model/WorkflowInstancesList', 'model/WorkflowMetadataStatus', 'model/WorkflowStepError', 'model/WorkflowStepErrorError', 'model/WorkflowStepHistory', 'model/WorkflowStepHistoryList', 'model/WorkflowStepHistoryState', 'api/WorkflowInstanceManagementApi', 'api/WorkflowManagementApi', 'api/WorkflowTriggerApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AccessTokenResponse'), require('./model/AccessTokenTokenTypes'), require('./model/CancelResponse'), require('./model/CreateOrUpdateWorkflowDefinitionRequestBody'), require('./model/DSDoUntilStep'), require('./model/DSDocGenStep'), require('./model/DSDocGenStepInput'), require('./model/DSIdvStep'), require('./model/DSIdvStepInput'), require('./model/DSIfElseStep'), require('./model/DSLoopStep'), require('./model/DSParallelStep'), require('./model/DSServiceStep'), require('./model/DSSignStep'), require('./model/DSSignStepInput'), require('./model/DSTransformationStep'), require('./model/DSWebFormsStep'), require('./model/DSWebFormsStepConfig'), require('./model/DSWorkflowBooleanExpression'), require('./model/DSWorkflowComparisonExpression'), require('./model/DSWorkflowComparisonOperatorTypes'), require('./model/DSWorkflowConcatExpression'), require('./model/DSWorkflowDocGenDocOutputFormat'), require('./model/DSWorkflowExpressionTypesBooleanExpression'), require('./model/DSWorkflowExpressionTypesComparisonExpression'), require('./model/DSWorkflowExpressionTypesParallelExpression'), require('./model/DSWorkflowIndexOfExpression'), require('./model/DSWorkflowLane'), require('./model/DSWorkflowLanesRecord'), require('./model/DSWorkflowLastIndexOfExpression'), require('./model/DSWorkflowLogicalOperatorTypes'), require('./model/DSWorkflowParallelExpression'), require('./model/DSWorkflowParticipantRecord'), require('./model/DSWorkflowReplaceExpression'), require('./model/DSWorkflowStep'), require('./model/DSWorkflowStepTypesDSDocGen'), require('./model/DSWorkflowStepTypesDSIdv'), require('./model/DSWorkflowStepTypesDSIfElse'), require('./model/DSWorkflowStepTypesDSSign'), require('./model/DSWorkflowStepTypesDSTransformation'), require('./model/DSWorkflowStepTypesDSWebForms'), require('./model/DSWorkflowStepTypesDoUntil'), require('./model/DSWorkflowStepTypesLoop'), require('./model/DSWorkflowStepTypesParallel'), require('./model/DSWorkflowSubstringExpression'), require('./model/DSWorkflowToLowerExpression'), require('./model/DSWorkflowToUpperExpression'), require('./model/DSWorkflowTransformationExpression'), require('./model/DSWorkflowTransformationExpressionTypesConcatExpression'), require('./model/DSWorkflowTransformationExpressionTypesIndexOfExpression'), require('./model/DSWorkflowTransformationExpressionTypesLastIndexOfExpression'), require('./model/DSWorkflowTransformationExpressionTypesReplaceExpression'), require('./model/DSWorkflowTransformationExpressionTypesSubstringExpression'), require('./model/DSWorkflowTransformationExpressionTypesToLowerExpression'), require('./model/DSWorkflowTransformationExpressionTypesToUpperExpression'), require('./model/DSWorkflowTrigger'), require('./model/DSWorkflowTriggerTypes'), require('./model/DSWorkflowVariable'), require('./model/DSWorkflowVariableFromParticipant'), require('./model/DSWorkflowVariableFromStep'), require('./model/DSWorkflowVariableFromVariable'), require('./model/DSWorkflowVariableRecord'), require('./model/DSWorkflowVariableSourceTypesParticipant'), require('./model/DSWorkflowVariableSourceTypesStep'), require('./model/DSWorkflowVariableSourceTypesVariable'), require('./model/DeployRequest'), require('./model/DeployResponse'), require('./model/DeployStatus'), require('./model/DeploymentStatus'), require('./model/ESignDocumentFromESignTemplate'), require('./model/ESignDocumentFromPreviousStep'), require('./model/ESignDocumentTypesFromDSTemplate'), require('./model/ESignDocumentTypesFromPreviousStep'), require('./model/ESignDocuments'), require('./model/ESignLocalePolicy'), require('./model/ESignSigner'), require('./model/ESignTabs'), require('./model/ESignTabsRecord'), require('./model/ErrorCodes'), require('./model/ErrorResponse'), require('./model/EventTypes'), require('./model/GetConfigurationInstanceResponse'), require('./model/GetConfigurationInstancesResponse'), require('./model/GetConfigurationInstancesResponseConfigInstances'), require('./model/HttpTypes'), require('./model/InvalidWorkflowResponse'), require('./model/NewOrUpdatedWorkflowDefinitionResponse'), require('./model/NumberOrVariable'), require('./model/Participant'), require('./model/ParticipantKeys'), require('./model/ProgressInstance'), require('./model/RecordStringBoolean'), require('./model/RecordStringOrVariableOrTransformation'), require('./model/RecordToNever'), require('./model/ReplicationStatus'), require('./model/StartedByInstance'), require('./model/StringOrVariableOrTransformation'), require('./model/SuccessMessageResponse'), require('./model/TriggerPayload'), require('./model/TriggerWorkflowViaPostResponse'), require('./model/ValidationErrors'), require('./model/WorkflowDefinition'), require('./model/WorkflowDefinitionList'), require('./model/WorkflowDefinitionMetadata'), require('./model/WorkflowDefinitionWithId'), require('./model/WorkflowDeleteResponse'), require('./model/WorkflowInstance'), require('./model/WorkflowInstanceMap'), require('./model/WorkflowInstanceState'), require('./model/WorkflowInstancesList'), require('./model/WorkflowMetadataStatus'), require('./model/WorkflowStepError'), require('./model/WorkflowStepErrorError'), require('./model/WorkflowStepHistory'), require('./model/WorkflowStepHistoryList'), require('./model/WorkflowStepHistoryState'), require('./api/WorkflowInstanceManagementApi'), require('./api/WorkflowManagementApi'), require('./api/WorkflowTriggerApi'));
  }
}(function(Configuration, ApiClient, AccessTokenResponse, AccessTokenTokenTypes, CancelResponse, CreateOrUpdateWorkflowDefinitionRequestBody, DSDoUntilStep, DSDocGenStep, DSDocGenStepInput, DSIdvStep, DSIdvStepInput, DSIfElseStep, DSLoopStep, DSParallelStep, DSServiceStep, DSSignStep, DSSignStepInput, DSTransformationStep, DSWebFormsStep, DSWebFormsStepConfig, DSWorkflowBooleanExpression, DSWorkflowComparisonExpression, DSWorkflowComparisonOperatorTypes, DSWorkflowConcatExpression, DSWorkflowDocGenDocOutputFormat, DSWorkflowExpressionTypesBooleanExpression, DSWorkflowExpressionTypesComparisonExpression, DSWorkflowExpressionTypesParallelExpression, DSWorkflowIndexOfExpression, DSWorkflowLane, DSWorkflowLanesRecord, DSWorkflowLastIndexOfExpression, DSWorkflowLogicalOperatorTypes, DSWorkflowParallelExpression, DSWorkflowParticipantRecord, DSWorkflowReplaceExpression, DSWorkflowStep, DSWorkflowStepTypesDSDocGen, DSWorkflowStepTypesDSIdv, DSWorkflowStepTypesDSIfElse, DSWorkflowStepTypesDSSign, DSWorkflowStepTypesDSTransformation, DSWorkflowStepTypesDSWebForms, DSWorkflowStepTypesDoUntil, DSWorkflowStepTypesLoop, DSWorkflowStepTypesParallel, DSWorkflowSubstringExpression, DSWorkflowToLowerExpression, DSWorkflowToUpperExpression, DSWorkflowTransformationExpression, DSWorkflowTransformationExpressionTypesConcatExpression, DSWorkflowTransformationExpressionTypesIndexOfExpression, DSWorkflowTransformationExpressionTypesLastIndexOfExpression, DSWorkflowTransformationExpressionTypesReplaceExpression, DSWorkflowTransformationExpressionTypesSubstringExpression, DSWorkflowTransformationExpressionTypesToLowerExpression, DSWorkflowTransformationExpressionTypesToUpperExpression, DSWorkflowTrigger, DSWorkflowTriggerTypes, DSWorkflowVariable, DSWorkflowVariableFromParticipant, DSWorkflowVariableFromStep, DSWorkflowVariableFromVariable, DSWorkflowVariableRecord, DSWorkflowVariableSourceTypesParticipant, DSWorkflowVariableSourceTypesStep, DSWorkflowVariableSourceTypesVariable, DeployRequest, DeployResponse, DeployStatus, DeploymentStatus, ESignDocumentFromESignTemplate, ESignDocumentFromPreviousStep, ESignDocumentTypesFromDSTemplate, ESignDocumentTypesFromPreviousStep, ESignDocuments, ESignLocalePolicy, ESignSigner, ESignTabs, ESignTabsRecord, ErrorCodes, ErrorResponse, EventTypes, GetConfigurationInstanceResponse, GetConfigurationInstancesResponse, GetConfigurationInstancesResponseConfigInstances, HttpTypes, InvalidWorkflowResponse, NewOrUpdatedWorkflowDefinitionResponse, NumberOrVariable, Participant, ParticipantKeys, ProgressInstance, RecordStringBoolean, RecordStringOrVariableOrTransformation, RecordToNever, ReplicationStatus, StartedByInstance, StringOrVariableOrTransformation, SuccessMessageResponse, TriggerPayload, TriggerWorkflowViaPostResponse, ValidationErrors, WorkflowDefinition, WorkflowDefinitionList, WorkflowDefinitionMetadata, WorkflowDefinitionWithId, WorkflowDeleteResponse, WorkflowInstance, WorkflowInstanceMap, WorkflowInstanceState, WorkflowInstancesList, WorkflowMetadataStatus, WorkflowStepError, WorkflowStepErrorError, WorkflowStepHistory, WorkflowStepHistoryList, WorkflowStepHistoryState, WorkflowInstanceManagementApi, WorkflowManagementApi, WorkflowTriggerApi) {
  'use strict';

  /**
   * DocuSign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Docusign = require('index'); // See note below*.
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccessTokenResponse model constructor.
     * @property {module:model/AccessTokenResponse}
     */
    AccessTokenResponse: AccessTokenResponse,
    /**
     * The AccessTokenTokenTypes model constructor.
     * @property {module:model/AccessTokenTokenTypes}
     */
    AccessTokenTokenTypes: AccessTokenTokenTypes,
    /**
     * The CancelResponse model constructor.
     * @property {module:model/CancelResponse}
     */
    CancelResponse: CancelResponse,
    /**
     * The CreateOrUpdateWorkflowDefinitionRequestBody model constructor.
     * @property {module:model/CreateOrUpdateWorkflowDefinitionRequestBody}
     */
    CreateOrUpdateWorkflowDefinitionRequestBody: CreateOrUpdateWorkflowDefinitionRequestBody,
    /**
     * The DSDoUntilStep model constructor.
     * @property {module:model/DSDoUntilStep}
     */
    DSDoUntilStep: DSDoUntilStep,
    /**
     * The DSDocGenStep model constructor.
     * @property {module:model/DSDocGenStep}
     */
    DSDocGenStep: DSDocGenStep,
    /**
     * The DSDocGenStepInput model constructor.
     * @property {module:model/DSDocGenStepInput}
     */
    DSDocGenStepInput: DSDocGenStepInput,
    /**
     * The DSIdvStep model constructor.
     * @property {module:model/DSIdvStep}
     */
    DSIdvStep: DSIdvStep,
    /**
     * The DSIdvStepInput model constructor.
     * @property {module:model/DSIdvStepInput}
     */
    DSIdvStepInput: DSIdvStepInput,
    /**
     * The DSIfElseStep model constructor.
     * @property {module:model/DSIfElseStep}
     */
    DSIfElseStep: DSIfElseStep,
    /**
     * The DSLoopStep model constructor.
     * @property {module:model/DSLoopStep}
     */
    DSLoopStep: DSLoopStep,
    /**
     * The DSParallelStep model constructor.
     * @property {module:model/DSParallelStep}
     */
    DSParallelStep: DSParallelStep,
    /**
     * The DSServiceStep model constructor.
     * @property {module:model/DSServiceStep}
     */
    DSServiceStep: DSServiceStep,
    /**
     * The DSSignStep model constructor.
     * @property {module:model/DSSignStep}
     */
    DSSignStep: DSSignStep,
    /**
     * The DSSignStepInput model constructor.
     * @property {module:model/DSSignStepInput}
     */
    DSSignStepInput: DSSignStepInput,
    /**
     * The DSTransformationStep model constructor.
     * @property {module:model/DSTransformationStep}
     */
    DSTransformationStep: DSTransformationStep,
    /**
     * The DSWebFormsStep model constructor.
     * @property {module:model/DSWebFormsStep}
     */
    DSWebFormsStep: DSWebFormsStep,
    /**
     * The DSWebFormsStepConfig model constructor.
     * @property {module:model/DSWebFormsStepConfig}
     */
    DSWebFormsStepConfig: DSWebFormsStepConfig,
    /**
     * The DSWorkflowBooleanExpression model constructor.
     * @property {module:model/DSWorkflowBooleanExpression}
     */
    DSWorkflowBooleanExpression: DSWorkflowBooleanExpression,
    /**
     * The DSWorkflowComparisonExpression model constructor.
     * @property {module:model/DSWorkflowComparisonExpression}
     */
    DSWorkflowComparisonExpression: DSWorkflowComparisonExpression,
    /**
     * The DSWorkflowComparisonOperatorTypes model constructor.
     * @property {module:model/DSWorkflowComparisonOperatorTypes}
     */
    DSWorkflowComparisonOperatorTypes: DSWorkflowComparisonOperatorTypes,
    /**
     * The DSWorkflowConcatExpression model constructor.
     * @property {module:model/DSWorkflowConcatExpression}
     */
    DSWorkflowConcatExpression: DSWorkflowConcatExpression,
    /**
     * The DSWorkflowDocGenDocOutputFormat model constructor.
     * @property {module:model/DSWorkflowDocGenDocOutputFormat}
     */
    DSWorkflowDocGenDocOutputFormat: DSWorkflowDocGenDocOutputFormat,
    /**
     * The DSWorkflowExpressionTypesBooleanExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesBooleanExpression}
     */
    DSWorkflowExpressionTypesBooleanExpression: DSWorkflowExpressionTypesBooleanExpression,
    /**
     * The DSWorkflowExpressionTypesComparisonExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesComparisonExpression}
     */
    DSWorkflowExpressionTypesComparisonExpression: DSWorkflowExpressionTypesComparisonExpression,
    /**
     * The DSWorkflowExpressionTypesParallelExpression model constructor.
     * @property {module:model/DSWorkflowExpressionTypesParallelExpression}
     */
    DSWorkflowExpressionTypesParallelExpression: DSWorkflowExpressionTypesParallelExpression,
    /**
     * The DSWorkflowIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowIndexOfExpression}
     */
    DSWorkflowIndexOfExpression: DSWorkflowIndexOfExpression,
    /**
     * The DSWorkflowLane model constructor.
     * @property {module:model/DSWorkflowLane}
     */
    DSWorkflowLane: DSWorkflowLane,
    /**
     * The DSWorkflowLanesRecord model constructor.
     * @property {module:model/DSWorkflowLanesRecord}
     */
    DSWorkflowLanesRecord: DSWorkflowLanesRecord,
    /**
     * The DSWorkflowLastIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowLastIndexOfExpression}
     */
    DSWorkflowLastIndexOfExpression: DSWorkflowLastIndexOfExpression,
    /**
     * The DSWorkflowLogicalOperatorTypes model constructor.
     * @property {module:model/DSWorkflowLogicalOperatorTypes}
     */
    DSWorkflowLogicalOperatorTypes: DSWorkflowLogicalOperatorTypes,
    /**
     * The DSWorkflowParallelExpression model constructor.
     * @property {module:model/DSWorkflowParallelExpression}
     */
    DSWorkflowParallelExpression: DSWorkflowParallelExpression,
    /**
     * The DSWorkflowParticipantRecord model constructor.
     * @property {module:model/DSWorkflowParticipantRecord}
     */
    DSWorkflowParticipantRecord: DSWorkflowParticipantRecord,
    /**
     * The DSWorkflowReplaceExpression model constructor.
     * @property {module:model/DSWorkflowReplaceExpression}
     */
    DSWorkflowReplaceExpression: DSWorkflowReplaceExpression,
    /**
     * The DSWorkflowStep model constructor.
     * @property {module:model/DSWorkflowStep}
     */
    DSWorkflowStep: DSWorkflowStep,
    /**
     * The DSWorkflowStepTypesDSDocGen model constructor.
     * @property {module:model/DSWorkflowStepTypesDSDocGen}
     */
    DSWorkflowStepTypesDSDocGen: DSWorkflowStepTypesDSDocGen,
    /**
     * The DSWorkflowStepTypesDSIdv model constructor.
     * @property {module:model/DSWorkflowStepTypesDSIdv}
     */
    DSWorkflowStepTypesDSIdv: DSWorkflowStepTypesDSIdv,
    /**
     * The DSWorkflowStepTypesDSIfElse model constructor.
     * @property {module:model/DSWorkflowStepTypesDSIfElse}
     */
    DSWorkflowStepTypesDSIfElse: DSWorkflowStepTypesDSIfElse,
    /**
     * The DSWorkflowStepTypesDSSign model constructor.
     * @property {module:model/DSWorkflowStepTypesDSSign}
     */
    DSWorkflowStepTypesDSSign: DSWorkflowStepTypesDSSign,
    /**
     * The DSWorkflowStepTypesDSTransformation model constructor.
     * @property {module:model/DSWorkflowStepTypesDSTransformation}
     */
    DSWorkflowStepTypesDSTransformation: DSWorkflowStepTypesDSTransformation,
    /**
     * The DSWorkflowStepTypesDSWebForms model constructor.
     * @property {module:model/DSWorkflowStepTypesDSWebForms}
     */
    DSWorkflowStepTypesDSWebForms: DSWorkflowStepTypesDSWebForms,
    /**
     * The DSWorkflowStepTypesDoUntil model constructor.
     * @property {module:model/DSWorkflowStepTypesDoUntil}
     */
    DSWorkflowStepTypesDoUntil: DSWorkflowStepTypesDoUntil,
    /**
     * The DSWorkflowStepTypesLoop model constructor.
     * @property {module:model/DSWorkflowStepTypesLoop}
     */
    DSWorkflowStepTypesLoop: DSWorkflowStepTypesLoop,
    /**
     * The DSWorkflowStepTypesParallel model constructor.
     * @property {module:model/DSWorkflowStepTypesParallel}
     */
    DSWorkflowStepTypesParallel: DSWorkflowStepTypesParallel,
    /**
     * The DSWorkflowSubstringExpression model constructor.
     * @property {module:model/DSWorkflowSubstringExpression}
     */
    DSWorkflowSubstringExpression: DSWorkflowSubstringExpression,
    /**
     * The DSWorkflowToLowerExpression model constructor.
     * @property {module:model/DSWorkflowToLowerExpression}
     */
    DSWorkflowToLowerExpression: DSWorkflowToLowerExpression,
    /**
     * The DSWorkflowToUpperExpression model constructor.
     * @property {module:model/DSWorkflowToUpperExpression}
     */
    DSWorkflowToUpperExpression: DSWorkflowToUpperExpression,
    /**
     * The DSWorkflowTransformationExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpression}
     */
    DSWorkflowTransformationExpression: DSWorkflowTransformationExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesConcatExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesConcatExpression}
     */
    DSWorkflowTransformationExpressionTypesConcatExpression: DSWorkflowTransformationExpressionTypesConcatExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesIndexOfExpression}
     */
    DSWorkflowTransformationExpressionTypesIndexOfExpression: DSWorkflowTransformationExpressionTypesIndexOfExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesLastIndexOfExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesLastIndexOfExpression}
     */
    DSWorkflowTransformationExpressionTypesLastIndexOfExpression: DSWorkflowTransformationExpressionTypesLastIndexOfExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesReplaceExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesReplaceExpression}
     */
    DSWorkflowTransformationExpressionTypesReplaceExpression: DSWorkflowTransformationExpressionTypesReplaceExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesSubstringExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesSubstringExpression}
     */
    DSWorkflowTransformationExpressionTypesSubstringExpression: DSWorkflowTransformationExpressionTypesSubstringExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesToLowerExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesToLowerExpression}
     */
    DSWorkflowTransformationExpressionTypesToLowerExpression: DSWorkflowTransformationExpressionTypesToLowerExpression,
    /**
     * The DSWorkflowTransformationExpressionTypesToUpperExpression model constructor.
     * @property {module:model/DSWorkflowTransformationExpressionTypesToUpperExpression}
     */
    DSWorkflowTransformationExpressionTypesToUpperExpression: DSWorkflowTransformationExpressionTypesToUpperExpression,
    /**
     * The DSWorkflowTrigger model constructor.
     * @property {module:model/DSWorkflowTrigger}
     */
    DSWorkflowTrigger: DSWorkflowTrigger,
    /**
     * The DSWorkflowTriggerTypes model constructor.
     * @property {module:model/DSWorkflowTriggerTypes}
     */
    DSWorkflowTriggerTypes: DSWorkflowTriggerTypes,
    /**
     * The DSWorkflowVariable model constructor.
     * @property {module:model/DSWorkflowVariable}
     */
    DSWorkflowVariable: DSWorkflowVariable,
    /**
     * The DSWorkflowVariableFromParticipant model constructor.
     * @property {module:model/DSWorkflowVariableFromParticipant}
     */
    DSWorkflowVariableFromParticipant: DSWorkflowVariableFromParticipant,
    /**
     * The DSWorkflowVariableFromStep model constructor.
     * @property {module:model/DSWorkflowVariableFromStep}
     */
    DSWorkflowVariableFromStep: DSWorkflowVariableFromStep,
    /**
     * The DSWorkflowVariableFromVariable model constructor.
     * @property {module:model/DSWorkflowVariableFromVariable}
     */
    DSWorkflowVariableFromVariable: DSWorkflowVariableFromVariable,
    /**
     * The DSWorkflowVariableRecord model constructor.
     * @property {module:model/DSWorkflowVariableRecord}
     */
    DSWorkflowVariableRecord: DSWorkflowVariableRecord,
    /**
     * The DSWorkflowVariableSourceTypesParticipant model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesParticipant}
     */
    DSWorkflowVariableSourceTypesParticipant: DSWorkflowVariableSourceTypesParticipant,
    /**
     * The DSWorkflowVariableSourceTypesStep model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesStep}
     */
    DSWorkflowVariableSourceTypesStep: DSWorkflowVariableSourceTypesStep,
    /**
     * The DSWorkflowVariableSourceTypesVariable model constructor.
     * @property {module:model/DSWorkflowVariableSourceTypesVariable}
     */
    DSWorkflowVariableSourceTypesVariable: DSWorkflowVariableSourceTypesVariable,
    /**
     * The DeployRequest model constructor.
     * @property {module:model/DeployRequest}
     */
    DeployRequest: DeployRequest,
    /**
     * The DeployResponse model constructor.
     * @property {module:model/DeployResponse}
     */
    DeployResponse: DeployResponse,
    /**
     * The DeployStatus model constructor.
     * @property {module:model/DeployStatus}
     */
    DeployStatus: DeployStatus,
    /**
     * The DeploymentStatus model constructor.
     * @property {module:model/DeploymentStatus}
     */
    DeploymentStatus: DeploymentStatus,
    /**
     * The ESignDocumentFromESignTemplate model constructor.
     * @property {module:model/ESignDocumentFromESignTemplate}
     */
    ESignDocumentFromESignTemplate: ESignDocumentFromESignTemplate,
    /**
     * The ESignDocumentFromPreviousStep model constructor.
     * @property {module:model/ESignDocumentFromPreviousStep}
     */
    ESignDocumentFromPreviousStep: ESignDocumentFromPreviousStep,
    /**
     * The ESignDocumentTypesFromDSTemplate model constructor.
     * @property {module:model/ESignDocumentTypesFromDSTemplate}
     */
    ESignDocumentTypesFromDSTemplate: ESignDocumentTypesFromDSTemplate,
    /**
     * The ESignDocumentTypesFromPreviousStep model constructor.
     * @property {module:model/ESignDocumentTypesFromPreviousStep}
     */
    ESignDocumentTypesFromPreviousStep: ESignDocumentTypesFromPreviousStep,
    /**
     * The ESignDocuments model constructor.
     * @property {module:model/ESignDocuments}
     */
    ESignDocuments: ESignDocuments,
    /**
     * The ESignLocalePolicy model constructor.
     * @property {module:model/ESignLocalePolicy}
     */
    ESignLocalePolicy: ESignLocalePolicy,
    /**
     * The ESignSigner model constructor.
     * @property {module:model/ESignSigner}
     */
    ESignSigner: ESignSigner,
    /**
     * The ESignTabs model constructor.
     * @property {module:model/ESignTabs}
     */
    ESignTabs: ESignTabs,
    /**
     * The ESignTabsRecord model constructor.
     * @property {module:model/ESignTabsRecord}
     */
    ESignTabsRecord: ESignTabsRecord,
    /**
     * The ErrorCodes model constructor.
     * @property {module:model/ErrorCodes}
     */
    ErrorCodes: ErrorCodes,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The EventTypes model constructor.
     * @property {module:model/EventTypes}
     */
    EventTypes: EventTypes,
    /**
     * The GetConfigurationInstanceResponse model constructor.
     * @property {module:model/GetConfigurationInstanceResponse}
     */
    GetConfigurationInstanceResponse: GetConfigurationInstanceResponse,
    /**
     * The GetConfigurationInstancesResponse model constructor.
     * @property {module:model/GetConfigurationInstancesResponse}
     */
    GetConfigurationInstancesResponse: GetConfigurationInstancesResponse,
    /**
     * The GetConfigurationInstancesResponseConfigInstances model constructor.
     * @property {module:model/GetConfigurationInstancesResponseConfigInstances}
     */
    GetConfigurationInstancesResponseConfigInstances: GetConfigurationInstancesResponseConfigInstances,
    /**
     * The HttpTypes model constructor.
     * @property {module:model/HttpTypes}
     */
    HttpTypes: HttpTypes,
    /**
     * The InvalidWorkflowResponse model constructor.
     * @property {module:model/InvalidWorkflowResponse}
     */
    InvalidWorkflowResponse: InvalidWorkflowResponse,
    /**
     * The NewOrUpdatedWorkflowDefinitionResponse model constructor.
     * @property {module:model/NewOrUpdatedWorkflowDefinitionResponse}
     */
    NewOrUpdatedWorkflowDefinitionResponse: NewOrUpdatedWorkflowDefinitionResponse,
    /**
     * The NumberOrVariable model constructor.
     * @property {module:model/NumberOrVariable}
     */
    NumberOrVariable: NumberOrVariable,
    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant: Participant,
    /**
     * The ParticipantKeys model constructor.
     * @property {module:model/ParticipantKeys}
     */
    ParticipantKeys: ParticipantKeys,
    /**
     * The ProgressInstance model constructor.
     * @property {module:model/ProgressInstance}
     */
    ProgressInstance: ProgressInstance,
    /**
     * The RecordStringBoolean model constructor.
     * @property {module:model/RecordStringBoolean}
     */
    RecordStringBoolean: RecordStringBoolean,
    /**
     * The RecordStringOrVariableOrTransformation model constructor.
     * @property {module:model/RecordStringOrVariableOrTransformation}
     */
    RecordStringOrVariableOrTransformation: RecordStringOrVariableOrTransformation,
    /**
     * The RecordToNever model constructor.
     * @property {module:model/RecordToNever}
     */
    RecordToNever: RecordToNever,
    /**
     * The ReplicationStatus model constructor.
     * @property {module:model/ReplicationStatus}
     */
    ReplicationStatus: ReplicationStatus,
    /**
     * The StartedByInstance model constructor.
     * @property {module:model/StartedByInstance}
     */
    StartedByInstance: StartedByInstance,
    /**
     * The StringOrVariableOrTransformation model constructor.
     * @property {module:model/StringOrVariableOrTransformation}
     */
    StringOrVariableOrTransformation: StringOrVariableOrTransformation,
    /**
     * The SuccessMessageResponse model constructor.
     * @property {module:model/SuccessMessageResponse}
     */
    SuccessMessageResponse: SuccessMessageResponse,
    /**
     * The TriggerPayload model constructor.
     * @property {module:model/TriggerPayload}
     */
    TriggerPayload: TriggerPayload,
    /**
     * The TriggerWorkflowViaPostResponse model constructor.
     * @property {module:model/TriggerWorkflowViaPostResponse}
     */
    TriggerWorkflowViaPostResponse: TriggerWorkflowViaPostResponse,
    /**
     * The ValidationErrors model constructor.
     * @property {module:model/ValidationErrors}
     */
    ValidationErrors: ValidationErrors,
    /**
     * The WorkflowDefinition model constructor.
     * @property {module:model/WorkflowDefinition}
     */
    WorkflowDefinition: WorkflowDefinition,
    /**
     * The WorkflowDefinitionList model constructor.
     * @property {module:model/WorkflowDefinitionList}
     */
    WorkflowDefinitionList: WorkflowDefinitionList,
    /**
     * The WorkflowDefinitionMetadata model constructor.
     * @property {module:model/WorkflowDefinitionMetadata}
     */
    WorkflowDefinitionMetadata: WorkflowDefinitionMetadata,
    /**
     * The WorkflowDefinitionWithId model constructor.
     * @property {module:model/WorkflowDefinitionWithId}
     */
    WorkflowDefinitionWithId: WorkflowDefinitionWithId,
    /**
     * The WorkflowDeleteResponse model constructor.
     * @property {module:model/WorkflowDeleteResponse}
     */
    WorkflowDeleteResponse: WorkflowDeleteResponse,
    /**
     * The WorkflowInstance model constructor.
     * @property {module:model/WorkflowInstance}
     */
    WorkflowInstance: WorkflowInstance,
    /**
     * The WorkflowInstanceMap model constructor.
     * @property {module:model/WorkflowInstanceMap}
     */
    WorkflowInstanceMap: WorkflowInstanceMap,
    /**
     * The WorkflowInstanceState model constructor.
     * @property {module:model/WorkflowInstanceState}
     */
    WorkflowInstanceState: WorkflowInstanceState,
    /**
     * The WorkflowInstancesList model constructor.
     * @property {module:model/WorkflowInstancesList}
     */
    WorkflowInstancesList: WorkflowInstancesList,
    /**
     * The WorkflowMetadataStatus model constructor.
     * @property {module:model/WorkflowMetadataStatus}
     */
    WorkflowMetadataStatus: WorkflowMetadataStatus,
    /**
     * The WorkflowStepError model constructor.
     * @property {module:model/WorkflowStepError}
     */
    WorkflowStepError: WorkflowStepError,
    /**
     * The WorkflowStepErrorError model constructor.
     * @property {module:model/WorkflowStepErrorError}
     */
    WorkflowStepErrorError: WorkflowStepErrorError,
    /**
     * The WorkflowStepHistory model constructor.
     * @property {module:model/WorkflowStepHistory}
     */
    WorkflowStepHistory: WorkflowStepHistory,
    /**
     * The WorkflowStepHistoryList model constructor.
     * @property {module:model/WorkflowStepHistoryList}
     */
    WorkflowStepHistoryList: WorkflowStepHistoryList,
    /**
     * The WorkflowStepHistoryState model constructor.
     * @property {module:model/WorkflowStepHistoryState}
     */
    WorkflowStepHistoryState: WorkflowStepHistoryState,
    /**
     * The WorkflowInstanceManagementApi service constructor.
     * @property {module:api/WorkflowInstanceManagementApi}
     */
    WorkflowInstanceManagementApi: WorkflowInstanceManagementApi,
    /**
     * The WorkflowManagementApi service constructor.
     * @property {module:api/WorkflowManagementApi}
     */
    WorkflowManagementApi: WorkflowManagementApi,
    /**
     * The WorkflowTriggerApi service constructor.
     * @property {module:api/WorkflowTriggerApi}
     */
    WorkflowTriggerApi: WorkflowTriggerApi
  };

  return exports;
}));