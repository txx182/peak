$(function(){
	function appendShop(){	
		var str = $("#ulap").html();
		for(let i = 0;i<indexshop.length;i++){
			str += '<li class="li"><a href="./detial.html?id=' + indexshop[i].id + '"><img src="' + indexshop[i].img + '"><span class="preprice">' + indexshop[i].span1 + '</span><span class="nowpric">' + indexshop[i].span2 + '</span><p class="p1">' + indexshop[i].p1 + '</p><p class="p2">' + indexshop[i].p2 + '</p><span class="buy">' + indexshop[i].span3 + '</span></a></li>';
		}
		$("#ulap").html(str);
	}
	appendShop();	
})