"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[8336],{18336:function(e,s,a){a.r(s),a.d(s,{default:function(){return S}});var o=a(66252),r=a(49963),n=a(3577);const t={class:"login-page"},l=(0,o._)("div",{class:"login-header"},[(0,o._)("p",{class:"login-title"},"GROW Learning Website")],-1),i={class:"login-container"},c=(0,o._)("div",{class:"login-text"},[(0,o._)("div",null,"Login")],-1),u=(0,o._)("br",null,null,-1),d={class:"login"},p={class:"login-errorMessage"},m={class:"login-errorMessage"},g=(0,o._)("button",null,"ログイン",-1),w={class:"btn-back"};function v(e,s,a,v,h,_){return(0,o.wg)(),(0,o.iD)("div",t,[l,(0,o._)("div",i,[c,u,(0,o._)("div",d,[(0,o._)("form",{onSubmit:s[4]||(s[4]=(0,r.iM)(((...e)=>v.onSubmit&&v.onSubmit(...e)),["prevent"]))},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>v.form.email=e),onInput:s[1]||(s[1]=e=>v.validateField("email")),placeholder:"メールアドレス",name:"email"},null,544),[[r.nr,v.form.email]]),(0,o._)("p",p,(0,n.zw)(v.errors.email),1),(0,o.wy)((0,o._)("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>v.form.password=e),onInput:s[3]||(s[3]=e=>v.validateField("password")),placeholder:"パスワード",name:"password"},null,544),[[r.nr,v.form.password]]),(0,o._)("p",m,(0,n.zw)(v.errors.password),1),g],32),(0,o._)("p",w,[(0,o._)("a",{onClick:s[5]||(s[5]=(...e)=>v.goToWelcomePage&&v.goToWelcomePage(...e))},"＞戻る")])])])])}a(57658);var h=a(2262),_=a(16310),f=a(56565),b=a(22201),k={setup(){const e=(0,b.tv)(),s=(0,h.iH)({email:"",password:""}),a=(0,h.iH)({email:"",password:""}),o=_.Ry({email:_.Z_().required("メールアドレスは必須の項目です。").email("メールアドレスの形式ではありません。"),password:_.Z_().required("パスワードは必須の項目です。")}),r=async e=>{try{await _.ct(o,e).validate(s.value[e]),a.value[e]=""}catch(r){a.value[e]=r.message}},n=()=>{e.push({name:"Welcome"})},t=async()=>{try{await o.validate(s.value,{abortEarly:!1});const a={email:s.value.email,password:s.value.password},r=await f.Z.post("/auth/sign_in",a,{withCredentials:!0});if(console.log(r),201!==r.status&&200!==r.status)throw new Error("ログインエラーが発生しました");console.log("OK!",r.headers["access-token"]),l("access-token",r.headers["access-token"]),l("client",r.headers["client"]),l("uid",r.headers["uid"]),e.push({name:"MenuPage"})}catch(a){console.error("APIエラー:",a),a.response?(console.error("Response data:",a.response.data),console.error("Response status:",a.response.status),console.error("Response headers:",a.response.headers),alert(a.response.data.message||"ログインエラーが発生しました")):a.request?(console.error("Request data:",a.request),alert("サーバーから応答がありません。ネットワークを確認してください。")):(console.error("Error message:",a.message),alert(a.message))}};function l(e,s){const a=7,o=new Date;o.setTime(o.getTime()+24*a*60*60*1e3);const r="expires="+o.toUTCString(),n=encodeURIComponent(s);document.cookie=`${e}=${n};${r};path=/;secure;SameSite=strict`}return{form:s,errors:a,onSubmit:t,goToWelcomePage:n,validateField:r}}},y=a(83744);const R=(0,y.Z)(k,[["render",v]]);var S=R}}]);
//# sourceMappingURL=8336.e5735daa.js.map