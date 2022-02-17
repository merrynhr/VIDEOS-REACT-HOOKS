import axios from 'axios';

const KEY = 'AIzaSyC14WGT-LLIfzpg30j0YAUT6YSrQyDlnRg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})
