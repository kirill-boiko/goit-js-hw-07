const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.value = 16;
input.addEventListener('input', onInutChange);

function onInutChange(e) {
    text.style.fontSize = e.currentTarget.value + "px";
}