import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'




import Frontmainroutes from './Frontmainroutes'
import MainRouteFile from './Componets/View/Clienstdashboard/ClientRoutes/MainRouteFile.jsx/MainRouteFile'


function App() {
  return (
   <Suspense fallback={<h1>Lodiing....</h1>}>
     <div className='app'>
       <Frontmainroutes/>
       <MainRouteFile/>
    </div>
   </Suspense>
  )
}

export default App
