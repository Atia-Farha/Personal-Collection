document.querySelector(".button").onclick = function(e) {
    let ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX - 50}px`;
    ripple.style.top = `${e.offsetY - 50}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
};