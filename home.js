const pinNumberAdd = 1234;

document.getElementById('add-money').addEventListener('click',function(e){
    e.preventDefault()
    const selectBank = document.getElementById('select-bank').value;
    const bankAccountNumber =(document.getElementById('bank-account-number').value);
    const amountAdd = parseInt(document.getElementById('amount-add').value)
    const pinNumber = document.getElementById('pin-number').value
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    
    if(bankAccountNumber.length <11){
        alert('invalid the number')
     return
    }
    if(pinNumber != pinNumberAdd){
        alert("pin number invalid")
        return
    }


    const totalAvailableBalance = amountAdd + availableBalance;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
})


