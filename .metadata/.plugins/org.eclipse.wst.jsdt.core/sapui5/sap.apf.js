
// ---- _global_ --------------------------------------------------------------------------


// ---- sap --------------------------------------------------------------------------


// ---- sap.apf --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.apf.toString = function() { return ""; };

// ---- sap.apf.Api --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Official API for Analysis Path Framework (APF)<br>
 * <p>
 * Methods exposed by an instance of this API are sufficient as an entry point to consume all functions APF offers.<br>
 * Some of the methods return instances of entities APF is based on. Methods of these instances that are part of the API are documented in their respective sections of this documentation.
 * All methods that are not documented as public methods are not intended to be used by APF consumers.
 * Furthermore there is no need to instantiate any of the APF internal entities directly by applying the JavaScript 'new'-operator on their respective constructors.
 * In case an instance needs to be created by consumers there is a respective create method available on API-level (e.g. for MessageObject or Filter).
 * </p> 
 * <br>
 * <b>Note:</b> The API reference is returned by sap.apf.Component.getApi()-method
 * 
 */
sap.apf.Api = function() {};
/**
 * 
 * @public
 * ription The handling of the window.onerror by the message handler is
 *              either switched on or off. Per default the handling is deactivated.
 * @param {boolean} bHandling Boolean true switches the winow.onerror handling on
 * @returns undefined
 */
sap.apf.Api.prototype.activateOnErrorHandling = function(bHandling) { return null; };

/**
 * 
 * @public
 * ription Injects the application facet filter component into APF layout placeholder
 * @returns undefined
 */
sap.apf.Api.prototype.addFacetFilter = function() { return null; };

/**
 * 
 * @public
 * ription Adds control to master footer 
 * @param {object} oControl any valid UI5 control
 */
sap.apf.Api.prototype.addMasterFooterContent = function(oControl) { return null; };

/**
 * 
 * @public
 * ription Creates the APF application layout
 * @returns {sap.m.App}
 */
sap.apf.Api.prototype.createApplicationLayout = function() { return new sap.m.App(); };

/**
 * 
 * @public
 * ription Creates an empty filter object.
 * Its methods can be used to create a logical filter expression.
 * @returns {sap.apf.utils.Filter}
 */
