'use strict';

// function startApp(){
//     $('h1').text('I am so DYNAMIC!!!')
// }

// function startApp(){
//     $('h1').hide(1000);
// }

// function startApp(){
//     $('h1').fadeOut(1000).fadeIn(1000); 
//     // ^ chaining
// }

// ======================================

function startApp(){
    loadData();

    attachListeners();
}

function loadData(){
    // .get wants ('path to data file', 'type of data').
    // this is an asynchronous call - it's a promise of data, not the data iteslf.
    // the time to get the data is unknown.

    const success = snacks => dispalyPage(snacks);
    const failure = error => console.error(error);

    $.get('snacks.json', 'json')
        .then(success)
        .catch(failure);
}

function dispalyPage(snacks) {
    const template = $('#snack-template').html();
    // render is a function that will take unique info and render it into the markup that's waiting.
    const render = Handlebars.compile();

    snacks.forEach(snack => {

        const snackMarkup = render(snack);

        console.log(snackMarkup);

        $('.snaks').append(snackMarkup);


        // const $newSnack = $('.snack-template').clone();

        // $newSnack.find('h2').text(snack.name);
        // $newSnack.find('h3').text(snack.rank);
        // $newSnack.find('p').text(snack.type);
        // $newSnack.removeClass('snack-template');
        // // data attributes, don't have display meaning, but have meaning for the dev:
        // $newSnack.attr('data-type', snack.type);

        // $('.snacks').append($newSnack);

    });
}

function attachListeners(){
// .on() takes ('type of event', )
    $('input').on('change', event => {
        const $choice = $(event.target);
        const type = $choice.val();

        if (type === 'all') {
            $('li').not('.snack-template').show();

        } else if (type === 'savory'){

            $('li').hide();

            $('li[data-type="savory"]').show();

        } else {
            $('li').hide();

            $('li[data-type="sweet"]').show();
        }

    });
}

$(startApp)
