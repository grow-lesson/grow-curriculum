"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[2676],{72676:function(t,n,o){o.r(n),o.d(n,{default:function(){return p}});var e=o(66252),u=o(49963),i=o(3577);const c=(0,e._)("div",{class:"welcome-header"},[(0,e._)("p",{class:"welcome-title"},"GROW Learning Website")],-1),s={class:"welcome-container"},g={class:"box"},a=(0,e._)("span",null,"受講しよう！",-1);function r(t,n,o,r,l,m){return(0,e.wg)(),(0,e.iD)("div",null,[c,(0,e._)("div",s,[(0,e._)("div",g,[(0,e.Wm)(u.uT,{name:"fade"},{default:(0,e.w5)((()=>[(0,e._)("div",{class:"background-image",style:(0,i.j5)(m.backgroundStyle)},null,4)])),_:1}),(0,e._)("h1",{class:(0,i.C_)(["title",{floating:l.isFloating}])},[(0,e.Uk)("カリキュラムを"),a],2),(0,e._)("button",{class:"change_component_button",onClick:n[0]||(n[0]=(...t)=>m.goToSignUP&&m.goToSignUP(...t)),onFocus:n[1]||(n[1]=(...t)=>m.buttonFocus&&m.buttonFocus(...t)),onBlur:n[2]||(n[2]=(...t)=>m.buttonBlur&&m.buttonBlur(...t))},"新規登録",32),(0,e._)("button",{class:"change_component_button",onClick:n[3]||(n[3]=(...t)=>m.goToLogin&&m.goToLogin(...t)),onFocus:n[4]||(n[4]=(...t)=>m.buttonFocus&&m.buttonFocus(...t)),onBlur:n[5]||(n[5]=(...t)=>m.buttonBlur&&m.buttonBlur(...t))},"ログイン",32)])])])}o(57658);var l={data(){return{backgroundImages:[o(38157),o(35300),o(61897),o(62744),o(15305),o(18866)],currentImageIndex:0,isFloating:!0}},computed:{backgroundStyle(){return{backgroundImage:`url(${this.backgroundImages[this.currentImageIndex]})`,opacity:this.isFloating?1:0}}},methods:{goToSignUP(){this.$router.push({name:"Signup"})},goToLogin(){this.$router.push({name:"Login"})},changeBackgroundImage(){this.currentImageIndex=(this.currentImageIndex+1)%this.backgroundImages.length},buttonFocus(){this.isFloating=!0},buttonBlur(){this.isFloating=!1}},mounted(){setInterval((()=>{this.isFloating=!1,setTimeout((()=>{this.changeBackgroundImage(),this.isFloating=!0}),500),setTimeout((()=>{this.isFloating=!1}),4500)}),5e3)}},m=o(83744);const d=(0,m.Z)(l,[["render",r]]);var p=d},38157:function(t,n,o){t.exports=o.p+"img/welcome-1.116d7e2d.jpg"},35300:function(t,n,o){t.exports=o.p+"img/welcome-2.d0dfa280.jpg"},61897:function(t,n,o){t.exports=o.p+"img/welcome-3.ee8c3cca.jpg"},62744:function(t,n,o){t.exports=o.p+"img/welcome-4.135573fa.jpg"},15305:function(t,n,o){t.exports=o.p+"img/welcome-5.89e2c165.jpg"},18866:function(t,n,o){t.exports=o.p+"img/welcome-6.f013718e.jpg"}}]);
//# sourceMappingURL=2676.2217c841.js.map