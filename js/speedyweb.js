$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeOut(500);
});

function checkForm(){
	var q1 = $("input[name='q1']").val();
	var q2 = $("input[name='q2']").val();
	var q4 = $("input[name='q4']").val();
	if(q1 === "" || q1 === "undefined"){
		alert("请问您在哪个公司？");
		return false;
	}else if(q2 === "" || q2 === "undefined"){
		alert("怎么称呼您呢？");
		return false;
	}else if(q4 === "" || q4 === "undefined"){
		alert("请留下您的联系方式");
		return false;
	 }else if(!q4.match(/^[0-9]*$/)){
		alert("麻烦留个有效的手机号码");
		return false;
	}else{
		return true;
	}
	
} 
 
 
 