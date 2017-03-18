function G(clas){
	return document.getElementsByClassName(clas)[0];
}
G("youxiang").onblur=function(){
	var youxiang=G("youxiang").value;

	var re1=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	var str1=youxiang;
	var result1=re1.exec(str1);
	console.log(result1);
	if(youxiang==""){
		G("youxiangla").innerHTML="请输入邮箱";
		G("youxiangla").style.color="red";
	}else{
		if(result1==null){
			G("youxiangla").innerHTML="邮箱格式✘";
			G("youxiangla").style.color="red";
		}else{
			G("youxiangla").innerHTML="邮箱格式✔";
			G("youxiangla").style.color="#ccc";
		}
	}
}
G("youxiang").onfocus=function(){
	var youxiang=G("youxiang").value;
	if(youxiang==""){
		G("youxiangla").innerHTML="请输入您常用的邮箱"
		G("youxiangla").style.color="#ccc";
	}
}
G("mima1").onblur=function(){
	var mima1=G("mima1").value;

	var re1=/^\S{6,20}$/;
	var str1=mima1;
	var result1=re1.exec(str1);
	console.log(result1);
	if(mima1==""){
		G("mima1la").innerHTML="请输入密码"
		G("mima1la").style.color="red";
	}else{
		if(result1==null){
			G("mima1la").innerHTML="密码格式✘"
			G("mima1la").style.color="red";
		}else{
			G("mima1la").innerHTML="密码格式✔"
			G("mima1la").style.color="#ccc";
		}
	}
}
G("mima1").onfocus=function(){
	var mima1=G("mima1").value;
	if(mima1==""){
		G("mima1la").innerHTML="6-20位字符，不能使用空格"
		G("mima1la").style.color="#ccc";
	}
}
G("qrmima1").onblur=function(){
	var qrmima1=G("qrmima1").value;

	var re1=/^\S{6,20}$/;
	var str1=qrmima1;
	var result1=re1.exec(str1);
	console.log(result1);
	if(qrmima1==""){
		G("qrmima1la").innerHTML="请确认密码"
		G("qrmima1la").style.color="red";
	}
	var pw1=G("mima1").value;
	var pw2=G("qrmima1").value;
	if(pw1!==pw2){
		G("qrmima1la").innerHTML="前后密码不一致"
		G("qrmima1la").style.color="red";
	}
}
G("qrmima1").onfocus=function(){
	var qrmima1=G("qrmima1").value;
	if(qrmima1==""){
		G("qrmima1la").innerHTML=""
		G("qrmima1la").style.color="#ccc";
	}			
}