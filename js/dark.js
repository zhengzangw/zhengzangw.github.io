// modified from https://codepen.io/BarthyB/pen/EBzxje
document.addEventListener("DOMContentLoaded", function() {
    const app = document.querySelector(".app");
    const button = document.querySelector(".btn-switch");
    const themeName = document.querySelector(".theme-name");

    let currentTheme = "auto"
    if (app.classList.contains("auto")) {
        app.classList.remove("auto");
        app.classList.add("light");
        currentTheme = "light";
    } else {
        currentTheme = app.classList.contains("dark") ? "light" : "dark";
    }

    button.addEventListener("click", function() {
        app.classList.remove(currentTheme);
        currentThemeName = currentTheme === "dark" ? "Light" : "Dark";
        currentTheme = currentTheme === "dark" ? "light" : "dark";
        app.classList.add(currentTheme);

        themeName.innerText = currentThemeName;
    });
});