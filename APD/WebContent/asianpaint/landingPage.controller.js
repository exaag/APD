sap.ui.controller("asianpaint.landingPage", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf asianpaint.landingPage
	 */
	onInit : function() {
		
	},
	//tetst git chnage commit 
	handleTile:function(evt)
	{
		if(evt.getSource().getId()=="__tile0-idlandingPage--container-0")
				{
				var app = sap.ui.getCore().byId("mainApp");
				app.to('distribution_Id');
				
				}
	}

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf asianpaint.landingPage
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf asianpaint.landingPage
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf asianpaint.landingPage
 */
// onExit: function() {
//
// }
});