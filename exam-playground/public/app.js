'use strict';

function init() {
    // safe to test jQuery stuff now
    $('#p1').on('click', function(event){ $(this).text('bye'); }); 
}

$(() => {
    init();
});

// what is wrong with this json? see fun.json file.
// const test = [
//     {name:'Sneakers', rank:1, type:'chocolate'},
//     {name:'Reeses', rank:4, type:'peanut'},
// ];

// console.log (test);

