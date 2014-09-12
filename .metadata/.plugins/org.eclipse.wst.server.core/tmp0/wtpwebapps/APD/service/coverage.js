/**
 * 
 */
(function() {
    "use strict";

    jQuery.sap.declare("service.coverage");
    jQuery.sap.require("service.BaseServiceFacade");
   
    /**
     * 
     * @name app.home.service.DTCServiceFacade
     * @extends app.home.service.BaseServiceFacade
     */
    service.BaseServiceFacade.extend("service.coverage", /** @lends app.home.service.DinmensionServiceFacade */
    {
        getRecords : function(fnSuccess, fnError,path,coloumnData) {
        	var coloumnsString="";
        	if(coloumnData.length==0 || path.length==0)
        		{
        		path="DEPOT,ESTM,SALE,STK,ITR,IBAY_P,IBAY_R,UCV,SO";//oBundle.getText('fixedColoumn');
        		coloumnsString=path;
        		}else
        			{
        			coloumnsString=coloumnData;
        			}
            var sServicePath = encodeURI(AP.global.config.endPoint.getCoverageData+"?$select="+path+"&$format=json");
            var sModelPath = "/coverage";
            var sMeasurePath="/coverageColoumns";
            var tableColoumns=[];
            tableColoumns=coloumnsString.split(",");
            var coloumnData=[];
            for (var i=0;i<tableColoumns.length;i++) {
                var obj = {};
                    obj['columnId'] = tableColoumns[i];
                    coloumnData.push(obj);
                }
            var extractDTC = function(oData) {
                     var aDTC ={};
                 aDTC.coverage = oData.d.results;
                 aDTC.coverageColoumns = coloumnData;
                return aDTC;
            };
            var _fnSuccess = function(){
                sap.ui.getCore().getEventBus().publish("Metadata", "coverageFetched");
            };
            this._get(sServicePath, sModelPath,sMeasurePath, _fnSuccess, fnError, extractDTC);
        },
          publishUpdate: function(){
            sap.ui.getCore().getEventBus().publish("Metadata", "coverageChanged");
        }

    });
})();
