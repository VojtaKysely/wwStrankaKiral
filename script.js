function cal() {
    const height = parseFloat(document.getElementById('height').value) / 100; // Převod z cm na metry
    const weight = parseFloat(document.getElementById('weight').value);

    // Vypočítáme BMI
    const bmi = weight / (height * height);

    // Zaokrouhlíme BMI na 2 desetinná místa
    const roundedBmi = bmi.toFixed(2);

    // Zobrazíme výsledek
    document.getElementById('resultID').innerText = `Vaše BMI je ${roundedBmi}`;
}

