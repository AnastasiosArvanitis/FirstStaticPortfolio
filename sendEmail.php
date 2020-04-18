<?php

require 'recaptchalib.php';
$clef_publique = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
$clef_secrete = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

$captchaVer = false;
$recaptchaErr = false;
$postErr = false;
$url = 'contactPage';

$reCaptcha = new ReCaptcha($clef_secrete);
if(isset($_POST["g-recaptcha-response"])) {
    $resp = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
        );
    if ($resp != null && $resp->success) {
      $captchaVer =  true;
      $recaptchaErr = false;
    }else {
      $captchaVer = false;
      $recaptchaErr = true;
    }
  }

        $nameErr = $lastNameErr = $emailErr = $formTextErr = false;
        $name = $lastName = $email = $comment = "";

        function validateInput($data) {
          $data = trim($data);
          $data = stripslashes($data);
          $data = htmlspecialchars($data);
          return $data;
        }

    if ($recaptchaErr) {
      exit('Not valid recaptcha');
    }else{

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          //----------    name
          if (empty($_POST["name"])) {
            $nameErr = true;
            exit('Prénom obligatuire!');
          } else {
            $name = validateInput($_POST["name"]);
            if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
              $nameErr = true;
              exit('Only letters and spaces allowed!');
            }
          }
          //----------    Last   name
          if (empty($_POST["lastName"])) {
            $lastNameErr = true;
            exit('Nom obligatuire!');
          } else {
            $lastName = validateInput($_POST["lastName"]);
            if (!preg_match("/^[a-zA-Z ]*$/",$lastName)) {
              $lastNameErr = true;
              exit('Only letters and spaces allowed!');
            }
          }
          //----------    EMAIL
          if (empty($_POST["email"])) {
            $emailErr = true;
            exit('Email obligatuire!');
          } else {
            $email = validateInput($_POST["email"]);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              $emailErr = true;
              exit('Not a valid email!');
            }
          }
          //----------    MES
          if (empty($_POST["comment"])) {
            $formTextErr = true;
            exit('Comment obligatuire!');
          } else {
            $formText = validateInput($_POST["comment"]);
            if (!preg_match("/^[a-zA-Z ]*$/",$formText)) {
              $formTextErr = true;
              exit('Comment not valid!');
            }
          }
        }else{
          $postErr = true;
          header('Location: errorPage.php?postErr='.$postErr);
          exit('This is not a POST method :)');
        }
        //----------------SEND EMAIL IF THERE IS NO ERRORS
        if ($nameErr || $lastNameErr || $emailErr || $formTextErr){
          // header('Location: errorPage.php?nameErr='.$nameErr.'&lastNameErr='.$lastNameErr.'&emailErr='
          // .$emailErr.'&formTextErr='.$formTextErr.'&urlErr='.$url);
          exit('There is errors...');
        }else {
          $sender = 'contact@anastasios-arvanitis.fr';
          $to = 'contact@anastasios-arvanitis.info';
          $subject = $name.' '.$lastName.' sends you an email';
          $headers = 'From: '.$email;

          $sendMail = mail($to, $subject, $formText, $headers);

          if (!$sendMail){
            $mailNotSendErr = true;
            //header('Location: errorPage.php?mailNotSendErr='.$mailNotSendErr);
            exit('MAil not sent...');
          }else {


           echo "<script>alert(\"Merci $name $lastName de votre message\");window.location.replace(\"index.php\");</script>";
           //echo "<a onclick=\"function('$some');\">";
          }
        }
}


?>
