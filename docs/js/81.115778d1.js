"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[81],{2081:function(a,e,r){r.r(e),r.d(e,{default:function(){return j}});var s=r(6252),l=r(9963),n=r(3577);const o={class:"signup-page"},m=(0,s._)("div",{class:"welcome-header"},[(0,s._)("a",{href:"/",class:"logo"},"GROW Learning Website")],-1),t={class:"signup-container"},u=(0,s._)("div",{class:"signup-header"},[(0,s._)("div",null,"Sign up")],-1),i=(0,s._)("br",null,null,-1),p={class:"signup"},d=(0,s._)("br",null,null,-1),f={class:"signup-errorMessage"},c={class:"signup-name"},_=(0,s._)("br",null,null,-1),w=(0,s._)("br",null,null,-1),N={class:"signup-errorMessage"},b={class:"signup-errorMessage"},g={class:"signup-name-kana"},h=(0,s._)("br",null,null,-1),v=(0,s._)("br",null,null,-1),K={class:"signup-errorMessage"},y={class:"signup-errorMessage"},U=(0,s._)("br",null,null,-1),P={class:"signup-errorMessage"},Z=(0,s._)("br",null,null,-1),$={class:"signup-errorMessage"},q=(0,s._)("br",null,null,-1),V={class:"signup-errorMessage"},z=(0,s._)("button",null,"新規登録",-1),M=(0,s._)("p",{class:"btn-back"},[(0,s._)("a",{href:"/"},"＞戻る")],-1);function k(a,e,r,k,x,S){return(0,s.wg)(),(0,s.iD)("div",o,[m,(0,s._)("div",t,[u,i,(0,s._)("div",p,[(0,s._)("form",{onSubmit:e[8]||(e[8]=(...a)=>k.onSubmit&&k.onSubmit(...a))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>k.username=a),type:"text",placeholder:"ユーザー名",name:"username"},null,512),[[l.nr,k.username]]),d,(0,s._)("p",f,(0,n.zw)(k.errors["form.username"]),1),(0,s._)("div",c,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>k.lastName=a),type:"text",placeholder:"姓",name:"lastName"},null,512),[[l.nr,k.lastName]]),_,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>k.firstName=a),type:"text",placeholder:"名",name:"firstName"},null,512),[[l.nr,k.firstName]]),w]),(0,s._)("p",N,(0,n.zw)(k.errors["form.lastName"]),1),(0,s._)("p",b,(0,n.zw)(k.errors["form.firstName"]),1),(0,s._)("div",g,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>k.lastNameKana=a),type:"text",placeholder:"姓(カナ)",name:"lastNameKana"},null,512),[[l.nr,k.lastNameKana]]),h,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>k.firstNameKana=a),type:"text",placeholder:"名(カナ)",name:"firstNameKana"},null,512),[[l.nr,k.firstNameKana]]),v]),(0,s._)("p",K,(0,n.zw)(k.errors["form.lastNameKana"]),1),(0,s._)("p",y,(0,n.zw)(k.errors["form.firstNameKana"]),1),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>k.email=a),type:"text",placeholder:"メールアドレス",name:"email"},null,512),[[l.nr,k.email]]),U,(0,s._)("p",P,(0,n.zw)(k.errors["form.email"]),1),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>k.password=a),type:"password",placeholder:"パスワード",name:"password"},null,512),[[l.nr,k.password]]),Z,(0,s._)("p",$,(0,n.zw)(k.errors["form.password"]),1),(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>k.confirmPassword=a),type:"password",placeholder:"確認用パスワード",name:"confirmPassword"},null,512),[[l.nr,k.confirmPassword]]),q,(0,s._)("p",V,(0,n.zw)(k.errors["form.confirmPassword"]),1),z],32),M])])])}r(7658);var x=r(2954),S=r(2387),C=r(6310),R=r(6565),E=r(2201),L={setup(){(0,C.i_)({mixed:{defalut:"不正な値です。",required:({label:a})=>`${a}は必須の項目です。`},string:{email:({label:a})=>`${a}の形式ではありません。`}}),Object.keys(S.ZP).forEach((a=>{(0,x.aH)(a,S.ZP[a])}));const a=(0,C.Ry)({form:(0,C.Ry)({username:(0,C.Z_)().required().label("ユーザーネーム"),lastName:(0,C.Z_)().required().label("苗字"),firstName:(0,C.Z_)().required().label("名前"),lastNameKana:(0,C.Z_)().required().label("苗字(カナ)"),firstNameKana:(0,C.Z_)().required().label("名前(カナ)"),email:(0,C.Z_)().required().email().label("メールアドレス"),password:(0,C.Z_)().required().label("パスワード"),confirmPassword:(0,C.Z_)().required().label("確認用パスワード")})}),{errors:e,handleSubmit:r}=(0,x.cI)({validationSchema:a,initialValues:{form:{username:"",lastName:"",firstName:"",lastNameKana:"",firstNameKana:"",email:"",password:"",confirmPassword:""}}}),{value:s}=(0,x.U$)("form.username"),{value:l}=(0,x.U$)("form.lastName"),{value:n}=(0,x.U$)("form.firstName"),{value:o}=(0,x.U$)("form.lastNameKana"),{value:m}=(0,x.U$)("form.firstNameKana"),{value:t}=(0,x.U$)("form.email"),{value:u}=(0,x.U$)("form.password"),{value:i}=(0,x.U$)("form.confirmPassword"),p=(0,E.tv)(),d=r((async a=>{const e={username:a.form.username,name:a.form.lastNameKana+a.form.firstName,lastNameKana:a.form.lastNameKana,firstNameKana:a.form.firstNameKana,email:a.form.email,password:a.form.password,confirmPassword:a.form.confirmPassword};R.Z.post("/auth",e,{withCredentials:!0}).then((a=>{if(201!==a.data.status)throw new Error("登録エラーが発生しました");alert("新規登録が完了しました"),p.push({name:"Login"})})).catch((a=>{console.error(a),alert("登録エラーが発生しました")}))}));return{username:s,lastName:l,firstName:n,lastNameKana:o,firstNameKana:m,email:t,password:u,confirmPassword:i,errors:e,onSubmit:d}}},O=r(3744);const W=(0,O.Z)(L,[["render",k]]);var j=W}}]);
//# sourceMappingURL=81.115778d1.js.map