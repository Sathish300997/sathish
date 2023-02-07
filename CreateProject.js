define( "IZCreateFormMy/scripts/CreateProject",[
    "UWA/Drivers/jQuery",
    "DS/UIKIT/Input/Button",
    "DS/UIKIT/SuperModal",
    "DS/UIKIT/Form",
    "DS/UIKIT/Input/Date",
    "DS/i3DXCompassServices/i3DXCompassServices",
    "DS/WAFData/WAFData"
    ],
    function(
    $,
    Button,
    SuperModal,
    Form,
    Date,
    i3DXCompassServices,
    WAFData) {
    
    var widgetCreateProject={
    
    callData:function(v,modal){
    var Type=v.getValue("Type");
    
    
    i3DXCompassServices.getServiceUrl({
    serviceName:'3DSpace',
    platformId: widget.getValue("x3dPlatformId"),
    
    onComplete:function(data)
    {
    var the3DSpaceUrlService;
    if ( typeof data === "string")
    {
    the3DSpaceUrlService = data;
    
    var urlWAF ="https://inchn0194dc.izd01.in/3dspace/resources/WidgetServiceModelerDemo/GetData?type="+Type;
    
    var dataWAF={
    
    "Type":Type,
    };
    
    
    var methodWAF="GET";
    WAFData.authenticatedRequest(urlWAF,
    {
    method:methodWAF,
    data: dataWAF,
    type:'json',
    onComplete:function (dataResp)
    {
    if(dataResp.msg==="OK"){
    alert("Object Created Successfully");
    alert(dataResp.data);
    modal.hide();
    EnoTableUtils.myWidget.expandObject(projectIds,projectIds);
    widget.setValue("selectedProjectId","");
    }
    else
    {
    alert("Opportunity Object creation failed,Error in webservice");
    modal.hide();
    }
    },
    onFailure: function(error){
    widget.body.innerHTML +="<p>Call Faillure</p>";
    widget.body.innerHTML +="<p>"+JSON.stringify(error)+"</p>";
    }
    });
    }
    }
    });
    },
    
    CreateProjectUI: function()
    {
    var dialogButton = new Button ({value:'Enter Your Type',className:"primary"}).inject(document.querySelector("#CreateProjectContainerId"));
    
    
    var superModal = new SuperModal({renderTo:document.querySelector("#CreateProjectContainerId")});
    
    dialogButton.addEvent('onClick',function(){
    projectIds=widget.getValue("selectedProjectId");
    
    var v= new Form({
    className: 'vertical',
    fields:[
    {
    type:'text',
    label:'Type',
    name:"Type",
    required:true,
    placeholder:'Project Space'
    },

    {
      type:'text',
      label:'Name',
      name:"Name",
      required:true,
      placeholder:'Name'
      },
      {
      type:'text',
      label:'Revision',
      name:"Revision",
      required:true,
      placeholder:'Revision'
      },
      {
      type:'text',
      label:'Policy',
      name:"Policy",
      required:true,
      placeholder:'Policy'
      },
      {
      type:'text',
      label:'Vault',
      name:"Vault",
      required:true,
      placeholder:'Vault'
      },
  
  
  

    ]

    });
    
    superModal.dialog({
    body:v,
    title:'Create Project',
    buttons:[
    {
    className: 'primary',
    value:'Create',
    action: function(modal)
    {
    widgetCreateProject.callData(v,modal);
    }
    },
    {
    
    className: 'default',
    value:'Cancel',
    action:function(modal){
    modal.hide();
    }
      }
    ]
       });
       });
      }
      };
      return widgetCreateProject;
      } 
      );