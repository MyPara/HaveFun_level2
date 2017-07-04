package sendEmail.util;

import java.util.Date;
import java.util.Properties;

import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class TestSendEmail {
	public static String myEmailAccount = "ur_tianqi@163.com";
	public static String myEmailPass = "124578zxc";
	
	public static String myEmailSMTPHost = "smtp.163.com";
	
	public static String receiveMailAccount = "uc_tianqi@163.com";
	
	public  void setname(String uname , String nums) {
		Properties props = new Properties();
		props.setProperty("mail.transport.protocol","smtp");
		props.setProperty("mail.smtp.host",myEmailSMTPHost);
		props.setProperty("mail.smtp.auth","true");
		
		
		final String smtpPort = "465";
        props.setProperty("mail.smtp.port", smtpPort);
        props.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.setProperty("mail.smtp.socketFactory.fallback", "false");
        props.setProperty("mail.smtp.socketFactory.port", smtpPort);
        
        
        
        Session session = Session.getDefaultInstance(props);
        session.setDebug(true);
        
        
        MimeMessage message;
		try {
			message = createMimeMessage(session,myEmailAccount,receiveMailAccount ,uname , nums);
			Transport transport = session.getTransport();
			
			transport.connect(myEmailAccount,myEmailPass);
			transport.sendMessage(message, message.getAllRecipients());
			
			
			transport.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
        
	}
	

	private static MimeMessage createMimeMessage(Session session,
			String myEmailAccount2, String receiveMailAccount2 , String uname, String nums) throws Exception {
		 MimeMessage message = new MimeMessage(session);

	        // 2. From
	        message.setFrom(new InternetAddress("ur_tianqi@163.com", "ur", "UTF-8"));

	        // 3. To
	        message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress("uc_tianqi@163.com", "uc", "UTF-8"));

	        // 4. Subject
	        message.setSubject("一封来自自己的邮件~", "UTF-8");

	        // 5. Content
	        message.setContent(uname+"手机号:"+nums, "text/html;charset=UTF-8");
	        System.out.println(uname+":"+nums);
	        // 6. 
	        message.setSentDate(new Date());

	        // 7. 
	        message.saveChanges();

	        return message;
	}
	
}
