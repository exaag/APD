/**
 * 
 */
(function() {
    "use strict";

    jQuery.sap.declare("service.pack");
    jQuery.sap.require("service.BaseServiceFacade");
    
    /**
     * 
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.pack", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path) {
            var sServicePath = encodeURI(AP.global.config.endPoint.getPackData);
            var sModelPath = "/pack";
            var sMeasurePath="";
                var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.pack = oData.d.results;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "packFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "packChanged");
        }

    });
})();
