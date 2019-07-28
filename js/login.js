	//注册和登陆跳转
$(function(){
	$(".immied_btn").click(function(){
		$(".userlogin").css({"display":"none"});
		$(".register").css({"display":"block"});
	});
	
	$(".has").click(function(){
		$(".userlogin").css({"display":"block"});
		$(".register").css({"display":"none"});
	});
});

// 登录正则判断
	var nam = document.getElementById("name");
	var pwd = document.getElementById("pwd");
  nam.onblur = function(){  
  var strName = nam.value;
  var regName = /^1[3578]\d{9}$/;
  var reg1Name =/^[\u4e00-\u9fa5]{1,10}$/;
  var reg2Name =/^\d{4,10}@qq\.com$/;
		if(reg2Name.test(strName) || regName.test(strName) || reg1Name.test(strName)){   
           
    }else{
			alert("用户名不合法");
      nam.value = "";
    } 	
  }
			
	pwd.onblur = function(){  
		var strPwd = pwd.value;
		var regPwd = /^\D\w{5,17}$/;
		
		if(regPwd.test(strPwd)){   
					
		}else{
			alert("密码不合法");
			pwd.value = "";
		} 	
	}	
	$("#btn").click(function(){
		var nam = $("#name").val();  
		var pwd = $("#pwd").val();
	  if(nam.value==""||pwd.value==""){
	    alert("内容不能为空");
	  }else{
	    $.post("php/login.php",{username:nam,pwd:pwd},function(resText){
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
			
	// 注册正则判断
	
	var call = document.getElementById("call");    
	var password = document.getElementById("password");
	
	var rpassword = document.getElementById("rpassword");
	call.onblur = function(){  
	var strCall = call.value;
	var regname = /^1[3578]\d{9}$/;
	var reg1name =/^[\u4e00-\u9fa5]{1,10}$/;
	var reg2name =/^\d{4,10}@qq\.com$/;
	
	if(regname.test(strCall) || regname.test(strCall) || regname.test(strCall)){   
			
	}else{
		alert("用户名不合法");
		call.value = "";
		} 	
	}
	password.onblur = function(){  
	var strpassword = password.value;
	var regpassword = /^\D\w{5,17}$/;
	if(regpassword.test(strpassword)){   
			
	}else{
		alert("密码不合法");
		password.value = "";
		} 	
	}	
	rpassword.onblur = function(){
		var strrpassword = rpassword.value;
		if(this.value!=password.value){
			alert("密码不一致");
			rpassword.value = "";
		}
	}
	$(".immied").click(function(){
		var call = $("#call").val();  
		var password = $("#password").val();
		var rpassword = $("#rpassword").val();
		if(call.value==""||password.value==""||rpassword==""){
			alert("内容不能为空");
		}else{
			$.post("php/register.php",{username:call,pwd:password},function(resText){
		    if(resText == 1){
					alert("已存在，请重新注册");
					call.value = "";
					password.value = "";
				}else{
					alert("注册成功");
					location.href="login.html";	
				}
			});
		}	
	});		
			