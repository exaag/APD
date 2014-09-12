/**
 * 
 */
(function() {
	"use strict";

	jQuery.sap.declare("service.templateJSON");
	jQuery.sap.require("service.BaseServiceFacade");

	/**
	 * 
	 * @name app.home.service.DTCServiceFacade
	 * @extends app.home.service.BaseServiceFacade
	 */
	service.BaseServiceFacade.extend("service.templateJSON", /** @lends app.home.service.getTemplateJSONData */
			{
		getRecords : function(fnSuccess, fnError,path) {
			var sServicePath = encodeURI(AP.global.config.endPoint.getTemplateJSONData);
			var sModelPath = "/templateJSON";
			var sMeasurePath="";
			var extractDTC = function(oData) {
				var aDTC ={};
				aDTC.templateJSON = oData.d.results;
				return aDTC;
			};
			var _fnSuccess = function(){
				sap.ui.getCore().getEventBus().publish("Metadata", "templateJSONFetched");
			};
			this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
		},
		publishUpdate: function(){
			sap.ui.getCore().getEventBus().publish("Metadata", "templateJSONChanged");
		}
	});
})();
