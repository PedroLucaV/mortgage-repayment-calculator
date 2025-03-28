const btn = document.getElementById('btn');
const repay = document.getElementById('repay').checked;
const inteOnl = document.getElementById('inteOnl').checked;
const empty = document.getElementById('empty');
const containRes = document.getElementById('res');
const monthRep = document.getElementById('monthRep');
const repOve = document.getElementById('repOve');
const a = document.getElementById('1');
const b = document.getElementById('2')
const clear = document.getElementById('clear')

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
    const mortAmo = Number(document.getElementById('mortAmo').value);
    const mortTer = Number(document.getElementById('mortTer').value);
    const inteRat = Number(document.getElementById('inteRat').value);

    monthRep.textContent = calculateMonthlyMortgage(mortAmo, inteRat, mortTer).monthlyPayment
    repOve.textContent = calculateMonthlyMortgage(mortAmo, inteRat, mortTer).totalRepayment

    empty.style.display = 'none'
    containRes.style.display = 'flex';
})