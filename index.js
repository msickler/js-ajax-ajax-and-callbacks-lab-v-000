$(document).ready(function (){
});

function searchRepositories() {
  const searchTerms = $('#searchTerms').value
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, (data) =>{
    $('#results').html(showRepositories(data))
  }).fail(displayError())
}

function showRepositories(result) {
  let repos = '<ul>' + result.items.map(result => {
    return ( `<li>
      <a href="${result.html_url}">${result.name}</a>
      <p>${result.description} ${result.owner.url} ${result.owner.login}</p>
      <img src="${result.owner.avatar_url}">
      <a href="#" data-respository="${result.name}" data-owner="${result.owner.login}" onClick="showCommits(this)">Show Commits</a>
      </li>`)
  }).join('') + '</ul>'
  return repos
}
