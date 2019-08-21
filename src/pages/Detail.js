import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import UserNav from '../components/UserNav.js';
import postService from '../services/post-service'
import { Link } from 'react-router-dom';


class Detail extends Component {
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
    posts: {},
    myPosts: this.props.user.posts 
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  componentDidMount = () => {
    const id = this.props.match.params.id
    postService.getPostsById(id)
    .then((posts) => {
        console.log(posts)
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
        <>
          <div class="card-container">
              <p>{this.state.posts.title}</p> 
              <p>{this.state.posts.year}</p>
              <p>{this.state.posts.song1}</p>
              <p>{this.state.posts.link1}</p>
              <p>{this.state.posts.album1}</p>
              <p>{this.state.posts.artist1}</p>
              <p>{this.state.posts.year2}</p>
              <p>{this.state.posts.song2}</p>
              <p>{this.state.posts.link2}</p>
              <p>{this.state.posts.album2}</p>
              <p>{this.state.posts.artist2}</p>
              {/* <p>{this.state.posts.user.username}</p> */}
          
          
          
          
          
              {this.props.isLoggedIn ? (
            <>
              <Link to='/private'><p>delete</p></Link>
              <Link to='/private'><p>update</p></Link>

            </>
          ) : (
            <>
              null
            </>
          )}
          
          
          </div>
        </>
      </div>
      </>
    )
  }
}

export default withAuth(Detail);