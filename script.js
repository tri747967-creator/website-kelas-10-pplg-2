const text = "Selamat datang di website kelas X PPLG 2";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;

        setTimeout(typeText, 80);
    }
}

typeText();