<?php

$manager = new MongoDB\Driver\Manager();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$userid = $request->UserId;
$pass = $request->Password;

$query = new MongoDB\Driver\Query(array('userid' => $userid, 'password' => $pass));

$cursor = $manager->executeQuery('demo.users', $query);

$result = $cursor->toArray();

if (empty($result)) {
    echo 'no';
}

else {
    echo 'yes';
}


?>