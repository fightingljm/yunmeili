//banner--jQ焦点图
/*$(".banner ul li a").click(function(event){
	event.preventDefault();
	num=$(this).parent().index();
	var mlNum=num * -936+'px';
	$("#pic").animate({"margin-left":mlNum},500)
	
	$(this).addClass("aCss").parent().siblings().find("a").removeClass("aCss");//addClass
})*/
//addClass原生
function addClass(object,className){
	var old=object.getAttribute("class");
	console.log(old)
	console.log(old.match(className))
	if(old==null){
		object.setAttribute("class",className)
	}else{
		if(old.match(className)==null){
			old==null?object.setAttribute("class",className):object.setAttribute("class",old+" "+className)
		}
	}			
}
//removeClass原生
function removeClass(object,className){
	var old=object.getAttribute("class");
	var arr=object.className.split(" ");
	function fil(num){
		return num!=className
	}
	var newArr=arr.filter(fil)
	var newClass=newArr.join(" ")
	object.className=newClass;				
}

//banner--原生焦点图
var arr=document.getElementsByClassName('banner')[0].getElementsByTagName('a')
for(var i=0;i<arr.length;i++){
	arr[i].index=i;
	arr[i].onclick=function(event){
		event.preventDefault();
		num=this.index;								
		var mlNum=num * -937+'px';				
		$("#pic").animate({"margin-left":mlNum},500)				
		for(var j=0;j<arr.length;j++){
			removeClass(arr[j],"aCss")
		}
		addClass(arr[num],"aCss")
	}
}
function G(id){
	return document.getElementById(id)
}

//轮播定时
var pics = G('pics')
var list = G('list')
list.onmouseenter=function(){
	clearInterval(stop)
}
list.onmouseleave=function(){
	stop=setInterval(lunbo,1500)
}
var num=0;
function lunbo(){
	if(num<3){
		num=num+1;	
	}
	else{
		num=0;
	}
	var mlNum=num * -937+'px';
	//pic.style.marginLeft=mlNum;
	$("#pic").animate({"margin-left":mlNum},500)
	for(var j=0;j<arr.length;j++){
		removeClass(arr[j],"aCss")
		/*arr[j].style.backgroundColor='#ccc';*/
	}
	addClass(arr[num],"aCss")
	/*arr[num].style.backgroundColor="#094a99";*/
}
var stop=setInterval(lunbo,1500);
pics.onmouseenter=function(){
	clearInterval(stop)
}
pics.onmouseleave=function(){
	stop=setInterval(lunbo,1500)
}
//收藏喜欢
var I=document.getElementsByTagName('i')
var kaiguan=1;
for(var i=0;i<I.length;i++){
	I[i].onclick=function(event){
		event.preventDefault();
		if(kaiguan==1){
			this.style.color="#ff365d";
			var s=this.parentNode.getElementsByTagName("span")[0].innerHTML
			this.parentNode.getElementsByTagName("span")[0].innerHTML=parseInt(s)+1
			kaiguan=0;
		}else{
			this.style.color="#dd7195";
			var s=this.parentNode.getElementsByTagName("span")[0].innerHTML
			this.parentNode.getElementsByTagName("span")[0].innerHTML=parseInt(s)-1
			kaiguan=1;
		}			
	}
}