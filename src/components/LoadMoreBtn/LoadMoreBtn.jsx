import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
export default function LoadMoreBtn({onLoadMore}){
 return  <>
 
   <button className={css.loadMoreBtn} type='button' onClick={onLoadMore}>
    Load More
   </button>
   
   </>
}