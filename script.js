// Projeto 2A
document.getElementById('currency-form').addEventListener('submit', function(event){
    event.preventDefault();

    // Obter valores de entrada informados pelo usuário
    const valor = (document.getElementById
    ('container').value);
    const daMoeda = document.getElementById('daMoeda').value;
    const paraMoeda = document.getElementById('paraMoeda').value;

    // Definir taxas de câmbio fixas
    const exchangeRates = {
        USD: { BR:  5.70, EUR: 0.93 },
        BRL: { USD: 0.18, EUR: 0.16 },
        EUR: { USD: 1.08, BRL: 6.16 },
    };
});

