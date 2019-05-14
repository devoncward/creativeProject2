window.onload = function() {
  document.getElementById("randomSubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    const url = "https://picsum.photos/";
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response
      const json = await response.json();
      console.log("json: ", json);  //This gets it in json file, readable

      let results = "";
      results += '<img style="position:relative" src=' + json.message[0] + '/>';
      console.log(json.url + ": end of the message");
      document.getElementById("randomPictureRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
