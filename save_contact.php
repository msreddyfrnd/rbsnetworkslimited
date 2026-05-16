<?php
include 'config.php';
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
mysqli_query($conn,"INSERT INTO contacts(name,email,message) VALUES('$name','$email','$message')");
echo 'Saved';
?>