sap.apf.Api.prototype.createFilter = function() { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription Creates a message object, which is the mandatory parameter for API method putMessage.
 *              So first create the message object and afterwards call putMessage with the message object as argument.
 * @param {object} oConfig Configuration object for the message object.
 * @param {string} oConfig.code The message is classified by its code. The code identifies an entry in the message configuration.
 * @param {array} [oConfig.aParameters] Additional parameters for the message. The parameters are filled into the message text,
 *                                      when the message will be processed by the text resource handler. 
 * @param {object} [oConfig.oCallingObject] Reference of the calling object. This can be used later to visualize on the user interface, where the message occurred. 
 * @param {string} [oConfig.rawText] Raw text for non translated messages.
 * @returns {sap.apf.core.MessageObject}
 */
sap.apf.Api.prototype.createMessageObject = function(oConfig) { return new sap.apf.core.MessageObject(); };

/**
 * 
 * @public
 * ription Creates an object for performing an OData Request with HTTP GET method.
 * @param {string}  sRequestId Identifies a request configuration, which is contained in the analytical content configuration.
 * @returns {sap.apf.core.ReadRequest}
 */
sap.apf.Api.prototype.createReadRequest = function(sRequestId) { return new sap.apf.core.ReadRequest(); };

/**
 * 
 * @public
 * ription Creates a step object from the configuration object and adds it to the path.
 * @param {string} sStepId Step ID as defined in the analytical content configuration.
 * @param {function} fnStepProcessedCallback Callback for update of steps. Same semantics as in {@link sap.apf.Api#updatePath}
 * @param {string} [sRepresentationId] Parameter that allows definition of the representation id that shall 
 * initially be selected. If omitted, the first configured representation will be selected.
 * @return {sap.apf.core.Step}
 */
sap.apf.Api.prototype.createStep = function(sStepId,fnStepProcessedCallback,sRepresentationId) { return new sap.apf.core.Step(); };

/**
 * 
 * @public
 * ription Deletes the path with the given ID on server
 * @param {string} sPathId Identifies the analysis path to be deleted
 * @param {function} fnCallback The first argument of the callback function is a JS object, that holds the property status. The second argument is {sap.apf.core.EntityTypeMetadata}. The third argument is undefined or {sap.apf.core.MessageObject} if a message occurred.
 * @returns undefined
 */
sap.apf.Api.prototype.deletePath = function(sPathId,fnCallback) { return null; };

/**
 * 
 * @public
 * ription Returns active step, currently selected step, of analysis path.
 * @returns {sap.apf.core.Step}
 */
sap.apf.Api.prototype.getActiveStep = function() { return new sap.apf.core.Step(); };

/**
 * 
 * @public
 * ription Returns the location of the APF library on the server.
 * @returns {string}
 */
sap.apf.Api.prototype.getApfLocation = function() { return ""; };

/**
 * 
 * @public
 * ription This function returns those properties of the application configuration file that are not internally used.
 * @returns {object}
 */
sap.apf.Api.prototype.getApplicationConfigProperties = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns category objects of all loaded category configuration objects.
 * @returns {object[]} Object with configuration information about a category.
 */
sap.apf.Api.prototype.getCategories = function() { return new Array(); };

/**
 * 
 * @public
 * ription Returns the initial step if there is one on the first position.
 * Otherwise undefined is returned.
 * @returns {sap.apf.core.Step} || undefined
 */
sap.apf.Api.prototype.getInitialStep = function() { return new sap.apf.core.Step(); };

/**
 * 
 * @public
 * ription Returns a copy of APF log messages with severity 'fatal'.
 * @returns {string[]} Array containing the message log. The message put last is at first array position.
 */
sap.apf.Api.prototype.getLogMessages = function() { return new Array(); };

/**
 * 
 * @public
 * ription Gets the ordered sequence of all steps contained in the analysis path.
 * Each step is a reference to the object in the path. 
 * Each step shall always be identified by the reference to its step object, 
 * e.g. in methods like removeStep, moveStepToPosition, setActiveStep, etc.
 * @returns {sap.apf.core.Step[]} 
 */
sap.apf.Api.prototype.getSteps = function() { return new Array(); };

/**
 * 
 * @public
 * ription Returns step templates based on all steps configured in the analytical content configuration.
 * A step template contains static information and convenience functions.
 * @returns {sap.apf.core.configurationFactory.StepTemplate[]}
 */
sap.apf.Api.prototype.getStepTemplates = function() { return new Array(); };

/**
 * 
 * @public
 * ription Retrieves a text and applies HTML encoding
 * @param {object} oLabel || {string} Label object or text key
 * @param {string[]} aParameters Array with parameters to replace place holders in text.
 * @returns {string}
 */
sap.apf.Api.prototype.getTextHtmlEncoded = function(oLabel,aParameters) { return ""; };

/**
 * 
 * @public
 * ription Retrieves a text without application of HTML encoding
 * @param {object} oLabel || {string} Label object or text key
 * @param {string[]} aParameters Array with parameters to replace place holders in text.
 * @returns {string}
 */
sap.apf.Api.prototype.getTextNotHtmlEncoded = function(oLabel,aParameters) { return ""; };

/**
 * 
 * @public
 * ription Loads a new  application configuration in JSON format. 
 * @param {string} sFilePath The absolute path of an application configuration file. Host and port will be added in front of this path.
 */
sap.apf.Api.prototype.loadApplicationConfig = function(sFilePath) { return null; };

/**
 * 
 * @public
 * ription Moves a step in the analysis path to the specified target position. 
 * The step cannot be moved before the initial step. 
 * In case of conflict it will be moved to the position directly following the initial step. 
 * Note that a path may not contain an initial step, but if so, it is on position zero. 
 * @param {sap.apf.core.Step} oStep The step object to be moved
 * @param {number} nPosition The target position. Must be a valid position in the path, between zero and length-1.
 * @param {function} fnStepProcessedCallback Callback for update of steps. Same semantics as in {@link sap.apf.Api#updatePath}
 * @returns undefined 
 */
sap.apf.Api.prototype.moveStepToPosition = function(oStep,nPosition,fnStepProcessedCallback) { return null; };

/**
 * 
 * @public
 * ription Opens a path, that has been stored on server side and replaces the current path.
 * @param {string} sPathId Identifies the analysis path to be opened
 * @param {function} fnCallback The first argument of the callback function is a JS object with property path, that holds the stored path and status. The second argument is {sap.apf.core.EntityTypeMetadata}. The third argument is undefined or {sap.apf.core.MessageObject} if a message occurred.
 * @param {number} [nActiveStep] Sets the active step.
 * @returns undefined
 */
sap.apf.Api.prototype.openPath = function(sPathId,fnCallback,nActiveStep) { return null; };

/**
 * 
 * @public
 * ription A message is passed to the APF message handler for further processing.
 *              All message specific settings (e.g. message code or severity) need to be passed within an APF message object instance.
 * @param {sap.apf.core.MessageObject} oMessage The message object shall be created by method {@link sap.apf.Api#createMessageObject}.
 * @returns undefined
 */
sap.apf.Api.prototype.putMessage = function(oMessage) { return null; };

/**
 * 
 * @public
 * ription Reads all stored paths of the currently logged on user from server.
 * Result is returned as a list sorted by last changed date and time of a saved path in descending order.
 * @param {function} fnCallback The first argument of the callback function is an object with property paths and status.
 * The second argument is {sap.apf.core.EntityTypeMetadata}.
 * The third argument is undefined or {sap.apf.core.MessageObject} if a message occurred.
 * @returns undefined
 */
sap.apf.Api.prototype.readPaths = function(fnCallback) { return null; };

/**
 * 
 * @public
 * ription Removes a step from the analysis path. 
 * @param {sap.apf.core.Step} oStep The step object to be removed. The reference must be an object contained in the path. Otherwise, a message will be put. 
 * @param {function} fnStepProcessedCallback Callback for update of steps. Same semantics as in {@link sap.apf.Api#updatePath}
 * @returns undefined
 */
sap.apf.Api.prototype.removeStep = function(oStep,fnStepProcessedCallback) { return null; };

/**
 * 
 * @public
 * ription Removes all steps from the path and removes active step.
 * @returns undefined 
 */
sap.apf.Api.prototype.resetPath = function() { return null; };

/**
 * 
 * @public
 * ription Saves or modifies the current path on server side under the provided name. 
 * @param {string} [sPathId] If provided the path identified by the ID is modified with the current path.
 * If omitted the current path will be created as new saved path with a new ID.
 * @param {string} sName Name of the path to be saved
 * @param {function} fnCallback The first argument of the callback function is an object with property AnalysisPath and status.
 * The second argument is {sap.apf.core.EntityTypeMetadata}.
 * The third argument is undefined or {sap.apf.core.MessageObject} if a message occurred.
 * @returns undefined
 */
sap.apf.Api.prototype.savePath = function(sPathId,sName,fnCallback) { return null; };

/**
 * 
 * @public
 * ription Calls the updatePath with proper callback for UI. 
 * 				It also refreshes the steps either from the active step or 
 * 				all the steps depending on the boolean value passed.
 * @param {boolean}
 * @returns undefined
 */
sap.apf.Api.prototype.selectionChanged = function() { return null; };

/**
 * 
 * @public
 * ription Sets handed over step as the active one.
 * @param {sap.apf.core.Step} oStep The step to be set as active
 * @returns undefined 
 */
sap.apf.Api.prototype.setActiveStep = function(oStep) { return null; };

/**
 * 
 * @public
 * ription Sets an initial context for an APF instance.
 * @param {sap.apf.utils.Filter} oFilter  Filter containing initial values that are used for each OData request during update of analysis path.
 * Contained values are automatically applied to HANA view parameters and filter properties of an OData request.
 * Furthermore the values are used for determination of the logical system.
 * The filter object shall be created by method {@link sap.apf.Api#createFilter}
 * @returns undefined
 */
sap.apf.Api.prototype.setContext = function(oFilter) { return null; };

/**
 * 
 * @public
 * ription Checks whether a step is active or not.
 * @param {sap.apf.core.Step} oStep Step reference
 * @returns {boolean} 
 */
sap.apf.Api.prototype.stepIsActive = function(oStep) { return false; };

/**
 * 
 * @public
 * ription The steps in the path will be updated sequentially - starting with the analysis step at position 0.
 * Update of a step means sending an OData request and providing the step representation with the request response data.
 * Actual filter values that need to be sent with the request for a specific step in the update sequence are determined by transforming selections on step
 * representations of all precedent steps into a cumulative filter expression.
 * Furthermore the representation of the current step is queried for request options.
 * <br>
 * Following aspects of analysis path update are noteworthy:
 * <ul>
 * <li>An OData request for update of a specific step will only be sent if at least one of both determined values, cumulative Filter or request options,
 * has changed between the last update for this step where a request was sent and the current update cycle.</li>
 * <li>Because transformation of selections on a UI representation into a filter expression is based on current
 * data, OData requests need to be sent sequentially following the order of steps in the analysis path.
 * In other words: request for step n can earliest be sent once data for step n-1 has been received and evaluated</li>
 * </ul>
 * @param {function} fnStepProcessedCallback Callback function that is called for each step during the update of an analysis path.
 * First argument of the callback function is the step instance.
 * The second argument is a boolean indicator, telling whether data for the step has been updated with current request response data or not.
 * Data of a step will not be updated if there is no difference in OData request attributes between previous and current (potential) update.
 * @returns undefined 
 */
sap.apf.Api.prototype.updatePath = function(fnStepProcessedCallback) { return null; };


// ---- sap.apf.Component --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Base Component for all APF based applications.
 * @extends sap.ui.core.UIComponent
 */
sap.apf.Component = function() {};
/**
 * 
 * @public
 * ription Creates the content of the component. A component, that extends this component should call this method.
 * @returns {sap.ui.core.Control} the content
 */
sap.apf.Component.prototype.createContent = function() { return new sap.ui.core.Control(); };

/**
 * 
 * @public
 * ription Returns the instance of the APF API.
 * @returns {sap.apf.Api}
 */
sap.apf.Component.prototype.getApi = function() { return new sap.apf.Api(); };

/**
 * 
 * @public
 * ription Initialize the Component instance after creation. The component, that extends this component should call this method.
 * 
 */
sap.apf.Component.prototype.init = function() { return null; };


// ---- sap.apf.core --------------------------------------------------------------------------


// ---- sap.apf.core.configurationFactory --------------------------------------------------------------------------


// ---- sap.apf.core.configurationFactory-StepTemplate --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Step templates are runtime objects, which contain analysis step information based on the analytical content configuration.
 * 
 */
sap.apf.core.configurationFactory-StepTemplate = function() {};
/**
 * 
 * @public
 * @memberOf sap.apf.core.configurationFactory-StepTemplate
 * ription Returns all representation information that is configured for the step.
 * @returns {object[]}
 */
sap.apf.core.configurationFactory-StepTemplate.prototype.getRepresentationInfo = function() { return new Array(); };

/**
 * 
 * @public
 * @memberOf sap.apf.core.configurationFactory-StepTemplate
 * ription Returns true if category of step configuration equals 'initial'
 * @returns {boolean}
 */
sap.apf.core.configurationFactory-StepTemplate.prototype.isForInitialStep = function() { return false; };


// ---- sap.apf.core.MessageObject --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class The message object represents the APF specific message object for detailed evaluation. The message object shall be created by method {@link sap.apf.Api#createMessageObject}.
 * @param {object} oConfig 
 */
sap.apf.core.MessageObject = function(oConfig) {};
/**
 * 
 * @public
 * ription Returns the calling object
 * @returns {object}
 */
sap.apf.core.MessageObject.prototype.getCallingObject = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns the message code.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getCode = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the version of jQuery
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getJQueryVersion = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the message text.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getMessage = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the parameter which were passed over
 * @returns {array}
 */
sap.apf.core.MessageObject.prototype.getParameters = function() { return null; };

/**
 * 
 * @public
 * ription Gets the previous message object. 
 * @returns {sap.apf.core.MessageObject} || undefined
 */
sap.apf.core.MessageObject.prototype.getPrevious = function() { return new sap.apf.core.MessageObject(); };

/**
 * 
 * @public
 * ription Returns raw text. 
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getRawText = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the version of SAP UI5
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getSapUi5Version = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the severity.
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getSeverity = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the stack of the error object to get the line number and source file
 * @returns {string}
 */
sap.apf.core.MessageObject.prototype.getStack = function() { return ""; };

/**
 * 
 * @public
 * ription Returns the time stamp of the message object in seconds after 1970
 * @returns {number}
 */
sap.apf.core.MessageObject.prototype.getTimestamp = function() { return 0.0; };

/**
 * 
 * @public
 * ription Returns the time stamp of the message object as a date
 * @returns {date}
 */
sap.apf.core.MessageObject.prototype.getTimestampAsdateObject = function() { return null; };

/**
 * 
 * @public
 * ription Returns true, if a raw text is set. 
 * @returns {boolean}
 */
sap.apf.core.MessageObject.prototype.hasRawText = function() { return false; };

/**
 * 
 * @public
 * ription Sets the code, that classifies the message.
 * @param {string} code 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setCode = function(code) { return null; };

/**
 * 
 * @public
 * ription Sets the message text.
 * @param {string} sTextMessage 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setMessage = function(sTextMessage) { return null; };

/**
 * 
 * @public
 * ription Sets the previous message object. One can add a message object to this message object, that describes a previous message. 
 * The message in the previous message object will also be displayed in the log (as previous entry). 
 * @param {sap.apf.core.MessageObject} oPreviousMessageObject 
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setPrevious = function(oPreviousMessageObject) { return null; };

/**
 * 
 * @public
 * ription Sets the severity , which classifies the message.
 * @param {string} severity Only for to build in error messages. Allowed values are defined in {@link sap.apf.constants.severity}.
 * @returns undefined
 */
sap.apf.core.MessageObject.prototype.setSeverity = function(severity) { return null; };


// ---- sap.apf.core.Path --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Holds the order and state of the Step instances within the analysis path. The methods, that change the path or get state of the path
 * shall be called through the APF api (@see sap.apf.Api). The path is automatically created at startup of the APF.
 * @param oInject.messageHandler {sap.apf.core.MessageHandler} MessageHandler
 * @param oInject.coreApi {sap.apf.core.Instance} core API
 * 
 */
sap.apf.core.Path = function() {};

// ---- sap.apf.core.ReadRequest --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Facade for sap.apf.core.Request for getting data via the OData protocol. This corresponds to a normal HTTP GET method. Creation is done via APF API.
 * @param {object} oInject Injection object.
 * @param {object} oInject.coreApi Instance of core API.
 * @param {object} oInject.oMessageHandler The APF Message handler.
 * @param {object} oRequest The object represents an OData GET request.
 * @param {string} sService Service defined by the analytical content configuration.
 * @param {string} sEntityType Entity type defined by the analytical content configuration.
 * @returns {sap.apf.core.ReadRequest}
 */
sap.apf.core.ReadRequest = function(oInject,oRequest,sService,sEntityType) {};
/**
 * 
 * @public
 * ription Returns the corresponding meta data object for the read request.
 * @returns {sap.apf.core.EntityTypeMetadata}
 */
sap.apf.core.ReadRequest.prototype.getMetadata = function() { return new sap.apf.core.EntityTypeMetadata(); };

/**
 * 
 * @public
 * ription Executes an OData request.
 * @param {sap.apf.utils.Filter} oFilter
 * @param {function} fnCallback  The first argument of the callback function is the received data (as Array). The second argument is {sap.apf.core.EntityTypeMetadata}. The third argument is {sap.apf.core.MessageObject}. 
 * @returns undefined
 */
sap.apf.core.ReadRequest.prototype.send = function(oFilter,fnCallback) { return null; };


// ---- sap.apf.core.Step --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class A step is a runtime container for binding and request. 
 * @param {object} oMessageHandler Message handler instance
 * @param {object} oStepConfig Step configuration object from analytical content configuration
 * @param {sap.apf.core.ConfigurationFactory} oFactory
 * @returns {sap.apf.core.Step} 
 */
sap.apf.core.Step = function(oMessageHandler,oStepConfig,oFactory) {};
/**
 * 
 * @public
 * ription Returns additional properties from step template
 * @returns {object}
 */
sap.apf.core.Step.prototype.getAdditionalConfigurationProperties = function() { return new Object(); };

/**
 * 
 * @public
 * ription Fetches the selection from the representation. 
 * @returns {sap.apf.core.utils.Filter} 
 */
sap.apf.core.Step.prototype.getFilter = function() { return new sap.apf.core.utils.Filter(); };

/**
 * 
 * @public
 * ription Returns an array of representation information objects.
 * @returns {object[]}
 */
sap.apf.core.Step.prototype.getRepresentationInfo = function() { return new Array(); };

/**
 * 
 * @public
 * ription Returns the selected representation object. 
 * @returns {sap.apf.ui.representations.representationInterface}
 */
sap.apf.core.Step.prototype.getSelectedRepresentation = function() { return new sap.apf.ui.representations.representationInterface(); };

/**
 * 
 * @public
 * ription Returns the representation information object of the selected representation. 
 * @returns {object}
 */
sap.apf.core.Step.prototype.getSelectedRepresentationInfo = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns true if this step instance is an initial one
 * @returns {boolean}
 */
sap.apf.core.Step.prototype.isInitialStep = function() { return false; };

/**
 * 
 * @public
 * ription Sets the selected representation via representation id. 
 * The selected representation receives the response data through setData().  
 * @param {string} sRepresentationId The representation id used to identify the representation. 
 * @returns {undefined}
 */
sap.apf.core.Step.prototype.setSelectedRepresentation = function(sRepresentationId) { return null; };


// ---- sap.apf.core.utils --------------------------------------------------------------------------


// ---- sap.apf.ui --------------------------------------------------------------------------


// ---- sap.apf.ui.representations --------------------------------------------------------------------------


// ---- sap.apf.ui.representations.representationInterface --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class This is not a runtime class, but it describes the interface that a representation (chart) has to implement for to interact with the APF.
 * @param {object} oParameter Configuration object that allows to define representation specific configuration values.<br>
 * @param {sap.apf.Api} oApi Api of sap.apf.<br>
 * Fixed interface property names:
 * <ul><li><b>alternateRepresentationTypeId</b>: A reference to a representation type in analytical configuration
 * <li><b>alternateRepresentationType</b>: A property dynamically added to the parameter object by APF core based on reference in alternateRepresentationTypeId and containing
 * configuration values of the representation type ID referenced by alternateRepresentationTypeId.
 * </ul>
 */
sap.apf.ui.representations.representationInterface = function(oParameter,oApi) {};
/**
 * 
 * @public
 * ription Called on representation by binding when a representation type is set. 
 * Intention is to trigger transfer of selections that might exist on a representation (source) that is replaced by the "new" representation (target) to be set.
 * Therefore the target representation receives a reference pointing to the source representation.
 * In order to check whether selection transfer is possible the target representation initiates a negotiation process with the source representations (3-way-handshake).
 * If a common method can be determined between target and source representation the selection will be exchanged. 
 * @param {object} oSourceRepresentation Source representation implementing the representationInterface.
 */
sap.apf.ui.representations.representationInterface.prototype.adoptSelection = function(oSourceRepresentation) { return null; };

/**
 * 
 * @public
 * ription This method uses the serialization information from serialized data and sets the selection to representation based on mode and selection string returned.
 * @param {object} oSerializationInformation
 */
sap.apf.ui.representations.representationInterface.prototype.deserialize = function(oSerializationInformation) { return null; };

/**
 * 
 * @public
 * ription Returns the alternate representation of current step (i.e. list representation for the charts)  
 * @returns {object} oAlternateRepresentation
 */
sap.apf.ui.representations.representationInterface.prototype.getAlternateRepresentation = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns data for representation type
 * @returns {array} aDataResponse
 */
sap.apf.ui.representations.representationInterface.prototype.getData = function() { return null; };

/**
 * 
 * @public
 * ription This method has to be implemented if the representation is the representation of the initial step
 * (instead of the method getSelectionAsArray). For all other representations, this function must return <b>undefined</b>.<br> 
 * Restrictions on SAPClient, Company Code, Time, etc. can be filled into the filter object and returned. The selections from the start filter of 
 * the path (set with sap.apf.setStartFilter) have been already transferred to the initial representation with method setFilter before. 
 * You only need to return the selections which have been changed (for example, the Company Code has been changed in the initial representation) or which have been added.
 * Selections from the setFilter, that have not been changed, need not to be returned.
 * @param {string[]} aRequiredFilters Properties, on which the filter has to be created.
 * @returns {sap.apf.utils.Filter} Filter Object
 */
sap.apf.ui.representations.representationInterface.prototype.getFilter = function(aRequiredFilters) { return new sap.apf.utils.Filter(); };

/**
 * 
 * @public
 * ription This method has to be implemented so that binding can determine which method has to be used for the filter retrieval from a representations.
 * @returns {sap.apf.constants.filterMethodTypes} The filter method type the representation supports
 */
sap.apf.ui.representations.representationInterface.prototype.getFilterMethodType = function() { return new sap.apf.constants.filterMethodTypes(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown on main representation area.
 * @returns {object} oUiObject The UI object that has to be shown in main representation area. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getMainContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription Returns meta data for representation type
 * @returns {sap.apf.core.EntityTypeMetadata} metadata
 */
sap.apf.ui.representations.representationInterface.prototype.getMetaData = function() { return new sap.apf.core.EntityTypeMetadata(); };

/**
 * 
 * @public
 * ription The method returns the constructor arguments which will be used to create toggle representation.
 * @returns {object} oParameters
 */
sap.apf.ui.representations.representationInterface.prototype.getParameter = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be printed.
 * @returns {object} oUiObject The UI object that has to be printed. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getPrintContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription Additionally to parameters being set in the request configuration and filter values that are derived from the path logic, 
 * a request can be enriched with additional options such as <b>$top</b>, <b>$skip</b> and <b>$orderby</b>.<p>
 * Dependent on the actual options a representation may require for a request, an object containing the correspondent properties may be returned by this method.
 * <br>In case no additional options are required an empty object should be returned.<p>
 * </p><p>
 * The supported optional properties of the return object are:
 * <ul><li><b>paging</b>: An object containing optional properties<ul><li><b>top</b> for OData system query option $top <br>A numeric value is expected<li><b>skip</b> for query string option $skip<br> A numeric value is expected
 * <li><b>inlineCount</b> for OData system query option $inlineCount<br>A boolean value 'true' is expected if inline count is requested</ul>
 * <li><b>orderby</b> for OData system query option $orderby: Values could be of type<ul> 
 * 	<li><b>string</b> that holds a property name (in this case the default sort order 'ascending' is applied)
 *  <li><b>object</b> with properties:<ul>
 *  	<li>'property' A string containing the property name is expected.
 *  	<li>'descending' A boolean value 'true' is expected, if descending sort order is required for the property. If omitted default sort order 'ascending' is applied.
 *  </ul>
 *  <li><b>array</b> holding objects with properties 'property' and 'descending' as described above.</ul>
 * @returns {object} 
 * Example:
 * <pre class="javascript">
 * { paging : {
 * 		top : 10,
 * 		skip : 30,
 * 		inlineCount : true
 *  },
 *  orderby : [ 
 * 		{ property : "nameProperty1",
 * 		}, {
 * 		property : "nameProperty2",
 * 		descending : true
 * 		}
 *  ]
 * }
 * </pre>
 * See also <a href="http://www.odata.org/documentation/odata-v2-documentation/uri-conventions/">http://www.odata.org/documentation/odata-v2-documentation/uri-conventions</a>
 */
sap.apf.ui.representations.representationInterface.prototype.getRequestOptions = function() { return new Object(); };

/**
 * 
 * @public
 * ription This is the basic method with which the step can detect data selected in the chart.
 * @returns {number[]} An array with indices is returned.<br>E.g. if the first and the third line of the array aDataResponse have been selected,
 * then aIndices = [0, 2]. Counting of indices start from 0.
 * If all data has been selected, and aDataResponse.length == 4, then the array [0,1,2,3] is returned. In general [ 0 .. aDataResponse.length - 1]
 * If no data has been selected at all, then [] is returned.
 * In case of an empty selection, the value undefined has to be returned. An empty selection may occur, when selections in the previous step has been changed,
 * so that the visual selection on the chart is now empty (empty rectangle).
 */
sap.apf.ui.representations.representationInterface.prototype.getSelectionAsArray = function() { return new Array(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown on thumbnail area.
 * @returns {object} oUiObject The UI object that has to be shown in thumbnail area. Example: Line chart instance for a line chart representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getThumbnailContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to draw the content to be shown as tooltip for a thumbnail.
 * It will be shown inside a tooltip Popup when the thumbnail content overflows the thumbnail container area with a gradient effect to indicate that it is overflowing.
 * @returns {object} oUiObject The UI object that has to be shown as tooltip for a thumbnail. Example: Detailed content of a form representation.
 */
sap.apf.ui.representations.representationInterface.prototype.getTooltipContent = function() { return new Object(); };

/**
 * 
 * @public
 * ription This method holds the logic to remove all selection from the chart. It also updates the step. 
 */
sap.apf.ui.representations.representationInterface.prototype.removeAllSelection = function() { return null; };

/**
 * 
 * @public
 * ription This method returns the selection for serialization. This is required for the Persisting selection of current representation.
 * It includes selection mode and selections. 
 * @returns {object} oSerializationInformation 
 */
sap.apf.ui.representations.representationInterface.prototype.serialize = function() { return new Object(); };

/**
 * 
 * @public
 * ription The binding sets the data (received from the request) that has to be visualized. The array aDataResponse is shared between all representations
 * of a step and the binding. When lines are moved, deleted or changed, you modify the visualization of the original data! When displaying the data, one can determine which record
 * is selected by aSelectedIndices. 
 * @param {array} aDataResponse Data response from the request.
 * @param {sap.apf.core.Metadata} oMetadata oMetadata holds meta information about the received data.
 */
sap.apf.ui.representations.representationInterface.prototype.setData = function(aDataResponse,oMetadata) { return null; };

/**
 * 
 * @public
 * ription This method has to be implemented, if the representation is a representation for the initial step.
 * The filter holds the values of the start filter of the path. An example are restrictions on SAPClient, that have been transferred via url and
 * have been set as start filter for path (method sap.apf.setStartFilter). The getFilter method only has to return those expressions from
 * the filter, which have been set here, if the expressions have been changed. Unchanged expressions are automatically merged by the binding into
 * the filter of the path! <br>Hint: If you need to get expressions from filter, then use method oFilter.getExpressions(). 
 * @param {sap.apf.utils.Filter} oFilter
 */
sap.apf.ui.representations.representationInterface.prototype.setFilter = function(oFilter) { return null; };


// ---- sap.apf.ui.reuse --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.controller --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.fragment --------------------------------------------------------------------------


// ---- sap.apf.ui.reuse.view --------------------------------------------------------------------------


// ---- sap.apf.ui.utils --------------------------------------------------------------------------


// ---- sap.apf.utils --------------------------------------------------------------------------


// ---- sap.apf.utils.Filter --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Filter object
 * ription It is designed to be used for supplying context
 * information for the application. In addition, it can be used 
 * for exchanging filter values between the path and the 
 * representation of the initial step. This function object 
 * supports the top down construction of filter expressions.
 * @returns {sap.apf.utils.Filter}
 */
sap.apf.utils.Filter = function() {};
/**
 * 
 * @public
 * ription Adds an object of type {@link sap.apf.utils.FilterAnd}.
 * @param {string} sId Identifier for the object to be added.
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.Filter.prototype.addAnd = function(sId) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Returns filter object or expression for a given ID, if exists 
 * @param {string} sId ID of the object to be returned. 
 * @returns {sap.apf.utils.FilterAnd} || {sap.apf.utils.FilterOr} || {sap.apf.utils.FilterExpression} || undefined
 */
sap.apf.utils.Filter.prototype.getById = function(sId) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Returns array of expressions as nested array. 
 * All expressions with the same name are returned in the same sub array. <p>Example: <br>[ [ {name: "country", operator: this.EQ, value: "country1"}, <br>
 * {name: "country", operator: this.EQ, value: "country2"}], <br>[{name: "customer", operator: this.EQ, value: "customer1"} ] ]</p>
 * The sub arrays are connected by logical 'AND'. The expressions within a sub array are connected by logical 'OR'.
 * @returns {object[]} Array of expressions
 */
sap.apf.utils.Filter.prototype.getExpressions = function() { return new Array(); };

/**
 * 
 * @public
 * ription Convenience function to get the OData operators which are defined in {sap.apf.core.constants.FilterOperators}.
 * @returns {sap.apf.core.constants.FilterOperators}
 */
sap.apf.utils.Filter.prototype.getOperators = function() { return new sap.apf.core.constants.FilterOperators(); };

/**
 * 
 * @public
 * ription Returns the top 'AND' object of the filter. 
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.Filter.prototype.getTopAnd = function() { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Updates an expression.
 * @param {string} sId ID of expression to be updated
 * @param {object} oExpression Expression object containing the updated properties 
 * @param oExpression.id Updated expression ID
 * @param oExpression.name Updated expression name
 * @param oExpression.operator Updated expression operator of type {@link sap.apf.utils.Filter#getOperators}
 * @param oExpression.value Updated expression value
 * @returns undefined
 */
sap.apf.utils.Filter.prototype.updateExpression = function(sId,oExpression) { return null; };

/**
 * 
 * @public
 * ription Updates a value of an expression object.
 * @param {string} sId ID of the expression object to be updated
 * @param {string} value The new value for the expression
 * @returns undefined
 */
sap.apf.utils.Filter.prototype.updateValue = function(sId,value) { return null; };


// ---- sap.apf.utils.FilterAnd --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class FilterAnd
 * @param {string} sId Identifier for the object
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.FilterAnd = function(sId) {};
/**
 * 
 * @public
 * ription Adds an expression object to this filter. 
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type {@link sap.apf.utils.Filter#getOperators}
 * @param oExpression.value Expression value
 * @returns {sap.apf.utils.FilterAnd} this to allow method chaining
 */
sap.apf.utils.FilterAnd.prototype.addExpression = function(oExpression) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Adds an object of type {@link sap.apf.utils.FilterOr}.
 * @param {string} sId Identifier for the object to be added.
 * @returns {sap.apf.utils.FilterOr}
 */
sap.apf.utils.FilterAnd.prototype.addOr = function(sId) { return new sap.apf.utils.FilterOr(); };

/**
 * 
 * @public
 * ription Returns ID of this filter object.
 * @returns {string}
 */
sap.apf.utils.FilterAnd.prototype.getId = function() { return ""; };


// ---- sap.apf.utils.FilterExpression --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class Filter expression
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type {@link sap.apf.utils.Filter#getOperators}
 * @param oExpression.value Expression value
 * @returns {sap.apf.utils.FilterExpression}
 */
sap.apf.utils.FilterExpression = function(oExpression) {};

// ---- sap.apf.utils.FilterOr --------------------------------------------------------------------------

/**
 * 
 * @public
 * @class FilterOr
 * @param {string} sId Identifier for the object
 * @param {sap.apf.utils.FilterAnd} oAnd Parent object  
 * @returns {sap.apf.utils.FilterOr}
 */
sap.apf.utils.FilterOr = function(sId,oAnd) {};
/**
 * 
 * @public
 * ription Adds an object of type {@link sap.apf.utils.FilterAnd}.
 * @param {string} sId Identifier for the object to be added.
 * @returns {sap.apf.utils.FilterAnd}
 */
sap.apf.utils.FilterOr.prototype.addAnd = function(sId) { return new sap.apf.utils.FilterAnd(); };

/**
 * 
 * @public
 * ription Adds an expression object to this filter. 
 * @param {object} oExpression Expression object
 * @param oExpression.id Expression ID
 * @param oExpression.name Expression name
 * @param oExpression.operator Expression operator of type {@link sap.apf.utils.Filter#getOperators}
 * @param oExpression.value Expression value
 * @returns {sap.apf.utils.FilterOr} this to allow method chaining
 */
sap.apf.utils.FilterOr.prototype.addExpression = function(oExpression) { return new sap.apf.utils.FilterOr(); };

/**
 * 
 * @public
 * ription Retrieves an ID of the term.
 * @returns {string} ID of the term.
 */
sap.apf.utils.FilterOr.prototype.getId = function() { return ""; };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.apf --------------------------------------------------------------------------

/**
 * 
 * @public
 * ription Constants to be used by APF consumers
 * @memberOf sap.apf
 */
sap.apf.constants = null;

