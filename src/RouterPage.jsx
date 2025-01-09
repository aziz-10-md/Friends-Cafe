import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './componentes/Home/Home'
import BlackForest from './componentes/CakeCenter/BlackForest'
import FruitCake from './componentes/CakeCenter/FruiteCake'
import HoneyCake from './componentes/CakeCenter/HoneyCake'
import Chocolate from './componentes/IceCenter/Chocolate'

export default function RouterPage() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blackForest' element={<BlackForest />} />
            <Route path='/fruitCake' element={<FruitCake />} />
            <Route path='/honeyCake' element={<HoneyCake />}/>
            <Route path='/chocolate' element={<Chocolate/>}/>
          
        </Routes>
    </div>
  )
}
