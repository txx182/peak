// 二级菜单
$(function(){
	$(".allshop").mouseover(function(){
		$(this).next().css({"display":"block"});
	});
	$(".allshop").mouseout(function(){
		$(this).next().css({"display":"none"});
	});
	$(".all_list").mouseover(function(){
		$(this).css({"display":"block"});
	});
	$("all_list").mouseout(function(){
		$(this).css({"display":"none"});
	});
	$(".basketwo").mouseover(function(){
		$(this).css({"display":"block"});
	});
	$(".basketwo").mouseout(function(){
		$(this).css({"display":"none"});
	});

});
// 放大镜
$(function(){
	$(".big_pic").mouseover(function(){
		$(".mask_layer").css({"display":"block"});
		$(".big_mirror").css({"display":"block"});
	});
	$(".big_pic").mouseout(function(){
		$(".mask_layer").css({"display":"none"});
		$(".big_mirror").css({"display":"none"});
	});
});
$(function(){
	$(".big_pic").mousemove(function(e){
		let x=e.pageX-$(this).offset().left-$(".mask_layer").width()*0.5;
		let y=e.pageY-$(this).offset().top-$(".mask_layer").height()*0.5;
		if(x<0){
			x=0;
		}
		if(y<0){
			y=0;
		}
		if(x>$(this).width()-$(".mask_layer").width()){
			x=$(this).width()-$(".mask_layer").width();
		}
		if(y>$(this).height()-$(".mask_layer").height()){
			y=$(this).height()-$(".mask_layer").height();
		}
		// 遮罩层位置
		$(".mask_layer").css({"left":x+"px","top":y+"px"});
		// 放大图位置
		let ratio=$(".big_mirror").width()/$(".mask_layer").width();
		let bigX=-x*ratio;
		let bigY=-y*ratio;
		$(".big_mirror").css({"backgroundPositionX":bigX+"px","backgroundPositionY":bigY+"px"});
	});
});
// 小图按钮切换
$(function(){
	$(".click_pre").click(function(){
		$(".prev").slideToggle(1000);
		$(".next").slideToggle(1000);
	})
	$(".click_next").click(function(){
		$(".prev").slideToggle(1000);
		$(".next").slideToggle(1000);
	})
});
//点击小图改变大图和放大图
$(function(){
	$(".small_pic img").click(function(){
		$(this).parent().parent().find("img").removeClass("click_me");
		$(this).addClass("click_me");
		let currentSrc=$(this).attr("src");
		$(".img_click").attr({"src":currentSrc});
		let newSrc= "url("+currentSrc+")" ;
		$(".big_mirror").css({"backgroundImage":newSrc});
	})
})

//点击选择鞋子
$(".color").click(function(){
	$(this).siblings().removeClass("click_shoe_color");
	$(this).addClass("click_shoe_color");
	$(".small_pic img").removeClass("click_me");
	$(this).addClass("click_me");
	let currentSrc=$(this).attr("src");
	$(".img_click").attr({"src":currentSrc});
	let newSrc= "url("+currentSrc+")" ;
	$(".big_mirror").css({"backgroundImage":newSrc});
	let color=$(this).attr("title");
	$(".cor_sh").text(color);
});


//点击选择尺寸
$(".shoe_size span").click(function(){
	$(this).siblings().removeClass("shoe_size_click");
	$(this).addClass("shoe_size_click");
	let size=$(this).text();
	$(".size_sh").text(size);
});

//点击加减按钮
$(function(){
	$(".reduce").click(function(){
		if($(this).next().val()>1){
			let num=$(this).next().val();
			$(this).next().val(--num);
		}
	})
	$(".add").click(function(){
		let num=$(this).prev().val();
		$(this).prev().val(++num);
	})
});

//加入购物车按钮
$(function(){
	$(".cart").click(function(){
		if($(".cor_sh").text()==""){
			alert("请选择颜色");
		}
		if($(".size_sh").text()==""){
			alert("请选择尺码");
		}
		if(!$(".cor_sh").text()==""&&!$(".size_sh").text()==""){
			let color=$(".cor_sh").text();
			let size=$(".size_sh").text();
			let num=$("number").val();
			$(".middle_color").text(color);
			$(".middle_size").text(size);
			$(".middle_num").text(num);
			$(".buy_carts").css({"display":"block"});
			alert("添加成功");
		}
	});
});

//购物车关闭按钮
$(function(){
	$(".close_it").click(function(){
		$(".buy_carts").css({"display":"none"});
	})
})

//返回继续购物
$(function(){
	$(".go_on").click(function(){
		location.href="detial.html";
	});
});

//去购物车结算
$(function(){
	$(".carts_car").click(function(){
		location.href="cart.html";
	})
})
//收藏按钮
$(function(){
	$(".collect").click(function(){
		alert("收藏成功");
	})
})