
const btnTopo = document.getElementById("btn-inicio");

// Mostrar o botão ao rolar 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnTopo.classList.add("mostrar");
    } else {
        btnTopo.classList.remove("mostrar");
    }
});

// Função pra rolar até o topo
btnTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

