import React, { Component } from 'react'
import withAuth from '../components/withAuth.js';
import UserNav from '../components/UserNav.js';
import postService from '../services/post-service'
import { Link, Redirect } from 'react-router-dom';


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
      isRedirect: false,
    posts: {},
    myPosts: this.props.user.posts 
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  componentDidMount = () => {
    console.log(this.state, 'soc state');
    
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

  handleDelete(id) {
    postService.deletePostById(id)
    .then((response) => {
      console.log('JJJJJJJJJJJJJ');
      this.setState({
        isRedirect: true,
      })
    })
  }

  render() {
    const user = this.props.user
    const {year, title, song1, link1, album1, artist1, myPosts, isRedirect} = this.state

    return (
      <>
        {isRedirect ? <Redirect to='/'/> : null}
        <UserNav />
        <div class="all-post-container">
        <>
          <div class="card-container">
              <p>{this.state.posts.title}</p> 
              <p>{this.state.posts.year}</p>
              <p>{this.state.posts.song1}</p>
              <img src={this.state.posts.url1} alt='foto'></img>
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
              <Link to='/private'><p>update</p></Link>

              <button onClick = {() => {this.handleDelete(this.state.posts._id)}}>delete</button>

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