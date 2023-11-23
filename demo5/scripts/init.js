(function (global) {
  function l() {
    // global.onload = observeUrlChange;

    // Fonction pour détecter les changements de window.location.href
    function detectUrlChange(callback) {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (
            mutation.type === "childList" &&
            mutation.target === document.head
          ) {
            // La modification de window.location.href a été détectée
            callback(window.location.href);
          }
        });
      });

      const config = { childList: true, subtree: true };
      observer.observe(document.head, config);
    }

    // Exemple d'utilisation
    detectUrlChange((newUrl) => {
      console.log("Nouvelle URL détectée :", newUrl);
    });

    console.debug("loaded");
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

  global.loadConfigurateur = function (id, url) {
    console.log("id : " + id);
    console.log("url : " + url);
    console.log("location : " + window.location.search);

    // var params = window.location.search;
    // var iframe_url = url + params;
    document.getElementById(id).src = url;

    // navigation.addEventListener("navigate", (event) => {
    //
    //   console.log("page changed : " + window.location.search);
    //   configureIFrame2(window.location.search);

    //   const url = new URL(event.destination.url);
    // });
  };

  if (document.readyState === "complete") {
    l();
  } else if (global.attachEvent) {
    global.attachEvent("onload", l);
  } else {
    global.addEventListener("load", l, false);
  }

  global.addEventListener("popstate", function (event) {
    // L'URL a changé, vous pouvez réagir en conséquence ici
    console.log("Changement d'URL détecté:", window.location.href);
  });
})(window);
