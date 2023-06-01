const inputPreco = document.querySelector('#input-price')

SimpleMaskMoney.setMask(inputPreco, {
    prefix: 'R$',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
})