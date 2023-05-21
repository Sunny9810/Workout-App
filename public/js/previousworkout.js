fetch("/api/exercises-routes")
  .then(response => response.json())
  .then(data => {
    // Call the function to render the template with the fetched data
    renderpreviousworkout(data);
  })
  .catch(error => {
    console.log("Error fetching exercises:", error);
  });
  var source = document.getElementById("previousworkout").previousworkout.handlebars;
  var previousworkout = Handlebars.compile(source);
  