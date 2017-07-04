function getScrollHeight()
{
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) - document.body.clientHeight;
}

function isInteger(value){
	if(value == null)
		return false;
	value = value.toString().replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
	var expression = /^-?\d+$/;
	return expression.test(value);
}

function trim(value)
{
	return value.toString().replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
}

function format(size, value)
{
	value = trim(value);	//去空格
	value = parseInt(value);	//去0004
	var spareSize = size - value.toString().length;
	var speraValue = "";
	for(var i = 0; i < spareSize; i ++)
	{
		speraValue += "0";
	}
	value = speraValue + value;
	return value;
}

function formatDouble(value, decimalsnum)
{
    return value.toFixed(decimalsnum);
}

function fromatTime(time)
{
	var date = time ? new Date(time) : new Date();
	var year = format(4, date.getFullYear());
	var month = format(2, date.getMonth() + 1);
	var day = format(2, date.getDate());
	var hour = format(2, date.getHours());
	var minute = format(2, date.getMinutes());
	var second = format(2, date.getSeconds());
	return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second;
}

function appendContent(selector, htmlStr)
{
	$('body').stop(true, false);
	$(htmlStr).hide().appendTo($(selector)).fadeIn("slow").css("display", "");
	$('body').animate({scrollTop:getScrollHeight()+'px'}, 400);	
}

function html(selector, htmlStr)
{
	$('html, body').stop(true, false);
//	$(selector).html(htmlStr);
	$('html, body').animate({scrollTop:getScrollHeight()+'px'}, 400);	
//	$('body').animate({scrollTop:($('.div_bottom').offset().top)+'px'}, 400);	
}


function writeObj(obj, alert){
	var description = "";
	for(var i in obj){  
		var property=obj[i];  
		description+=i+" = "+property+"\n"; }  
	if(alert) alert(description);
	return description;
}
