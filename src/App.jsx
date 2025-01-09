// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import MyNav from './assets/component/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './assets/component/MyFooter';
import AllTheBooks from './assets/component/AllTheBooks';
import SingleBook from './assets/component/SingleBoook';


function App() {
  return (
    <>
      <MyNav />
      <SingleBook />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;

