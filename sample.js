'use strict';
const button = document.querySelector('.talk-to-human');
button.addEventListener('click', () => {
  sm.getApi({version: 'v1'}).then((salemove) => {
    salemove.requestEngagement('video');
  });
});
