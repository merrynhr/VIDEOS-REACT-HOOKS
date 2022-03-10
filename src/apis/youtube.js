import axios from 'axios';

const KEY = 'AIzaSyBe82-Qse8w9dQ6sTqbrU_hTiyWRtFkf2k';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
