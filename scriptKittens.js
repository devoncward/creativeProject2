window.onload = function() {
  document.getElementById("kittenSubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    const url = "https://api.thecatapi.com/v1/images/search";
    //66d3f079-1b26-4c07-93de-4ce99d9c7f04
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response
      const json = await response.json();
      console.log("json: ", json);  //This gets it in json file, readable

      let results = "";
      results += '<img style="position:relative" src=' + json[0].url + '/>';
      console.log(json[0].url + ": end of the message");
      document.getElementById("kittenPictureRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
