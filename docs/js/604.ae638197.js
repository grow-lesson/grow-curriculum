"use strict";(self["webpackChunkgrow_curriculum"]=self["webpackChunkgrow_curriculum"]||[]).push([[604],{4604:function(a,e,n){n.r(e),n.d(e,{default:function(){return x}});var l=n(6252),s=n(9963);const t={class:"signup-page"},r=(0,l._)("div",{class:"welcome-header"},[(0,l._)("a",{href:"/",class:"logo"},"GROW Learning Website")],-1),u={class:"signup-container"},i=(0,l._)("div",{class:"signup-header"},[(0,l._)("div",null,"Sign up")],-1),m=(0,l._)("br",null,null,-1),o={class:"signup"},p=(0,l._)("br",null,null,-1),d={class:"signup-name"},c=(0,l._)("br",null,null,-1),_=(0,l._)("br",null,null,-1),h={class:"signup-name-kana"},w=(0,l._)("br",null,null,-1),f=(0,l._)("br",null,null,-1),N=(0,l._)("br",null,null,-1),g=(0,l._)("br",null,null,-1),y=(0,l._)("br",null,null,-1),b=(0,l._)("p",{class:"btn-back"},[(0,l._)("a",{href:"/"},"＞戻る")],-1);function v(a,e,n,v,K,k){return(0,l.wg)(),(0,l.iD)("div",t,[r,(0,l._)("div",u,[i,m,(0,l._)("div",o,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>K.username=a),type:"text",placeholder:"ユーザー名",name:"username"},null,512),[[s.nr,K.username]]),p,(0,l._)("div",d,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>K.lastName=a),type:"text",placeholder:"姓",name:"lastName"},null,512),[[s.nr,K.lastName]]),c,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>K.firstName=a),type:"text",placeholder:"名",name:"firstName"},null,512),[[s.nr,K.firstName]]),_]),(0,l._)("div",h,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>K.lastNameKana=a),type:"text",placeholder:"姓(カナ)",name:"lastNameKana"},null,512),[[s.nr,K.lastNameKana]]),w,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>K.firstNameKana=a),type:"text",placeholder:"名(カナ)",name:"firstNameKana"},null,512),[[s.nr,K.firstNameKana]]),f]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>K.email=a),type:"text",placeholder:"メールアドレス",name:"email"},null,512),[[s.nr,K.email]]),N,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>K.password=a),type:"password",placeholder:"パスワード",name:"password"},null,512),[[s.nr,K.password]]),g,(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":e[7]||(e[7]=a=>K.confirmPassword=a),type:"password",placeholder:"確認用パスワード",name:"confirmPassword"},null,512),[[s.nr,K.confirmPassword]]),y,(0,l._)("button",{onClick:e[8]||(e[8]=(...a)=>k.signup&&k.signup(...a))},"新規登録"),b])])])}n(7658);var K=n(6565),k={data(){return{username:"",lastName:"",firstName:"",lastNameKana:"",firstNameKana:"",email:"",password:"",confirmPassword:""}},methods:{signup(){const a={name:this.name,last_name:this.lastName,first_name:this.firstName,last_name_kana:this.lastNameKana,first_name_kana:this.firstNameKana,email:this.email,password:this.password,password_confirmation:this.confirmPassword};K.Z.post("/auth",a).then((a=>{200===a.status?(alert("登録が完了しました"),this.$router.push({name:"MenuPage"})):alert("登録エラーが発生しました")})).catch((a=>{console.error(a),alert("登録エラーが発生しました")}))}}},U=n(3744);const V=(0,U.Z)(k,[["render",v]]);var x=V}}]);
//# sourceMappingURL=604.ae638197.js.map