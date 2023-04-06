const image = document.getElementById("image");
const movieName = document.getElementById("movieName");
const searchButton = document.getElementById("searchButton");
const search = document.getElementById("search");
const lightButton = document.getElementById("lightButton");
const darkButton = document.getElementById("darkButton");
const body = document.getElementById("body");
const moviesID = document.getElementById("moviesID");
const header__li = document.getElementById("header__li");
const card = document.getElementById("card");
const overview=document.getElementById("overview");
const webImage = 'https://image.tmdb.org/t/p/original/'
// const apiKey = 'api_key=df7e5774db0ebc3139e2b4582614e885';
// const URL = 'https://api.themoviedb.org/3';
// const popilarity = '/discover/movie?sort_by=popularity.desc&';
darkButton.onclick = () => {
  console.log("salam");
  darkButton.classList.remove("active");
  lightButton.classList.add("active");
  body.classList.add("dark");
  search.classList.add("form__inpu__JS");
  search.classList.add("font__white__JS");
  moviesID.classList.add("font__white__JS");
  header__li.classList.add("font__white__JS");
}
lightButton.onclick = () => {
  console.log("prenses");
  lightButton.classList.remove("active");
  darkButton.classList.add("active");
  body.classList.remove("dark");
  search.classList.remove("form__input__JS");
  search.classList.remove("font__white__JS");
  moviesID.classList.remove("font__white__JS");
  header__li.classList.remove("font__white__JS");
}

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=df7e5774db0ebc3139e2b4582614e885')
  .then(res => res.json())
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json())
  .then((data) => {
    let innerHTML = ``;
    for (let i = 0; i < data.results.length; i++) {
      innerHTML += ` 
    <div class="col-3">
        <div class="main__card">
            <div class="main__card__image"><img
            id="image" src="${webImage + data.results[i]?.poster_path} " alt=""></div>
        <div class="main__card__content"><span>${data.results[i]?.original_title}</span></div>
        <div class="imdb"><span><i class="fa-brands fa-imdb" style="color: #e3bf0d; font-size: 25px;"></i>  ${data.results[i].vote_average}</span></div></div>
        <div id=overview  class=overview><span>${data.results[i]?.overview}<span></div>
        <div>View:  <span>${data.results[i]?.popularity}<span></div>

</div>`
      console.log(data)
      card.innerHTML = innerHTML;

    }


  })
  image.addEventListener("mouseover", () => {
    overview.classList.add("overviewJS");
  })