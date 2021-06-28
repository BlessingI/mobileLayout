<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = "bigbadumhe@gmail.com";

$email_subject = "new form submission";

$email_body = "username: $name.\n".
              "email: $visitor_email.\n".
              "message: $message.\n";
    
$to = "blessingigbadumhe.com";

$headers = "from: $email_from \r\n ";
$headers = "Reply to: $visitor_from \r\n ";

mail($to, $email_subject, $email_body, $headers);

header("Location: index.html");

?>