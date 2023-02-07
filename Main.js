function executeWidgetCode(){
	 require([
       "UWA/Drivers/jQuery",
	   "DS/PlatformAPI/PlatformAPI",
	   "DS/UIKIT/Input/Button",
	   "DS/UIKIT/SuperModal",
	   "DS/UIKIT/Form",
	   "DS/UIKIT/Input/Date",
	   "DS/i3DXCompassServices/i3DXCompassServices",
	   "DS/WAFData/WAFData",
	   "IZCreateFormMy/scripts/CreateProject"
	   ],function(
	   $,
	   PlatformAPI,
	   Button,
	   SuperModal,
	   Form,
	   Date,
	   i3DXCompassServices,
	   WAFData,
	   CreateProject
	   ){
		   	    widget.body.innerHTML="r5";

	   
	   var myWidget={
	   	        onLoadWidget:function() {
		   	    widget.body.innerHTML="r5";

		   
	   var $wdgBody = $(widget.body);
	   $wdgBody.html("<div id='CreateProjectContainerId'></div><div id='divTable'></div>");
	   CreateProject.CreateProjectUI();
	   },
	   };
	    widget.body.innerHTML="r7";
	   widget.addEvent("onLoad", myWidget.onLoadWidget);
	   widget.addEvent("onRefresh",myWidget.onLoadWidget);
	   }
	   );
	   }