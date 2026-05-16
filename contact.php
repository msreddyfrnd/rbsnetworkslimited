<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "yourmail@gmail.com";   // CHANGE THIS
$subject = "Website Enquiry";

$body = "Name: $name\nEmail: $email\nMessage:\n$message";

$headers = "From: $email";

if(mail($to, $subject, $body, $headers)){
    echo "<script>alert('Message Sent');window.location.href='contact.html';</script>";
}else{
    echo "Error sending mail";
}

}
?>
