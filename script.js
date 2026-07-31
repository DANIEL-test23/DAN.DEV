const btn = document.getElementById('btnBati');
const sagot = document.getElementById('sagot');
btn.addEventListener('click', function() {
    const pangalan = prompt("Ano ang iyong pangalan?");
    sagot.textContent = pangalan ? `Kamusta ka, ${pangalan}! 🎉` : "Wala kang inilagay na pangalan.";
});