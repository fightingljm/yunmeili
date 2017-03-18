var goods=document.getElementsByClassName("li")
var goods2=document.getElementsByClassName("li2")
var zongji=document.getElementsByClassName("zongji")
var add=document.getElementsByClassName("add")
var express=document.getElementById('express')
var discount=document.getElementById('discount')

console.log(goods.length)
//总计
function getAllTotal(){
	var total=0;
	for(var i=0;i<goods.length;i++){
		if(goods[i].getElementsByClassName("first")[0].checked==true){
			total+=parseFloat(goods[i].getElementsByClassName("xiaoji")[0].innerHTML)
		}
		// console.log(total)
	}
	for(var i=0;i<zongji.length;i++){
		zongji[i].innerHTML=total.toFixed(2)
	}
}
//小计		
function xiaoji(){
	var  myselect=discount;
	var index=myselect.selectedIndex ;
	var zhi=myselect.options[index].text;
	var re=/[0-9]/
	var result=re.exec(zhi);
	result=(result[0]*0.1).toFixed(2)
	var xj=0;
	xj=parseFloat(goods2[0].getElementsByClassName("unit-price")[0].innerHTML)*parseFloat(goods2[0].getElementsByClassName("num")[0].value)*parseFloat(result)
	goods2[0].getElementsByClassName("xiaoji")[0].innerHTML=xj.toFixed(2)
}
//复选框事件
var inputChecked=document.getElementsByClassName("selected")
for(var i =0;i<inputChecked.length;i++){
	inputChecked[i].checked = true
}
for(var i=0;i<inputChecked.length;i++){
	inputChecked[i].onclick=function(){
		console.log(this.className.indexOf("quanxuan"))
		if(this.className.indexOf("quanxuan")>=0){
			for(var j=0;j<inputChecked.length;j++){
				inputChecked[j].checked=this.checked
			}
		}else{
			var kaiguan=1;
			for(var n=0;n<document.getElementsByClassName("first").length;n++){
				console.log(document.getElementsByClassName("first")[n].checked)
				if(document.getElementsByClassName("first")[n].checked==false){
					kaiguan=0;
				}
			}
			if(kaiguan==1){
				console.log(3)
				for(var m=0;m<document.getElementsByClassName("quanxuan").length;m++){
					document.getElementsByClassName("quanxuan")[m].checked=true;
				}
			}
		}
		if(this.checked==false){
			document.getElementsByClassName("quanxuan")[0].checked=false;
		}
		getAllTotal();
	}
}
//加减
for(var i=0;i<goods.length;i++){
	goods[i].onclick=function(event){
		
		var e=event||window.event;
		var tar=e.target;
		var num=tar.parentNode.parentNode.getElementsByClassName("num")[0].value;
		switch(tar.className){
			case "jia":
				num++;event.preventDefault();
				tar.parentNode.getElementsByClassName("selected")[0].checked=true;break;
			case "jian":
				if(num>1){
					num--;
				}
				event.preventDefault();//阻止默认事件
				tar.parentNode.getElementsByClassName("selected")[0].checked=true;break;
		}
		tar.parentNode.parentNode.getElementsByClassName("num")[0].value=num;	
		xiaoji();
		getAllTotal();
	}
}

//address
document.getElementsByClassName("ad")[0].getElementsByTagName("li")[0].onclick=function(){
	var dizhi=this.getElementsByClassName("dizhi")[0].innerHTML;
	this.parentNode.parentNode.parentNode.getElementsByClassName("addre")[0].innerHTML=dizhi;
	for(var i=0,lii=document.getElementsByClassName("ad")[0].getElementsByTagName("li");i<lii.length;i++){
		lii[i].style.background="none"
		lii[i].getElementsByClassName("add")[0].checked=false;		
	}							
	this.style.background="url(../images/send_03.jpg) no-repeat"
	this.getElementsByClassName("add")[0].checked=true;
	this.parentNode.getElementsByClassName('mans')[0].style.background="white"
}

document.getElementsByClassName("ad")[0].getElementsByTagName("li")[1].onclick=function(){
	var dizhi=this.getElementsByClassName("dizhi")[0].innerHTML;
	this.parentNode.parentNode.parentNode.getElementsByClassName("addre")[0].innerHTML=dizhi;
	for(var i=0,lii=document.getElementsByClassName("ad")[0].getElementsByTagName("li");i<lii.length;i++){
		lii[i].style.background="none"
		lii[i].getElementsByClassName("add")[0].checked=false;
	}							
	this.style.background="url(../images/send_03.jpg) no-repeat"
	this.getElementsByClassName("add")[0].checked=true;

	var man=this.getElementsByClassName("mans")[0].value;
	this.parentNode.parentNode.parentNode.getElementsByClassName("man")[0].innerHTML=man;
	console.log(this.parentNode.parentNode.parentNode.getElementsByClassName("man")[0])
	this.getElementsByClassName('mans')[0].style.background="#fff5cd"
}

//拿到快递钱
express.onclick=function(){
	//1:拿到select对象： 
	var  myselect=express;

	//2：拿到选中项的索引：
	var index=myselect.selectedIndex ;
	// selectedIndex代表的是你所选中项的index

	// //3:拿到选中项options的value：  
	// myselect.options[index].value;

	//4:拿到选中项options的text：  
	var zhi=myselect.options[index].text;
	console.log(zhi)
	var re=/[0-9]+.[0-9]+/
	var result=re.exec(zhi);
	console.log(result[0]);
	this.parentNode.getElementsByClassName("xiaoji")[0].innerHTML=result[0];
}

// //拿到打折
// discount.onclick=function(){
// 	//1:拿到select对象： 
// 	var  myselect=discount;

// 	//2：拿到选中项的索引：
// 	var index=myselect.selectedIndex ;
// 	// selectedIndex代表的是你所选中项的index

// 	// //3:拿到选中项options的value：  
// 	// myselect.options[index].value;

// 	//4:拿到选中项options的text：  
// 	var zhi=myselect.options[index].text;
// 	console.log(zhi)
// 	var re=/[0-9]/
// 	var result=re.exec(zhi);
// 	//console.log(result[0]);
// 	result=(result[0]*0.1).toFixed(2)
// 	console.log(result)
// 	//this.parentNode.getElementsByClassName("xiaoji")[0].innerHTML=result[0];
// }