webpackJsonp([1],{"/kKq":function(t,e){},0:function(t,e){},"0+aN":function(t,e,s){"use strict";var a=s("DOxt"),i=s.n(a),n=s("TfPn");var o=function(t){s("BT9b")},r=s("VU/8")(i.a,n.a,!1,o,"data-v-57d8e74d",null);e.default=r.exports},"8Gqf":function(t,e){},"9UBT":function(t,e){},BT9b:function(t,e){},DOxt:function(t,e){},F1by:function(t,e){},HOdq:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i=s("zL8q"),n=s.n(i),o=(s("tvR6"),{data:function(){return{activeIndex:"1",activeIndex2:"1",city:"",weatherTip:""}},created:function(){var t=this;this.$http.get("https://www.apiopen.top/weatherApi?city=长沙").then(function(e){var s=e.body.data;t.city=s.city,t.weatherTip=s.ganmao,console.log(s)},function(t){})},methods:{open:function(){var t=this.$createElement;this.$notify({title:"小贴士",message:t("i",{style:"color: teal"},this.weatherTip)})}}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Navhead"}},[s("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[s("el-menu-item",{attrs:{index:"1"}},[s("router-link",{attrs:{to:"./"}},[s("div",{staticClass:"navName"},[t._v("主页")])])],1),t._v(" "),s("el-menu-item",{attrs:{index:"2"}},[s("router-link",{attrs:{to:"./Joke"}},[s("div",{staticClass:"navName"},[t._v("段子")])])],1),t._v(" "),s("el-menu-item",{attrs:{index:"3"}},[s("router-link",{attrs:{to:"./Fiction"}},[s("div",{staticClass:"navName"},[t._v("小说")])])],1),t._v(" "),s("el-menu-item",{attrs:{index:"4"}},[s("router-link",{attrs:{to:"./video"}},[s("div",{staticClass:"navName"},[t._v("视频")])])],1),t._v(" "),s("el-menu-item",{attrs:{index:"5"}},[s("router-link",{attrs:{to:"./music"}},[s("div",{staticClass:"navName"},[t._v("音乐")])])],1),t._v(" "),s("el-menu-item",{attrs:{index:"6"}},[s("router-link",{attrs:{to:"./movie"}},[s("div",{staticClass:"navName"},[t._v("电影")])])],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("8Gqf")},"data-v-0c847dc5",null).exports,l=s("Ixwk"),u=s.n(l),p={data:function(){return{}},props:{},components:{Aplayer:u.a},computed:{isPlay:function(){return this.$store.state.isPlay},playMusicInfo:function(){return this.$store.state.playMusicInfo},playMusicList:function(){return this.$store.state.playMusicList}},methods:{getUrl:function(t){return t.replace("/{size}","")}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isPlay?e("aplayer",{attrs:{autoplay:"",showLrc:!0,float:!0,listFolded:!0,list:this.playMusicList,music:this.playMusicInfo}}):this._e()],1)},staticRenderFns:[]};var d=s("VU/8")(p,v,!1,function(t){s("9UBT")},null,null).exports,h={name:"App",components:{Navhead:c,"Play-Label":d,Aplayer:u.a}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navhead"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("Play-Label",{staticClass:"aplays"})],1)},staticRenderFns:[]};var f=s("VU/8")(h,m,!1,function(t){s("UJIO")},"data-v-3d2b96e7",null).exports,g=s("/ocq"),_=s("8+8L"),y=s("NYxO");a.default.use(y.a);var b=new y.a.Store({state:{happyItem:[],fictions:[],playMusicInfo:"",playMusicList:[],isPlay:!1}}),C={data:function(){return{arr:[],tableData:[],commentArr:[],commentLength:0}},created:function(){var t=this;this.$http.get("https://www.apiopen.top/satinGodApi?type=1&page=1").then(function(e){var s=t;e.body.data.forEach(function(t,e){console.log(t),s.$store.state.happyItem.push(t)})},function(t){})},computed:{happyItem:function(){return this.$store.state.happyItem}},methods:{getComment:function(t){var e=this;this.commentArr=[];var s="https://www.apiopen.top/satinCommentApi?id="+t+"&page=1";this.$http.get(s).then(function(t){var s=e;0==t.body.data.normal.list.length&&(s.commentArr=["暂无评论"]),t.body.data.normal.list.forEach(function(t,e){s.commentArr.push(t)}),e.commentLength=e.commentArr.length},function(t){})},getUrl:function(t){return t},refreshjoke:function(){var t=this;this.$http.get("https://www.apiopen.top/satinGodApi?type=1&page=1").then(function(e){t.$store.state.happyItem=[];var s=t;e.body.data.forEach(function(t,e){s.$store.state.happyItem.push(t)})},function(t){})}}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"JokeBox"}},[s("div",{staticClass:"contentBox"},[s("div",{staticClass:"itemTitle",attrs:{id:"hotjoke"}},[t._v("\n\t\t\t热门段子\n\t\t")]),t._v(" "),t._l(t.happyItem,function(e,a){return s("ul",{staticClass:"itembox"},[s("li",[s("div",{staticClass:"item-header"},[s("img",{staticClass:"headerImg",attrs:{src:t.getUrl(e.header)}}),t._v(" "),s("p",{staticClass:"username"},[t._v(t._s(e.username))]),t._v(" "),s("p",{staticClass:"created_at"},[t._v(t._s(e.passtime))])])]),t._v(" "),s("li",{staticClass:"padd-box"},[t._v(t._s(e.text))]),t._v(" "),"video"==e.type?s("li",{staticClass:"padd-box"},[s("video",{attrs:{controls:""}},[s("source",{attrs:{src:t.getUrl(e.video),type:"video/mp4"}}),t._v("\n\t\t\t\t\t您的浏览器不支持 HTML5 video 标签。\n\t\t\t\t")])]):"gif"==e.type?s("li",{staticClass:"padd-box"},[s("img",{staticClass:"itemimg",attrs:{src:t.getUrl(e.gif)}})]):s("li",{staticClass:"padd-box"},[s("img",{staticClass:"itemimg",attrs:{src:t.getUrl(e.image)}})]),t._v(" "),s("li",[s("div",{staticClass:"hotcomment"},[s("p",{staticClass:"godcomment"},[t._v("神评论:")]),t._v(" "),s("img",{staticClass:"headerImg",attrs:{src:t.getUrl(e.top_commentsHeader)}}),t._v(" "),s("p",{staticClass:"username"},[t._v(t._s(e.top_commentsName))]),t._v(" "),s("p",[t._v(t._s(e.top_commentsContent))])])]),t._v(" "),s("li",[s("el-collapse",{attrs:{accordion:""}},[s("el-collapse-item",{attrs:{title:"查看热门评论",name:"1"},nativeOn:{click:function(s){return t.getComment(e.soureid)}}},t._l(t.commentArr,function(e,a){return s("div",{style:{"line-height":"50px"}},[s("img",{staticClass:"headerImg",attrs:{src:t.getUrl(e.user.profile_image)}}),t._v(" "),s("p",{staticClass:"username"},[t._v(t._s(e.user.username))]),t._v(" "),s("p",{staticClass:"created_at"},[t._v(t._s(e.ctime))]),t._v(" "),s("p",{style:{"text-indent":"30px"}},[t._v(t._s(e.content))])])}),0)],1)],1)])}),t._v(" "),s("div",{staticClass:"refresh"},[s("a",{attrs:{href:"#hotjoke"}},[s("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.refreshjoke()}}},[t._v("换一批\n\t\t\t\t\t"),s("span",{staticClass:"el-icon-refresh"})])])])],2),t._v(" "),s("div",{staticClass:"footbox"},[t._v("\n\t\t说点什么吧。。。\n\t")])])},staticRenderFns:[]};var x=s("VU/8")(C,k,!1,function(t){s("ycJ8")},"data-v-69cc71c2",null).exports,w=s("0+aN"),$={data:function(){return{recommentBook:[],input5:"",select:"",seachBook:[],fullscreenLoading:!1}},created:function(){var t=this;this.recommentBook=[],this.$http.get("https://www.apiopen.top/novelApi").then(function(e){var s=t;e.body.data.forEach(function(t,e){s.recommentBook.push(t)})},function(t){})},methods:{getUrl:function(t){return t},seachBooks:function(t){var e=this;this.seachBook=[];var s="https://www.apiopen.top/novelInfoApi?name="+t;this.$http.get(s).then(function(t){var s=e;t.body.data.data.forEach(function(t,e){s.seachBook.push(t)})},function(t){})},readbook:function(t){var e="http://t.shuqi.com/route.php?pagename=#!/bid/"+t+"/ct/read";window.location.href=e},refreshbook:function(){var t=this;this.$http.get("https://www.apiopen.top/novelApi").then(function(e){var s=t,a=e.body.data;t.recommentBook=[],a.forEach(function(t,e){s.recommentBook.push(t)})},function(t){})}}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"Fiction"}},[s("div",{staticClass:"itemTitle"},[t._v("小说推荐")]),t._v(" "),s("el-row",t._l(t.recommentBook,function(e){return s("el-col",{attrs:{span:5,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",staticStyle:{width:"180px",height:"260px"},attrs:{src:t.getUrl(e.book_cover)}}),t._v(" "),s("div",{staticStyle:{padding:"14px"}},[s("span",{staticClass:"bookName"},[t._v(t._s(e.bookname)+"\n\t\t\t\t\t")]),t._v(" "),s("span",{staticClass:"bookclass"},[t._v(t._s(e.class_name))]),t._v(" "),s("div",[t._v("\n\t\t\t\t\t\t"+t._s(e.author_name)+"\n\t\t\t\t\t\t"),s("el-button",{staticStyle:{float:"right","margin-top":"2px"},attrs:{type:"danger",size:"mini",round:""},on:{click:function(s){return t.readbook(e.bid)}}},[t._v("\n\t\t\t\t\t\t\t开始阅读")])],1),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("p",{staticClass:"bookinfo"},[t._v(t._s(e.book_info))])])])])],1)}),1),t._v(" "),s("div",{staticClass:"refresh"},[s("p",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.refreshbook()}}},[t._v("换一批\n\t\t\t"),s("span",{staticClass:"el-icon-refresh"})])]),t._v(" "),s("div",{}),t._v(" "),s("div",{staticClass:"itemTitle"},[t._v("小说搜索")]),t._v(" "),s("div",{staticStyle:{"margin-top":"15px"}},[s("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.input5,callback:function(e){t.input5=e},expression:"input5"}},[s("el-select",{attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.select,callback:function(e){t.select=e},expression:"select"}},[s("el-option",{attrs:{label:"餐厅名",value:"1"}}),t._v(" "),s("el-option",{attrs:{label:"订单号",value:"2"}}),t._v(" "),s("el-option",{attrs:{label:"用户电话",value:"3"}})],1),t._v(" "),s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.seachBooks(t.input5)}},slot:"append"})],1)],1),t._v(" "),s("el-row",t._l(t.seachBook,function(e){return s("el-col",{attrs:{span:5,offset:1}},[s("el-card",{attrs:{"body-style":{padding:"0px"}}},[s("img",{staticClass:"image",staticStyle:{width:"180px",height:"260px"},attrs:{src:t.getUrl(e.cover)}}),t._v(" "),s("div",{staticStyle:{padding:"14px"}},[s("span",{staticClass:"bookName"},[t._v(t._s(e.title)+"\n\t\t\t\t\t")]),t._v(" "),s("span",{staticClass:"bookclass"},[t._v(t._s(e.category))]),t._v(" "),s("div",[t._v("\n\t\t\t\t\t\t"+t._s(e.author)+"\n\t\t\t\t\t\t"),s("el-button",{staticStyle:{float:"right","margin-top":"2px"},attrs:{type:"danger",size:"mini",round:""},on:{click:function(s){return t.readbook(e.bid)}}},[t._v("\n\t\t\t\t\t\t\t开始阅读")])],1),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("p",{staticClass:"bookinfo"},[t._v(t._s(e.desc))])])])])],1)}),1),t._v(" "),s("div",{staticClass:"footbox"},[t._v("\n\t\t说点什么吧。。。\n\t")])],1)},staticRenderFns:[]};var M=s("VU/8")($,I,!1,function(t){s("HOdq")},"data-v-58981364",null).exports,U={data:function(){return{recomVideo:[],recomTitle:[]}},created:function(){var t=this;this.$http.get("https://api.apiopen.top/todayVideo").then(function(e){t.recomVideo=[];var s=t,a=e.body.result;t.recomTitle=a.splice(0,1),a.forEach(function(t,e){""!=t.data.header.icon&&(console.log(t.data.header.icon),s.recomVideo.push(t))})},function(t){})},methods:{getUrl:function(t){return t}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"VideoBox"}},[s("div",{staticClass:"itemTitle"},[t._v("\n\t\t每日视频推荐\n\t")]),t._v(" "),t._l(t.recomVideo,function(e,a){return s("div",{staticClass:"VideoItem"},[s("div",{staticClass:"authorHeader"},[s("img",{staticClass:"headerImg",attrs:{src:t.getUrl(e.data.header.icon)}}),t._v(" "),s("p",{staticClass:"authorName",attrs:{title:t.getUrl(e.data.content.data.author.description)}},[t._v(t._s(e.data.header.title))])]),t._v(" "),s("div",{staticClass:"content"},[s("h3",{staticClass:"videotitle"},[t._v(t._s(e.data.content.data.title))]),t._v(" "),s("p",{staticClass:"description"},[t._v(t._s(e.data.content.data.description))]),t._v(" "),s("video",{attrs:{controls:"",poster:t.getUrl(e.data.content.data.cover.homepage)}},[s("source",{attrs:{src:t.getUrl(e.data.content.data.playUrl),type:"video/mp4"}}),t._v("\n\t\t\t\t您的浏览器不支持 HTML5 video 标签。\n\t\t\t")])])])})],2)},staticRenderFns:[]};var T=s("VU/8")(U,E,!1,function(t){s("iy7i")},"data-v-13f2b1d0",null).exports,S=(s("/kKq"),{data:function(){return{banerArr:[],newMusic:[],total:0,pagesize:10,currentpage:1,currentpagetop:1,songlist:[],singerlist:[],isCover:!1,singerInfo:[],radioList:[],input:"",searchMarr:[],topMusic:[]}},components:{"Play-Label":d,Aplayer:u.a},created:function(){var t=this;this.$http.get("/music/?json=true&tdsourcetag=s_pcqq_aiomsg&qq-pf-to=pcqq.group").then(function(e){var s=e.body,a=s.banner,i=s.data,n=t;a.forEach(function(t,e){n.banerArr.push(t)}),i.forEach(function(t,e){n.newMusic.push(t)}),t.total=t.newMusic.length},function(t){}),this.$http.get("http://m.kugou.com/rank/info/?rankid=8888&page=1&json=true").then(function(e){var s=e.body.songs.list,a=t;s.forEach(function(t,e){a.topMusic.push(t)}),console.log(s)},function(t){console.log("error")}),this.$http.get("/music/plist/index&json=true").then(function(e){var s=t,a=e.body.plist.list.info;console.log(a),a.forEach(function(t,e){s.songlist.push(t)})},function(t){console.log("error")}),this.$http.get("/music/singer/list/88?json=true").then(function(e){var s=t;t.singerInfo=[],e.body.singers.list.info.forEach(function(t,e){s.singerInfo.push(t)})},function(t){console.log("error")}),this.$http.get("/music/singer/class&json=true").then(function(e){var s=t;e.body.list.forEach(function(t,e){s.singerlist.push(t)})},function(t){console.log("error")}),this.$http.get("https://api.apiopen.top/musicBroadcasting").then(function(e){var s=t;console.log(e.body),e.body.result[0].channellist.forEach(function(t,e){s.radioList.push(t)})},function(t){console.log("error")})},methods:{getUrl:function(t){return t.replace("/{size}","")},getsingerUrl:function(t){return t.replace("{size}","240")},handleCurrentChange:function(t){this.currentpage=t},handleCurrentChangeTop:function(t){this.currentpagetop=t},handleClick:function(t,e){var s=this;console.log(t,e);var a=parseInt(t.index)+1,i=this;this.$http.get("/music/singer/list/"+a+"?json=true").then(function(t){s.singerInfo=[],t.body.singers.list.info.forEach(function(t,e){i.singerInfo.push(t)})},function(t){console.log("error")})},singerInfoclick:function(t){var e="/music/singer/info/"+t+"&json=true";window.location.href=e},formatTime:function(t){var e,s,a=Math.floor(t/60),i=t%60;return a>60&&(e=Math.floor(a/60),s=a%60),i<10&&(i="0"+i),a<10&&(a="0"+a),e?e+":"+s+":"+i:a+":"+i},musicSrc:function(t){var e="/music/app/i/getSongInfo.php?cmd=playInfo&hash="+t;this.$http.get(e).then(function(t){console.log(t.body);var e=t.body.url;console.log(e)},function(t){console.log("error")})},getPlayInfo:function(t){var e=this,s={},a="/music/yy/index.php?r=play/getdata&hash="+t.lrc;this.$http.get(a).then(function(a){var i=a.body.data;s.title=t.title,s.artist=i.author_name,s.src=i.play_url,s.pic=i.img,s.lrc=i.lyrics,console.log(s),e.$store.state.playMusicInfo=s,e.$store.state.isPlay=!0,e.$store.state.playMusicList.push(s)},function(t){console.log("error")})},searchPlay:function(t){var e=this;console.log(t);var s={},a="/music/yy/index.php?r=play/getdata&hash="+t.hash;this.$http.get(a).then(function(t){var a=t.body.data;s.title=a.song_name,s.artist=a.author_name,s.src=a.play_url,s.pic=a.img,s.lrc=a.lyrics,console.log(s),e.$store.state.playMusicInfo=s,e.$store.state.isPlay=!0,e.$store.state.playMusicList.push(s)},function(t){console.log("error")})},searchmusic:function(){var t=this,e="http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword="+this.input;this.$http.get(e).then(function(e){t.searchMarr=[];var s=t;e.body.data.info.forEach(function(t,e){t.duration=s.formatTime(t.duration),s.searchMarr.push(t)}),console.log(t.searchMarr)},function(t){console.log("error")})},getsonglist:function(t){var e=this,s="http://m.kugou.com/plist/list/"+t+"?json=true";this.$http.get(s).then(function(t){console.log(t.body);t.body.info.list,t.body.list;console.log(e.searchMarr)},function(t){console.log("error")})}}}),L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contentbox"},[s("div",{attrs:{id:"Musicbox"}},[s("router-view"),t._v(" "),s("div",{staticClass:"header"},[s("div",{staticClass:"block"},[s("el-carousel",{attrs:{trigger:"click"}},t._l(t.banerArr,function(e,a){return s("el-carousel-item",{key:a},[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getUrl(e.imgurl)}})])}),1)],1)]),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16}},[s("div",{staticClass:"grid-content bg-purple"},[s("div",{staticClass:"itemLeft"},[s("div",{staticClass:"mTitle"},[s("h3",[s("b",[t._v("新歌")]),t._v("首发")])]),t._v(" "),s("div",{staticClass:"itemMusic"},[s("div",{staticClass:"itemNewMusic"},[s("el-pagination",{attrs:{small:"",layout:"prev, pager, next",total:30},on:{"current-change":t.handleCurrentChange}}),t._v(" "),s("ul",t._l(t.newMusic.slice(t.pagesize*(t.currentpage-1),t.pagesize*t.currentpage),function(e){return s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.getPlayInfo({title:e.remark,src:e.hash,artist:e.filename,pic:e.imgUrl,lrc:e.hash})}}},[t._v(t._s(e.filename))]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.formatTime(e.duration)))])])}),0)],1)])])])]),t._v(" "),s("el-col",{attrs:{span:8,md:8,xs:24,sm:20}},[s("div",{staticClass:"grid-content bg-purple"},[s("div",{staticClass:"itemRight"},[s("div",{staticClass:"mTitle"},[s("h3",[s("b",[t._v("热门")]),t._v("歌手")]),t._v(" "),s("span",{staticClass:"lookMore"},[t._v("更多")])]),t._v(" "),s("el-tabs",{on:{"tab-click":t.handleClick}},t._l(t.singerlist.slice(1,5),function(e){return s("el-tab-pane",{attrs:{label:e.classname}},[s("el-carousel",{attrs:{interval:4e3,type:"card",height:"220px"}},t._l(t.singerInfo.slice(0,6),function(e,a){return s("el-carousel-item",{key:a},[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getsingerUrl(e.imgurl)},on:{click:function(s){return t.singerInfoclick(e.singerid)}}})])}),1)],1)}),1)],1)])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16,md:16,xs:24,sm:20}},[s("div",{staticClass:"grid-content bg-purple"},[s("div",{staticClass:"itemLeft"},[s("div",{staticClass:"mTitle"},[s("h3",[s("b",[t._v("精选")]),t._v("歌单")]),t._v(" "),s("span",{staticClass:"lookMore"},[t._v("更多")])]),t._v(" "),s("div",{staticClass:"contenItem"},[t._l(t.songlist.slice(0,1),function(e){return s("div",{staticClass:"gdbig"},[s("p",{staticClass:"playCount"},[s("span",{staticClass:"playCountico"}),t._v(" "),s("span",[t._v(t._s((e.playcount/1e4).toFixed(1))+"万")])]),t._v(" "),s("img",{attrs:{src:t.getUrl(e.imgurl)}}),t._v(" "),s("router-link",{attrs:{to:{path:"/list",query:{specialid:e.specialid,imgurl:e.imgurl,intro:e.intro,publishtime:e.publishtime,specialname:e.specialname,username:e.username}}}},[s("div",{staticClass:"Cover"},[s("p",{staticClass:"Coverico"})])]),t._v(" "),s("div",{staticClass:"gdTip"},[s("p",{staticClass:"songlistName"},[t._v(t._s(e.specialname))]),t._v(" "),s("p",{staticClass:"songlistSinger"},[t._v(t._s(e.username))])])],1)}),t._v(" "),t._l(t.songlist.slice(1,5),function(e){return s("div",{staticClass:"gdmid"},[s("p",{staticClass:"playCount"},[s("span",{staticClass:"playCountico"}),t._v(" "),s("span",[t._v(t._s((e.playcount/1e4).toFixed(1))+"万")])]),t._v(" "),s("img",{attrs:{src:t.getUrl(e.imgurl)}}),t._v(" "),s("router-link",{attrs:{to:{path:"/list",query:{specialid:e.specialid,imgurl:e.imgurl,intro:e.intro,publishtime:e.publishtime,specialname:e.specialname,username:e.username}}}},[s("div",{staticClass:"Cover"},[s("p",{staticClass:"Coverico"})])]),t._v(" "),s("div",{staticClass:"gdTip"},[s("p",{staticClass:"songlistName"},[t._v(t._s(e.specialname))]),t._v(" "),s("p",{staticClass:"songlistSinger"},[t._v(t._s(e.username))])])],1)})],2)])])]),t._v(" "),s("el-col",{attrs:{span:8}},[s("div",{staticClass:"grid-content bg-purple"},[s("div",{staticClass:"itemRight"},[s("div",{staticClass:"mTitle"},[s("h3",[s("b",[t._v("热门")]),t._v("歌曲")]),t._v(" "),s("span",{staticClass:"lookMore"},[t._v("更多")])]),t._v(" "),s("div",{staticClass:"itemMusic"},[s("div",{staticClass:"itemNewMusic"},[s("el-pagination",{attrs:{small:"",layout:"prev, pager, next",total:30},on:{"current-change":t.handleCurrentChangeTop}}),t._v(" "),s("ul",t._l(t.topMusic.slice(t.pagesize*(t.currentpagetop-1),t.pagesize*t.currentpagetop),function(e){return s("li",[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.getPlayInfo({title:e.remark,src:e.hash,artist:e.filename,pic:e.imgUrl,lrc:e.hash})}}},[t._v(t._s(e.filename))]),t._v(" "),s("span",{staticClass:"fr"},[t._v(t._s(t.formatTime(e.duration)))])])}),0)],1)])])])])],1),t._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:16,md:16,xs:24,sm:20}},[s("div",{staticClass:"grid-content bg-purple"},[s("div",{staticClass:"itemLeft"},[s("div",{staticClass:"mTitle"},[s("h3",[s("b",[t._v("发现")]),t._v("音乐")]),t._v(" "),s("span",{staticClass:"lookMore"},[t._v("更多")])]),t._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchmusic},slot:"append"})],1),t._v(" "),s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.searchMarr,height:"250",border:""},on:{"row-click":t.searchPlay}},[s("el-table-column",{attrs:{prop:"songname",label:"歌名",width:"180"}}),t._v(" "),s("el-table-column",{staticClass:"songername",attrs:{prop:"singername",label:"歌手",width:"180"}}),t._v(" "),s("el-table-column",{attrs:{prop:"duration",label:"时长"}})],1)],1)])]),t._v(" "),s("el-col",{attrs:{span:8,md:8,xs:24,sm:20}},[s("div",{staticClass:"grid-content bg-purple"})])],1)],1)])},staticRenderFns:[]};var q=s("VU/8")(S,L,!1,function(t){s("xH7D")},"data-v-969a2252",null).exports,P={data:function(){return{recommentMovie:[],movieTOP:[],movieInfo:[],currentpage:1,total:0,input:""}},props:{},created:function(){var t=this;this.$http.get("https://api.douban.com/v2/movie/in_theaters").then(function(e){var s=e.body.subjects,a=t;s.forEach(function(t,e){a.recommentMovie.push(t)})},function(t){}),this.$http.get("http://api.douban.com/v2/movie/top250?start=0&count=10").then(function(e){var s=e.body.subjects;t.total=e.body.total;var a=t;s.forEach(function(t,e){var s=[];s.push(t.year),t.directors.forEach(function(t,e){s.push(t.name)}),t.casts.forEach(function(t,e){s.push(t.name)}),a.movieInfo.push(s),a.movieTOP.push(t)})},function(t){})},components:{},methods:{getUrl:function(t){return t.replace("/{size}","")},movieInfoClick:function(t){window.location.href=t},handleCurrentChange:function(t){var e=this;this.currentpage=t,this.$http.get("http://api.douban.com/v2/movie/top250?start="+(this.currentpage-1)+"&count=10").then(function(t){e.movieTOP=[],e.movieInfo=[];var s=t.body.subjects,a=e;s.forEach(function(t,e){var s=[];s.push(t.year),t.directors.forEach(function(t,e){s.push(t.name)}),t.casts.forEach(function(t,e){s.push(t.name)}),a.movieInfo.push(s),a.movieTOP.push(t)})},function(t){})},searchmovie:function(){}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-container",[s("el-main",[s("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),s("router-link",{attrs:{to:{path:"/searchM",query:{searchWord:t.input}}}},[s("el-button",{attrs:{icon:"el-icon-search",circle:""}})],1),t._v(" "),s("div",{staticClass:"itemTitle"},[t._v("\n\t\t\t\t电影推荐\n\t\t\t")]),t._v(" "),s("el-carousel",{attrs:{interval:4e3,type:"card",height:"420px"}},t._l(t.recommentMovie,function(e,a){return s("el-carousel-item",{key:a},[s("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.getUrl(e.images.large)},on:{click:function(s){return t.movieInfoClick(e.alt)}}})])}),1),t._v(" "),s("div",{staticClass:"itemTitle"},[t._v("\n\t\t\t\t电影排行榜\n\t\t\t")]),t._v(" "),s("div",{attrs:{id:"topmoviebox"}},[t._l(t.movieTOP,function(e,a){return s("table",[s("p",{staticClass:"cutline"}),t._v(" "),s("tbody",[s("tr",{staticClass:"topitem"},[s("td",{staticClass:"nbg"},[s("a",{attrs:{href:t.getUrl(e.alt)}},[s("img",{staticClass:"topmoviesImg",attrs:{src:t.getUrl(e.images.large)}})])]),t._v(" "),s("td",{staticClass:"content"},[s("a",{staticClass:"toptitle",attrs:{href:t.getUrl(e.alt)}},[s("span",[t._v(t._s(e.title))])]),t._v(" "),s("p",[t._v(t._s(t.movieInfo[a].join("/")))]),t._v(" "),s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.rating.average,callback:function(s){t.$set(e.rating,"average",s)},expression:"item.rating.average"}})],1)])])])}),t._v(" "),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange}})],2)],1)],1)],1)},staticRenderFns:[]};var j=s("VU/8")(P,N,!1,function(t){s("hNlD")},"data-v-3429c074",null).exports,A={data:function(){return{searchWord:this.$route.query.searchWord,searchMovie:[],movieInfo:[]}},props:{},created:function(){var t=this,e="https://api.douban.com/v2/movie/search?q="+this.searchWord+"&start=0&count=20";this.$http.get(e).then(function(e){var s=e.body.subjects;console.log(e.body);var a=t;s.forEach(function(t,e){var s=[];s.push(t.year),t.directors.forEach(function(t,e){s.push(t.name)}),t.casts.forEach(function(t,e){s.push(t.name)}),a.movieInfo.push(s),a.searchMovie.push(t)})},function(t){})},components:{},methods:{getUrl:function(t){return t.replace("/{size}","")}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-container",[s("el-main",[s("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"请输入内容"},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),t._v(" "),s("el-button",{attrs:{icon:"el-icon-search",circle:""}}),t._v(" "),s("p",{staticClass:"movietip"},[t._v('搜索到"'+t._s(t.searchWord)+'"的相关电影')]),t._v(" "),s("div",{attrs:{id:"topmoviebox"}},t._l(t.searchMovie,function(e,a){return s("table",[s("p",{staticClass:"cutline"}),t._v(" "),s("tbody",[s("tr",{staticClass:"topitem"},[s("td",{staticClass:"nbg"},[s("a",{attrs:{href:t.getUrl(e.alt)}},[s("img",{staticClass:"topmoviesImg",attrs:{src:t.getUrl(e.images.large)}})])]),t._v(" "),s("td",{staticClass:"content"},[s("a",{staticClass:"toptitle",attrs:{href:t.getUrl(e.alt)}},[s("span",[t._v(t._s(e.title))])]),t._v(" "),s("p",[t._v(t._s(t.movieInfo[a].join("/")))]),t._v(" "),s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.rating.average,callback:function(s){t.$set(e.rating,"average",s)},expression:"item.rating.average"}})],1)])])])}),0)],1)],1)],1)},staticRenderFns:[]};var F=s("VU/8")(A,B,!1,function(t){s("cwD1")},"data-v-7e075926",null).exports,V={data:function(){return{specialid:this.$route.query.specialid,imgurl:this.$route.query.imgurl,intro:this.$route.query.intro,specialname:this.$route.query.specialname,publishtime:this.$route.query.publishtime,username:this.$route.query.username,musicList:[],multipleSelection:[]}},created:function(){var t=this,e="http://m.kugou.com/plist/list/"+this.specialid+"?json=true";this.$http.get(e).then(function(e){t.musicList=[];var s=t;console.log(e.body);e.body.info;e.body.list.list.info.forEach(function(t,e){t.duration=s.formatTime(t.duration),""==t.remark&&(t.remark="--暂无--"),s.musicList.push(t)}),console.log(t.musicList)},function(t){console.log("error")})},props:{},components:{},methods:{getUrl:function(t){return t.replace("/{size}","")},formatTime:function(t){var e,s,a=Math.floor(t/60),i=t%60;return a>60&&(e=Math.floor(a/60),s=a%60),i<10&&(i="0"+i),a<10&&(a="0"+a),e?e+":"+s+":"+i:a+":"+i},searchPlay:function(t){var e=this;console.log(t);var s={},a="http://www.kugou.com/yy/index.php?r=play/getdata&hash="+t.hash;this.$http.get(a).then(function(t){var a=t.body.data;s.title=a.song_name,s.artist=a.author_name,s.src=a.play_url,s.pic=a.img,s.lrc=a.lyrics,e.$store.state.playMusicInfo=s,e.$store.state.isPlay=!0,e.$store.state.playMusicList.push(s)},function(t){console.log("error")})},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},addList:function(){var t=this,e=this.multipleSelection;e.length>1&&e.forEach(function(e){var s="http://www.kugou.com/yy/index.php?r=play/getdata&hash="+e.hash;t.$http.get(s).then(function(e){var s={},a=e.body.data;s.title=a.song_name,s.artist=a.author_name,s.src=a.play_url,s.pic=a.img,s.lrc=a.lyrics,t.$store.state.playMusicInfo=s,t.$store.state.isPlay=!0,t.$store.state.playMusicList.push(s)},function(t){console.log("error")})})},handleSelectionChange:function(t){this.multipleSelection=t}}},z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-container",[s("el-main",[s("el-row",{attrs:{gutter:22}},[s("el-col",{attrs:{span:6}},[s("div",{staticClass:"grid-content bg-purple"},[s("el-card",{staticClass:"leftinfo",attrs:{"body-style":{padding:"0px"},shadow:"always"}},[s("div",{staticClass:"pic"},[s("img",{staticClass:"image",attrs:{src:t.getUrl(t.imgurl)}})]),t._v(" "),s("div",{staticStyle:{padding:"14px"}},[s("p",[s("span",{staticClass:"cardtitle"},[t._v("名称：")]),t._v(t._s(t.specialname))]),t._v(" "),s("p",[s("span",{staticClass:"cardtitle"},[t._v("创建人：")]),t._v(t._s(t.username))]),t._v(" "),s("div",{staticClass:"bottom clearfix"},[s("span",{staticClass:"cardtitle"},[t._v("更新时间：")]),s("time",{staticClass:"time"},[t._v(t._s(t.publishtime))])]),t._v(" "),s("p",{staticClass:"intro"},[s("span",{staticClass:"cardtitle"},[t._v("简介：")]),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.intro)+"\n\t\t\t\t\t\t\t\t")])])])],1)]),t._v(" "),s("el-col",{attrs:{span:18}},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.musicList,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange,"row-click":t.searchPlay}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),s("el-table-column",{attrs:{label:"歌名",prop:"filename",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.filename))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"remark",label:"简介",width:"280"}}),t._v(" "),s("el-table-column",{attrs:{prop:"duration",label:"时长","show-overflow-tooltip":""}})],1),t._v(" "),s("div",{staticStyle:{"margin-top":"20px"}},[s("el-button",{on:{click:function(e){return t.toggleSelection([t.musicList[1],t.musicList[2]])}}},[t._v("切换第二、第三行的选中状态")]),t._v(" "),s("el-button",{on:{click:function(e){return t.toggleSelection()}}},[t._v("取消选择")]),t._v(" "),s("el-button",{on:{click:function(e){return t.addList()}}},[t._v("将选中的歌曲加入播放列表")])],1),t._v(" "),s("div",{staticClass:"grid-content bg-purple"})],1)],1)],1)],1)],1)},staticRenderFns:[]};var R=s("VU/8")(V,z,!1,function(t){s("F1by")},"data-v-7e40ceb8",null).exports;a.default.use(_.a),a.default.use(g.a),a.default.use(n.a);var O=[{path:"/",components:{default:w.default}},{path:"/Joke",component:x},{path:"/Fiction",component:M},{path:"/video",component:T},{path:"/music",component:q},{path:"/movie",component:j},{path:"/searchM",component:F},{path:"/list",component:R}],H=new g.a({mode:"history",routes:O});new a.default({el:"#app",router:H,store:b,render:function(t){return t(f)}})},TfPn:function(t,e,s){"use strict";var a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"Mainbox"}},[e("h1",[this._v("welcome")]),this._v(" "),e("div",{staticClass:"spinner-box"},[e("div",{staticClass:"configure-border-1"},[e("div",{staticClass:"configure-core"})]),this._v(" "),e("div",{staticClass:"configure-border-2"},[e("div",{staticClass:"configure-core"})])]),this._v(" "),e("div",{staticClass:"spinner-box"},[e("div",{staticClass:"solar-system"},[e("div",{staticClass:"earth-orbit orbit"},[e("div",{staticClass:"planet earth"}),this._v(" "),e("div",{staticClass:"venus-orbit orbit"},[e("div",{staticClass:"planet venus"}),this._v(" "),e("div",{staticClass:"mercury-orbit orbit"},[e("div",{staticClass:"planet mercury"}),this._v(" "),e("div",{staticClass:"sun"})])])])])])])}]};e.a=a},UJIO:function(t,e){},cwD1:function(t,e){},hNlD:function(t,e){},iy7i:function(t,e){},tvR6:function(t,e){},xH7D:function(t,e){},ycJ8:function(t,e){}},["NHnr"]);