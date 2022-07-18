import React from 'react'
import './portofolio.css'
import IMG1 from'../../assets/portfolio1.jpg'
import IMG2 from'../../assets/portfolio2.jpg'
import IMG3 from'../../assets/portfolio3.jpg'
import IMG4 from'../../assets/portfolio4.jpg'
import IMG5 from'../../assets/portfolio5.jpg'
import IMG6 from'../../assets/portfolio6.jpg'

const data = [
{
  id: 1,
  image: IMG1,
  title: 'Item 1',
  github: 'https://github.com',
  demo:'https://github.com'
},

{
  id: 2,
  image: IMG2,
  title: 'Item 2',
  github: 'https://github.com',
  demo:'https://github.com'
},

{
  id: 3,
  image: IMG3,
  title: 'Item 3',
  github: 'https://github.com',
  demo:'https://github.com'
},


{
  id: 4,
  image: IMG4,
  title: 'Item 4',
  github: 'https://github.com',
  demo:'https://github.com'
},


{
  id: 5,
  image: IMG5,
  title: 'Item 5',
  github: 'https://github.com',
  demo:'https://github.com'
},


{
  id: 6,
  image: IMG6,
  title: 'Item 6',
  github: 'https://github.com',
  demo:'https://github.com'
}

]

function Portofolio() {
  return (
    <section id="portofolio">
      <h5>Portfolio</h5>
      <h2>Project list</h2>
      <div className="container portfolio__container">
        {
      data.map(({id, image, title, github, demo}) => {
        
      return (

      <article key={id} className="portfolio__item">
      <div className="portfolio_item-image">
        </div>
        <img src={image} alt={title} />
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} className='btn'>Github</a>
      <a href={demo} className='btn btn-primary'>LiveDemo</a>
      </div>
      </article>
      )



      
      })
    }



    </div>



    </section>
  )
}

export default Portofolio