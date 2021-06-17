import { createDom } from '../../utils/util'
import '../style/controls/poster.scss'

let s_poster = function () {
  let player = this
  let root = player.root
  if (!player.config.poster) {
    return
  }
  let poster = createDom('xg-poster', '', {}, 'xgplayer-poster')
  poster.style.backgroundImage = `url(${player.config.poster})`
  root.appendChild(poster)
  if (player.config.posterBgi) {
    const posterBgi = createDom('xg-poster-bgi', '', {}, 'xgplayer-poster-bgi');
    posterBgi.style.backgroundImage = `url(${player.config.poster})`;
    poster.style.backgroundSize = 'contain';

    root.appendChild(posterBgi);
  }
}

export default {
  name: 's_poster',
  method: s_poster
}