import React from 'react'
import "./estilos.css"
export const ComponenteFull = (ComponenteFull) => {
 const  {id,title,thumbnail,game_url,platform,publisher,developer,short_description,release_date} = ComponenteFull
  
    
   
  return (
    
       
      
          
                    <div className='buscar'>
                      
                    <div className='principal'> 

                    
                    <div className='acomodar'>
                      
                      <li > {title} </li>
                      
                       <img src={thumbnail}  alt={title} className="img" /> 
                       
                       <br/>
                       
                      </div>
                
                      <ol className='acomodar-text'>
                        
                        <li>Desarrollado: {developer}  </li>
                        <li> Editor: {publisher} </li>
                        <li>Disponible para: {platform}  </li>
                        <li className='reducir'>Descripción: {short_description}  </li>
                        <li>Fecha de publicación {release_date} </li>
                        <li className='li'> <a href={game_url} target="_blank"> Jugar aqui </a> </li>
                      </ol>
                      </div>
                
                       
                    </div>
              
            
     
        
   
  )
}
