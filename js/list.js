function G(name){
	return document.getElementsByClassName(name)
}
/*var li1=G("ul1")[0].getElementsByTagName("li");
for(var i=0;i<li1.length;i++){
	li1[i].onmouseover=function(){
		this.getElementsByTagName("a")[0].style.color="#ff6699";				
	}
	li1[i].onmouseout=function(){
		//this.getElementsByTagName("a")[0].style.color="black";
	}
}*/
$(".ul1 li").mouseover(function(){
	$(this).find(".img").removeClass("appear").siblings().find(".img").addClass("appear")
	$(this).find("a").addClass("yanse")
	$(this).siblings().find("a").removeClass("yanse")
	var ind=$(this).index()
	$(".mid-fot").eq(ind-1).removeClass("app")
	$(".mid-fot").eq(ind-1).siblings(".mid-fot").addClass("app")
})
$(".ul1 li").mouseout(function(){
	$(this).siblings().find(".img").addClass("appear")
})
var kaiguan=1;
G("like")[0].onclick=function(event){
	event.preventDefault();
	if(kaiguan==1){
		this.getElementsByTagName("i")[0].style.color="#ff365d";
		var zhi=G("change")[0].innerHTML
		G("change")[0].innerHTML=parseInt(zhi)+1
		kaiguan=0;
	}else{
		this.getElementsByTagName("i")[0].style.color="white";
		var zhi=G("change")[0].innerHTML
		G("change")[0].innerHTML=parseInt(zhi)-1
		kaiguan=1;
	}			
}
$(".box>img").click(function(){
	window.location.href="details.html"
})
$(".c-top a").click(function(event){
	event.preventDefault();
})
$(".yema a").click(function(event){
	event.preventDefault();
})