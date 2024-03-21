chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {redirectUrl: "https://www.youtube.com/watch?v=LLIwKiQ362E"};
    },
    {urls: ["*:https://www.netflix.com/in/*"]},
    ["blocking"]
  );
