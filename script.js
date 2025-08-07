
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loadingScreen");
    const content = document.getElementById("content");
    const audio = document.getElementById("whooshSound");

    setTimeout(() => {
        audio.play().catch(e => console.log("Autoplay blocked"));
        loadingScreen.style.display = "none";
        content.style.display = "block";
    }, 2500);
});
