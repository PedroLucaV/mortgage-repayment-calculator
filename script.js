const btn = document.getElementById('btn');
const mortAmo = document.getElementById('mortAmo').value;
const mortTer = document.getElementById('mortTer').value;
const inteRat = document.getElementById('inteRat').value;
const repay = document.getElementById('repay').checked;
const inteOnl = document.getElementById('inteOnl').checked;
const empty = document.getElementById('empty');
const containRes = document.getElementById('res');
const monthRep = document.getElementById('monthRep');
const repOve = document.getElementById('repOve');
const a = document.getElementById('1');
const b = document.getElementById('2')

const juros = (mont, juros, tempo) => {
    return mont/Math.pow((1+(juros/100)), tempo)
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    monthRep.textContent = 
    repOve.textContent = juros(mortAmo, inteRat, mortTer).toFixed(2)

    empty.style.display = 'none'
    containRes.style.display = 'flex';

})