import { Carousel } from 'antd';
import imagen1 from '../../images/ale.jpg'
import imagen2 from '../../images/armado.jpg'
import imagen3 from '../../images/armado2.jpg'
import imagen4 from '../../images/cubos_tierra.jpg'
import imagen5 from '../../images/lampara.jpg'

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const MyCarousel = () => {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}> 
          <img  src={imagen1} alt={""} style ={{ display:'flow', width:'350px' , height:'350px' , marginTop:'10px' , marginLeft:'10px', padding:'2px', border:'2px solid black' }}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}> 
          <img  src={imagen2} alt={""} style ={{ width:'350px' , height:'350px' }}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}> 
          <img  src={imagen3} alt={""} style ={{ width:'350px' , height:'350px' }}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}> 
          <img  src={imagen4} alt={""} style ={{ width:'350px' , height:'350px' }}/>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}> 
          <img  src={imagen5} alt={""} style ={{ width:'350px' , height:'350px' }}/>
        </h3>
      </div>
    </Carousel>
  );
}

export default MyCarousel
