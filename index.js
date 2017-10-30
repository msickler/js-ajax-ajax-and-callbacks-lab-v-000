$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = $('#searchTerms').value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, (data) =>{
    $('#results').html(showRepositories(data))
  }).fail(displayError())
}

function showRepositories(data) {

}
