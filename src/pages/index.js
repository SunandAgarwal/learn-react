// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Gallery from './components/gallery'
// import Profile_mistake from './qcomps/profile_mistake'
// import FirstComp from './qcomps/firstcomp'
// import Bios from './qcomps/bios'
// import Todos from './qcomps/todos'
// import ProfileProps from './components/profile_props';
// import Gallery from './qcomps/gallery_props'
// import List from './qcomps/list_keys_id'
// import Recipe from './qcomps/recipes'
// import State from './qcomps/state'
// import Form from './qcomps/thankYouCrash'
// import Cart from './qcomps/shoppingCart'
// import Upd from './qcomps/updObjectsForm'
// import Artists from './qcomps/artistsRemoveArr'
import Bucket from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
        <Bucket />
    </div>
  )
}
