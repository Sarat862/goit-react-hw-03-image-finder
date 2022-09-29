import { Component } from 'react';
import { toast } from 'react-toastify';

import { fetchImages } from './API/Api';
import { Loader } from '../Loader/Loader';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import {Button} from '../Button/Button';
import { Modal } from 'components/Modal/Modal';


export class Post extends Component {

    state = {
        images: [],
        loading: false,
        error: null,
        page: 1,
        showModal: false,
        modalContent: {
            largeImageURL: '',
            tags: ''
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { imageName } = this.props;
        const { page } = this.state;
        if (prevProps.imageName !== imageName || prevState.page !== page) {
            this.setState({ loading: true });

            fetchImages(imageName, page)
                .then(({ data }) => {
                    this.setState(({ images }) => {
                        return {images: [...images, ...data.hits]}
                    })
                })
                .catch(error => this.setState({error}))
                .finally(() => this.setState({loading: false}))
        }  
    } 

    loadMore = () => {
        this.setState(({ page }) => {
            return { page: page + 1, loading: true }
        })
    }

    openModal = (modalContent) => {
        this.setState({
            showModal: true,
            modalContent
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            modalContent: {
                largeImageURL: '',
                tags: ''
            }
        })
    }

    render() {
        const { loading, images, error, showModal, modalContent } = this.state;

        return (
            <div>
                {error && toast.error("try repeat your search query or enter new")}
                {images && <ImageGallery onClick={this.openModal} images={images} />}
                {loading && <Loader /> }
                {images.length > 0 && <Button loadMore={this.loadMore} />}
                {showModal && <Modal onClose={this.closeModal}>
                    <img src={modalContent.largeImageURL} alt={modalContent.tags } />
                </Modal>}
            </div>
        )
    }
}
