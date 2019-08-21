import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import UserNav from '../components/UserNav.js';
import postService from '../services/post-service'
import { Link } from 'react-router-dom';


class Mypost extends Component {
  state = {
    _id: this.props.user._id,
    title: '',
      song1: '',
      link1: '',
      album1: '',
      artist1: '',
      year2: 0,
      song2: '',
      link2: '',
      album2: '',
      artist2: '',
    posts: [],
    myPosts: this.props.user.posts 
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {_id, year, title, song1, link1, album1, artist1} = this.state
    console.log(_id, year, title)
    postService.postCreate({_id, year, title, song1, link1, album1, artist1})
      .then((post) => {
        console.log(post.data)
      })
      .catch((err) => console.log(err))
      const {posts} = this.state
      const post = {_id, year, title, song1, link1, album1, artist1, user: this.props.user._id}
    const newArray = [...posts]
    newArray.push(post)
    this.setState({
      _id: this.props.user._id,
      title: '',
      song1: '',
      link1: '',
      album1: '',
      artist1: '',
      year2: 0,
      song2: '',
      link2: '',
      album2: '',
      artist2: '',
      posts: newArray
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  componentDidMount = () => {
    
    postService.getPosts()
    .then((posts) => {
      this.setState({
        posts
      })
    })
    .catch((err) => console.log(err))
  }



  render() {
    console.log(this.state.myPosts)
    const user = this.props.user
    const {year, title, song1, link1, album1, artist1, myPosts} = this.state
    console.log(this.state);

    return (
      <>
        <UserNav />
        <div class="all-post-container">
      
       { myPosts.map((post) => {

          return  (<>
          <div class="card-container">
              <p>{post.title}</p> 
              <p>{post.year}</p>
              <p>{post.song1}</p>
              <p>{post.link1}</p>
              <p>{post.album1}</p>
              <p>{post.artist1}</p>
              <p>{post.user.username}</p>
              <Link to={'/Detail/' + post._id}>See Post</Link>
          </div>
          </>)

      })} 
      </div>
      </>
    )
  }
}

export default withAuth(Mypost);