<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer-master/src/Exception.php';
require './PHPMailer-master/src/PHPMailer.php';
require './PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_id = $_POST['form_id'];
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $country = $_POST['country-name'];
    $phone = $_POST['phone'];
    $pincode = $_POST['pincode'];
    $treatment = $_POST['treatment'];

    $mail = new PHPMailer(true);

    try {
        // //Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->SMTPAuth = true;                                   //Enable SMTP authentication

        $mail->Host = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->Username = 'cangenesishealthcare@gmail.com';                     //SMTP username
        $mail->Password = 'izwhaezevnoekjao';                               //SMTP password

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //ENCRYPTION_SMTPS 465 - Enable implicit TLS encryption
        $mail->Port = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('cangenesishealthcare@gmail.com', 'Cangenesis');
        $mail->addAddress('cangenesishealthcare@gmail.com', 'Appointment Form');     //Add a recipient

        //Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'New Jaslok Appointment';

        switch ($form_id) {
            case 'form1':
                $mail->Body = '<h3>Hello you received a new appointment</h3>
                    <p><strong>Name:</strong> ' . $name . '<p>
                    <p><strong>Last Name:</strong> ' . $lastname . '<p>
                    <p><strong>Email:</strong> ' . $email . '</p>
                    <p><strong>Country:</strong> ' . $country . '</p>
                    <p><strong>Phone Number:</strong> ' . $pincode . ' ' . $phone . '</p>
                    <p><strong>Treatment:</strong> ' . $treatment . '</p>
                ';
                break;
            case 'form2':
                $mail->Body = '<h3>Hello you received a new appointment</h3>
                    <p><strong>Name:</strong> ' . $name . '<p>
                    <p><strong>Last Name:</strong> ' . $lastname . '<p>
                    <p><strong>Email:</strong> ' . $email . '</p>
                    <p><strong>Country:</strong> ' . $country . '</p>
                    <p><strong>Phone Number:</strong> ' . $pincode . ' ' . $phone . '</p>
                    <p><strong>Treatment:</strong> ' . $treatment . '</p>
                ';
                break;
            case 'form3':
                $mail->Body = '<h3>Hello you received a new appointment</h3>
                    <p><strong>Name:</strong> ' . $name . '<p>
                    <p><strong>Last Name:</strong> ' . $lastname . '<p>
                    <p><strong>Email:</strong> ' . $email . '</p>
                    <p><strong>Country:</strong> ' . $country . '</p>
                    <p><strong>Phone Number:</strong> ' . $pincode . ' ' . $phone . '</p>
                    <p><strong>Treatment:</strong> ' . $treatment . '</p>
                ';
                break;
        }

        if ($mail->send()) {
            header('Location: thank_you.html');
            exit(0);
        } else {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            header('Location: index.html');
            exit(0);
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";

    }
} else {
    header('Location: index.html');
    exit(0);
}

?>