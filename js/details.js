function G(name){
	return document.getElementsByClassName(name)
}
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
//小图变大图
for(var i=0;i<G("xiaotu").length;i++){
	G("xiaotu")[i].onclick=function(event){
		event.preventDefault();
		for(var i=0;i<G("xiaotu").length;i++){
			G("xiaotu")[i].style.border="2px #dedede solid"
			G("xiaotu")[i].parentNode.getElementsByClassName("lan")[0].style.display="none"
		}
		//this.parentNode.parentNode.getElementsByClassName[i].style.border="2px #dedede solid"
		this.style.border="2px #55aadd solid"
		this.parentNode.getElementsByClassName("lan")[0].style.display="block"
		var lujing=this.parentNode.href
		console.log(lujing)
		this.parentNode.parentNode.parentNode.getElementsByClassName('datu')[0].src=lujing;
	}
}