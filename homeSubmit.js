const element = document.getElementById("search_button");


function redirectToCityHTML() {
    location.assign("./city.html");
}

element.addEventListener("click", redirectToCityHTML);
