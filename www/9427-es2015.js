(self.webpackChunkhypergames=self.webpackChunkhypergames||[]).push([[9427],{9427:function(e,i,t){"use strict";t.r(i),t.d(i,{HomePageModule:function(){return x}});var a=t(8583),n=t(3679),o=t(7823),s=t(952),r=t(4762),l=t(5453),g=t(9019),m=t(8186),c=t(2772),d=t(3760),u=t(3511),p=t(5389);function h(e,i){if(1&e&&(m.TgZ(0,"ion-slide",19),m.TgZ(1,"ion-col",20),m._UZ(2,"img",21),m.TgZ(3,"p",22),m._uU(4),m.qZA(),m.qZA(),m.qZA()),2&e){const e=i.$implicit;m.hYB("routerLink","/categories/",e.id,"/",null==e?null:e.name,""),m.xp6(2),m.Q6J("defaultImage","../../../assets/loader.png")("lazyLoad",null==e?null:e.thumbnail),m.xp6(2),m.Oqu(null==e?null:e.name)}}function f(e,i){if(1&e){const e=m.EpF();m.TgZ(0,"ion-col",31),m.NdJ("click",function(){const i=m.CHM(e).$implicit;return m.oxw(3).openGame(null==i?null:i.game_url)}),m._UZ(1,"img",32),m.TgZ(2,"div",33),m.TgZ(3,"small",34),m._uU(4),m.qZA(),m.qZA(),m.qZA()}if(2&e){const e=i.$implicit;m.xp6(1),m.Q6J("defaultImage","../../../assets/loader.png")("lazyLoad",null==e?null:e.thumbnail),m.xp6(3),m.hij(" ",null==e?null:e.name," ")}}function Z(e,i){if(1&e&&(m.TgZ(0,"ion-grid"),m.TgZ(1,"ion-row"),m.TgZ(2,"ion-col",25),m.TgZ(3,"ion-text",14),m.TgZ(4,"h3",26),m._uU(5),m.ALo(6,"translate"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(7,"ion-col",27),m.TgZ(8,"ion-fab-button",28),m._UZ(9,"ion-icon",29),m.qZA(),m.qZA(),m.qZA(),m.TgZ(10,"ion-row"),m.YNc(11,f,5,3,"ion-col",30),m.qZA(),m.qZA()),2&e){const e=m.oxw().$implicit;m.xp6(5),m.Oqu(m.lcZ(6,4,null==e[0]?null:e[0].category_name)),m.xp6(3),m.hYB("routerLink","/categories/",null==e[0]?null:e[0].category_id,"/",null==e[0]?null:e[0].category_name,""),m.xp6(3),m.Q6J("ngForOf",e)}}function _(e,i){if(1&e&&(m.TgZ(0,"div",23),m.YNc(1,Z,12,6,"ion-grid",24),m.qZA()),2&e){const e=i.$implicit;m.xp6(1),m.Q6J("ngIf",(null==e?null:e.length)>0)}}const A=function(){return{slidesPerView:"auto",zoom:!1,grabCursor:!0}},T=[{path:"",component:(()=>{class e{constructor(e,i){this.webApi=e,this.iab=i,this.homeData=[],this.options={adId:g.N.interstitial_ad_id,isTesting:g.N.testing_ad}}ngOnInit(){this.prepareData(),this.initAdmob()}doRefresh(e){this.prepareData(),setTimeout(()=>{e.target.complete()},1e3)}prepareData(){localStorage.getItem("games")?(this.games=JSON.parse(localStorage.getItem("games")),this.getData()):this.getData(),this.makeHomeData()}getData(){this.webApi.getData().subscribe(e=>{"success"==e[0].status&&(localStorage.setItem("games",JSON.stringify(e[0].data[0])),this.games=e[0].data[0])})}initAdmob(){return(0,r.mG)(this,void 0,void 0,function*(){yield l.TQ.initialize({})})}openGame(e){this.prepareAd();const i=this.iab.create(e,"_blank","location=no,mediaPlaybackRequiresUserAction=yes");i.on("exit").subscribe(e=>{this.showAd()}),i.on("loaderror").subscribe(e=>{i.close(),this.showAd()})}showAd(){return(0,r.mG)(this,void 0,void 0,function*(){yield l.TQ.showInterstitial().then(e=>{},e=>{})})}prepareAd(){return(0,r.mG)(this,void 0,void 0,function*(){yield l.TQ.prepareInterstitial(this.options).then(e=>{},e=>{})})}makeHomeData(){if(console.log(this.games),null!=this.games){this.homeData=[];for(let e=0;e<this.games.categories.length;e++){this.homeData[e]=[];for(let i=0;i<this.games.games.length;i++)this.games.categories[e].id==this.games.games[i].category_id&&this.homeData[e].length<4&&this.homeData[e].push(this.games.games[i])}}null==this.games&&setTimeout(()=>{this.prepareData()},2500)}}return e.\u0275fac=function(i){return new(i||e)(m.Y36(c.Q),m.Y36(d.i))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-home"]],decls:27,vars:14,consts:[[3,"fullscreen"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","400",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Pull to refresh","refreshingSpinner","chevron","refreshingText","Loading..."],[1,"animate__animated","animate__slideInDown","animate__faster"],[1,"ion-padding-top","ion-padding-bottom"],["size","9"],[1,"bold"],[1,"header"],["routerLink","/more","size","3",1,"ion-text-right","ion-padding-top"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor",1,"side-icon","h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M4 6h16M4 12h16m-7 6h7"],[1,"categories-grid","ion-padding","animate__animated","animate__fadeInUp","animate__faster"],[1,"ion-padding-bottom"],[1,"ion-padding-top"],["color","dark"],[1,"no-gap","game-font"],[3,"options"],["class","x-small-card",3,"routerLink",4,"ngFor","ngForOf"],["class","ion-padding",4,"ngFor","ngForOf"],[1,"x-small-card",3,"routerLink"],[1,"card-image","animate__animated","animate__fadeInUp","animate__fast"],[1,"card-image",3,"defaultImage","lazyLoad"],[1,"lite-gap","x-small"],[1,"ion-padding"],[4,"ngIf"],["size","10",1,"animate__animated","animate__fadeInUp","animate__faster"],[1,"sub-header","game-font"],["size","2",1,"animate__animated","animate__fadeInRight","animate__faster"],["horizontal","end","size","small",3,"routerLink"],["name","arrow-forward"],["class","animate__animated animate__fadeInUp animate__fast","size-xs","6","size-sm","6","size-md","3","size-lg","3",3,"click",4,"ngFor","ngForOf"],["size-xs","6","size-sm","6","size-md","3","size-lg","3",1,"animate__animated","animate__fadeInUp","animate__fast",3,"click"],[1,"card-image","game-card",3,"defaultImage","lazyLoad"],[1,"small-gap"],[1,"ion-text-center"]],template:function(e,i){1&e&&(m.TgZ(0,"ion-content",0),m.TgZ(1,"ion-refresher",1),m.NdJ("ionRefresh",function(e){return i.doRefresh(e)}),m._UZ(2,"br"),m._UZ(3,"ion-refresher-content",2),m.qZA(),m.TgZ(4,"ion-item",3),m.TgZ(5,"ion-label",4),m.TgZ(6,"ion-row"),m.TgZ(7,"ion-col",5),m.TgZ(8,"h2",6),m._uU(9),m.ALo(10,"translate"),m.qZA(),m.TgZ(11,"h1",7),m._uU(12),m.ALo(13,"translate"),m.qZA(),m.qZA(),m.TgZ(14,"ion-col",8),m.O4$(),m.TgZ(15,"svg",9),m._UZ(16,"path",10),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.kcU(),m.TgZ(17,"ion-grid",11),m.TgZ(18,"ion-row",12),m.TgZ(19,"ion-col",13),m.TgZ(20,"ion-text",14),m.TgZ(21,"h4",15),m._uU(22),m.ALo(23,"translate"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(24,"ion-slides",16),m.YNc(25,h,5,5,"ion-slide",17),m.qZA(),m.qZA(),m.YNc(26,_,2,1,"div",18),m.qZA()),2&e&&(m.Q6J("fullscreen",!0),m.xp6(9),m.Oqu(m.lcZ(10,7,"Welcome to")),m.xp6(3),m.Oqu(m.lcZ(13,9,"HP Games")),m.xp6(10),m.Oqu(m.lcZ(23,11,"Top Categories")),m.xp6(2),m.Q6J("options",m.DdM(13,A)),m.xp6(1),m.Q6J("ngForOf",null==i.games?null:i.games.categories),m.xp6(1),m.Q6J("ngForOf",i.homeData))},directives:[o.W2,o.nJ,o.Wo,o.Ie,o.Q$,o.Nd,o.wI,o.YI,s.rH,o.jY,o.yW,o.Hr,a.sg,o.A$,u.z1,a.O5,o.W4,o.gu],pipes:[p.X$],styles:[""]}),e})()}];let q=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[s.Bz.forChild(T)],s.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[a.ez,n.u5,u.mZ,p.aw,o.Pc,q]]}),e})()}}]);