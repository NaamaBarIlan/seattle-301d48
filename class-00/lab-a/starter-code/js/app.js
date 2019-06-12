'use strict';

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

const leftImage = document.getElementById('left');
const centerImage = document.getElementById('center');
const rightImage = document.getElementById('right');

<<<<<<< HEAD
let allProducts = [];
=======
const allProducts = [];
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
const container = document.getElementById('image_container');
const viewed = [];
const labels = [];
const pics = [leftImage, centerImage, rightImage];
const list = document.getElementById('productlist');
<<<<<<< HEAD
let totalClicks = 0;
=======
const totalClicks = 0;
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
const views = [];
const votes = [];

function Product(name) {
  this.name = name;
  this.path = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  allProducts.push(this);
}

function makeRandom() {
  return Math.floor(Math.random() * names.length);
}

function displayPics(){
  while(viewed.length < 6){
    const rando = makeRandom();
    while(!viewed.includes(rando)){
      viewed.push(rando);
    }
  }
<<<<<<< HEAD
  // console.log(rando);
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the variable declaration from `var to `let`.
  // When we changed <var rando> in the above while block into <let rando> we changed the scope of the variable which is now limited to the 'while' code block. Therefore, we can't be called in a console log outside of that block.   
=======
  console.log(rando);
  // because the variable rando was scoped tothe function displayPics
  // TODO: In a sentence or two, explain why the previous line of code threw an error when we changed the constiable declaration from `const to `const`.
  // PUT YOUR RESPONSE IN THIS COMMENT
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
  console.log(viewed);

  for (let i = 0; i < 3; i++){
    const temp = viewed.shift();
    pics[i].src = allProducts[temp].path;
    pics[i].id = allProducts[temp].name;
    allProducts[temp].views += 1;
  }
}

function handleClick(event) {
  if (event.target.id === 'image_container') {
    return alert('Be sure to click directly on an image!!');
  }
  totalClicks += 1;
  if(totalClicks > 24) {
    container.removeEventListener('click', handleClick);
    container.style.display = 'none';
    showList();
    makeChart();
  }
  for(let i = 0; i < names.length; i++){
    if(event.target.id === allProducts[i].name) {
      allProducts[i].votes += 1;
      console.log(`${event.target.id} has ${allProducts[i].votes} votes in ${allProducts[i].views} views`);
    }
  }
  localStorage.busmall = JSON.stringify(allProducts);
  localStorage.busmallProducts = JSON.stringify(allProducts);
  displayPics();
}

function showList() {
  for(let i = 0; i < allProducts.length; i++) {
    const liEl = document.createElement('li');
<<<<<<< HEAD
    liEl.textContent = `${allProducts[i].name} has ${allProducts[i].votes} votes in ${allProducts[i].views} views`;
=======
    liEl.textContent = allProducts[i].name + ' has ' + allProducts[i].votes + ' votes in ' + allProducts[i].views + ' views';
>>>>>>> e7bfac1aa999930ff2031cb8dc845a99a8ce9915
    list.appendChild(liEl);
  }
}

function makeChartData(){
  allProducts.forEach(function(product){
    labels.push(product.name);
    votes.push(product.votes);
    views.push(product.views);
  });
}

function makeChart(){
  makeChartData();
  const ctx = document.getElementById('chartypants').getContext('2d');
  new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'total votes',
        backgroundColor: 'gold',
        borderColor: '#214',
        data: votes,
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            max: 20,
            min: 0,
            stepSize: 1
          }
        }]
      }
    }
  });
  Chart.defaults.global.defaultFontColor = '#eee'; //eslint-disable-line
}

container.addEventListener('click', handleClick);

document.getElementById('bus').addEventListener('click', function(){
  localStorage.removeItem('busmall');
  console.log('Local storage was cleared!');
});

if(localStorage.busmall){
  console.log('Local storage data exists');
  allProducts = JSON.parse(localStorage.busmall);
} else {
  console.log('There is no local storage data; initialize app by creating instances');
  for(let i = 0; i < names.length; i++) {
    new Product(names[i]);
  }
}

displayPics();
