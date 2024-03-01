const fromAmount = document.getElementById('fromAmount');
const fromCurrency = document.getElementById('fromCurrency');
const toAmount = document.getElementById('toAmount');
const toCurrency = document.getElementById('toCurrency');
const resultElement = document.getElementById('result');

const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'PLN', 'CHF', 'AED', 'AUD', 'CAD', 'HUF', 'CZK', 'DKK', 'NOK', 'SEK', 'RON', 'BGN', 'TRY', 'ZAR', 'CNY'];
currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency;
    option1.text = currency;
    fromCurrency.add(option1);

    const option2 = document.createElement('option');
    option2.value = currency;
    option2.text = currency;
    toCurrency.add(option2);
});

function convertCurrency() {
    const amount = fromAmount.value;
    const fromCurr = fromCurrency.value;
    const toCurr = toCurrency.value;

    if (amount && fromCurr && toCurr) {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurr}`)
            .then(response => response.json())
            .then(data => {
                const rate = data.rates[toCurr];
                const convertedAmount = (amount * rate).toFixed(2);
                toAmount.value = convertedAmount;
                resultElement.textContent = `${amount} ${fromCurr} = ${convertedAmount} ${toCurr}`;
            })
            .catch(error => {
                console.error('Error fetching exchange rates:', error);
            });
    }
}

fromAmount.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);