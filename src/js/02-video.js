import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

playOnCurrentTime();

function onTimeUpdate(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

function playOnCurrentTime() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    player.setCurrentTime(savedData);
  }
}
