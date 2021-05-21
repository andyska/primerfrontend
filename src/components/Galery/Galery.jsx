import React from 'react'
import { RViewerTrigger , RViewer } from 'react-viewerjs'

const MyGalery = ()=> {

    let galeryfotos = [
        require('../../images/ale.jpg'),
        require('../../images/armado.jpg'),
        require('../../images/armado2.jpg'),
        require('../../images/cubos_tierra.jpg'),
        require('../../images/lampara.jpg'),
        require('../../images/lampara2.jpg')
    ]
    return (
        <div>

        <RViewer imageUrls={galeryfotos}>
            <div style={{ display: 'flex' , marginTop:'40px'}}>
                {galeryfotos.map( (imagen , index) => {
                    console.log('imagen',imagen , 'index', index)
                    return(
                        <RViewerTrigger index = {index}>
                            <img src= {imagen} alt='' style ={{ width:'150px' , height:'150px' , marginLeft:'10px', border:'2px solid black'}}/>
                        </RViewerTrigger>
                    )
                } )}
            </div>
        </RViewer>>
        </div>
    )
}

export default MyGalery