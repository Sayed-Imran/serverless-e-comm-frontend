'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Loader from "./Service/Loader/Loader";
import { useDispatch } from 'react-redux';
import {ServiceUtils} from './Service/httpLayer'
import { showLoader, hideLoader } from './Redux/LoaderSlice';
export default function Home() {
  const dispatch = useDispatch();
  
  const randomAPICall = () => {
    try{
      ServiceUtils.getRequest("/products/laptops",false).then((_response:any) => {
        if (_response && _response.status === 200) {
          console.log(_response)
        }
      })
    }catch(error){
      console.log(error)
    }
  }
  const startLoader = () => {
    // dispatch(showLoader());
    randomAPICall();
  }
  return (
    <div className={styles.page}>
      <Loader />
      <button onClick={startLoader}>
        Click me
      </button>
    </div>
  );
}
