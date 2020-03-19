
<?php
    $url = "http://www.banguat.gob.gt/variables/ws/TipoCambio.asmx?WSDL";
    $client = new SoapClient($url);
    $response = $client->TipoCambioDia();

    header('Content-Type: application/json');
    echo json_encode($response);
?>

