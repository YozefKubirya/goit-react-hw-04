import css from '../ImageGallery/ImageGallery.module.css'
export default function ImageCard ({
   regularImage
}){
   return <>
   <div >
      <img src={regularImage} alt="big image" className={css.imageCardImg} />
   </div>
   </>
}