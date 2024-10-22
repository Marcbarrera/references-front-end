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
      year1: 0,
      year2: 0,
      target1: '',
      target2: '',
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
    
    const id = this.props.match.params.id
    postService.getPostsById(id)
    .then((posts) => {
      this.setState({
        posts
      })
    })
    .catch((err) => console.log(err))
  }

  handleUpdate(id) {
    postService.deletePostById(id)
    .then((response) => {
      this.setState({
        isRedirect: true,
      })
    })
  }



  handleDelete(id) {
    postService.deletePostById(id)
    .then((response) => {
      this.setState({
        isRedirect: true,
      })
    })
  }

  render() {
    const user = this.props.user
    const {year, title, song1, link1, target1, target2, album1, artist1, myPosts, isRedirect} = this.state

    return (
      <>
        {isRedirect ? <Redirect to='/'/> : null}
        <UserNav />
        <div class="all-post-container">
        <>
        <div class="post-wrapper">
                        <h2>{this.state.posts.title}</h2> 

          <div class="detail-container">


              <div className="song1-cont">
              <iframe src={`https://youtube.com/embed/${this.state.posts.link1}`}></iframe>
                  <div className="data-and-photo1">
                    <div className="data1">
                      <p><span>Song: </span>{this.state.posts.song1}</p>
                      <p><span>Artist: </span>{this.state.posts.artist1}</p>
                      <p><span>Album: </span>{this.state.posts.album1}</p>
                      <p><span>Year: </span>{this.state.posts.year}</p>
                      <p><span>Target: </span>{this.state.posts.target1}</p>
                    </div>
                      <img src={this.state.posts.url1} alt='foto1'></img>
                  </div>
              </div>
              
              
              <div className="song2-cont">
              <iframe src={`https://youtube.com/embed/${this.state.posts.link2}`}></iframe>
                  <div className="data-and-photo2">
                  <div className="data1">
                      <p><span>Song: </span>{this.state.posts.song2}</p>
                      <p><span>Artist: </span>{this.state.posts.artist2}</p>
                      <p><span>Album: </span>{this.state.posts.album2}</p>
                      <p><span>Year: </span>{this.state.posts.year2}</p>
                      <p><span>Target: </span>{this.state.posts.target2}</p>
                    </div>
                      <img src={this.state.posts.url2} alt='foto2'></img>
                  </div>

              </div>
              {/* <p>{this.state.posts.user.username}</p> */}
          
          
          
              </div>

              {this.props.isLoggedIn ? (
            <>
                          <p className="description">{this.state.posts.description}</p>

            <div className="buttons">
              <button onClick = {() => {this.handleUpdate(this.state.posts._id)}}>update</button>
              <button onClick = {() => {this.handleDelete(this.state.posts._id)}}>delete</button>
              </div>
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