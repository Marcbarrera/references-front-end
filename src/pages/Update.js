import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import withAuth from '../components/withAuth.js';
import UserNav from '../components/UserNav.js';
import FileComponent from '../components/FileComponent';

import postService from '../services/post-service';

class Update extends Component {
  state = {
    _id: this.props.user._id,
    year: 0,
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
      url1: '',
      url2: '',
      description: '',
      redirect: false,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {_id, year, title, song1, link1, album1, artist1, year2, song2, link2, album2, artist2, description, url1, url2} = this.state
    postService.postCreate({_id, year, title, song1, link1, album1, artist1, year2, song2, link2, album2, artist2, description, url1, url2})
      .then((post) => {
        this.setState({
          redirect: true,
        })
        
      })
      .catch((err) => console.log(err))
  }

  addUrl1 =  (url1) => {
    this.setState({url1})
  }

  addUrl2 =  (url2) => {
    this.setState({url2})
  }


  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const {song1,link1, album1, artist1, year, title, year2, song2, link2, album2, artist2, description, redirect} = this.state
    return (
      <>
        <UserNav />
    <div className="create-form-container">

      <form onSubmit={this.handleSubmit}>
            <input  className="post-title" id='title' type='title' name='title' value={title} placeholder="Post title" onChange={this.handleChange} />
            <div className="songs-wrapper">
              <div className="Song1-form-container">

            <input  className='song1' id='song1' type='string' name='song1' value={song1} placeholder="song1" onChange={this.handleChange} />
            <input  className='artist1' id='artist1' type='string' name='artist1' value={artist1} placeholder="artist1" onChange={this.handleChange} />
            <input  className='year' id='year' type='number' name='year' value={year} placeholder="year" onChange={this.handleChange} />
            <input  className='link1' id='link1' type='string' name='link1' value={link1} placeholder="link1" onChange={this.handleChange} />
            <input  className='album1' id='album1' type='string' name='album1' value={album1} placeholder="album1" onChange={this.handleChange} />
            <FileComponent addUrl={this.addUrl1}/>

            </div>
            <div className="Song1-form-container">


            <input  className='song2' id='song2' type='string' name='song2' value={song2} placeholder="song2" onChange={this.handleChange} />
            <input  className='artist2' id='artist2' type='string' name='artist2' value={artist2} placeholder="artist2" onChange={this.handleChange} />
            <input  className='year2' id='year2' type='number' name='year2' value={year2} placeholder="year2" onChange={this.handleChange} />
            <input  className='link2' id='link2' type='string' name='link2' value={link2} placeholder="link2" onChange={this.handleChange} />
            <input  className='album2' id='album2' type='string' name='album2' value={album2} placeholder="album2" onChange={this.handleChange} />

            <FileComponent addUrl={this.addUrl2}/>

          </div>


            </div>

            <textarea className='description' id='description' type='string' name='description' value={description} placeholder="description" onChange={this.handleChange} ></textarea>

        
        <button type='submit'>Post</button> 
      </form>
      {redirect ? <Redirect to='/Myposts' /> : null}
    </div>
      
    
      </>
    )
  }
}

export default withAuth(Update);