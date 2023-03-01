sap.ui.define([
	"sap/base/Log",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Sorter",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"sap/m/ToolbarSpacer",
	"sap/ui/table/library",
	"sap/ui/thirdparty/jquery"
], 
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Log, Controller, Sorter, JSONModel, DateFormat, ToolbarSpacer, library, jQuery) {
        "use strict";
        var SortOrder = library.SortOrder;

        return Controller.extend("noktasisorgulama.tuketici.controller.Main", {
            onInit: function () {
                // var oJSONModel = this.initSampleDataModel();
                // var oView = this.getView();
                // oView.setModel(oJSONModel);
            }
        });
    });
