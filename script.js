var inputURL = "https://www.youtube.com/watch?v=cCheeOT5btU";
var resp = "";
var settings = {
  async: true,
  crossDomain: true,
  url: "https://getvideo.p.rapidapi.com/?url=" + inputURL,
  method: "GET",
  headers: {
    "x-rapidapi-host": "Getvideo.p.rapidapi.com",
    "x-rapidapi-key": "50c3507768mshd3e33ce09a430eap1fae7ajsnab00c9f6c026",
    "content-type": "application/x-www-form-urlencoded"
  }
};

$.ajax(settings).then(function(response) {
  console.log(response);
  resp = response;
    $("#title").text(resp.title);
    $("#uploader").text(resp.uploader);
  for (i = 0; i < resp.streams.length; i++) {
      if(resp.streams[i].has_audio && resp.streams[i].has_video && resp.streams[i].extension == "mp4"){     
    var x = $("<a>");
    x.addClass("URL");
    x.attr("href", resp.streams[i].url)
    x.attr("download", resp.title);
    x.html(resp.streams[i].format_note + "  " + resp.streams[i].extension);
    $("#video").append(x);}

  };
  for (i = 0; i < resp.streams.length; i++) {
    if(resp.streams[i].has_audio && resp.streams[i].has_video  == false){     
  var x = $("<a>");
  x.addClass("URL");
  x.attr("href", resp.streams[i].url)
  x.html(resp.streams[i].extension);
  $("#audio").append(x);}
}});

