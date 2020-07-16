/*----- constants -----*/

const baseURL = `https://rickandmortyapi.com/api/character/?name=`;


/*----- app's state (variables) -----*/
let rickData, userInput






/*----- cached element references -----*/
const $name = $('#name');
const $origin = $('#origin');
const $status = $('#status');
const $location = $('#location');
const $input = $("input[type='text']");
const $modal = $('.modal');




/*----- event listeners -----*/
$('form').on("submit", handleGetData);





/*----- functions -----*/
  // initialize modal
$modal.modal();
const instance = M.Modal.getInstance($modal);


function handleGetData(event) {
    event.preventDefault();

    userInput = $input.val();
    $.ajax({
       url: `https://rickandmortyapi.com/api/character/?name=${userInput}`
    
    }).then(
        (data) => {
            console.log("DATA IS ", data)
            rickData = data;
            render();
        },
        (error) => {
            console.log("Error is ", error);
        }
    )
}



function render() {
    $name.html("Name: " + rickData.results[0].name);
    $origin.html("Planet of Origin: " + rickData.results[0].origin.name);
    $status.html("Dead or Alive: " + rickData.results[0].status);
    $location.html("Last known location: " + rickData.results[0].location.name);
    $('img').attr('src', rickData.results[0].image);
    instance.open();
}

//materialize features 

$(document).ready(function(){
    $('.tooltipped').tooltip();
  });