<?php

$manager = new MongoDB\Driver\Manager();

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$date = $request->Date;
$descrip = $request->Description;
$by = $request->By;
$to = $request->To;
$status = $request->Status;
$no = $request->No;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->update(
    ['no' => $no],
    ['$set' => ['due_date' => $date,'description' => $descrip,'assigned_by' => $by,'assigned_to' => $to,'status' => $status]],
    ['multi' => true, 'upsert' => true]
);

$result = $manager->executeBulkWrite('demo.data', $bulk);


?>