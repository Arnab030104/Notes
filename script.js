var form = document.getElementById('notesForm');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("notesForm")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    window.open('page2.html', '_blank');

  });
});