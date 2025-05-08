const params = new URLSearchParams(window.location.search);
const totalPrice = params.get('total-price');

document.getElementById('outer').innerHTML = 
`<div>Terimakasih atas pesanan anda: Rp ${(totalPrice * 1000).toLocaleString()}</div>`;