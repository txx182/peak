$(function(){
	//点击注册弹出窗口
	$(".login_res").click(function(){
		$(".regester_landing").css({"display":"block"});
		$("body>*").not($(".regester_landing")).css({"opacity":"0.2"});
	});
	//点击关闭按钮
	$(".reg_close").click(function(){
		$(".regester_landing").css({"display":"none"});
		$("body>*").css({"opacity":"1"});
	});
	//点击“登陆会员”,中间界面切换至登陆
	$(".reg").click(function(){
		$(this).css({"backgroundColor":"#d6181a"});
		$(".lan").css({"backgroundColor":"#a9a9a9"});
		$(".reg_section").css({"display":"none"});
		$(".land_section").css({"display":"block"});
	});
	//点击"注册会员按钮"中间界面切换至注册
	$(".lan").click(function(){
		$(this).css({"backgroundColor":"#d6181a"});
		$(".reg").css({"backgroundColor":"#a9a9a9"});
		$(".reg_section").css({"display":"block"});
		$(".land_section").css({"display":"none"});
	});
})

// 划过手机商城出现二维码
  let phone = document.getElementsByClassName("phone")[0];
	let iphone = document.getElementsByClassName("iphone")[0];
	phone.onmousemove = function(){
		iphone.style.display = "block";
	}
	iphone.onmouseover = function(){
		this.style.display =  "block";
	}
	phone.onmouseout = function(){
		iphone.style.display = "none";
	}
	iphone.onmouseout = function(){
		this.style.display = "none"
	}
// 划过网站导航出现二级菜单
	let navigation=document.getElementsByClassName("navigation")[0];
	let navigation_hide = document.getElementsByClassName("navigation_hide")[0];
	
	navigation.onmouseover = function(){
		navigation_hide.style.display = "block";
	}
	navigation_hide.onmouseover=function(){
	 	this.style.display = "block";
	}
	navigation_hide.onmouseout=function(){
	  this.style.display = "none";
	}

	// 注册正则判断
	
	var phone_call = document.getElementById("phone_call");    
	var mima = document.getElementById("mima");
	var xinmima = document.getElementById("xinmima");
	phone_call.onblur = function(){  
	var strCallP = phone_call.value;
	var regCP = /^1[3578]\d{9}$/;
	if(regCP.test(strCallP)){   
			
	}else{
		alert("用户名不合法");
		phone_call.value = "";
		} 	
	}
	mima.onblur = function(){  
	var strM = mima.value;
	var regM = /^\D\w{5,17}$/;
	
	if(regM.test(strM)){   
			
	}else{
		alert("密码不合法");
		mima.value = "";
		} 	
	}	
	xinmima.onblur = function(){
		var strXM = xinmima.value;
		if(this.value!=mima.value){
			alert("密码不一致");
			xinmima.value = "";
		}
	}
	
	$("#reg_now").click(function(){
		console.log("ni");
		var phone_call = $("#phone_call").val();  
		var mima = $("#mima").val();
		var xinmima = $("#xinmima").val();
		if(phone_call.value==""||mima.value==""||xinmima==""){
			alert("内容不能为空");
		}else{
			$.post("php/register.php",{username:phone_call,pwd:mima},function(resText){
		    if(resText == 1){
					alert("已存在，请重新注册");
					phone_call.value = "";
					mima.value = "";
				}else{
					alert("注册成功");
					location.href="login.html";
				}
			});
		}	
	});		

// 登录正则判断
	var pue = document.getElementById("pue");
	var mm = document.getElementById("mm");
  pue.onblur = function(){  
  var strpue = pue.value;
  var regpue = /^1[3578]\d{9}$/;
  var regpue1 =/^[\u4e00-\u9fa5]{1,10}$/;
  var regpue2 =/^\d{4,10}@qq\.com$/;
		if(regpue2.test(strpue) || regpue.test(strpue) || regpue1.test(strpue)){   
           
    }else{
			alert("用户名不合法");
      pue.value = "";
    } 	
  }
			
	mm.onblur = function(){  
		var strmm = mm.value;
		var regmm = /^\D\w{5,17}$/;
		
		if(regmm.test(strmm)){   
					
		}else{
			alert("密码不合法");
			mm.value = "";
		} 	
	}	
	$("#login").click(function(){
		var pue = $("#pue").val();  
		var mm = $("#mm").val();
	  if(pue.value==""||mm.value==""){
	    alert("内容不能为空");
	  }else{
	    $.post("php/login.php",{username:pue,pwd:mm},function(resText){
				console.log(resText);
	      if(resText == 1){
					alert("登录成功");
					location.href="index.html";
	      }else{
	        alert("用户不存在");
	      }	
	    });
	  }		
	});		