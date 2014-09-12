/**
 * 
 */

AP = {};
AP.global = {};
AP.global.config = {};
//Make an end point to true for production.
AP.global.config.applicationMode = true;

AP.global.config.development = {
    base : "",
    endPoints : {
    	getDispatchDimensionsData : "JSONdata/dispatchDimensions.json",
        getTemplateJSONData : "JSONdata/templateJSON.json",
        getCoverageData : "JSONdata/coverage.json",
        getMrpcrtlData : "JSONdata/mrpctl.json",
        getFm2Data : "JSONdata/fm2.json",
        getAllocondData:"JSONdata/allocond.json",
        getThinnerlinData:"JSONdata/thinnerlin.json",
        getShadeData:"JSONdata/shade.json",
        getPackData:"JSONdata/pack.json",
        getShadeNameData:"JSONdata/shadename.json",
        getdtsintData:"JSONdata/dtsind.json",
        getPackTypeData:"JSONdata/packType.json",
        getProductData:"JSONdata/product.json",
        getLinkData:"JSONdata/link.json",
        getRegionData:"JSONdata/region.json",
        getDepotData:"JSONdata/depot.json",
        getDivisionData:"JSONdata/division.json",
        getCodeData:"JSONdata/code.json",
    }
};
     
AP.global.config.production = {
    base : "",
    endPoints : {
    	getDispatchDimensionsData : "JSONdata/dispatchDimensions.json",
        getTemplateJSONData : "JSONdata/templateJSON.json",
        getCoverageData : "http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Coverage",
        getMrpcrtlData : "http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_MRPCRTL_Set",
        getFm2Data : "http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_FM2Set",
        getAllocondData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_ALLOCINDSet",
        getThinnerlinData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_THINNERLINSet",
        getShadeData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_SHADESet",
        getPackData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_PACKSet",
        getShadeNameData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_SHADESet",
        getdtsintData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_DTSINDSet",
        getPackTypeData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_PACKTYPESet",
        getProductData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_PRODSet",
        getLinkData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_LINKSet",
        getRegionData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_REGNSet",
        getDepotData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_Plant_CodesSet",
        getDivisionData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_DIVSet",
        getCodeData:"http://172.25.10.102:8000/sap/opu/odata/sap/ZDISTRIBUTION_VIEW_SRV/Val_Hlp_CODESet",
    }
};

AP.global.config.endPoint = function() {
    var obj = {};
    var mode = AP.global.config.applicationMode ? "production" : "development";
    for ( var index in AP.global.config[mode]["endPoints"]) {
        obj[index] = AP.global.config[mode]["base"]
                + AP.global.config[mode]["endPoints"][index];
    }
    return obj;
}();

