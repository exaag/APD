jQuery.sap.require("service.BaseServiceFacade");
jQuery.sap.require("service.coverage");
jQuery.sap.require("service.mrpctl");
jQuery.sap.require("service.fm2");
jQuery.sap.require("service.allocond");
jQuery.sap.require("service.thinnerlin");
jQuery.sap.require("service.shade");
jQuery.sap.require("service.pack");
jQuery.sap.require("service.shadeName");
jQuery.sap.require("service.dtsint");
jQuery.sap.require("service.packType");
jQuery.sap.require("service.product");
jQuery.sap.require("service.link");
jQuery.sap.require("service.region");
jQuery.sap.require("service.depot");
jQuery.sap.require("service.division");
jQuery.sap.require("service.code");
var keyFiguresArray=[];

sap.ui.controller("asianpaint.distribution.distribution", {
	
    /**
     * Called when a controller is instantiated and its View
     * controls (if available) are already created. Can be used
     * to modify the View before it is displayed, to bind event
     * handlers and do other one-time initialization.
     * 
     * @memberOf asianpaint.sales.salesDetailPage
     */

    onInit: function () {

    	//compact css for less font .Rmove for bigger one .
        this.getView().toggleStyleClass("sapUiSizeCompact", oData.compactOn);

        //get event bus for event trigger and set Coverage Data to oModel . 
        var oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'coverageChanged', this._fetchCoverageData, this);
        this._coverageService = new service.coverage(oModel);

        //get event bus for event trigger and set mrpctl Data to oModel . 
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'mrpctlChanged', this._fetchMrpctlData, this);
        this._mrpctlService = new service.mrpctl(oModel);

        //get event bus for event trigger and set fm2 Data to oModel . 
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'fm2Changed', this._fetchfm2Data, this);
        this._fm2Service = new service.fm2(oModel);

        //get event bus for event trigger and set allocond Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'allocondChanged', this._fetchallocondData, this);
        this._allocondService = new service.allocond(oModel);
        
        //get event bus for event trigger and set thinnerlin Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'thinnerlinChanged', this._thinnerlinData, this);
        this._thinnerlinService = new service.thinnerlin(oModel);
        
        //get event bus for event trigger and set shade Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'shadeChanged', this._shadeData, this);
        this._shadeService = new service.shade(oModel);

        //get event bus for event trigger and set pack Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'packChanged', this._packData, this);
        this._packService = new service.pack(oModel);

        //get event bus for event trigger and set shadeName Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'shadeNameChanged', this._shadeNameData, this);
        this._shadeNameService = new service.shadeName(oModel);
        this._packService = new service.pack(oModel);

        //get event bus for event trigger and set dtsint Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'dtsintChanged', this._dtsintData, this);
        this._dtsintService = new service.dtsint(oModel);

        //get event bus for event trigger and set packType Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'packTypeChanged', this._packTypeData, this);
        this._packTypeService = new service.packType(oModel);

        //get event bus for event trigger and set product Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'productChanged', this._productData, this);
        this._productService = new service.product(oModel);

        //get event bus for event link and set product Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'linkChanged', this._linkData, this);
        this._linkService = new service.link(oModel);

        //get event bus for event link and set region Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'regionChanged', this._regionData, this);
        this._regionService = new service.region(oModel);
        
        //get event bus for event link and set depot Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'depotChanged', this._depotData, this);
        this._depotService = new service.depot(oModel);

        //get event bus for event division and set depot Data to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'divisionChanged', this._divisionData, this);
        this._divisionService = new service.division(oModel);

        //get event bus for event division and set depot code to oModel .
        oEventBus = sap.ui.getCore().getEventBus();
        oEventBus.subscribe('Metadata', 'codeChanged', this._codeData, this);
        this._codeService = new service.code(oModel);
        this._fetchCoverageData("","");
        this._fetchMrpctlData();
        this._fetchfm2Data();
        this._fetchallocondData();
        this._thinnerlinData();
        this._shadeData();
        this._packData();
        this._shadeNameData();
        this._dtsintData();
        this._packTypeData();
        this._productData();
        this._linkData();
        this._regionData();
        this._depotData();
        this._divisionData();
        this._codeData();

    },

    
    //initialize all the Facade's.   
    _fetchCoverageData: function (path,coloumnOrder) {
        this._coverageService.getRecords(null, null, path,coloumnOrder);
    },

    _fetchMrpctlData: function () {
        this._mrpctlService.getRecords(null, null, null);
    },

    _fetchfm2Data: function () {
        this._fm2Service.getRecords(null, null, null);
    },

    _fetchallocondData: function () {
        this._allocondService.getRecords(null, null, null);
    },

    _thinnerlinData: function () {
        this._thinnerlinService.getRecords(null, null, null);
    },
    _shadeData: function () {
        this._shadeService.getRecords(null, null, null);
    },
    _packData: function () {
        this._packService.getRecords(null, null, null);
    },
    _shadeNameData: function () {
        this._shadeNameService.getRecords(null, null, null);
    },
    _dtsintData: function () {
        this._dtsintService.getRecords(null, null, null);
    },
    _packTypeData: function () {
        this._packTypeService.getRecords(null, null, null);
    },
    _productData: function () {
        this._productService.getRecords(null, null, null);
    },
    _linkData: function () {
        this._linkService.getRecords(null, null, null);
    },
    _regionData: function () {
        this._regionService.getRecords(null, null, null);
    },
    _depotData: function () {
        this._depotService.getRecords(null, null, null);
    },
    _divisionData: function () {
        this._divisionService.getRecords(null, null, null);
    },
    _codeData: function () {
        this._codeService.getRecords(null, null, null);
    },

    onAfterRendering: function () {
        sap.ui.getCore().byId('distribution_Id--distributionTable').setVisibleRowCount(20);
        sap.ui.getCore().byId('distribution_Id--distributionTable').setSelectionMode(sap.ui.table.SelectionMode.None);
        sap.ui.getCore().byId('distribution_Id--distributionTable').setModel(oModel);
        sap.ui.getCore().byId('distribution_Id--distributionTable').setGroupBy(sap.ui.table.Column);

         
        sap.ui.getCore().byId('distribution_Id--distributionTable').bindColumns("/coverageColoumns", function (index, context) {
            var sColumnId = context.getObject().columnId;
            return new sap.ui.table.Column({
                label: sColumnId,
                template: sColumnId,
                sortProperty: sColumnId,
                filterProperty: sColumnId
            });
        });
        sap.ui.getCore().byId('distribution_Id--distributionTable').bindRows("/coverage");
    },
    
    toggleFilterPanel: function (oEvent) {
        if ((this.getView().byId("idFilterSC").getLayoutData().getSize() == "0%")) {
            this.getView().byId("idFilterSC").getLayoutData().setSize("25%");
        } else {
            this.getView().byId("idFilterSC").getLayoutData().setSize("0%");
        }
    },

    //Get the dimensions properties and key filters selected .Maintain the order for column sequence .
    
    getCoverageData: function (oEvent) {
        var column = "";
        var path = "";
        var filters = "";

        if (this.getView().byId('distribution_Id--mrpctl_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--mrpctl_gpId').removeAllSelectedItems();
            column = column + "MRPCTRL" + ",";
        } else {
            this.getView().byId('distribution_Id--mrpctl_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--mrpctl_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "MRPCTRL" + ",";
                filters = filters+"MRPCTRL eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }

        if (this.getView().byId('distribution_Id--fm2_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--fm2_gpId').removeAllSelectedItems();
            column = column + "FM2" + ",";
        } else {
            this.getView().byId('distribution_Id--fm2_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--fm2_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "FM2" + ",";
                filters = filters+"FM2 eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        
        if (this.getView().byId('distribution_Id--allocind_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--allocind_gpId').removeAllSelectedItems();
            column = column + "ALLOCIND" + ",";
        } else {
            this.getView().byId('distribution_Id--allocind_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--allocind_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "ALLOCIND" + ",";
                filters = filters+"ALLOCIND eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        
        if (this.getView().byId('distribution_Id--thinnerlin_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--thinnerlin_gpId').removeAllSelectedItems();
            column = column + "THINNERLIN" + ",";
        } else {
            this.getView().byId('distribution_Id--thinnerlin_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--thinnerlin_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "THINNERLIN" + ",";
                filters = filters+"THINNERLIN eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        
        if (this.getView().byId('distribution_Id--shade_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--shade_gpId').removeAllSelectedItems();
            column = column + "SHADE" + ",";
        } else {
            this.getView().byId('distribution_Id--shade_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--shade_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "SHADE" + ",";
                filters = filters+"SHADE eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--pack_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--pack_gpId').removeAllSelectedItems();
            column = column + "PACK" + ",";
        } else {
            this.getView().byId('distribution_Id--pack_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--pack_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "PACK" + ",";
                filters = filters+"PACK eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--shadename_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--shadename_gpId').removeAllSelectedItems();
            column = column + "SHADENAME" + ",";
        } else {
            this.getView().byId('distribution_Id--shadename_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--shadename_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "SHADENAME" + ",";
                filters = filters+"SHADENAME eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--dtsint_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--dtsint_gpId').removeAllSelectedItems();
            column = column + "DTSIND" + ",";
        } else {
            this.getView().byId('distribution_Id--dtsint_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--dtsint_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "DTSIND" + ",";
                filters = filters+"DTSIND eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--packType_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--packType_gpId').removeAllSelectedItems();
            column = column + "PACKTYPE" + ",";
        } else {
            this.getView().byId('distribution_Id--packType_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--packType_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "PACKTYPE" + ",";
                filters = filters+"PACKTYPE eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--prod_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--prod_gpId').removeAllSelectedItems();
            column = column + "PROD" + ",";
        } else {
            this.getView().byId('distribution_Id--prod_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--prod_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "PROD" + ",";
                filters = filters+"PROD eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--link_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--link_gpId').removeAllSelectedItems();
            column = column + "LINK" + ",";
        } else {
            this.getView().byId('distribution_Id--link_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--link_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "LINK" + ",";
                filters = filters+"LINK eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--regn_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--regn_gpId').removeAllSelectedItems();
            column = column + "REGN" + ",";
        } else {
            this.getView().byId('distribution_Id--regn_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--regn_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "REGN" + ",";
                filters = filters+"REGN eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--depot_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--depot_gpId').removeAllSelectedItems();
            column = column + "DEPOT" + ",";
        } else {
            this.getView().byId('distribution_Id--depot_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--depot_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "DEPOT" + ",";
                filters = filters+"DEPOT eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--div_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--div_gpId').removeAllSelectedItems();
            column = column + "DIV" + ",";
        } else {
            this.getView().byId('distribution_Id--div_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--div_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "DIV" + ",";
                filters = filters+"DIV eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        if (this.getView().byId('distribution_Id--code_ckId').getSelected() == true) {
            this.getView().byId('distribution_Id--code_gpId').removeAllSelectedItems();
            column = column + "CODE" + ",";
        } else {
            this.getView().byId('distribution_Id--code_ckId').setSelected(false);
            var selectedKeys = this.getView().byId('distribution_Id--code_gpId').getSelectedKeys();
            if (selectedKeys.length != 0) {
                column = column + "CODE" + ",";
                filters = filters+"CODE eq '";
                for (var i = 0; i < selectedKeys.length; i++) {
                    if (i != selectedKeys.length - 1) {
                        filters = filters + selectedKeys[i] + ',';
                    } else {
                        filters = filters + selectedKeys[i] + "'"+" "+"or ";
                    }
                }
            }
        }
        

        
        var getKeyFilters = this.getKeyFiltersData();
        var selectedcolumn="";
        
        if (filters.length != 0) {
        	
        	if(getKeyFilters.length!=0)
        		{
        		if(getKeyFilters.length==1)
        	    {
                	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);
                    path = this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]) + '&$filter=' + filters.substring(0, filters.length - 3);

        		}else
        			{
                	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);
                    path = this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]) + '&$filter=' + filters.substring(0, filters.length - 3)+"and"+" "+ getKeyFilters[1];
        			}
        	
        }else
        	{
        	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),"");
            path = this.sortcolumnOrder(column.substring(0, column.length - 1),"") + '&$filter=' + filters.substring(0, filters.length - 3);
        	}
        }else if(column.length!=0)
    	{
            	if(getKeyFilters.length!=0)
            		{
            	if(getKeyFilters.length==1)
        	    {
                	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);
                    path = this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);

        		}else
        			{
                	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);
                    path = this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]) + '&$filter='+getKeyFilters[1];
        			}
        		}else
        			{
            		selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),"");
                    path = this.sortcolumnOrder(column.substring(0, column.length - 1),"");
        			}
    	}else
    		{
    		
    	 	if(getKeyFilters.length==1)
    	    {
            	selectedcolumn=this.sortcolumnOrder("",getKeyFilters[0]);
                path = this.sortcolumnOrder("",getKeyFilters[0]);

    		}else if(getKeyFilters.length==2)
    			{
            	selectedcolumn=this.sortcolumnOrder(column.substring(0, column.length - 1),getKeyFilters[0]);
                path = this.sortcolumnOrder("",getKeyFilters[0]) + '&$filter='+getKeyFilters[1];
    			}
    		}
 
        this._fetchCoverageData(path,selectedcolumn);
    },
    //Get all the keyfield's selector values . 
    getKeyFiltersData: function () {
        keyFiguresArray=[];
        var keyFigures = "";
        var keyFigurecolumn="";
        if (this.getView().byId('distribution_Id--SOITR_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'SOITR'+",";
            keyFigures = keyFigures +"SOITR" + " " + this.getView().byId('distribution_Id--filterSelected_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--SOITR_ID').getValue()+" "+"and";
        }
        if(this.getView().byId('distribution_Id--SOITR_ckId').getSelected()==true && this.getView().byId('distribution_Id--SOITR_ID').getValue().length == 0)
        	{
        	keyFigurecolumn = keyFigurecolumn + 'SOITR'+",";
        	}
        if (this.getView().byId('distribution_Id--SOIBPR_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'SOIBPR'+",";
            keyFigures = keyFigures +" SOIBPR" + " " + this.getView().byId('distribution_Id--filterSelected_SOIBPR_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--SOIBPR_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--SOIBPR_ckId').getSelected()==true && this.getView().byId('distribution_Id--SOIBPR_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'SOIBPR'+",";
    	}
        if (this.getView().byId('distribution_Id--LOWSTK_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'LOWSTK'+",";
            keyFigures = keyFigures +" LOWSTK" + " " + this.getView().byId('distribution_Id--filterSelected_LOWSTK_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--LOWSTK_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--LOWSTK_ckId').getSelected()==true && this.getView().byId('distribution_Id--LOWSTK_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'LOWSTK'+",";
    	}
        if (this.getView().byId('distribution_Id--RDCSTK_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'RDCSTK'+",";
            keyFigures = keyFigures +" RDCSTK" + " " + this.getView().byId('distribution_Id--filterSelected_RDCSTK_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--RDCSTK_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--RDCSTK_ckId').getSelected()==true && this.getView().byId('distribution_Id--RDCSTK_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'RDCSTK'+",";
    	}
        if (this.getView().byId('distribution_Id--ACH_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'ACH'+",";
            keyFigures = keyFigures +" ACH" + " " + this.getView().byId('distribution_Id--filterSelected_ACH_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--ACH_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--ACH_ckId').getSelected()==true && this.getView().byId('distribution_Id--ACH_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'ACH'+",";
    	}
        if (this.getView().byId('distribution_Id--VSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'VSL'+",";
            keyFigures = keyFigures +" VSL" + " " + this.getView().byId('distribution_Id--filterSelected_VSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--VSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--VSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--VSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'VSL'+",";
    	}
        if (this.getView().byId('distribution_Id--ITRVSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'ITRVSL'+",";
            keyFigures = keyFigures +" ITRVSL" + " " + this.getView().byId('distribution_Id--filterSelected_ITRVSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--ITRVSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--ITRVSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--ITRVSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'ITRVSL'+",";
    	}
        if (this.getView().byId('distribution_Id--PUREVSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'PUREVSL'+",";
            keyFigures = keyFigures +" PUREVSL" + " " + this.getView().byId('distribution_Id--filterSelected_PUREVSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--PUREVSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--PUREVSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--PUREVSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'PUREVSL'+",";
    	}
        if (this.getView().byId('distribution_Id--OVSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'OVSL'+",";
            keyFigures = keyFigures +" OVSL" + " " + this.getView().byId('distribution_Id--filterSelected_OVSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--OVSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--OVSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--OVSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'OVSL'+",";
    	}
        if (this.getView().byId('distribution_Id--RSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'RSL'+",";
            keyFigures = keyFigures +" RSL" + " " + this.getView().byId('distribution_Id--filterSelected_RSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--RSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--RSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--RSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'RSL'+",";
    	}
        if (this.getView().byId('distribution_Id--RSLIT_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'RSLIT'+",";
            keyFigures = keyFigures +" RSLIT" + " " + this.getView().byId('distribution_Id--filterSelected_RSLIT_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--RSLIT_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--RSLIT_ckId').getSelected()==true && this.getView().byId('distribution_Id--RSLIT_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'RSLIT'+",";
    	}
        if (this.getView().byId('distribution_Id--RSLSOIB_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'RSLSOIB'+",";
            keyFigures = keyFigures +" RSLSOIB" + " " + this.getView().byId('distribution_Id--filterSelected_RSLSOIB_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--RSLSOIB_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--RSLSOIB_ckId').getSelected()==true && this.getView().byId('distribution_Id--RSLSOIB_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'RSLSOIB'+",";
    	}
        if (this.getView().byId('distribution_Id--DOFR_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'DOFR'+",";
            keyFigures = keyFigures +" DOFR" + " " + this.getView().byId('distribution_Id--filterSelected_DOFR_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--DOFR_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--DOFR_ckId').getSelected()==true && this.getView().byId('distribution_Id--DOFR_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'DOFR'+",";
    	}
        if (this.getView().byId('distribution_Id--TLRSL_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'TLRSL'+",";
            keyFigures = keyFigures +" TLRSL" + " " + this.getView().byId('distribution_Id--filterSelected_TLRSL_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--TLRSL_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--TLRSL_ckId').getSelected()==true && this.getView().byId('distribution_Id--TLRSL_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'TLRSL'+",";
    	}
        if (this.getView().byId('distribution_Id--SST_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'SST'+",";
            keyFigures = keyFigures +" SST" + " " + this.getView().byId('distribution_Id--filterSelected_SST_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--SST_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--SST_ckId').getSelected()==true && this.getView().byId('distribution_Id--SST_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'SST'+",";
    	}
        if (this.getView().byId('distribution_Id--DST_ID').getValue().length != 0) {
        	keyFigurecolumn = keyFigurecolumn + 'DST'+",";
            keyFigures = keyFigures +" DST" + " " + this.getView().byId('distribution_Id--filterSelected_DST_ID_Id').getSelectedKey() + " " + this.getView().byId('distribution_Id--DST_ID').getValue() +" "+"and";
        }
        if(this.getView().byId('distribution_Id--DST_ckId').getSelected()==true && this.getView().byId('distribution_Id--DST_ID').getValue().length == 0)
    	{
    	keyFigurecolumn = keyFigurecolumn + 'DST'+",";
    	}
        
        if(keyFigurecolumn.length != 0 && keyFigures.length==0){
        	keyFiguresArray.push(keyFigurecolumn.substring(0, keyFigurecolumn.length - 1));
            return keyFiguresArray;
        }
        if (keyFigures.length != 0 && keyFigurecolumn.length != 0 ) {
        	keyFiguresArray.push(keyFigurecolumn.substring(0, keyFigurecolumn.length - 1));
        	keyFiguresArray.push(keyFigures.substring(0, keyFigures.length - 3));
            return keyFiguresArray;
        } 
        if (keyFigures.length == 0 && keyFigurecolumn.length == 0 ) {
            return keyFiguresArray;
        }
    },
    
    formatter:function(code,name)
    {
    	
    	return code+" "+name;
    },
    //Maintain the column order .
    sortcolumnOrder:function(getColoumnPath,getKeyFilterPath)
    {
    	//getFixedColumn.
    	var fixedcolumn=oBundle.getText('fixedColoumn');
    	var fixedcolumnOrder=[];
    	fixedcolumnOrder=fixedcolumn.split(",");
    	var pathOrder="";
    	if(getColoumnPath.length!=0)
    		{
    		var dimensionscolumnOrder=[];
        	dimensionscolumnOrder=getColoumnPath.split(",");	
    		for(var i=0;i<dimensionscolumnOrder.length;i++)
        	{
        	pathOrder=pathOrder+dimensionscolumnOrder[i]+",";
        	}
    		}
    	for(var i=0;i<fixedcolumnOrder.length;i++)
		{
		pathOrder=pathOrder+fixedcolumnOrder[i]+",";
		}
    	if(getKeyFilterPath.length!=0)
    		{
    	 	var keycolumnOrder=[];
        	keycolumnOrder=getKeyFilterPath.split(",");	
    		for(var i=0;i<keycolumnOrder.length;i++)
    		{
    		pathOrder=pathOrder+keycolumnOrder[i]+",";
    		}
    		}
    	
    	return pathOrder.substring(0, pathOrder.length - 1);
    	
    	
    },
    filterCopyPaste:function(oEvent)
    {
    	 var tokenString="";
    	 tokenString=sap.ui.getCore().byId('mrpctl_cp_id').getValue();
    	 if(tokenString.length!=0)
    		 {
    		 var tokenArray=[]; 
        	 tokenArray=tokenString.split("\n");
             sap.ui.getCore().byId(oModel.oData.copyId.currentId.split("_filter")[0]).setSelectedKeys(tokenArray);
        	 this.getCoverageData();
    		 }

    },
    filterCopyPasteClear:function()
    {
    	sap.ui.getCore().byId('mrpctl_cp_id').setValue("");
    },
    openFilterPopover : function(oEvent) {
        if (! this._oPopover) {
               this._oPopover = sap.ui.xmlfragment("fragments.filterFragment", this);
        }
        var oButton = oEvent.getSource();
        oModel.oData.copyId.currentId=oButton.sId;
        this._oPopover.openBy(oButton);
        
 },
});