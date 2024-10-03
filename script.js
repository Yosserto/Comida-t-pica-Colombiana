document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".menu-button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const paragraph = this.previousElementSibling;
            if (paragraph.style.display === "none") {
                paragraph.style.display = "block";
                this.textContent = "Mostrar menos";
            } else {
                paragraph.style.display = "none";
                this.textContent = "Mostrar más";
            }
        });
        const paragraph = button.previousElementSibling;
        paragraph.style.display = "none";
    });
});
