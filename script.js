document.getElementById('convertBtn').addEventListener('click', function() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    
    if (!isNaN(dollars)) {
        const bitcoinValue = dollars / 26433.78 ; 
        const colonesValue = dollars * 8.75;

        document.getElementById('bitcoinValue').textContent = bitcoinValue.toFixed(8) + ' BITCOIN';
        document.getElementById('colonesValue').textContent = colonesValue.toFixed(2) + ' COLONES';


        document.querySelector('.result').style.display = 'block';
    } else {
        alert('Ingrese una cantidad en dólares.');
    }
});

let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcbusd@trade');
const price = document.querySelector('#stock-price');

ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    price.innerHTML = stockObject.p;
    //console.log(stockObject.p);
}

