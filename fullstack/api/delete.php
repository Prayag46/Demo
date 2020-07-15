<?php

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->delete(['no' => $_GET['param1']], ['limit' => 1]);

$manager = new MongoDB\Driver\Manager();
$result = $manager->executeBulkWrite('demo.data', $bulk);

?>