window.onload = function() {
  document.getElementById("randomSubmit").addEventListener("click", async function(event) {
    event.preventDefault();

    const url = "https://picsum.photos/200/300";
    //const url = "https://some-random-api.ml/img/birb";
    try {
      const response = await fetch(url);
      console.log("response: ", response);  //This gets the entire response

      let results = "";
      results += '<br>';
      results += '<img style="display:block; margin-left: auto; margin-right: auto" src="https://picsum.photos/200/300" width="700" height="700"/>';
      //results += '<img style="display:block; margin-left: auto; margin-right: auto" src="https://some-random-api.ml/img/birb" width="700" height="700"/>';
      document.getElementById("randomPictureRetrieved").innerHTML = results;
    } catch(err) {
      console.log(err);
    }
  });
}
