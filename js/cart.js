	//商品选中与全选状态
	function goodsMake(){
			$(".check_btn").off("click").on("click",function(){
				$(this).toggleClass("select");
				$(this).parents().siblings(".td_plus_subs").children("div").children(".goods_num").toggleClass("goods_num_check");
				$(this).parents().siblings(".total_price").toggleClass("total_price_check");
				checkedGoosds();//选中商品的数量和价格
				result();//结算变色
			});
			$(".check_tot").off("click").on("click",function(){
				$(this).toggleClass("select");
				if($(".check_tot").hasClass("select")){
					$(".check_btn").addClass("select");
					$(".check_btn").parents().siblings(".td_plus_subs").children("div").children(".goods_num").addClass("goods_num_check");
					$(".check_btn").parents().siblings(".total_price").addClass("total_price_check");
				}else{
					$(".check_btn").removeClass("select");
					$(".check_btn").parents().siblings(".td_plus_subs").children("div").children(".goods_num").removeClass("goods_num_check");
					$(".check_btn").parents().siblings(".total_price").removeClass("total_price_check");
				}
				checkedGoosds();//选中商品的数量和价格
				result();//结算变色
			})
		}
		
		
		//购物车  点击加号 数量增加1,减号，减1
		function plusAndSub(){
			$(".plus").click(function(){
				let num=$(this).prev().text();
				$(this).prev().text(++num);
				smallTotal();//商品小计
				goodsNum();//商品数量
				checkedGoosds();//选中状态的商品
				result();//结算变色；
			})
			$(".subs").click(function(){
				let num=$(this).next().text();
				if(num>0){
					$(this).next().text(--num);
				}
				smallTotal()//每次点击，有商品小计
				goodsNum();//商品数量
				checkedGoosds();//选中状态的商品
				result();//结算变色；
			});
	}
			
	//点击X,删除本行，并且从数据库中移除本行数据
		function remove(){
			$(".close").click(function(){
				$(this).parent().parent().remove();
				goodsNum();//商品数量
				checkedGoosds();//选中状态的商品
				result();//结算变色；
				let srcRemove=$(this).parent().parent().find("img").attr("src");
				
				$.get("php/carts_remove.php",{"src":srcRemove},function(data){
					console.log(srcRemove);
					console.log(data);
				});
		});
	}
	
	//商品小计
		function smallTotal(){
			$.each($(".total_price"),function(i,item){
				let singlePrice=$(this).siblings(".sigle_price").text();
				let shoeNum=$(this).siblings(".td_plus_subs").find(".goods_num").text();
				$(this).text(singlePrice*shoeNum);
			})
		}
	
	//函数：获取选中状态的商品的信息
		function checkedGoosds(){
			let checkNum=0;
			for(let i=0;i<$(".goods_num_check").length;i++){
				checkNum+=parseInt($(".goods_num_check")[i].innerHTML);
			}
			
			$(".total p:nth-child(2) span:nth-child(2)").text(checkNum);
			let checkPrice=0;
			for(let i=0;i<$(".total_price_check").length;i++){
				checkPrice+=parseInt($(".total_price_check")[i].innerHTML);
			}
			$(".total p:nth-child(3) span:nth-child(1)").text(checkPrice);
		}
	
	//结算变色函数
		function result(){
			if($(".total p:nth-child(3) span:nth-child(1)").text()>0){
				$(".total a:last-child").css({"background":"red"});
				$(".total a:last-child").attr({"href":""});
			}else{
				$(".total a:last-child").css({"background":"#716b6b"});
				$(".total a:last-child").removeAttr("href");
			}
		}
	
	//函数：购物车里的数量信息(顶部显示和底部显示）
		function goodsNum(){
			let totalNum=0;
			for(let i=0;i<$(".goods_num").length;i++){
				totalNum+=parseInt($(".goods_num")[i].innerHTML);
			}
			$(".carts_goods_num").text(totalNum);
			$(".total p:nth-child(2) span:nth-child(1)").text(totalNum);
		}
	//页面加载时调用下列函数
	$(function(){
		goodsMake();
		plusAndSub();
		remove();
		smallTotal();
		goodsNum();
		result();
		checkedGoosds();
	});
	