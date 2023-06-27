import {useEffect, lazy} from 'react'
import "../css/service.css"
import { Services } from '../data/Home'

const ServiceCard = lazy(() => import('../componetns/ServiceCard'))
const ServicesPage = () => {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[]) 
  return (
    <main className='container service-section'>
        <h1 className='text-underline'>{Services.title}</h1>
        <div className='service-grid'>
            {
                Services.services.map((service,key) => {
                    return <div key={key}>
                    <ServiceCard info={service} />
                    </div>
                })
            }

        </div>
    </main>
  )
}

export default ServicesPage