window.onload = function() {
  document.getElementById("kittenSubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    const url = "https://api.thecatapi.com/v1/images/search";
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response
      const json = await response.json();
      console.log("json: ", json);  //This gets it in json file, readable

      let results = "";
      results += '<br>';
      results += '<img style="display:block; margin-left: auto; margin-right: auto" src="' + json[0].url + '" width="700" height="700"/>';
      console.log(json[0].url + ": end of the message");
      document.getElementById("kittenPictureRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
