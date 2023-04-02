import React from 'react'
import './product.css'
import '../cssforall/main.css'
import web from '../Static/Image/web.gif'
import photography from '../Static/Image/photography.gif'
import video from '../Static/Image/videography.gif'
import digital from '../Static/Image/digital.gif'
import graphic from '../Static/Image/design.gif'
import stock from '../Static/Image/stock.gif'
import Nav from '../Nav/Nav'


export default function Product() {
const Sample=[{
        id:1,
        image:web,
        title:"Web development"
    },{
        id:2,
        image:photography,
        title:"photography"
    },
    {
        id:3,
        image:video,
        title:"Video Editing"
    },
    {
        id:4,
        image:digital,
        title:"Digital Marketing"
    },
    {
        id:5,
        image:graphic,
        title:"Graphic"
    }, {
        id:6,
        image:stock,
        title:"Stock Training"
    }]
   

  return (
    <div className="container">
    
     <Nav/>
     <div className="content">
    <div className='product'>
        <h2>Product I can produces</h2>
        <div className="skills">
{Sample.map(sample=>(
<div className="post" key={sample.id}>
    <div className="image">
    <img src={sample.image} alt="sorry" srcset="" />
    </div>
    <h1>{sample.title}</h1>
</div>



    
)

)}
        </div>
        </div>
        
      
    </div>
    </div>
  )
}
