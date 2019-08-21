import axios from 'axios';

class PostService {
  constructor() {
    this.postService = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
      withCredentials: true,
    })
  }
  getHome() {
    return this.postService.get('/')
      .then(({ data }) => data);
  }

  postCreate(post) {
    const {_id, year, title, song1, link1, album1, artist1, year2, song2, link2, target1, target2,  album2, artist2, description, url1, url2} = post;
    return this.postService.post('/post/create', {_id, year, title, song1, link1, target1, target2, album1, artist1, year2, song2, link2, album2, artist2, description, url1, url2})
      .then(({ data }) => data);
  }

  getPosts() {
    return this.postService.get('/post/getAll')
    .then(({ data }) => data);
  }

  getPostsById(id) {
    return this.postService.get('/post/' + id)
    .then(({ data }) => data);
  }

  

  deletePostById(id) {    
    return this.postService.delete(`/post/delete/${id}`)
  }

}

const postService = new PostService();

export default postService;