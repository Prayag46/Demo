<?php

$manager = new MongoDB\Driver\Manager();

$query = new MongoDB\Driver\Query([]);

$cursor = $manager->executeQuery('demo.data', $query);

$result = $cursor->toArray();

print_r(json_encode($result));

?>