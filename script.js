
document.getElementById('toggle-theme').addEventListener('click', function() {
   
    document.body.classList.toggle('dark-mode');
    
    
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('toggle-theme').textContent = '🌞'; 
        localStorage.setItem('theme', 'dark'); 
    } else {
        document.getElementById('toggle-theme').textContent = '🌙';
        localStorage.setItem('theme', 'light'); 
    }
});

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('toggle-theme').textContent = '🌞'; 
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('toggle-theme').textContent = '🌙'; 
    }
};

const fontSizeButton = document.getElementById('font-size-button'); 
const zoomControls = document.getElementById('zoom-controls'); 
const fontSizeSlider = document.getElementById('font-size-slider'); 
const fontSizeValue = document.getElementById('font-size-value'); 


fontSizeButton.addEventListener('click', () => {
    zoomControls.style.display = zoomControls.style.display === 'block' ? 'none' : 'block';
});


fontSizeSlider.addEventListener('input', () => {
    const newSize = fontSizeSlider.value + 'px';
    document.body.style.fontSize = newSize; 
    fontSizeValue.textContent = newSize;
    localStorage.setItem('fontSize', fontSizeSlider.value); 
});


window2.onload = function () {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        const newSize = savedFontSize + 'px';
        document.body.style.fontSize = newSize;
        fontSizeSlider.value = savedFontSize;
        fontSizeValue.textContent = newSize;
    }
};

