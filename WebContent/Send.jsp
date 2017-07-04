<%@ page language="java" contentType="text/html; charset=GBK"
	pageEncoding="UTF-8"%>
<%@ page import="sendEmail.util.TestSendEmail"%>
<% 
//TestSendEmail	TestSendEmail send = new TestSendEmail();
	request.setCharacterEncoding("UTF-8");
	String uname = request.getParameter("uname");
	String nums = request.getParameter("nums");

	TestSendEmail testSend = new TestSendEmail();
	testSend.setname(uname, nums);
%>
<html>
<head></head>
<body><div align="center"><img src="image/smile.gif" width="250" height="200" >

		<font color="#FF0000">发送成功！！！</font>
</div></body>
</html>