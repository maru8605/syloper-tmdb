import React from 'react';
import PropTypes from 'prop-types';

const ActorsCard = ({item}) => {
    
    const {img, character, name} = item

    return (
        <div className='col-md-2 col-sm-4   text-center' >
            <img className='img-fluid mx-auto d-block rounded'
             src={img} alt={name}/>
             <div>
                <p className=' text-center'>{name}</p>
                <p className='text-center fw-bold'> {character}</p>
            </div>
        </div>
    )
}
ActorsCard.propTypes = {
    item: PropTypes.object.isRequired  
 }
export default ActorsCard
