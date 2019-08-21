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
    myPosts: []
  }

  componentDidMount = () => {
    this.props.getMe()
    postService.getPosts()
    .then ((response) => {
      console.log('RESPONSEEEEE',response)
        this.setState({
          myPosts: response
        })
      })
      .catch((err) => console.log(err))
  }



  render() {
    const { myPosts} = this.state
    return (
      <>
        <UserNav />
        <div className="all-post-container">
      
       { myPosts.map((post) => {

          return  (
          <React.Fragment key={post._id}>
          <div className="card-container">
              <p>{post.title}</p> 
              <p>{post.year}</p>
              <p>{post.song1}</p>
              <p>{post.link1}</p>
              <p>{post.album1}</p>
              <p>{post.artist1}</p>
              <p>{post.user.username}</p>
              <img src={post.url1} alt='super'/>
          <img src={post.url2} alt='super'/>
              <Link to={'/Detail/' + post._id}>See Post</Link>
          </div>
          </React.Fragment>)

      })} 
      </div>
      </>
    )
  }
}

export default withAuth(Mypost);