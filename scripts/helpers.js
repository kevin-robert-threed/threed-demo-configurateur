function getBack() {
  var pathArray = window.location.href.split("/");
  var protocol = pathArray[0];
  var host = pathArray[2];
  var url = protocol + "//" + host;

  console.debug(url);
  window.location.href = url;
}

function configureIFrame(item, frame) {
  console.debug(item);

  if (frame && frame.contentWindow) {
    const json = JSON.stringify({
      action: "configure",
      options: item.options,
    });
    const params = JSON.parse(json);
    console.log("send : " + json);

    frame.contentWindow.postMessage(params, "*");
  }
}
