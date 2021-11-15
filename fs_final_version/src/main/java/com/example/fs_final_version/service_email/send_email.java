package com.example.fs_final_version.service_email;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
@Service
public class send_email {
    public void send_user_mail_ajoute(String email,String sujet) {
    Properties props = new Properties();
    props.put("mail.smtp.starttls.enable","true");
    String host = "smtp.gmail.com";
    int port = 587;
    String userName = "forum.systeme.service@gmail.com";
    String password = "hxprtkggwsgsqdfh";

    String mailTo = email;
    String subject = "Forum System Notification";

    JavaMailSenderImpl sender = new JavaMailSenderImpl();
		sender.setJavaMailProperties(props);
		sender.setHost(host);
		sender.setPort(port);
		sender.setUsername(userName);
		sender.setPassword(password);

    MimeMessage message = sender.createMimeMessage();
    MimeMessageHelper helper;
		try

    {
        helper = new MimeMessageHelper(message, true);
        helper.setTo(mailTo);
        helper.setSubject(subject);
        helper.setText(sujet);
    } catch(
    MessagingException e)

    {
        throw new RuntimeException(e);
    }

		sender.send(message);
}
}
