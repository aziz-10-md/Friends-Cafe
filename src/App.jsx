import React from 'react'
import Navbar from './componentes/navbar/Navbar';
import RouterPage from './RouterPage';


const App = () => {
  return (
    <>
      <main className='overflow-hidden'>
         <Navbar />
          <RouterPage />
{/*         
       <FruiteCake/>
        <Menus/> */}
        {/* <BlackForest/> */}
        {/* <Menus/> */}
      </main>
    </>
  )
}

export default App