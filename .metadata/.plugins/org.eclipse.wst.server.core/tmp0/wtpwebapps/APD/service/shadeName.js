/**
 * 
 */
(function() {
    "use strict";

    jQuery.sap.declare("service.shadeName");
    jQuery.sap.require("service.BaseServiceFacade");
    
    /**
     * 
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.shadeName", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path) {
            var sServicePath = encodeURI(AP.global.config.endPoint.getShadeNameData);
            var sModelPath = "/shadeName";
            var sMeasurePath="";
                var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.shadeName = oData.d.results;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "shadeNameFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "shadeNameChanged");
        }

    });
})();
