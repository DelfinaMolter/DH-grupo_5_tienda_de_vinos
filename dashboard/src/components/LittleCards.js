import React from 'react';
import PropTypes from 'prop-types';

function LittleCard(props){
    return(
        <article className='article-card'>
            <p className="total-title">{props.title}:</p>
            <p className="total">  {props.total}</p>
        </article>

        // <div className="col-md-4 mb-4">
        //     <div className={`card border-left-${props.color} shadow h-100 py-2`}>
        //         <div className="card-body">
        //             <div className="row no-gutters align-items-center">
        //                 <div className="col mr-2">
        //                     <div className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.title}</div>
        //                     <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cuantity}</div>
        //                 </div>
        //                 <div className="col-auto">
        //                     <i className={`fas ${props.icon} fa-2x text-gray-300`}></i>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

LittleCard.defaultProps = {
    title: 'Empty card',
    total: 'Empty card'
}

/* PROPTYPES */

LittleCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        total: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}



export default LittleCard;