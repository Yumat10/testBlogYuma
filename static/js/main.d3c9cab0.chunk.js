(this.webpackJsonptestblog=this.webpackJsonptestblog||[]).push([[0],{110:function(e,t,a){e.exports=a(161)},115:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},116:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),c=(a(115),a(61)),i=a(10),s=(a(116),a(26)),m=a(27),u=a(34),d=a(32),h=a(30),p=a.n(h),g=a(55),f=a.n(g),b=a(192),v=a(193),E=a(189),x=a(191),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleClick=function(){console.log("clicked")},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes,t=this.props.blog,a=t._id,n=t.title,r=t.name,l=t.date;return o.a.createElement(E.a,null,o.a.createElement(x.a,null,o.a.createElement(c.b,{to:"/blog/".concat(a),style:{textDecoration:"none"}},o.a.createElement(b.a,{container:!0,direction:"column"},o.a.createElement(b.a,{item:!0},o.a.createElement("div",{className:e.titleDiv},o.a.createElement(v.a,{variant:"h3",className:e.titleText},n))),o.a.createElement(b.a,{item:!0,className:e.bottomDiv},o.a.createElement(v.a,{variant:"h5",className:e.nameText},r),o.a.createElement(v.a,{variant:"body1"},f()(l).format("dddd, MMMM D, YYYY @ h:mm:ssa")))))))}}]),a}(n.Component),y=p()((function(){return{titleDiv:{padding:"30px",background:"linear-gradient(90deg, #c2e9fb,#81a4fd)",minHeight:150,textAlgin:"left"},titleText:{paddingTop:"30px",color:"#FFFFFF"},bottomDiv:{padding:"10px 30px",color:"#3D0D95"}}}))(C),k=a(99),F=a(39),w=a.n(F),N=a(201),j=a(195),O=a(199),D=a(194),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:"",content:"",name:"",errors:{},open:!1},e.handleChange=function(t){e.setState(Object(k.a)({},t.target.id,t.target.value)),delete e.state.errors[t.target.id]},e.handleSubmit=function(t){t.preventDefault();var a={title:e.state.title,name:e.state.name,content:e.state.content};w.a.post("/blogs/postBlog",a).then((function(t){console.log(t),setTimeout((function(){return e.handleClose()}),1e3)})).catch((function(t){e.setState({errors:t.response.data})}))},e.handleClose=function(){e.setState({open:!1})},e.handleClick=function(){e.setState({open:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(D.a,{onClick:this.handleClick,className:e.newButton},"New Post"),o.a.createElement(N.a,{maxWidth:"md",fullWidth:!0,open:this.state.open,onClose:this.handleClose},o.a.createElement(j.a,{className:e.dialog},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement(b.a,{container:!0,direction:"column",spacing:4},o.a.createElement(b.a,{item:!0},o.a.createElement(O.a,{id:"title",label:"Title",helperText:this.state.errors.title&&this.state.errors.title,error:!!this.state.errors.title,fullWidth:!0,onChange:this.handleChange})),o.a.createElement(b.a,{item:!0},o.a.createElement(O.a,{id:"name",label:"Name",helperText:this.state.errors.name&&this.state.errors.name,error:!!this.state.errors.name,fullWidth:!0,onChange:this.handleChange})),o.a.createElement(b.a,{item:!0},o.a.createElement(O.a,{id:"content",label:"Content",helperText:this.state.errors.content&&this.state.errors.content,error:!!this.state.errors.content,multiline:!0,rows:15,fullWidth:!0,onChange:this.handleChange})),o.a.createElement(b.a,{item:!0},o.a.createElement(D.a,{type:"submit",onClick:this.handleSubmit,className:e.submitButton},"Submit")))))))}}]),a}(n.Component),S=p()((function(){return{dialog:{padding:"50px"},newButton:{position:"absolute",left:"auto",right:"50px",color:"#FFFFFF"},submitButton:{backgroundColor:"#3f51b5",color:"#FFFFFF","&:hover":{backgroundColor:"#E26640"}}}}))(T),B=a(196),M=a(197),W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={blogs:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("/blogs").then((function(t){e.setState({blogs:t.data}),console.log(e.state.blogs)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(n.Fragment,null,o.a.createElement(B.a,{position:"static",className:e.appBar},o.a.createElement(M.a,null,o.a.createElement(v.a,{variant:"h4"},"Yuma's Blog"),o.a.createElement(S,{className:e.newButton}))),o.a.createElement(b.a,{container:!0,direction:"column",justify:"center",spacing:3,className:e.mainGrid},this.state.blogs.map((function(e){return o.a.createElement(b.a,{item:!0},o.a.createElement(y,{blog:e}))}))))}}]),a}(n.Component),Y=p()((function(){return{appBar:{padding:"10px"},mainGrid:{margin:"0px auto",padding:"30px 0px",maxWidth:"750px"}}}))(W),A=a(198),I=a(100),H=a.n(I),G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:"",name:"",date:"",content:""},e.handleClose=function(){var t=e.props.match.params.blogId;w.a.delete("/blogs/".concat(t)).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),setTimeout((function(){return window.history.back()}),1e3)},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.blogId;w.a.get("/blogs/".concat(t)).then((function(t){e.setState({title:t.data.title,name:t.data.name,date:t.data.date,content:t.data.content}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(E.a,{className:e.card},o.a.createElement(b.a,{container:!0,direction:"column",spacing:2},o.a.createElement(b.a,{item:!0,className:e.closeIcon},o.a.createElement(A.a,{onClick:this.handleClose},o.a.createElement(H.a,null))),o.a.createElement(b.a,{item:!0},o.a.createElement("div",{className:e.titleDiv},o.a.createElement(v.a,{variant:"h2",className:e.titleText},this.state.title))),o.a.createElement(b.a,{item:!0,className:e.bottomDiv},o.a.createElement(v.a,{variant:"h5",className:e.nameText},this.state.name),o.a.createElement(v.a,{variant:"body1"},f()(this.state.date).format("dddd, MMMM D, YYYY @ h:mma"))),o.a.createElement(b.a,{item:!0},o.a.createElement(v.a,{variant:"h6",className:e.bodyText},this.state.content))))}}]),a}(n.Component),J=p()((function(){return{card:{margin:"50px auto",padding:"30px 50px",maxWidth:"1000px"},closeIcon:{marginLeft:"95%"},titleDiv:{padding:"10px 0px",minHeight:100,textAlgin:"left"},bodyText:{lineHeight:1.3}}}))(G);var L=function(){return o.a.createElement(c.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:Y}),o.a.createElement(i.a,{exact:!0,path:"/blog/:blogId",component:J})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[110,1,2]]]);
//# sourceMappingURL=main.d3c9cab0.chunk.js.map