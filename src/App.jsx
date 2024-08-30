import './App.css'

import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { fetchImages } from './services/imageServices';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import css from '../src/components/ImageGallery/ImageGallery.module.css'
function App() {
const [items,setItems]=useState([])  
const [topic,setTopic]=useState("")
const [page,setPage]=useState(1)
const [error,setError]=useState(false)
const [loading,setLoading]=useState(false)
const [isModalOpen,setModal]=useState(false)
const [currentImage, setCurrentImage] = useState(null);
useEffect(()=>{
  if(topic === ""){
    return;
  }
  const getImages = async ()=>{
    try{
    setLoading(true);
    setError(false);
    const fetchedImages=await fetchImages(topic,page);
      setItems((prevItems)=>[...prevItems,...fetchedImages]);
      
    } catch (error){
setError(true);
console.log(error)
    }finally{
      setLoading(false)
    }
   
  }
console.log(topic,page)
getImages()
},[topic,page])

const handleSearch= (newTopic)=>{

setTopic(newTopic);
setPage(1)  ;
setItems([]);
};

const handleLoadMore =()=>{
setPage(page+1);
}
const openModal=(image)=>{
  setCurrentImage(image)
  setModal(true);
}
const closeModal=()=>{
  setModal(false)
  setCurrentImage(null)
}
  return (
    <>
     <SearchBar onSearch={handleSearch}/> 
     <ImageGallery items={items} onImageClick={openModal}/>
     {items.length>0 && !loading&& <LoadMoreBtn onLoadMore={handleLoadMore}/>}
     {error && <ErrorMessage/>}
    {loading && <Loader/>} 
    {isModalOpen && currentImage && (
        <ImageModal onClose={closeModal}>
           <img src={currentImage} alt="big-Image" className={css.imageCardRegular}/>
        </ImageModal>
      )}
   
    </>
  )
}

export default App
