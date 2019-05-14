window.onload = function() {
  document.getElementById("puppySubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    const url = "https://dog.ceo/api/breeds/image/random/3";
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response
      const json = await response.json();
      console.log("json: ", json);  //This gets it in json file, readable

      let results = "";
      results += '<br>';
      results += '<img style="display:block; margin-left: auto; margin-right: auto" src="' + json.message[0] + '" width="700" height="700"/>';
      console.log(json.message + ": end of the message");
      document.getElementById("puppyPictureRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
