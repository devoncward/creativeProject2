window.onload = function() {
  document.getElementById("beaverSubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    //const url = "https://source.unsplash.com/random";
    const url = "https://source.unsplash.com/1600x900/?beaver";
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response

      let results = "";
      results += '<br>';
      //results += '<img style="display:block; margin-left: auto; margin-right: auto" src="https://source.unsplash.com/random" width="700" height="700"/>';
      results += '<img style="display:block; margin-left: auto; margin-right: auto" src="https://source.unsplash.com/1600x900/?beaver" width="700" height="700"/>';
      document.getElementById("beaverRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
