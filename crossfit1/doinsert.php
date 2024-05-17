<?php
include 'connection.php';

$name = "";
$email = "";
$phone = "";
$message = ""; 


$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['subject'];


$sql = "INSERT INTO customer (name, email, phone, message) VALUES('$name', '$email', '$phone', '$message')";

if(mysqli_query($conn, $sql)){
    echo "Data saved successfully!";
}
else{
    echo "Error: " .$sql. "<br>" .mysqli_error($conn);
}
mysqli_close($conn);

?>