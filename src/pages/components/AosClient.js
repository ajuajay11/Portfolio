'use-client'
import {useEffect} from 'react'
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';

export default function AosClient() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return null;
}