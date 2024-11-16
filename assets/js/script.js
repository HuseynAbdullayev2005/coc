const menu_coin_mine = document.querySelector(".menu_coin_mine")
const coinmine = document.querySelector(".coinmine")
const menu_elixir_mine = document.querySelector(".menu_elixir_mine")
const elixirmine = document.querySelector(".elixirmine")
const kamp = document.querySelector(".kamp")
const kamp_menu = document.querySelector(".menu_kamp")
const kisla_menu = document.querySelector(".menu_kisla")
const kisla = document.querySelector(".kisla")
const hall_menu = document.querySelector(".menu_town_hall")
const hall = document.querySelector(".town_hall")
const buyu_menu = document.querySelector(".menu_buyu")
const buyu = document.querySelector(".buyu")
const kamp_image = document.querySelector(".kamp_image")

let elixir = document.querySelector('.elixir_number');
let elixir_number = parseInt(elixir.innerText);
let coin = document.querySelector('.coin_number');
let coin_number = parseInt(coin.innerText);


let collect = setInterval(() => {
  elixir_number += 5;
  elixir.innerText = elixir_number;
  coin_number += 5;
  coin.innerText = coin_number;
}, 100);


let coinmine_count = 0
let elixirmine_count = 0
let kisla_count = 0
let hall_count = 0
let kamp_count = 0
let buyu_count = 0
menu_coin_mine.addEventListener("click", function () {
  if (elixir_number >= 10) {
    coinmine_count++;
    if (coinmine_count > 1) {
      alert("bidene besdide day")
      return
    }
    elixir_number = elixir_number - 10;
    coinmine.style.display = "block"
    let coin_artim = setInterval(() => {
      elixir_number += 0;
      elixir.innerText = elixir_number;
      coin_number += 3;
      coin.innerText = coin_number;
    }, 1000);
  }
  else {
    alert("pulun yoxduda diresme")
  }

})



menu_elixir_mine.addEventListener("click", function () {
  if (coin_number >= 10) {
    elixirmine_count++;
    if (elixirmine_count > 1) {
      alert("bidene besdide day")
      return
    }
    coin_number = coin_number - 10;
    elixirmine.style.display = "block"
    let elixir_artim = setInterval(() => {
      elixir_number += 3;
      elixir.innerText = elixir_number;
      coin_number += 0;
      coin.innerText = coin_number;
    }, 1000);
  }
  else {
    alert("pulun yoxduda diresme")
  }
})




kamp_menu.addEventListener("click", function () {
  if (elixir_number >= 30) {
    kamp_count++;
    if (kamp_count > 1) {
      alert("bidene besdide day")
      return
    }
    elixir_number = elixir_number - 30
    kamp.style.display = "block"
  }
  else {
    alert("pulun yoxduda diresme")
  }
})



kisla_menu.addEventListener("click", function () {
  if (elixir_number >= 50) {
    kisla_count++;
    if (kisla_count > 1) {
      alert("bidene besdide day")
      return
    }
    elixir_number = elixir_number - 50
    kisla.style.display = "block"
  }
  else {
    alert("pulun yoxduda diresme")
  }
})




hall_menu.addEventListener("click", function () {
  if (coin_number >= 50) {
    hall_count++;
    if (hall_count > 1) {
      alert("bidene besdide day")
      return
    }
    coin_number = coin_number - 50
    hall.style.display = "block"
  }
  else {
    alert("pulun yoxduda diresme")
  }
})




buyu_menu.addEventListener("click", function () {
  if (elixir_number >= 100) {
    buyu_count++;
    if (buyu_count > 1) {
      alert("bidene besdide day")
      return
    }
    elixir_number = elixir_number - 100
    buyu.style.display = "block"
  }
  else {
    alert("pulun yoxduda diresme")
  }
})



kisla.addEventListener("click",function () {
  let esger = document.createElement("div")
  esger.classList.add("esger")
  esger.innerHTML = `
  <img src="https://static.wikia.nocookie.net/clashofclansconception/images/4/4e/Barbarian_info.png/revision/latest?cb=20160109075710">
  
  `
  kamp_image.append(esger)
})

