$(function () {
    //Prevents pages for auto reloading
    $('#myForm').submit(function (e) {
        e.preventDefault();
    })

    //Enables or dissables the button
    $('#formText').on('change', enableButton);

    //Submits the form
    $('#btnSubmit').on('click', submit);

    //Change color of h2 when mouse hovers over it
    $('#log').on('mouseenter', randBackground);

});
//============== NEW ELEMENTS =================
/*
// Creates a div to log the inputs
$('<div id="log"></div>').appendTo('body');
*/

//Creates an unordered list to log the inputs
$('<div class="ul" id="log"></div>').appendTo('body');

//============== EVENT HANDLERS =================

/*
//Alerts the text field in the browser
function notify() {
    alert($('#formText').val());
    }
    */

//Enable or disable the button depending if there is content on the text field
function enableButton() {
    let $textVal = $('#formText').val();
    if ($textVal != "") {
        $('#btnSubmit').removeAttr('disabled');
    } else {
        $('#btnSubmit').attr('disabled', 'disabled');
    }
}

/*
//Creates an h2 element with the info of the text field
function submit() {
    $('<h2 class="textFormLog">' + $('#formText').val() + '</h2>').appendTo('#log');
}
*/

//Creates an element of the unordered list with the info of the text field
function submit() {
    $('<li class="textFormLog">' + $('#formText').val() + '</h2>').appendTo('#log');
}

/*
//Change color of background if the mouse hover over and h2 element
function randBackground() {
    let childrens = $(this).children();
    for (i = 0; i < childrens.length; i++) {
        $(childrens[i]).on('click', function () {
            $(this).css({
                'background-color': randRGBValue,
                'border-radius': '25px'
            });
        });
    }
}
*/

//Change color when clicked on un element of the list
//and remove one item when it's double clicked
function randBackground() {
    let childrens = $(this).children();
    for (i = 0; i < childrens.length; i++) {
        $(childrens[i]).on('click', function () {
            $(this).css({
                'background-color': randRGBValue,
                'border-radius': '25px'
            });
        });
        $(childrens[i]).on('dblclick', function () {
            $(this).remove();
        });
    }
}

//============== EXTRA FUNCTIONS =================

//Creates a random value between 0 and 255
function randRGBValue() {
    let rValue = Math.floor(Math.random() * 256);
    let gValue = Math.floor(Math.random() * 256);
    let bValue = Math.floor(Math.random() * 256);
    return 'rgb(' + rValue + ', ' + gValue + ', ' + bValue + ')';
}
