var oData = {
	"coverage" : [ {
		DEPOT : "",
		DSPD : "",
		SO : "",

	} ],
	
	"copyId":{
		
		currentId:""
	},
	
	"coverageColoumns" : [ {
		"columnId" : "",
	} ],

	"mrpctl" : [ {
		MRPCRTL_NAME : "",
		MRPCRTL_CODE : ""

	} ],
	"fm2" : [ {
		FM2_NAME : "",
		FM2_CODE : ""

	} ],
	"allocond" : [ {
		ALLOCIND_NAME : "",
		ALLOCIND_CODE : ""

	} ],
	"thinnerlin" : [ {
		THINNERLIN_NAME : "",
		THINNERLIN_CODE : ""
	} ],
	"TileCollection" : [ {
		"icon" : "bbyd-dashboard",
		"number" : "89",
		"title" : "Distribution View",
		"info" : "All about Distribution",
		"infoState" : "Success"
	}, {
		"icon" : "crm-sales",
		"number" : "89",
		"title" : "Sales View",
		"info" : "All about Sales View",
		"infoState" : "Success"
	}, {
		"icon" : "bbyd-active-sales",

		"type" : "bbyd-active-sales",
		"title" : "Sales View Atp",
		"info" : "All about Sales View Atp",
		"infoState" : "Success"
	}

	],
	"shade" : [ {
		SHADE_NAME : "",
		SHADE_CODE : ""
	} ],
	"pack" : [ {
		PACK_NAME : "",
		PACK_CODE : ""
	} ],
	"shadeName" : [ {
		SHADE_NAME : "",
		SHADE_CODE : ""
	} ],
	"dtsint" : [ {
		DSTINT_NAME : "",
		DSTINT_CODE : ""
	} ],
	"packType" : [ {
		PACKTYPE_NAME : "",
		PACKTYPE_CODE : ""
	} ],
	"product" : [ {
		PACKTYPE_NAME : "",
		PACKTYPE_CODE : ""
	} ],
	"link" : [ {
		LINK_NAME : "",
		LINK_CODE : ""
	} ],
	"region" : [ {
		REGN_NAME : "",
		REGN_CODE : ""
	} ],
	"depot" : [ {
		PLANT_NAME : "",
		PLANT_CODE : ""
	} ],
	"division" : [ {
		DIV_NAME : "",
		DIV_CODE : ""
	} ],
	"code" : [ {
		CODE : "",
		CODE_NAME : ""
	} ],
	"filters" : [ {
		filterID : "eq",
		filterName : "= ="
	}, {
		filterID : "gt",
		filterName : ">"
	}, {
		filterID : "ls",
		filterName : "<"
	}, {
		filterID : "ge",
		filterName : ">="
	}, {
		filterID : "le",
		filterName : "<="
	}, {
		filterID : "bt",
		filterName : "< bt >"
	}

	],

"TileCollection" : [ {
	"icon" : "bbyd-dashboard",
	"number" : "89",
	"title" : "Distribution View",
	"info" : "All about Distribution",
	"infoState" : "Success"
}, {
	"icon" : "crm-sales",
	"number" : "89",
	"title" : "Sales View",
	"info" : "All about Sales View",
	"infoState" : "Success"
}, {
	"icon" : "bbyd-active-sales",

	"type" : "bbyd-active-sales",
	"title" : "Dispatch View",
	"info" : "All about Dispatch View",
	"infoState" : "Success"
}

],	"templateJSON": {
	"defaultTemplate": {},
	"oneTable": {},
	"oneChart": {},
	"oneTableOneChart": {},
	"twoTableOneChart": {},
	"twoChartOneTable": {},
	"twoTableTwoChart": {},
	"fourTable": {},
	"fourChart": {}
},

"dispatchDimensions": [{}]

};

var oModel = new sap.ui.model.json.JSONModel(oData);

sap.ui.getCore().setModel(oModel);
