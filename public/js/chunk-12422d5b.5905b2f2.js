(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12422d5b"],{"198f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("b-row",[n("b-col",[n("div",{staticClass:"title-container"},[n("div",[n("h4",[e._v("SVTrain")])])]),n("div",{staticClass:"cmd-main-menu"},[n("div",[e._v("Workspace: "),n("strong",[e._v(e._s(e.currentWs))])]),null!==e.running?n("div",{domProps:{innerHTML:e._s(e.running||"idle")}}):n("b",[e._v("no info")]),e.editConfigAI?n("b-button",{staticClass:"mt-2",on:{click:function(t){return e.showModal()}}},[n("v-icon",{attrs:{name:"cogs"}}),n("span",{staticClass:"ml-2"},[e._v("Settings")])],1):e._e(),e._l(e.commands,(function(t){return[e.aiOptions[t.value]?n("div",{key:t.value,staticClass:"cmd"},[n("b-button",{staticClass:"svtrain-cmd-btn",class:"script_stop_training"===t.value?"btn-stop-command":"btn-command",attrs:{disabled:!!e.isLoading[t.value]||"script_stop_training"===t.value&&!e.running||"script_stop_training"!==t.value&&!!e.running},on:{click:function(n){return e.runCommand(t.value,e.workspace)}}},[t.icon?n("svg-icon",{attrs:{"icon-class":t.icon}}):n("v-icon",{attrs:{name:"script_stop_training"===t.value?"stop":"play"}}),n("span",{staticClass:"ml-2"},[e._v(e._s(t.label))])],1),e.isLoading[t.value]?n("span",[e._v("Running...")]):e._e(),e.logs[t.value]&&e.logs[t.value].lastLine?n("pre",{staticClass:"log-line",staticStyle:{"padding-left":"10px"},domProps:{innerHTML:e._s(e.logs[t.value].lastLine)},on:{click:function(n){return e.openLogsFor(t.value)}}}):e._e(),e._v(" "),n("div",{staticStyle:{clear:"both"}})],1):e._e()]})),e._e()],2),n("t-f-option",{ref:"modal",attrs:{ws:e.workspace}})],1),n("b-col",{staticClass:"has-board",attrs:{cols:"9"}},[n("b-tabs",[n("b-tab",{attrs:{title:"Logfiles",active:""}},[n("pre",{domProps:{innerHTML:e._s(e.trainLog)}})]),e.tenserBoard?n("b-tab",{attrs:{title:"TensorBoard"}},[n("iframe",{attrs:{src:e.tenserBoard}})]):e._e()],1)],1)],1)],1)},i=[],s=n("1da1"),o=n("5530"),r=(n("96cf"),n("ac1f"),n("1276"),n("99af"),n("bc3a")),l=n.n(r),c=n("ed08"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"modal",attrs:{size:"md",title:"AI Settings"},on:{shown:e.onOpen},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[n("b-button",{attrs:{variant:"primary"},on:{click:e.saveFile}},[e._v("Save")])]},proxy:!0}])},[e.canEditConfigAIUI?[e._l(e.schemas,(function(t){return[e.canEditConfigFullAIUI||e.limitAIUI.includes(t.field)?n("s-field",{key:t.field+"-"+e.fetchCount,attrs:{schema:t,value:e.data[t.field]},on:{input:function(n){e.data[t.field]=n}}}):e._e()]}))]:[n("div",{staticStyle:{height:"400px"},attrs:{id:"wsjsoneditor"}})]],2)},u=[],d=n("53ca"),f=(n("d3b7"),n("159b"),n("b64b"),n("e9c4"),n("2f62")),_=n("7c15"),g=n("dcf5"),b=n.n(g),m=n("2b25"),h=n("77f4"),v={name:"TFOption",components:{"s-field":h["a"]},props:{ws:{default:null,type:String}},data:function(){return{limitAIUI:["max_train_steps","classes","batch_size","input_width","input_height","input_depth","ViewLogLines","heatmap_types"],schemas:[{label:"Max Train Steps",field:"max_train_steps",type:m["NUMBER"],options:{}},{label:"Training Classes",field:"classes",type:m["T_ARRAY"],options:{}},{label:"Model directory",field:"model_dir",type:m["TEXT"],options:{}},{label:"Batch Size",field:"batch_size",type:m["NUMBER"],options:{}},{label:"Input width",field:"input_width",type:m["NUMBER"],options:{}},{label:"Input height",field:"input_height",type:m["NUMBER"],options:{}},{label:"Input depth",field:"input_depth",type:m["NUMBER"],options:{}},{label:"Heatmap types",field:"heatmap_types",type:m["SELECT"],options:{dataset:[{value:"overlay",label:"Overlay"}]}},{label:"Augmentation noise std",field:"augmentation_noise_std",type:m["NUMBER"],options:{}},{label:"Augmentation brightness delta",field:"augmentation_brightness_delta",type:m["NUMBER"],options:{}},{label:"Learning rate",field:"learning_rate",type:m["NUMBER"],options:{}},{label:"Enable linear stretch images",field:"enable_linear_stretch_images",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation noise",field:"enable_augmentation_noise",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation mirror",field:"enable_augmentation_mirror",type:m["BOOLEAN"],options:{}},{label:"Enable augmentation brightness",field:"enable_augmentation_brightness",type:m["BOOLEAN"],options:{}},{label:"Rename",field:"rename",type:m["BOOLEAN"],options:{}},{label:"Network architecture",field:"network_architecture",type:m["TEXT"],options:{}},{label:"Good class",field:"good_class",type:m["TEXT"],options:{}},{label:"Log every n steps",field:"log_every_n_steps",type:m["NUMBER"],options:{}},{label:"Workspace path",field:"workspace",type:m["TEXT"],options:{}},{label:"Train script name",field:"script_training",type:m["TEXT"],options:{}},{label:"Test script name",field:"script_test",type:m["TEXT"],options:{}},{label:"Validate script name",field:"script_validate",type:m["TEXT"],options:{}},{label:"Cleanup",field:"script_training2",type:m["TEXT"],options:{}},{label:"Prepare Data",field:"script_test2",type:m["TEXT"],options:{}},{label:"Backup",field:"script_validate2",type:m["TEXT"],options:{}},{label:"Stop train script name",field:"script_stop_train",type:m["TEXT"],options:{}},{label:"Stop test script name",field:"script_stop_test",type:m["TEXT"],options:{}},{label:"Stop validate script name",field:"script_stop_validate",type:m["TEXT"],options:{}},{label:"Export model script name",field:"script_export_model",type:m["TEXT"],options:{}},{label:"Export result script name",field:"script_export_result",type:m["TEXT"],options:{}},{label:"Export images script name",field:"script_export_image",type:m["TEXT"],options:{}},{label:"Create report script name",field:"script_report",type:m["TEXT"],options:{}},{label:"split data script name",field:"script_split_data",type:m["TEXT"],options:{}},{label:"Heatmap generation script",field:"script_visualize_heatmap",type:m["TEXT"],options:{}},{label:"Path to log training file",field:"path_log_training",type:m["TEXT"],options:{}},{label:"Path to log test file",field:"path_log_test",type:m["TEXT"],options:{}},{label:"Path to log validate file",field:"path_log_validate",type:m["TEXT"],options:{}},{label:"Path to exported model file",field:"path_field_export_model",type:m["TEXT"],options:{}},{label:"Path to exported results file",field:"path_field_export_results",type:m["TEXT"],options:{}},{label:"Path to exported images folder",field:"path_field_export_images",type:m["TEXT"],options:{}},{label:"Path to train folder",field:"path_train",type:m["TEXT"],options:{}},{label:"Path to test folder",field:"path_test",type:m["TEXT"],options:{}},{label:"Path to validate folder",field:"path_validate",type:m["TEXT"],options:{}},{label:"The numbers of lines to be displayed",field:"ViewLogLines",type:m["NUMBER"],options:{}},{label:"Default epoch",field:"defaultEpoch",type:m["NUMBER"],options:{}},{label:"Default learning rate",field:"defaultLearningRate",type:m["NUMBER"],options:{}},{label:"Tenser Board Url",field:"LiveViewURL",type:m["TEXT"],options:{}}],data:{},fields:{max_train_steps:0,classes:[],model_dir:"",batch_size:0,input_width:0,input_height:0,input_depth:0,augmentation_noise_std:0,augmentation_brightness_delta:0,learning_rate:0,enable_linear_stretch_images:!1,enable_augmentation_noise:!1,enable_augmentation_mirror:!1,enable_augmentation_brightness:!1,rename:!1,network_architecture:"",good_class:"",log_every_n_steps:0,workspace:"",script_training:null,script_test:null,script_validate:null,script_training2:null,script_test2:null,script_validate2:null,script_stop_training:null,script_stop_test:null,script_stop_validation:null,script_export_model:null,script_export_result:null,script_export_image:null,script_report:null,script_split_data:null,script_visualize_heatmap:null,path_log_training:null,path_log_test:null,path_log_validate:null,path_field_export_model:null,path_field_export_results:null,path_field_export_images:null,path_train:null,path_test:null,path_validate:null,defaultEpoch:null,defaultLearningRate:null,LiveViewURL:null},fetchCount:1,editor:null}},methods:{loadFile:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a,i,s,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.ws.split("/").pop(),t.next=3,l.a.get("".concat(Object(c["b"])()).concat(n,"/TFSettings.json"));case 3:a=t.sent,i=a.data,Object.keys(e.fields).forEach((function(t){e.fields[t]=i[t]||e.fields[t]})),e.fetchCount+=1,e.data="object"===Object(d["a"])(i)?i:{},e.canEditConfigAIUI||(s=document.getElementById("wsjsoneditor"),o={mode:"code"},r=new b.a(s,o),e.editor=r,r.set(e.data));case 9:case"end":return t.stop()}}),t)})))()},saveFile:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return!e.canEditConfigAIUI&&e.editor&&(e.data=e.editor.get()),n=Object(o["a"])(Object(o["a"])({},e.fields),e.data),a="".concat(e.ws,"/TFSettings.json"),t.next=5,_["a"].saveFile(a,JSON.stringify(n,null,2));case 5:e.$refs.modal.hide();case 6:case"end":return t.stop()}}),t)})))()},onOpen:function(){this.loadFile()}},computed:Object(o["a"])({},Object(f["b"])(["canEditConfigAIUI","canEditConfigFullAIUI"]))},T=v,w=n("2877"),y=Object(w["a"])(T,p,u,!1,null,"167f996c",null),E=y.exports,k=n("1fd3"),x={name:"Train",components:{TFOption:E},mixins:[k["a"]],data:function(){return{commands:[{value:"script_split_data",label:"Run split data",icon:"split"},{value:"script_training",label:"Run train"},{value:"script_stop_training",label:"Stop running train"},{value:"script_training2",label:"Cleanup"}],trainLog:null,tenserBoard:null}},computed:Object(o["a"])({},Object(f["b"])(["editConfigAI"])),methods:{fetch:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_["a"].getLogFor("training").then((function(e){t.trainLog=e}));case 2:if(!t.workspace||!e){n.next=6;break}return a=t.workspace.split("/").pop(),n.next=6,l.a.get("".concat(Object(c["b"])()).concat(a,"/TFSettings.json")).then((function(e){var n=e.data;n&&(t.tenserBoard=n.LiveViewURL)}));case 6:case"end":return n.stop()}}),n)})))()},showModal:function(){this.$refs.modal.$refs.modal.show()}},watch:{workspace:function(){this.fetch(!0)}},mounted:function(){this.fetch(!0),setInterval(this.fetch,2e3)}},L=x,O=(n("3ce4"),Object(w["a"])(L,a,i,!1,null,null,null));t["default"]=O.exports},"1fd3":function(e,t,n){"use strict";var a=n("1da1"),i=n("5530"),s=(n("96cf"),n("99af"),n("ac1f"),n("1276"),n("00b4"),n("d3b7"),n("159b"),n("b64b"),n("2f62")),o=n("bc3a"),r=n.n(o),l=n("ed08"),c=n("7c15"),p=n("29b2");t["a"]={data:function(){return{isLoading:{statistic:!1,train:!1,test:!1,validate:!1,export:!1,stop:!1,ExportImages:!1},logs:{training:{},test:{},validate:{},export_model:null,export_results:null,export_images:null},running:null,workspace:null,checkInterval:750,commands:[],twoLogLines:null,status:null,aiOptions:{}}},computed:Object(i["a"])({},Object(s["b"])(["currentWs"])),methods:{openLogsFor:function(e){window.open("/logs/".concat(e,"?sessionToken=").concat(localStorage.getItem("sessionToken")))},checkStatus:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getRunningState();case 2:e.running=t.sent;case 3:case"end":return t.stop()}}),t)})))()},checkWorkspace:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getWorkspace();case 2:e.workspace=t.sent,console.log("Workspace: ".concat(e.workspace));case 4:case"end":return t.stop()}}),t)})))()},runCommand:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading[e]=!0,n.prev=1,n.next=4,c["a"].runCommand(e);case 4:return n.next=6,t.checkStatus();case 6:n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](1),console.log(n.t0);case 11:t.isLoading[e]=!1;case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.currentWs.split("/").pop(),t.next=3,r.a.get("".concat(Object(l["b"])()).concat(n,"/TFSettings.json")).then((function(t){var n=t.data;e.aiOptions=n}));case 3:return e.sessionUser=localStorage.getItem("sessionUser"),t.next=6,e.checkStatus();case 6:return t.next=8,e.checkWorkspace();case 8:return t.next=10,c["a"].getLastLogs();case 10:e.logs=t.sent,p["a"].subscibeForFolder("lock.txt",(function(t){"unlink"===t.event&&(e.running=!1),"change"===t.event&&(e.running=t.content),e.isLoading.train=Boolean(e.running),e.isLoading.test=Boolean(e.running),e.isLoading.validate=Boolean(e.running)})),p["a"].subscibeForFolder("workspace.bat",(function(t){"unlink"===t.event&&(e.workspace=!1),"change"===t.event&&(e.workspace=t.content)})),p["a"].subscribe("logfile",(function(t){t.forEach((function(t){t&&e.logs[t.file]&&(e.logs[t.file].lastLine=t.lastLine)}))})),p["a"].subscribe("exportFile",(function(t){Object.keys(t).forEach((function(n){e.logs[n]=t[n]}))})),p["a"].subscribe("lock.txt",(function(t){"unlink"===t.event&&(e.running=!1),"change"===t.event&&(e.running=t.content)})),p["a"].subscribe("workspace.bat",(function(t){"unlink"===t.event&&(e.workspace=!1),"change"===t.event&&(e.workspace=t.content)})),p["a"].subscribe("zipDone",(function(t){e.logs[t.field]=t.path}));case 18:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p["a"].unsubscribeForFolder("lock.txt"),p["a"].unsubscribeForFolder("workspace.bat");case 2:case"end":return e.stop()}}),e)})))()}}},"3ce4":function(e,t,n){"use strict";n("6062")},6062:function(e,t,n){}}]);
//# sourceMappingURL=chunk-12422d5b.5905b2f2.js.map
