sap.ui.localResources("asianpaint");
sap.ui.localResources("componenets");
sap.ui.localResources("fragments");
sap.ui.localResources("service");
jQuery.sap.registerModulePath("service", "service");
sap.ui.localResources("global");
sap.ui.localResources(".");
jQuery.sap.require("jquery.sap.resources");
var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
var oBundle = jQuery.sap.resources({url : "res/i18n.properties", locale: sLocale});

var app = new sap.m.App('mainApp', {
	initialPage : "idlandingPage"
});
var landingPage = sap.ui.view({
	id : "idlandingPage",
	viewName : "asianpaint.landingPage",
	type : sap.ui.core.mvc.ViewType.XML
});
var distributionPage = sap.ui.view({
	id : "distribution_Id",
	viewName : "asianpaint.distribution.distribution",
	type : sap.ui.core.mvc.ViewType.XML
});
/*var dispatchPage = sap.ui.view({
	id:"dispatch_Id",
	viewName:"asianpaint.dispatch.dispatch",
	type:sap.ui.core.mvc.ViewType.XML
});*/
app.addPage(landingPage).addPage(distributionPage);
app.placeAt("content");
