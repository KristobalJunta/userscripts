// ==UserScript==
// @name        YouTube Activity Check Removal
// @namespace   https://github.com/kristobaljunta/userscripts
// @updateURL   https://github.com/kristobaljunta/userscripts/raw/master/scripts/youtube-activity.user.js
// @downloadURL https://github.com/kristobaljunta/userscripts/raw/master/scripts/youtube-activity.user.js
// @include     https://youtube.com/*
// @include     https://*.youtube.com/*
// @version     2.1
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
