// Alternância de tema claro/escuro
document.getElementById('toggle-theme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Salvar o tema no localStorage
});

// Controle de zoom no texto
const fontSizeButton = document.getElementById('font-size-button');
const zoomControls = document.getElementById('zoom-controls');
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');

// Exibir ou ocultar o controle de zoom ao clicar no botão
fontSizeButton.addEventListener('click', () => {
    zoomControls.style.display = zoomControls.style.display === 'block' ? 'none' : 'block';
});

// Atualizar o tamanho da fonte com base no slider
fontSizeSlider.addEventListener('input', () => {
    const newSize = fontSizeSlider.value + 'px';
    document.body.style.fontSize = newSize; // Atualiza o tamanho da fonte no corpo
    fontSizeValue.textContent = newSize; // Atualiza o valor exibido
    localStorage.setItem('fontSize', fontSizeSlider.value); // Salva o tamanho no localStorage
});

// Aplicar configurações salvas no carregamento da página
window.onload = function () {
    // Aplicar o tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-theme').textContent = '🌞';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('toggle-theme').textContent = '🌙';
    }

    // Aplicar o tamanho da fonte salvo
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        const newSize = savedFontSize + 'px';
        document.body.style.fontSize = newSize;
        fontSizeSlider.value = savedFontSize;
        fontSizeValue.textContent = newSize;
    }
};
