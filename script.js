// Списък с филми
const movies = [
    { title: "Интерстелар", genre: "sci-fi" },
    { title: "Титаник", genre: "romance" },
    { title: "Матрицата", genre: "action" },
    { title: "Форест Гъмп", genre: "drama" },
    { title: "Отмъстителите: Краят", genre: "superhero" },
    { title: "Междузвездни войни: Нова надежда", genre: "sci-fi" },
    { title: "Записки по един скандал", genre: "drama" },
    { title: "Железният човек", genre: "superhero" },
    { title: "Бележникът", genre: "romance" },
    { title: "Мисията невъзможна", genre: "action" }
];

// Функция за избор на произволен филм
function chooseRandomMovie() {
    const genre = document.getElementById("genre").value;
    const filteredMovies = genre
        ? movies.filter(movie => movie.genre === genre)
        : movies;

    if (filteredMovies.length === 0) {
        document.getElementById("result").innerText = "Няма филми в тази категория.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * filteredMovies.length);
    const chosenMovie = filteredMovies[randomIndex];
    document.getElementById("result").innerText = `Гледай: ${chosenMovie.title}`;
}
function showPaymentMenu(planName, planPrice) {
    const modal = document.getElementById("paymentModal");
    const planTitle = document.getElementById("planTitle");
    const planPriceElement = document.getElementById("planPrice");

    planTitle.textContent = planName;
    planPriceElement.textContent = planPrice;
    modal.style.display = "flex"; // Показва модалното меню
}

function closePaymentMenu() {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "none"; // Скрива модалното меню
}