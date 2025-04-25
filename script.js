const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

calculateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
        age--;
    }
    resultElement.textContent = `عمرك هو ${age} سنة`;
});