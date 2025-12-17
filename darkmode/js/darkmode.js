const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(btn.textContent === "Dark Mode"){
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});