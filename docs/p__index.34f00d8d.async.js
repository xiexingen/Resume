(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QeBL:function(m,R,t){"use strict";t.r(R);var U=t("q1tI"),e=t.n(U),xe=t("IzEo"),i=t("bx4M"),he=t("RC8p"),O=t("rgW5"),P=t("wx14"),_e=t("/zsF"),g=t("PArb"),w=t("Icgb"),k=t("v8Mn"),b=t.n(k),F=function(o){var r=o.dataSource,l=function(n){return n===r.length-1?{dot:e.a.createElement(w.a,{style:{fontSize:"16px"}})}:{}};return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u5DE5\u4F5C\u7ECF\u5386"),e.a.createElement(O.a,{reverse:!0},r.map(function(a,n){return e.a.createElement(O.a.Item,Object(P.a)({key:n},l(n)),e.a.createElement("div",{className:b.a["title-line"]},a.company,e.a.createElement("span",{className:b.a.date},a.dateRange)),e.a.createElement("p",null,a.description))})))},fe=t("Mwp2"),d=t("VXEj"),Re=t("Telt"),C=t("Tckk"),B=function(o){var r=o.dataSource;return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u6559\u80B2\u7ECF\u5386"),e.a.createElement(d.b,{dataSource:r,grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:4,xxl:4},split:!1,renderItem:function(a){return e.a.createElement(d.b.Item,null,e.a.createElement(i.a,null,e.a.createElement(i.a.Meta,{avatar:e.a.createElement(C.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},a.type),title:a.name,description:e.a.createElement("p",null,a.profession,e.a.createElement("span",{className:"p-right"},a.dateRange))})))}}))},y=t("RBnf"),V=function(o){var r=o.dataSource;return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u793E\u4EA4\u4E3B\u9875"),e.a.createElement(d.b,{grid:{gutter:16,xs:1,sm:2,md:2,lg:2,xl:3,xxl:3},dataSource:r,renderItem:function(a){var n=y[a.icon];return e.a.createElement(d.b.Item,null,e.a.createElement(i.a,{hoverable:!0},e.a.createElement(i.a.Meta,{title:e.a.createElement("a",{rel:"noopener noreferrer",href:a.url,target:"_blank"},e.a.createElement(n,null),"\xA0",a.title),description:a.description})))}}))},W=function(o){var r=o.dataSource;return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u8054\u7CFB\u65B9\u5F0F"),e.a.createElement(d.b,{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:4,xxl:4},dataSource:r,renderItem:function(a){var n=y[a.icon];return e.a.createElement(d.b.Item,null,e.a.createElement(i.a,null,e.a.createElement(i.a.Meta,{title:e.a.createElement("span",null,e.a.createElement(n,null),"\xA0",a.title),description:a.description})))}}))},Ue=t("fu2T"),A=t("gK9i"),ve=t("cWXX"),z=t("/ezw"),Pe=t("14J3"),K=t("BMrR"),Le=t("jCWc"),G=t("kPKH"),N=t("VTBJ"),J=t("KQm4"),T=t("1OyB"),j=t("vuIU"),Q=t("JX7q"),D=t("Ji7U"),M=t("LK+K"),H=t("i8i4"),$=t.n(H),q=t("Uw7j"),Y=t("DlBl"),Z=t.n(Y),I=function(o){Object(D.a)(l,o);var r=Object(M.a)(l);function l(a){var n;return Object(T.a)(this,l),n=r.call(this,a),n.gotoPrevious=function(){var s=n.state.currentIndex;s>0&&n.setState({currentIndex:s-1})},n.gotoNext=function(){var s=n.state.currentIndex;s<n.props.images.length-1&&n.setState({currentIndex:s+1})},n.handleChangeIndex=function(s,c){n.setState({currentIndex:c})},n.handleClose=function(){var s=n.props.onClose;s&&s()},n.state={currentIndex:a.currentIndex},n}return Object(j.a)(l,[{key:"render",value:function(){var n=this.props,s=n.images,c=n.isOpen,E=this.state.currentIndex;return e.a.createElement(Z.a,{rotatable:!1,scalable:!1,zoomSpeed:.1,visible:c,images:s,activeIndex:E,onChange:this.handleChangeIndex,onClose:this.handleClose})}}]),l}(U.PureComponent);I.defaultProps={images:[],currentIndex:0,isOpen:!0};var ee=I,te=t("gLs+"),ae=t.n(te),ne=function(o){Object(D.a)(l,o);var r=Object(M.a)(l);function l(){var a;Object(T.a)(this,l);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return a=r.call.apply(r,[this].concat(s)),a.state={loadedCoPanels:["0"],imageView:{visible:!1,imgIndex:0,images:[]}},a.handleChangeCollapse=function(E){var u=a.state.loadedCoPanels;u.includes(E)||(u.push(E),a.setState({loadedCoPanels:Object(J.a)(u)}));var p=$.a.findDOMNode(Object(Q.a)(a));if(p instanceof HTMLElement){var h=p.getElementsByClassName("ant-collapse-item-active")[0];h.scrollIntoView&&h.scrollIntoView()}},a.handleCloseImageViewer=function(){a.setState({imageView:{visible:!1,imgIndex:0,images:[]}})},a.handleOpenImgView=function(E,u){a.setState({imageView:{visible:!0,imgIndex:u,images:E.map(function(p){var h=Object(N.a)(Object(N.a)({},p),{},{alt:p.title});return h})}})},a}return Object(j.a)(l,[{key:"render",value:function(){var n=this,s=this.props.dataSource,c=this.state,E=c.loadedCoPanels,u=c.imageView,p=u.visible,h=u.imgIndex,ue=u.images,me={gutter:{xs:8,sm:8,md:8,lg:8,xl:8,xxl:12}},Ee={xs:24,sm:12,md:8,lg:6,xl:3,xxl:3};return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u9879\u76EE\u7ECF\u5386"),e.a.createElement(A.a,{defaultActiveKey:["0"],onChange:this.handleChangeCollapse,accordion:!0},s.map(function(_,pe){var X="".concat(pe);return e.a.createElement(A.a.Panel,{key:X,header:e.a.createElement(U.Fragment,null,e.a.createElement("b",null,_.name),"\xA0\xA0\xA0\xA0",_.url?e.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:_.url},e.a.createElement(q.a,null),"\xA0\u94FE\u63A5"):null)},e.a.createElement(z.a,{loading:E.includes(X)===!1,active:!0,avatar:!0},e.a.createElement(K.a,Object(P.a)({className:ae.a["project-row"]},me),_.images.map(function(f,v){return e.a.createElement(G.a,Object(P.a)({key:v},Ee),e.a.createElement(i.a,{className:"p-b-xs",hoverable:!0,onClick:n.handleOpenImgView.bind(n,_.images,v),cover:e.a.createElement("img",{alt:f.title,src:f.src})},e.a.createElement(i.a.Meta,{description:f.title})))}))),_.descriptions.map(function(f,v){return e.a.createElement(d.b,{key:v,size:"small",header:e.a.createElement("b",null,f.header),bordered:!1,dataSource:f.contents,renderItem:function(ge){return e.a.createElement(d.b.Item,null,ge)}})}))})),p&&e.a.createElement(ee,{onClose:this.handleCloseImageViewer,isOpen:p,currentIndex:h,images:ue}))}}]),l}(U.PureComponent),le=ne,re=t("UESt"),se=function(o){var r=o.dataSource;return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u6280\u672F\u6808"),e.a.createElement(d.b,{dataSource:r,renderItem:function(a){return e.a.createElement(d.b.Item,null,e.a.createElement("p",null,e.a.createElement(re.a,null),"\xA0",a))}}))},Oe=t("tU7J"),L=t("wFql"),ie=L.a.Paragraph,oe=L.a.Text,de=function(o){var r=o.dataSource;return e.a.createElement(i.a,{className:"small-card",bordered:!1},e.a.createElement(g.a,null,"\u4E2A\u4EBA\u76F8\u5173\u5F00\u6E90\u6280\u672F"),e.a.createElement(d.b,{dataSource:r,renderItem:function(a){return e.a.createElement(d.b.Item,{actions:[e.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:a.github,key:a.github},"\u76F4\u8FBEGithub")]},e.a.createElement(d.b.Item.Meta,{avatar:e.a.createElement(C.a,{size:"large",style:{backgroundColor:"#87d068"}},a.title),className:"ant-typography",title:a.title,description:e.a.createElement(L.a,null,e.a.createElement(oe,{strong:!0},a.subTitle),e.a.createElement(ie,null,a.detail))}))}}))},x=t("UDOl"),ce=t("RKie"),S=t.n(ce),be=R.default=function(){return e.a.createElement("div",{className:S.a.normal},e.a.createElement("h1",{className:S.a.title},"\u4E13\u6CE8\u4E8E.netcore\u4EE5\u53CAreact\u5757"),e.a.createElement(se,{dataSource:x.g}),e.a.createElement(de,{dataSource:x.d}),e.a.createElement(F,{dataSource:x.a}),e.a.createElement(B,{dataSource:x.c}),e.a.createElement(le,{dataSource:x.e}),e.a.createElement(V,{dataSource:x.f}),e.a.createElement(W,{dataSource:x.b}))}},RKie:function(m,R,t){m.exports={normal:"wt-site-pages-index-normal",title:"wt-site-pages-index-title"}},UDOl:function(m){m.exports=JSON.parse('{"a":[{"company":"\u5E7F\u5DDE\u5954\u6B65\u7535\u8111","dateRange":"2012.11-2015.08","description":"\u65B0\u9879\u76EE\u7684\u7814\u53D1\u3001\u6280\u672F\u5347\u7EA7\u3001\u6846\u67B6\u7684\u652F\u6301\u7B49"},{"company":"\u5E7F\u5DDE\u7075\u9177","dateRange":"2015.08-2016.04","description":"\u5728\u8BE5\u7CFB\u7EDF\u4E2D\u8D1F\u8D23\u6574\u4E2A\u7CFB\u7EDF\u7684\u529F\u80FD\u8BBE\u8BA1\u3001\u5F00\u53D1(\u5982\uFF1A\u8BA2\u5355\u3001\u5145\u503C\u3001\u63D0\u73B0\u3001\u652F\u4ED8\u3001\u5FEB\u9012\u67E5\u8BE2\u3001\u77ED\u4FE1\u90AE\u4EF6\u901A\u77E5\u3001web \u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u2026)\u76F8\u5173\u4E8B\u60C5"},{"company":"\u6E56\u5357\u5FAE\u8BD5\u4E91\u533B\u7597","dateRange":"2016.04-2018.09","description":"\u8D1F\u8D23Wetrial\u5E73\u53F0\u8FDB\u5EA6\u7BA1\u7406\u6A21\u5757\u3001\u7EF4\u62A4&&\u63D0\u4F9B\u57FA\u7840\u7EC4\u4EF6(\u524D\u7AEF\u3001\u540E\u7AEF)\u3001\u540E\u7AEF\u6D88\u606F\u63A8\u9001\u3001\u57FA\u7840\u7EC4\u4EF6\u5F00\u53D1\u7B49\u5DE5\u4F5C\u3002"},{"company":"\u6E56\u5357\u5FAE\u8BD5\u4E91\u533B\u7597","dateRange":"2018.09-\u81F3\u4ECA","description":"\u8F6C\u4E3A\u524D\u7AEF\u5C97\u4F4D\uFF0C\u8D1F\u8D23\u516C\u53F8\u524D\u7AEF\u67B6\u6784\u9009\u578B\uFF0C\u5C06\u4E4B\u524D\u7684\u6280\u672F\u6808\u8FC1\u79FB\u5230react+antd\u7684\u6280\u672F\u6808\u3001\u5C06\u524D\u7AEF\u91CD\u6784\u4E3A\u5FAE\u524D\u7AEF\u5F62\u5F0F,\u8D1F\u8D23\u901A\u7528\u7EC4\u4EF6\u7684\u5F00\u53D1\u3001\u7EF4\u62A4\u4EFB\u52A1\u4EE5\u53CA\u516C\u53F8\u524D\u7AEF\u7684\u57F9\u8BAD\u4E8B\u5B9C;\u516C\u53F8github\u5730\u5740:https://github.com/wetrial"}],"c":[{"name":"\u4E2D\u5357\u6797\u4E1A\u79D1\u6280\u5927\u5B66","type":"\u672C\u79D1","profession":"\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u6280\u672F"}],"f":[{"icon":"CrownOutlined","url":"https://blog.xxgtalk.cn","title":"\u4E2A\u4EBA\u535A\u5BA2","description":"\u4E2A\u4EBA\u7ECF\u9A8C\u3001\u8E29\u8FC7\u7684\u5751\u3001\u5FC3\u5F97\u3001\u7B14\u8BB0\u7B49"},{"icon":"GithubOutlined","url":"http://www.github.com/wetrial/wetrials","title":"wetrials","description":"\u516C\u53F8\u7684\u524D\u7AEF\u7EC4\u4EF6\u5E93"},{"icon":"RobotOutlined","url":"http://www.cnblogs.com/xiexingen","title":"\u535A\u5BA2\u56ED","description":"18\u5E74\u4EE5\u524D\u7684\u6587\u7AE0"},{"icon":"GithubOutlined","url":"http://www.github.com/xiexingen","title":"\u4E2A\u4EBAgithub","description":"\u4E2A\u4EBA\u5B66\u4E60\u3001\u5A31\u4E50\u7684\u4E2A\u4EBAgithub"},{"icon":"FireOutlined","url":"https://github.com/xiexingen/CTS.Signalr","title":"signalr","description":"\u57FA\u4E8ESignalr\u5B9E\u73B0\u7684\u63A8\u9001"},{"icon":"PullRequestOutlined","url":"https://github.com/crawlab-team/artipub","title":"artipub","description":"\u53C2\u4E0E\u7684\u793E\u533A\u9879\u76EE"}],"b":[{"icon":"PhoneOutlined","title":"\u624B\u673A","description":"18569590930"},{"icon":"QqOutlined","title":"QQ","description":"1002275364"},{"icon":"MailOutlined","title":"\u90AE\u7BB1","description":"1002275364@qq.com"},{"icon":"WechatOutlined","title":"\u5FAE\u4FE1","description":"xxg1002275364"}],"g":["React\u3001Antd\u3001TypeScript\u3001Webpack\u3001Nodejs\u3001Vue\u3001ElementUI\u3001umi\u3001taro\u3001uni-app",".NETCore\u3001SqlServer\u3001Dapper\u3001EF\u3001PetaPoco","Signalr\u3001ABP\u3001DDD\u3001Redis\u3001RabbitMQ\u3001IdentityServer","CAP\u3001Consul\u3001Ocelot\u3001\u5FAE\u670D\u52A1\u3001Polly\u3001OChars\u3001\u5FAE\u4FE1\u516C\u4F17\u53F7\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F","Docker\u3001CICD\u3001GitLab\u3001Linux","\u7B2C\u4E09\u65B9\u652F\u4ED8\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u3001\u5FEB\u9012\u63A5\u53E3\u3001\u77ED\u4FE1\u63A5\u53E3\u3001web\u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u5BFC\u51FAexcel,word,pdf\u7B49\u5E38\u7528\u7B2C\u4E09\u7684\u4E1C\u897F"],"e":[{"name":"\u5B9D\u9A6CMINI\u5C0F\u7A0B\u5E8F","url":"","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u4E3B\u8981\u662F\u96C6\u6210\u5728\u5FAE\u4FE1\u7AEF\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u65B9\u4FBF\u7528\u6237\u5728\u7EBF\u9884\u7EA6\u3001\u9009\u8D2D\u8F66\u578B"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u8D1F\u8D23\u8BE5\u5C0F\u7A0B\u5E8F\u7684\u5F00\u53D1\uFF0C\u8C03\u7528\u540E\u7AEFapi\u6765\u5B9E\u73B0\u529F\u80FD\u3002"]},{"header":"\u67B6\u6784\u76F8\u5173","contents":["\u91C7\u7528taro+dva\u6765\u5B9E\u73B0\u591A\u7AEF\uFF0C\u652F\u6301\u7F16\u8BD1\u5230\u5C0F\u7A0B\u5E8F\u3001h5\u9875\u9762\uFF0C\u4E00\u5957\u4EE3\u7801\u5B9E\u73B0\u4E24\u5957\u7CFB\u7EDF"]}],"images":[{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/barcode.jpg","title":"\u5C0F\u7A0B\u5E8F\u4E8C\u7EF4\u7801"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/home.png","title":"\u9996\u5C4F"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/list.png","title":"\u8F66\u8F86\u5217\u8868"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/list-detail.png","title":"\u5E26\u90E8\u5206\u8BE6\u60C5\u7684\u5217\u8868"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/detail.png","title":"\u8F66\u8F86\u8BE6\u7EC6\u4FE1\u606F"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/pre-order.png","title":"\u9884\u5B9A|\u9884\u7EA6\u8BD5\u9A7E"},{"src":"http://qiniu.xxgtalk.cn/resume/mini-car/me.png","title":"\u4E2A\u4EBA\u4E2D\u5FC3"}]},{"name":"Wetrial\u4E34\u5E8A\u8BD5\u9A8C\u5E73\u53F0-\u836F\u7269\u8B66\u6212\u7EBF\u7CFB\u7EDF","url":"http://www.wetrial-pv.com","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u4E3B\u8981\u7528\u4E8E\u8BB0\u5F55\u4E34\u5E8A\u8BD5\u9A8C\u8FC7\u7A0B\u4E2D\u7684\u4E0D\u826F\u4E8B\u4EF6\u3001\u53CD\u5E94\u7B49\u5F62\u6210\u62A5\u544A\u4EE5GateWay\u5F62\u5F0F\u5BF9\u63A5\u56FD\u5BB6\u836F\u76D1\u5C40"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u8D1F\u8D23\u8BE5\u7CFB\u7EDF\u7684\u6574\u4F53\u5DE5\u4F5C\uFF0C\u628A\u63A7\u9700\u6C42\u642D\u5EFA\u6846\u67B6\u5206\u914D\u4EFB\u52A1\u7B49"]},{"header":"\u67B6\u6784\u76F8\u5173","contents":["\u81EA\u7814react\u5757\uFF0C\u5E76\u5206\u6790\u98CE\u9669\u7A0B\u5EA6\uFF0C\u5F15\u5165\u5B9E\u9645\u4F7F\u7528\uFF1B\u6BD4\u4EE5\u5F80\u4E0D\u540C\uFF0C\u4EE5\u6B64\u9879\u76EE\u4E3A\u94FA\u57AB\uFF0C\u540E\u671F\u5E73\u53F0\u7684\u6240\u6709\u524D\u7AEF\u90E8\u5206\u90FD\u5C06\u5207\u6362\u5230react\u6808","\u91C7\u7528\u524D\u540E\u7AEF\u5B8C\u5168\u5206\u79BB\u5F62\u5F0F\uFF0C\u524D\u7AEF\u91C7\u7528react+antd+roadhog+dva+umi \u540E\u7AEF\u4EC5\u901A\u8FC7api\u63D0\u4F9B\u6570\u636E"]}],"images":[{"src":"http://qiniu.xxgtalk.cn/resume/pv/admin.png","title":"\u4F01\u4E1A\u7BA1\u7406\u5458"},{"src":"http://qiniu.xxgtalk.cn/resume/pv/baogao.png","title":"pv\u62A5\u544A\u7BA1\u7406"},{"src":"http://qiniu.xxgtalk.cn/resume/pv/status.png","title":"\u6D41\u7A0B\u72B6\u6001"},{"src":"http://qiniu.xxgtalk.cn/resume/pv/zsy.png","title":"\u54CD\u5E94\u5F0F\u5E03\u5C40"}]},{"name":"Wetrial\u4E34\u5E8A\u8BD5\u9A8C\u5E73\u53F0","url":"http://www.wetrial.com","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u4E3B\u8981\u4E3A\u521B\u65B0\u836F\u4E34\u5E8A\u7814\u7A76\u63D0\u4F9B\u4E00\u7AD9\u5F0F\u670D\u52A1\u5E73\u53F0\uFF0C \u5C06\u7533\u529E\u65B9\u3001CRO\u3001SMO\u3001\u673A\u6784\u3001\u53D7\u8BD5\u8005\u3001\u7814\u7A76\u8005\u3001CRA\u3001CRC \u7B49\u5E76\u8054\u8D77\u6765\uFF1B\u5B9E\u73B0\u9879\u76EE\u4EFB\u52A1\u6D41\u3001\u4FE1\u606F\u6D41\u3001\u6570\u636E\u6D41\u3001\u8D44\u91D1\u6D41\u7684\u53EF\u63A7","\u6574\u5757\u5E73\u53F0\u7531Wetrial\u3001CTMS\u3001SIS\u3001EDC\u3001IWRC\u3001PV\u7B49\u7CFB\u7EDF\u7EC4\u6210\uFF0C\u53EF\u4EE5\u5B8C\u6210\u6574\u5957\u4E34\u5E8A\u7814\u7A76\u7684\u6D41\u7A0B"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u8FDB\u5EA6\u7BA1\u7406\u6A21\u5757\u7684\u540E\u7AEFapi\u3001\u524D\u7AEF\u9875\u9762\u3001\u63A8\u9001\u7B49","\u81EA\u4E3B\u7814\u53D1\u7684jui\u524D\u7AEF\u6846\u67B6\u7684\u7EF4\u62A4\u3001\u8FED\u4EE3\u3001\u5347\u7EA7\u3001bug\u4FEE\u6539\u7B49","\u540E\u7AEF\u5E95\u5C42\u57FA\u7840\u6846\u67B6\u7684\u5F00\u53D1\u3001\u89E3\u51B3\u9047\u5230\u7684\u95EE\u9898\u3001\u7814\u7A76\u65B0\u6280\u672F\u5E76\u8BC4\u4F30\u53EF\u884C\u6027\u5F15\u5165\u4F7F\u7528"]}],"images":[{"src":"http://qiniu.xxgtalk.cn/resume/cts/message.png","title":"\u6D88\u606F"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressAssignUser.png","title":"\u6307\u6D3E\u8D23\u4EFB\u4EBA"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressComment.png","title":"\u8BC4\u8BBA"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressDrag.png","title":"\u9879\u76EE\u7BA1\u7406\u62D6\u62FD"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressEdit.png","title":"\u9879\u76EE\u7BA1\u7406\u7F16\u8F91"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressListEdit.png","title":"\u9879\u76EE\u7BA1\u7406\u5217\u8868\u7F16\u8F91"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/progressMyTaskGroupByProject.png","title":"\u6211\u7684\u4EFB\u52A1\u5206\u7EC4"},{"src":"http://qiniu.xxgtalk.cn/resume/cts/projectCollect.png","title":"\u9879\u76EE\u7EDF\u8BA1"}]},{"name":"\u5929\u9A6C\u5947\u5175-\u8DE8\u5883\u7535\u5546\u8F6C\u8FD0\u7CFB\u7EDF","url":"http://www.spacehorse.cn","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u4E3B\u8981\u7528\u6237\u7FA4\u4F53:\u6D77\u6DD8\u5BA2\u3001B \u7C7B\u7528\u6237;\u6D77\u6DD8\u5BA2\u548C B \u7C7B\u7528\u6237\u53EF\u4EE5\u5728\u6D77\u5916\u7535\u5546\u5E73\u53F0\u6216\u7EBF\u4E0B\u5B9E\u4F53\u5E97\u94FA\u8D2D\u4E70\u559C\u6B22\u7684\u5546\u54C1\uFF0C\u5C06\u5546\u54C1\u6253\u5305\u5BC4\u9001\u5230\u6211\u4EEC\u7684\u6D77\u5916\u4ED3\u5E93\uFF0C\u4ED3\u5E93\u6536\u5230\u5305\u88F9\u540E\u8FDB\u884C\u4E00\u4E9B\u5217(\u52A0\u56FA\u3001\u6E05\u70B9\u3001\u5408\u7BB1\u3001\u62C6\u7BB1\u3001\u6253\u5FEB\u9012\u5355\u2026)\u64CD\u4F5C\u540E\uFF0C\u5C06\u5305\u88F9\u9001\u4EA4\u6D77\u5173\u6E05\u5173\uFF0C\u6700\u540E\u901A\u8FC7\u56FD\u5185\u5FEB\u9012\u5BC4\u9001\u5230\u7528\u6237\u624B\u4E0A"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u5728\u8BE5\u7CFB\u7EDF\u4E2D\u8D1F\u8D23\u6574\u4E2A\u7CFB\u7EDF\u7684\u529F\u80FD\u8BBE\u8BA1\u3001\u5F00\u53D1(\u5982\uFF1A\u8BA2\u5355\u3001\u5145\u503C\u3001\u63D0\u73B0\u3001\u652F\u4ED8\u3001\u5FEB\u9012\u67E5\u8BE2\u3001\u77ED\u4FE1\u90AE\u4EF6\u901A\u77E5\u3001web \u5FEB\u9012\u5355\u6253\u5370\u3001\u6761\u7801\u6253\u5370\u3001\u7B2C\u4E09\u65B9\u767B\u5F55\u2026)\u76F8\u5173\u4E8B\u60C5"]},{"header":"\u67B6\u6784\u76F8\u5173","contents":["\u540E\u7AEF\uFF1A\u57FA\u4E8E DDD \u9886\u57DF\u9A71\u52A8\u8BBE\u8BA1\uFF0C\u7CFB\u7EDF\u5206\u4E3A\u6838\u5FC3\u6846\u67B6\u5C42\u3001\u9886\u57DF\u5C42\u3001\u5E94\u7528\u5C42\u3001\u5C55\u793A\u5C42","\u524D\u7AEF:\u81EA\u5B9A\u4E49 js \u63D2\u4EF6\u5E93(\u5F39\u7A97\u3001\u5206\u9875\u3001\u81EA\u52A8\u5B8C\u6210\u3001\u9009\u62E9\u3001\u6D88\u606F\u63D0\u793A\u3001ajax \u6269\u5C55\u7B49)","\u4F7F\u7528 bower \u6765\u7BA1\u7406\u7B2C\u4E09\u65B9\u7684\u4E00\u4E9B\u63D2\u4EF6\u3001\u901A\u8FC7 gulp \u6765\u5408\u5E76\u538B\u7F29 js\u3001css(\u653E\u5F03\u540E\u53F0\u7684bundle)\u6765\u8FBE\u5230\u4F18\u5316\u7F51\u7EDC\u8BF7\u6C42\u7684\u76EE\u7684"]}],"images":[{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/01home.png","title":"\u9996\u9875"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/02home.png","title":"\u652F\u6301\u56FD\u5BB6"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/02login.png","title":"\u767B\u5F55"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/03memberCenter.png","title":"\u4F1A\u5458\u4E2D\u5FC3"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/05package2.png","title":"\u5305\u88F9\u5FEB\u9012"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/06warehouse.png","title":"\u4ED3\u5E93"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/cost.png","title":"\u8D39\u7528"},{"src":"http://qiniu.xxgtalk.cn/resume/spacehorse/costCalc.png","title":"\u8BA1\u7B97\u5668"}]},{"name":"HDaya ERP","url":"","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u672C ERP \u662F\u4E3A\u9999\u6E2F\u5927\u9091\u56FD\u9645\u6D0B\u884C\u6709\u9650\u516C\u53F8(HDaya)\u516C\u53F8\u5F00\u53D1\u4F7F\u7528\uFF0C\u96C6\u8BA2\u5355\u3001\u91C7\u8D2D\u3001\u6536\u8D27\u3001\u53D1\u7968\u3001\u51ED\u8BC1\u3001\u8D22\u52A1\u62A5\u8868\u7B49\u529F\u80FD"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u4EE3\u7801\u751F\u6210\u5DE5\u5177 CodeSmith \u6A21\u677F\u7684\u7F16\u5199","\u901A\u7528\u5206\u9875\u3001\u9AD8\u7EA7\u67E5\u8BE2\u3001\u6D88\u606F\u5904\u7406\u3001\u901A\u7528\u9A8C\u8BC1\u3001\u6743\u9650\u5904\u7406","\u6A21\u5757 SalesOrder\u3001PurchaseOrder\u3001GRN\u3001Invoice\u3001Currency\u3001\u81EA\u52A8 Generate Voucher \u7684\u540E\u53F0\u53CA\u524D\u53F0\u5B9E\u73B0","\u5386\u53F2\u6570\u636E\u7684\u89E3\u6790\u53CA\u5220\u9664\u64CD\u4F5C\u7684\u8BB0\u5F55\u3001\u663E\u793A","\u6839\u636E\u7528\u6237\u6743\u9650\u751F\u6210 Excel \u6A21\u677F\u53CA Excel \u5BFC\u5165\u5BFC\u51FA\u901A\u7528\u5E93","Code Review\u3001\u6027\u80FD\u4F18\u5316\u53CA\u5176\u4ED6\u2026"]}],"images":[{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/home.png","title":"Home"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/MainQuickKey.png","title":"Hot Key"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/deleteLog.png","title":"Delete Log"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/invoiceAdvanceSearch.png","title":"Advance Search"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/invoiceAmount.png","title":"Invoice Amount"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/invoicePackList.png","title":"Invoice Pack List"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/labelPrint.png","title":"Label Print"},{"src":"http://qiniu.xxgtalk.cn/resume/hdaya/log.png","title":"Logs"}]},{"name":"\u7279\u767E\u60E0\u4F1A\u5458\u7CFB\u7EDF","url":"https://github.com/xiexingen/Bootstrap-SmartForm","descriptions":[{"header":"\u4EA7\u54C1\u4ECB\u7ECD","contents":["\u8BE5\u7CFB\u7EDF\u9700\u8981\u4F9D\u8D56\u5FAE\u4FE1\uFF0C\u7528\u6237\u5173\u6CE8\u516C\u4F17\u8D26\u53F7\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u516C\u4F17\u8D26\u53F7\u6765\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\uFF0C\u5982\uFF1A\u4F1A\u5458\u6CE8\u518C\u3001\u5347\u7EA7\u3001\u4F18\u60E0\u5238\u3001\u79EF\u5206\u5238\u3001\u793C\u54C1\u7B49"]},{"header":"\u4E3B\u8981\u804C\u8D23","contents":["\u5728\u8BE5\u9879\u76EE\u4E2D\u4E3B\u8981\u8D1F\u8D23\u524D\u7AEF\u76F8\u5173\uFF1B\u57FA\u4E8E jquery \u548C bootstrap \u81EA\u5B9A\u610F\u4E86\u4E00\u5957\u7EC4\u4EF6\uFF0C\u5305\u542B\uFF1A\u6D88\u606F\u63D2\u4EF6\u3001\u5F39\u7A97\u63D2\u4EF6\u3001\u5206\u9875\u63D2\u4EF6\u3001\u8868\u5355\u63D2\u4EF6\u7B49","Note:\u8868\u5355\u63D2\u4EF6\u5DF2\u7ECF\u4E0A\u4F20\u5230 github","   \u5730\u5740\uFF1Ahttps://github.com/xiexingen/Bootstrap-SmartForm","   \u76F8\u5173\u4ECB\u7ECD\uFF1Ahttp://www.cnblogs.com/xiexingen/p/4555416.html"]}],"images":[]},{"name":"\u5176\u4ED6\u9879\u76EE","descriptions":[{"header":"\u6BD4\u5982\uFF1A\u4E2D\u56FD\u70DF\u8349\u603B\u516C\u53F8\u804C\u5DE5\u8FDB\u4FEE\u5B66\u9662\u8F66\u8F86\u76D1\u63A7\u6307\u6325\u667A\u80FD\u7BA1\u7406\u7CFB\u7EDF\u3001\u5E7F\u5DDE\u5E02\u79D1\u4FE1\u5C40\u9879\u76EE\u7533\u62A5\u7CFB\u7EDF(http://xmgl.gz.gov.cn)"}],"url":"http://xmgl.gz.gov.cn","images":[]}],"d":[{"github":"https://github.com/crawlab-team/artipub","title":"ArtiPub","subTitle":"\u4E1A\u4F59\u65F6\u95F4\u53C2\u4E0E\u7684ArtiPub\u4E91\u7AEF\u7248\u672C\u7684\u5F00\u53D1","detail":"ArtiPub (Article Publisher\u7684\u7B80\u79F0\uFF0C\u610F\u4E3A\\"\u6587\u7AE0\u53D1\u5E03\u8005\\")\u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u4E00\u6587\u591A\u53D1\u5E73\u53F0\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u6587\u7AE0\u4F5C\u8005\u5C06\u7F16\u5199\u597D\u7684\u6587\u7AE0\u81EA\u52A8\u53D1\u5E03\u5230\u6398\u91D1\u3001SegmentFault\u3001CSDN\u3001\u77E5\u4E4E\u3001\u5F00\u6E90\u4E2D\u56FD\u7B49\u6280\u672F\u5A92\u4F53\u5E73\u53F0\uFF0C\u4F20\u64AD\u4F18\u8D28\u77E5\u8BC6\uFF0C\u83B7\u53D6\u6700\u5927\u7684\u66DD\u5149\u5EA6\u3002ArtiPub\u5B89\u88C5\u7B80\u5355\uFF0C\u63D0\u4F9B\u4E86\u591A\u79CD\u5B89\u88C5\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u4E00\u952E\u5B89\u88C5\u4F7F\u7528\uFF0C\u5B89\u88C5\u4E00\u822C\u53EA\u89815\u5206\u949F\u3002ArtiPub\u76EE\u524D\u652F\u6301\u6587\u7AE0\u7F16\u8F91\u3001\u6587\u7AE0\u53D1\u5E03\u3001\u6570\u636E\u7EDF\u8BA1\u7684\u529F\u80FD\uFF0C\u540E\u671F\u6211\u4EEC\u4F1A\u52A0\u5165\u5B58\u91CF\u6587\u7AE0\u5BFC\u5165\u3001\u6570\u636E\u5206\u6790\u7684\u529F\u80FD\uFF0C\u8BA9\u60A8\u66F4\u597D\u7684\u7BA1\u7406\u3001\u4F18\u5316\u60A8\u7684\u6280\u672F\u6587\u7AE0\u3002\u6B64\u5916\uFF0C\u6211\u4EEC\u8FD8\u4F1A\u63A5\u5165\u66F4\u591A\u5A92\u4F53\u6E20\u9053\uFF0C\u771F\u6B63\u505A\u5230\u8BA9\u6587\u7AE0\u968F\u5904\u53EF\u9605\u3002"},{"github":"https://github.com/wetrial","title":"Wetrial","subTitle":"\u8D1F\u8D23Wetrial\u7EC4\u7EC7\u4E0B\u6240\u6709\u5E93\u7684\u5F00\u53D1\u3001\u7EF4\u62A4\u5DE5\u4F5C","detail":"\u5305\u62EC\u4E86wetrial\u57FA\u7840\u5E93\u3001jui\u3001cli\u3001\u6587\u6863\u3001hooks\u7B49\u3002"},{"github":"https://github.com/xiexingen","title":"\u4E2A\u4EBA\u9879\u76EE","subTitle":"\u5DE5\u4F5C\u8FD9\u4E9B\u5E74\u79EF\u7D2F\u548C\u8D21\u732E\u7684\u4E2A\u4EBA\u4EE3\u7801\u5E93","detail":"\u6D89\u53CA\u540E\u7AEF\u3001jquery\u63D2\u4EF6\u3001taro\u3001\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u3001umi\u3001antd\u3001electron\u3001abp\u3001\u722C\u866B\u7B49\u3002"}]}')},"gLs+":function(m,R,t){m.exports={"project-row":"wt-site-components-project-index-project-row","project-content":"wt-site-components-project-index-project-content"}},v8Mn:function(m,R,t){m.exports={"title-line":"wt-site-components-company-time-line-index-title-line",date:"wt-site-components-company-time-line-index-date"}}}]);