(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},176:function(e,t,a){e.exports=a(358)},181:function(e,t,a){},195:function(e,t,a){},342:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(9),r=a.n(c),o=(a(181),a(37)),s=a(38),i=a(42),m=a(39),u=a(43),d=a(25),p=a(158),h=a.n(p),E=a(360),f=a(31),y=(a(193),a(195),E.a.SubMenu),b={color:"#e5e5e5",backgroundColor:"#323332"},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleClick=function(e){console.log("click ",e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App",style:{width:"100%",height:"100%"}},l.a.createElement("div",{className:"left_Menu",style:{height:"100%",width:"15%",float:"left",backgroundColor:"#323332",position:"fixed",left:0,top:0,overflowX:"hidden",textAlign:"left",padding:"0 8px"}},l.a.createElement("img",{src:h.a,width:"80",style:{display:"block",margin:"30px auto"},alt:"\u5934\u50cf"}),l.a.createElement(E.a,{onClick:this.handleClick,style:{width:"100%",height:"100%",backgroundColor:"#323332",color:"#ffffff",paddingTop:"20px"},defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(E.a.Item,{key:"1",style:{color:"#ffffff"}},l.a.createElement(f.a,{type:"home"}),"\u9996\u9875"),l.a.createElement(y,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"mail"}),l.a.createElement("span",null," \u5bfc\u822a\u4e00")),style:b},l.a.createElement(E.a.Item,{key:"2",style:{paddingLeft:"0"}},l.a.createElement(d.b,{to:"/table",style:{color:"#e5e5e5"}}," \u8868\u683c")),l.a.createElement(E.a.Item,{key:"3"},l.a.createElement(d.b,{to:"/form",style:{color:"#e5e5e5"}},"\u8868\u5355"))),l.a.createElement(y,{key:"sub2",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"appstore"}),l.a.createElement("span",null,"\u663e\u793a\u7ec4\u4ef6")),style:{backgroundColor:"#323332"}},l.a.createElement(E.a.Item,{key:"4",style:{backgroundColor:"#323332"}},l.a.createElement(d.b,{to:"/carousel",style:{color:"#e5e5e5"}},"\u8f6e\u64ad\u56fe")),l.a.createElement(E.a.Item,{key:"5",style:{backgroundColor:"#323332"}},"Option 6")),l.a.createElement(y,{key:"sub4",title:l.a.createElement("span",null,l.a.createElement(f.a,{type:"setting"}),l.a.createElement("span",null,"\u5bfc\u822a\u4e09"))},l.a.createElement(E.a.Item,{key:"6"},"Option 9"),l.a.createElement(E.a.Item,{key:"7"},"Option 10")))),l.a.createElement("div",{className:"right_content",style:{width:"85%",padding:"23px",marginLeft:"15%",backgroundColor:"#F0F2F5"}},l.a.createElement("p",{style:{}},l.a.createElement("i",null,"\u5218\u8d1d")),l.a.createElement("hr",null),l.a.createElement("div",null,this.props.children)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var v=a(174),k=a(362),w=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],j=[],O=0;O<46;O++)j.push({key:O,name:"Edward King ".concat(O),age:32,address:"London, Park Lane no. ".concat(O)});var C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSelectChange=function(e){console.log("selectedRowKeys changed: ",e),a.setState({selectedRowKeys:e})},a.state={selectedRowKeys:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t={selectedRowKeys:this.state.selectedRowKeys,onChange:this.onSelectChange,hideDefaultSelections:!0,selections:[{key:"all-data",text:"Select All Data",onSelect:function(){e.setState({selectedRowKeys:Object(v.a)(Array(46).keys())})}},{key:"odd",text:"Select Odd Row",onSelect:function(t){var a;a=t.filter(function(e,t){return t%2===0}),e.setState({selectedRowKeys:a})}},{key:"even",text:"Select Even Row",onSelect:function(t){var a;a=t.filter(function(e,t){return t%2!==0}),e.setState({selectedRowKeys:a})}}],onSelection:this.onSelection};return l.a.createElement("div",{style:{backgroundColor:"#fff"}},l.a.createElement(k.a,{rowSelection:t,columns:w,dataSource:j}))}}]),t}(n.Component),x=a(363),S=a(359),I=a(364),R=a(357),K=a(152),A=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={confirmDirty:!1,autoCompleteResult:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}};return l.a.createElement("div",{style:{width:"500px",margin:"30px auto"}},l.a.createElement(x.a,null,l.a.createElement(x.a.Item,Object.assign({},e,{label:"Name"}),l.a.createElement(S.a,{placeholder:"\u8d26\u53f7"})),l.a.createElement(x.a.Item,Object.assign({},e,{label:"Password"}),l.a.createElement(S.a,{placeholder:"\u5bc6\u7801",type:"password"})),l.a.createElement(x.a.Item,Object.assign({},e,{label:"Habitual Residence"}),l.a.createElement(I.a,{options:A})),l.a.createElement(x.a.Item,Object.assign({},e,{label:l.a.createElement("span",null,"Nickname\xa0",l.a.createElement(R.a,{title:"What do you want others to call you?"},l.a.createElement(f.a,{type:"question-circle-o"})))}),l.a.createElement(S.a,null)),l.a.createElement(x.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},l.a.createElement(K.a,{type:"primary",htmlType:"submit"},"Register"))),l.a.createElement("div",null,"dev\u5206\u652f\u4fee\u6539"))}}]),t}(n.Component),L=a(361);a(342);function _(e,t,a){console.log(e,t,a)}var z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"carousel_wrap"},l.a.createElement("div",{class:"carousel_tips"},l.a.createElement("h3",null,"\u4f55\u65f6\u4f7f\u7528"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u5f53\u6709\u4e00\u7ec4\u5e73\u7ea7\u7684\u5185\u5bb9\u3002"),l.a.createElement("p",null,"\u5f53\u5185\u5bb9\u7a7a\u95f4\u4e0d\u8db3\u65f6\uff0c\u53ef\u4ee5\u7528\u8d70\u9a6c\u706f\u7684\u5f62\u5f0f\u8fdb\u884c\u6536\u7eb3\uff0c\u8fdb\u884c\u8f6e\u64ad\u5c55\u73b0\u3002"),l.a.createElement("p",null,"\u5e38\u7528\u4e8e\u4e00\u7ec4\u56fe\u7247\u6216\u5361\u7247\u8f6e\u64ad\u3002")),l.a.createElement("div",{class:"carousel_cont"},l.a.createElement(L.a,{afterChange:_},l.a.createElement("div",null,l.a.createElement("h3",null,"1")),l.a.createElement("div",null,l.a.createElement("h3",null,"2")),l.a.createElement("div",null,l.a.createElement("h3",null,"3")),l.a.createElement("div",null,l.a.createElement("h3",null,"4")))))}}]),t}(n.Component);r.a.render(l.a.createElement(d.d,{history:d.e},l.a.createElement(d.c,{path:"/",component:g},l.a.createElement(d.a,{component:C}),l.a.createElement(d.c,{path:"/table",component:C}),l.a.createElement(d.c,{path:"/form",component:N}),l.a.createElement(d.c,{path:"/carousel",component:z}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,2,1]]]);
//# sourceMappingURL=main.3a1531cb.chunk.js.map