
// add money feature
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

// cash out withdraw money feature
const agentNumberList = 12345678910;

document.getElementById('withdraw-money').addEventListener('click', function(e){
    e.preventDefault()

    const agentNumber = document.getElementById('agent-number').value;
    const cashoutAmountNumber = parseInt(document.getElementById('cash-out-amount').value)

    const cashOutPin =(document.getElementById('cashout-pin-number').value);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(agentNumberList === agentNumber){
        alert('Please try again')
        return;
    }
    if(cashOutPin.length < 4){
        alert('please try again pin')
        return;
    }


    const totalAvailableNumberCash = availableBalance - cashoutAmountNumber
    
    document.getElementById('available-balance').innerText = totalAvailableNumberCash;




 
})







// togging section 

document.getElementById('add-btn').addEventListener('click',function (){
    document.getElementById('cash-out-parent').style.display = 'none'
    document.getElementById('add-money-parent').style.display='block'
})
document.getElementById('cash-out-btn').addEventListener('click',function (){
    document.getElementById('add-money-parent').style.display = 'none'
    document.getElementById('cash-out-parent').style.display='block'
})
