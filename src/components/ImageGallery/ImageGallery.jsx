import ImageCard from './ImageCard'
import css from '../ImageGallery/ImageGallery.module.css'
export default function ImageGallery({items,onImageClick}){

return <>
<ul className={css.gallery}>
   {items.map((item)=>{
return <li  key={item.id} className={css.galleryItem}>

<ImageCard
onImageClick={onImageClick}
regularImage={item.urls.regular}
smallImage={
   item.urls.small
}
/>

</li>
   })}
   
</ul>
</>
}