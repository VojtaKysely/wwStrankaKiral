function cal() {
    const pascal = parseFloat(document.getElementById('pascal').value) ;
    

    // převod na bary
    const prevod = pascal/100000;

    const prevod1 = pascal*98066;



    // Zaokrouhlíme  na 6 desetinná místa
    const roundedprevod = prevod.toFixed(6);
    const roundedprevod1 = prevod1.toFixed(6);

    // Zobrazíme výsledek
    document.getElementById('resultID').innerText = `Převod na bary je ${roundedprevod} (bar) prevod v atmosfericky tlak je ${roundedprevod1} (at) `;
}