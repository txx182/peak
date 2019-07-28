$(function(){
		 var left = $('.btnLeft');//获取左点击
		    var right = $('.btnRight');//获取右点击
		    var aSmall = $('.banner .table a');
		    var aLi = $('.banner ul li');
		    var iNow = 0;
		      // 左点击  
		    left.click(function(){
		      iNow--;
		      // 判断回流
		      if(iNow<0){
		        iNow=3;
		      }
		      aLi.eq(iNow).siblings().stop().animate({
		        opacity:0
		         
		      },2000);
		      aLi.eq(iNow).stop().animate({
		        opacity:1
		           
		      },2000);
		      aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
		    });
		    // 右点击切换
		    right.click(function(){
		      iNow++;
		      if(iNow>3){
		        iNow=0;
		      }
		      aLi.eq(iNow).siblings().stop().animate({
		        opacity:0
		      },2000);
		        aLi.eq(iNow).stop().animate({
		          opacity:1
		      },2000);
		        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
		    });
		
		       //手动切换
		    aSmall.mouseover(function(){
				var n = $(this).index();
				iNow = n;
		     aLi.eq(iNow).siblings().stop().animate({
		      opacity:0
		      },2000);
					
		      aLi.eq(iNow).stop().animate({
		        opacity:1
		      },2000);
					
		      aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
		
		    });
		  // 封装函数体
			function move1(){
		    aLi.eq(iNow).siblings().stop().animate({
		      opacity:0
		    },2000);
				
		    aLi.eq(iNow).stop().animate({
		      opacity:1
		    },1000);
				
		    aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
		 }
		 
		 // 定个定时器的初始值
		
		  function run2(){ 
		    iNow++;
				if(iNow>3){
					iNow=0;
				}
				move1();  
			}
		 
		// 定时器
			timer = setInterval(run2,2000);
		  
		//当鼠标划入，停止轮播图切换
		  $(".content_middle").hover(function(){
		    clearInterval(timer);
			},function(){
		    timer = setInterval(run2,2000);
			});
	});

//划过nav出现二级菜单
window.onload = function(){
	let list=document.getElementsByClassName("list");
	for(let i=1;i<4;i++){
		list[i].onmousemove=function(){
		this.nextElementSibling.style.display="block";
			this.nextElementSibling.onmousemove=function(){
				this.style.display="block";
			}
		}
		list[i].onmouseout=function(){
		this.nextElementSibling.style.display="none";
			this.nextElementSibling.onmouseout=function(){
				this.style.display="none";
			}
		}
	}
}

