"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[3706],{3706:function(e,a,s){s.r(a),s.d(a,{default:function(){return C}});var o=s(66252),r=s(49963),l=s(3577);const t={class:"login-page"},n=(0,o._)("div",{class:"login-header"},[(0,o._)("p",{class:"login-title"},"GROW Learning Website")],-1),i={class:"login-container"},c=(0,o._)("div",{class:"login-text"},[(0,o._)("div",null,"Login")],-1),u=(0,o._)("br",null,null,-1),d={class:"login"},m={class:"login-errorMessage"},p={class:"login-errorMessage"},g=(0,o._)("button",null,"ログイン",-1),w={class:"btn-back"};function v(e,a,s,v,_,h){return(0,o.wg)(),(0,o.iD)("div",t,[n,(0,o._)("div",i,[c,u,(0,o._)("div",d,[(0,o._)("form",{onSubmit:a[4]||(a[4]=(0,r.iM)(((...e)=>v.onSubmit&&v.onSubmit(...e)),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>v.form.email=e),onInput:a[1]||(a[1]=e=>v.validateField("email")),placeholder:"メールアドレス",name:"email"},null,544),[[r.nr,v.form.email]]),(0,o._)("p",m,(0,l.zw)(v.errors.email),1),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":a[2]||(a[2]=e=>v.form.password=e),onInput:a[3]||(a[3]=e=>v.validateField("password")),placeholder:"パスワード",name:"password"},null,544),[[r.nr,v.form.password]]),(0,o._)("p",p,(0,l.zw)(v.errors.password),1),g],32),(0,o._)("p",w,[(0,o._)("a",{onClick:a[5]||(a[5]=(...e)=>v.goToWelcomePage&&v.goToWelcomePage(...e))},"＞戻る")])])])])}s(57658);var _=s(2262),h=s(16310),f=s(56565),b=s(22201),y={setup(){const e=(0,b.tv)(),a=(0,_.iH)({email:"",password:""}),s=(0,_.iH)({email:"",password:""}),o=h.Ry({email:h.Z_().required("メールアドレスは必須の項目です。").email("メールアドレスの形式ではありません。"),password:h.Z_().required("パスワードは必須の項目です。")}),r=async e=>{try{await h.ct(o,e).validate(a.value[e]),s.value[e]=""}catch(r){s.value[e]=r.message}},l=()=>{e.push({name:"Welcome"})},t=async()=>{try{await o.validate(a.value,{abortEarly:!1});const s={email:a.value.email,password:a.value.password},r=await f.Z.post("/auth/sign_in",s,{withCredentials:!0});if(console.log(r),201!==r.status)throw new Error("ログインエラーが発生しました");n("access-token",r.headers["access-token"]),n("client",r.headers["client"]),n("uid",r.headers["uid"]),e.push({name:"MenuPage"})}catch(s){console.error("APIエラー:",s),s.response?alert(s.response.data.message||"ログインエラーが発生しました"):s.request?alert("サーバーから応答がありません。ネットワークを確認してください。"):alert(s.message)}};function n(e,a){const s=7,o=new Date;o.setTime(o.getTime()+24*s*60*60*1e3);const r="expires="+o.toUTCString(),l=encodeURIComponent(a);document.cookie=`${e}=${l};${r};path=/;secure;SameSite=strict`}return{form:a,errors:s,onSubmit:t,goToWelcomePage:l,validateField:r}}},k=s(83744);const S=(0,k.Z)(y,[["render",v]]);var C=S}}]);
//# sourceMappingURL=3706.14dd4242.js.map