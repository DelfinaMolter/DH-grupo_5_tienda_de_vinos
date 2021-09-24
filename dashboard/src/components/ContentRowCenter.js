import React from 'react';
import LastProductInDb from './LastProductInDb';
import ProductsByCategories from './ProductsByCategory';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductsByCategories />

        </div>
    )
}

export default ContentRowCenter;