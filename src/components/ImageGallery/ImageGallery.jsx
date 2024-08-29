
import css from '../ImageGallery/ImageGallery.module.css'
export default function ImageGallery({items,onImageClick}){

return <>
<ul className={css.gallery}>
   {items.map((item)=>{
return <li  key={item.id} className={css.galleryItem}>
  
      <img  className={css.galleryImage} src={item.urls.small} alt="small  image" 
      onClick={() => onImageClick(item.urls.regular)} />


</li>
   })}
</ul>
</>
}