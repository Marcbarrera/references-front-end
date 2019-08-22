import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth.js';
import UserNav from '../components/UserNav.js';
import postService from '../services/post-service'



class Private extends Component {
  state = {
    _id: this.props.user._id,
    year: 0,
    title: '',
    posts: []
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {_id, year, title} = this.state
    console.log(_id, year, title)
    postService.postCreate({_id, year, title})
      .then((post) => {
        console.log(post.data)
      })
      .catch((err) => console.log(err))

      const {posts} = this.state
      const post = {_id, year, title, user: this.props.user._id}
    const newArray = [...posts]
    newArray.push(post)
    this.setState({
      _id: this.props.user._id,
      year: 0,
      title: '',
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
    return (
      <>
        <UserNav />
      <div class="all-post-container">

      {this.state.posts.map((post) => {
        console.log(post)
        if(this.props.user._id){
          return (<>
          <div className="card-container">
            <div className="card-col1">
              <img src={post.url1} alt='super'/>
              <p>{post.song1}</p> 
              <p>{post.artist1}</p>
              </div>

            <div className="card-col1">
              <img src={post.url2} alt='super'/>
              <p>{post.song2}</p> 
              <p>{post.artist2}</p>
              <Link to={'/Detail/' + post._id}>See Post</Link>

            </div>
      
          </div>
          </>)
        } else {
          return <p>{post.title}</p>

        }
      })}
                </div>

      </>
    )
  }
}

export default withAuth(Private);