<?php
// check if fields passed are empty
if(empty($_POST['email']) 		||
   empty($_POST['zipCode']) 	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
$email_address = $_POST['email'];
$zip_code = $_POST['zipCode'];

// create email body and send it
$to = 'katy.feng.14@gmail.com'; // *REPLACE WITH THE EMAIL ADDRESS YOU WANT THE FORM TO SEND MAIL TO*
$email_subject = "Website Contact Form";
$email_body = "New email for Zyp.\n\n"."Here are the details:\n\nEmail: $email_address\n\nZipCode: $zip_code\n";
$headers = "From: noreply@zypapp.com\n"; // *REPLACE WITH THE EMAIL ADDRESS YOU WANT THE MESSAGE TO BE FROM*
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>



