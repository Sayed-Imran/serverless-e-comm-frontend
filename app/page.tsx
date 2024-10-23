'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Loader from "./Service/Loader/Loader";
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from './Redux/LoaderSlice';
export default function Home() {
  const dispatch = useDispatch();
  
  const startLoader = () => {
    dispatch(showLoader());
    setTimeout(() => {
      dispatch(hideLoader());
    }, 5000);
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
