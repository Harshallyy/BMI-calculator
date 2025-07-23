const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0){
        results.innerHTML = `Invalid input ${height}`;
    } else if (isNaN(weight) || weight <= 0){
        results.innerHTML = `Invalid input ${weight}`;
    } else {
        const BMI = (weight / ((height / 100) ** 2)).toFixed(2);
        results.innerHTML = `<span>${BMI}</span>`;
    }
});
