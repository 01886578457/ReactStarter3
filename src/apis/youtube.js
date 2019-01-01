import axios from 'axios';

const KEY = "AIzaSyB6wfdVZlKUSJ9DAbzycX-i3PHENGoqz5o";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        keys: KEY
    }
})


