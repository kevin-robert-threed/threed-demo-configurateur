const useLocalhost =
  window.location.href.includes("localhost") ||
  window.location.href.includes("127.0.0.1");

const baseUrl = !useLocalhost
  ? "http://localhost:8082/"
  : "https://app.threed.fr/";
console.debug("base url : " + baseUrl);
