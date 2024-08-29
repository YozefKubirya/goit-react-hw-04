import css from '../Loader/Loader.module.css'
import { InfinitySpin } from "react-loader-spinner"
export default function Loader (){
   return<>
   <div className={css.loader}> 
      <InfinitySpin
  visible={true}
  width="600"
  color="#4fa94d"
  ariaLabel="infinity-spin-loading">
      
      </InfinitySpin>
      <p>Is loading</p>
   </div>
   </>
}