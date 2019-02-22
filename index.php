<?php
if(isset($_COOKIE['been_here'])){
    header('Location: rides.html'); //change index.real.php to your index page
} else {
    $two_months = 60 * 60 * 24 * 60 + time(); 
    setcookie('been_here', true, $two_months);
    header('Location: profile.html'); //change flash.php to your desired location for 1st timers
}
?>