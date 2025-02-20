document.querySelector(".ripple-container").onclick = function (e) {
    let ripple = document.createElement("span");
    ripple.className = "ripple";

    let rect = this.getBoundingClientRect();
    let size = Math.max(rect.width, rect.height);

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
};