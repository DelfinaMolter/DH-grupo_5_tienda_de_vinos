import React from 'react';
import LastProductInDb from './LastProductInDb';
import ProductsCategories from './ProductsCategories';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductsCategories />

        </div>
    )
}

export default ContentRowCenter;