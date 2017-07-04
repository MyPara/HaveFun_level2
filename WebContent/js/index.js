function send(){
	var uname = document.getElementById('name').value;	
	var nums = document.getElementById('numb').value;
	alert("你好！"+uname+"^_^");
	if(null == uname||"undefined" == uname||""==uname){alert("你的名字？");return;}
	if(null == nums||"undefined" == nums||""==nums){alert("你的手机号？");return;}
	var temp_form = document.createElement("form");
	temp_form.action = "Send.jsp";
	
	temp_form.method = "post";
	temp_form.style.display = "none";
	
	var input_uname = document.createElement("input");
	input_uname.name = "uname";
	input_uname.value = uname;
	var input_nums = document.createElement("input");
	input_nums.name = "nums";
	input_nums.value = nums;
    temp_form.appendChild(input_uname);    
    temp_form.appendChild(input_nums);  
    document.body.appendChild(temp_form); 
    temp_form.submit();  
	  
}

$(document).ready(function(){
	$('button').unbind().click(send);
});
