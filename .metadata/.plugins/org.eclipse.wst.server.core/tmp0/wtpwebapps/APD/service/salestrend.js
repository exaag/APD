/**
*
 */
(function() {
    "use strict";
 
    jQuery.sap.declare("service.salestrend");
    jQuery.sap.require("service.BaseServiceFacade");
   
    /**
     *
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.salestrend", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path) {
            var sServicePath = encodeURI(AP.global.config.endPoint.getsalestrendData);
            var sModelPath = "/salestrend";
            var sMeasurePath="";
                var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.salestrend = oData.d.results;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "salestrendFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "salestrendChanged");
        }
 
    });
})();