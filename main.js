
   
function onClick(){
    fetch('./api.php')
        .then((response) => {
            response.json().then(data => {
                const exchange = data['TipoCambioDiaResult']['CambioDolar']['VarDolar']['referencia'];
                let gtq = document.getElementById('input_gtq').value;
                document.getElementById('input_usd').value = gtq * exchange;
            });
        })
        .catch((error) => {
            console.error(error);
        })
}
