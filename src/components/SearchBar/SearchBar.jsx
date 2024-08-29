import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css'
const notify=()=>{toast('Please enter what you want to find')}
import { Formik ,Form,Field} from 'formik'
export default function SearchBar({onSearch}){
   return<>
   <header className={css.header}>
   <Formik initialValues={{
         topic:""
      }} onSubmit={(values,actions)=>{
      if(values.topic===''){
         notify()
      }
        onSearch(values.topic);
        actions.resetForm();
      }}>
  <Form>
  <button type='submit' className={css.searchBtn}><IoIosSearch/></button>
  <Toaster toastOptions={{

  className:css.toast,
  style: {
   padding: '16px',
   color: '#713200',
 }
  }}/>
  <Field placeholder="Enter the text..." type="text" name="topic" className={
   css.input
  } />
  </Form>
  </Formik>
   </header>
   </>
}