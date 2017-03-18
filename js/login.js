$(".password").blur(function(){
	var password=$(".password").val();

	var re1=/^\S{6,20}$/;
	var str1=password;
	var result1=re1.exec(str1);
	console.log(result1);
	if(password==""){
		$(".mima").text("请输入密码").addClass("red")
	}else{
		if(result1==null){
			$(".mima").text("密码✘").addClass("red")
		}else{
			$(".mima").text("密码✔").removeClass("red")
		}
	}
})
$(".password").focus(function(){
	var password=$(".password").val();
	if(password==""){
		$(".mima").text("6-20位字符，不能使用空格").removeClass("red")
	}
})