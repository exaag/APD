/**
 * 
 */
(function() {
    "use strict";

    jQuery.sap.declare("service.allocond");
    jQuery.sap.require("service.BaseServiceFacade");
    
    /**
     * 
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.allocond", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path) {
            var sServicePath = encodeURI(AP.global.config.endPoint.getAllocondData);
            var sModelPath = "/allocond";
            var sMeasurePath="";
                var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.allocond = oData.d.results;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "allocondFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "allocondChanged");
        }

    });
})();
