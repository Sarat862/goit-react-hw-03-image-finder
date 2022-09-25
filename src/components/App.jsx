import { Component } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';

const KEY_FETCH = "29228905-12cd39cd1befa2d2c4090f04e";

export class App extends Component {
  state = {
    imageName: '',
    gallery: [],
    page: 1,
  }

  componentDidMount() {
    this.fetchGallery();
  }

  fetchGallery() {
    const { page } = this.state;
    axios.get(`https://pixabay.com/api/?q=cat&page=${page}&key=${KEY_FETCH}&image_type=photo&orientation=horizontal&per_page=12`)
  }

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  }
  
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer position="top-center" hideProgressBar autoClose={1000} theme="colored"/>
      </div>
    );
  }
}
