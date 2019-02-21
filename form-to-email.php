<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
    
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'qismatech@gmail.com';

$email_subject = "Enquiry";

$email_body = "You have received a new message from the user $name.\n".
    "Here is the message:\n $message".

$to = "qismatech@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";


mail($to, $email_subject, $email_body, $headers)

header('Location: ./pages/index.html');
?>