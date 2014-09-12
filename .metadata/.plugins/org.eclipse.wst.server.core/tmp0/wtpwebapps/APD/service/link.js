/**
 * 
 */
(function() {
    "use strict";

    jQuery.sap.declare("service.link");
    jQuery.sap.require("service.BaseServiceFacade");
    
    /**
     * 
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.link", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path) {
            var sServicePath = encodeURI(AP.global.config.endPoint.getLinkData);
            var sModelPath = "/link";
            var sMeasurePath="";
                var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.link = oData.d.results;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "linkFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "linkChanged");
        }

    });
})();
