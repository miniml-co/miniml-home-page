<?PHP


$newpost = filter_var_array($_POST, FILTER_SANITIZE_STRING);

$name = $newpost['name'];
$email = $newpost['email'];
$message = $newpost['message'];

if ($name == '' || $email == '' || $message == '') {
    header('Location: http://miniml.co/contact');
    exit;
} 

else {
    $to      = 'hello@miniml.co';
    $subject = '[Contact Form] New message from Miniml.';
    $message = "From: $name\r\nEmail: $email\r\nMessage: $message";
    $headers = 'From: Miniml. Contact Form<hello@miniml.co>' . "\r\n" .
        'Reply-To: ' . "$email\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    mail($to, $subject, $message, $headers);
}
