import axios from 'axios';

const KEY = "29228905-12cd39cd1befa2d2c4090f04e";

export function fetchImages(imageName, page) {
  return (
    axios.get(`https://pixabay.com/api/?q=${imageName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
  )
}
