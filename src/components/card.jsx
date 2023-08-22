import pin from '../assets/pin.svg'
function Card(props){
    return(
        <div className="card"> 
            <img src={props.image} className='card-location-image' alt='location' />
            <section className='card-info'>
                <div className='card-location-info'>
                    <img src={pin} className='card-pin'/>
                    <span className='card-country'>{props.country}</span>
                    <p className='grey'>
                        <a href={props.link} target="_blank" rel="noreferrer" className='grey'>
                            View on Google Maps
                        </a>
                    </p>
                </div>
                <h2 className='card-location'>{props.location}</h2>
                <div className='card-date'>
                    <span className='card-date-start'>{props.start_date} - </span>
                    <span className='card-date-end'>{props.end_date}</span>
                </div>
                <p className='card-description'>{props.description}</p>
            </section>
        
            

        
        </div>
    )
}

export default Card