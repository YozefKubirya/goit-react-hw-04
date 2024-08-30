
import css from '../ImageGallery/ImageGallery.module.css'
export default function ImageCard ({
  onImageClick,regularImage,smallImage
}){
   return <>
      <img src={smallImage} className={css.smallGalleryImage}  alt='small-Image' onClick={()=>onImageClick(regularImage)}/>
   </>
}