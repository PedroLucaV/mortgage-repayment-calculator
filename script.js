const btn = document.getElementById('btn');
const repay = document.getElementById('repay').checked;
const inteOnl = document.getElementById('inteOnl').checked;
const mortAmo = document.getElementById('mortAmo');
const mortTer = document.getElementById('mortTer');
const inteRat = document.getElementById('inteRat');
const empty = document.getElementById('empty');
const containRes = document.getElementById('res');
const monthRep = document.getElementById('monthRep');
const repOve = document.getElementById('repOve');
const a = document.getElementById('1');
const b = document.getElementById('2');
const errorY = document.getElementsByClassName('errorM')[1];
const errorP = document.getElementsByClassName('errorM')[0];
const errorPr = document.getElementsByClassName('errorM')[2];	
const clear = document.getElementById('clear');
const tokenP = document.getElementById('tokenP');
const tokenPr = document.getElementById('tokenPr');
const tokenY = document.getElementById('tokenY');

const calculateMonthlyMortgage = (principal, annualRate, years) => {
    const monthlyRate = annualRate / 100 / 12;
    const totalPayments = years * 12;
    const numerator = monthlyRate * Math.pow(1 + monthlyRate, totalPayments);
    const denominator = Math.pow(1 + monthlyRate, totalPayments) - 1;
    const monthlyPayment = principal * (numerator / denominator);
    const totalRepayment = monthlyPayment * totalPayments;
    
    return {
        monthlyPayment: Number(monthlyPayment.toFixed(2)).toLocaleString('en-US'),
        totalRepayment: Number(totalRepayment.toFixed(2)).toLocaleString('en-US')
    };
}

clear.addEventListener('click', () => {
    window.location.reload()
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const mortAmoValue = mortAmo.value;
    const mortTerValue = mortTer.value;
    const inteRatValue = inteRat.value;
    if(mortAmoValue === '' || mortTerValue === '' || inteRatValue === '' ){
        empty.style.display = 'flex'
        containRes.style.display = 'none';
        if(mortAmoValue === ''){
            mortAmo.classList.add('error')
            tokenP.classList.add('errorToken')
            errorP.style.display = 'block'
        }else{
            mortAmo.classList.remove('error')
            tokenP.classList.remove('errorToken')
            errorP.style.display = 'none'
        }

        if(mortTerValue === ''){
        mortTer.classList.add('error')
        tokenY.classList.add('errorToken')
        errorY.style.display = 'block'
        }
        else{
            mortTer.classList.remove('error')
            tokenY.classList.remove('errorToken')
            errorY.style.display = 'none'
        }

        if(inteRatValue === ''){
        inteRat.classList.add('error')
        tokenPr.classList.add('errorToken')
        errorPr.style.display = 'block'
        }else{
            inteRat.classList.remove('error')
            tokenPr.classList.remove('errorToken')
            errorPr.style.display = 'none'
        }
    }
        else{
            mortAmo.classList.remove('error')
            tokenP.classList.remove('errorToken')
            errorP.style.display = 'none'
            mortTer.classList.remove('error')
            tokenY.classList.remove('errorToken')
            errorY.style.display = 'none'
            inteRat.classList.remove('error')
            tokenPr.classList.remove('errorToken')
            errorPr.style.display = 'none'
        monthRep.textContent = calculateMonthlyMortgage(mortAmoValue, inteRatValue, mortTerValue).monthlyPayment
        repOve.textContent = calculateMonthlyMortgage(mortAmoValue, inteRatValue, mortTerValue).totalRepayment

        empty.style.display = 'none'
        containRes.style.display = 'flex';
        }

    
})