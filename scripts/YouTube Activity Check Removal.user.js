// ==UserScript==
// @name        YouTube Activity Check Removal
// @namespace   http://kristobaljunta.tk
// @include     https://youtube.com/*
// @include     https://*.youtube.com/*
// @version     2
// @run-at      document-end
// @grant       none
// ==/UserScript==

function fire() {
  let dlg = document.querySelector('paper-dialog');
  if (dlg.style.display !== "none") {
    let btn = document.querySelector('ytmusic-you-there-renderer paper-button');
    if (btn !== null) {
      btn.click();
      console.log('vid unpaused, HA-HA YT!');
    }
  }
  setTimeout(fire, 1000);
}

setTimeout(fire, 1000);
