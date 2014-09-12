/**
 * 
 */
(function() {
	"use strict";

	jQuery.sap.declare("service.dispatchDimensions");
	jQuery.sap.require("service.BaseServiceFacade");

	/**
	 * 
	 * @name app.home.service.dispatchDimensions
	 * @extends app.home.service.BaseServiceFacade
	 */
	service.BaseServiceFacade.extend("service.dispatchDimensions", /** @lends app.home.service.getDispatchDimensionsData */
			{
		getRecords : function(fnSuccess, fnError,path) {
			var sServicePath = encodeURI(AP.global.config.endPoint.getDispatchDimensionsData);
			var sModelPath = "/dispatchDimensions";
			var sMeasurePath="";
			var extractDTC = function(oData) {
				var aDTC ={};
				aDTC.dispatchDimensions = oData.d.results;
				return aDTC;
			};
			var _fnSuccess = function(){
				sap.ui.getCore().getEventBus().publish("Metadata", "dispatchDimensionsFetched");
			};
			this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
		},
		publishUpdate: function(){
			sap.ui.getCore().getEventBus().publish("Metadata", "dispatchDimensionsChanged");
		}
	});
})();
