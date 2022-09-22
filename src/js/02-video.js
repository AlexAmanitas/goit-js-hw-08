import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpDate, 1000));

player.setCurrentTime(localStorage.getItem(LOCAL_TIME));

function timeUpDate(data) {
  localStorage.setItem(LOCAL_TIME, data.seconds);
}
