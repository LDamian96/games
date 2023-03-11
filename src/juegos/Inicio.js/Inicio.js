import React, { useEffect, useState } from 'react'

import { ComponenteFull } from './ComponenteFull';
import "./estilos.css"




export const Inicio =() => {
  
 
    const [busqueda, setbusqueda] = useState([])
    const [tabla, settabla] = useState([])
    const [usuario, setusuario] = useState("")
    const [currentPage, setcurrentPage] = useState(0)
    useEffect(() => {
     juegobb()
    }, [])
    
   const juegobb =async()=>{
  
        const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1823b45db2msh20ee921a41ac706p1af719jsn757f510a53ef',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      const url =`https://free-to-play-games-database.p.rapidapi.com/api/games?=rapidapi-key=1823b45db2msh20ee921a41ac706p1af719jsn757f510a53ef`
    
       const resp =await fetch(url,options);
       const data = await resp.json();
    
        setbusqueda(data)
        settabla(data)
        
    console.log(data)
       const extraer =data.map( x=>{
        return{
          id:x.id,
          title:x.title,
          platform:x.platform,
          publisher:x.publisher,
          game_url:x.game_url,
          thumbnail:x.thumbnail,
          release_date:x.release_date,
          short_description:x.short_description,
          developer:x.developer
    
    
        }     
    

     }
     )
    
   
 }
 const filtrar=(terminoBusqueda)=>{
   var resultadosBusqueda=tabla.filter((elemento)=>{
     if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
     || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
     ){
       return elemento;
     }
   });
   setbusqueda(resultadosBusqueda);
 }
 const handleChange=e=>{
   setusuario(e.target.value);
   filtrar(e.target.value);
   setcurrentPage(0)
 }


 const filtrarPAgina=()=>{
  
  return busqueda.slice(currentPage,currentPage+ 6)
 }
 const PagAnt=()=>{
  if(currentPage >0)
{  setcurrentPage(currentPage -6)}
 }
 const PagNext=()=>{
  if(busqueda.length > currentPage +6)
  {setcurrentPage(currentPage +6)}

  }

 return (
   
      
        <div className='hola'>
        
          <br/>
  <div className='mm'>
    <div className='inp2'>
         <input type="text"
         className='inp'
         onChange={handleChange}
         value={usuario}
         placeholder="Ingrese su juego"
         />
           <div className='page'>
        <button type='button' className='but'  onClick={PagAnt}>Anterior</button>
        <button type='button' onClick={PagNext}>next</button>
    
        </div>
        </div>
    
         </div>
        <div className='hola2'>
         {
            filtrarPAgina().map(id=>(
                <ComponenteFull
                   key={id.title}
                      {...id}
                                />
            ))
        }
      
       </div>
    
     
       </div> 

   
 )
    
    } 


