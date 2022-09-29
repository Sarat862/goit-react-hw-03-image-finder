import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css'
import { Searchbar } from '../Searchbar/Searchbar';
import { Post } from '../Shared/Post';

export class App extends Component {
  state = {
    imageName: '',
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  }
  
  render() {
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Post imageName={this.state.imageName} />
        <ToastContainer position="top-center" hideProgressBar autoClose={1000} theme="colored"/>
      </div>
    );
  }
}
