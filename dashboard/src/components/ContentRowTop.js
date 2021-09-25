import React from 'react';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from './LastProductInDb';
import ProductsByCategories from './ProductsByCategory';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard de Tienda de Vinos </h1>
					</div>
				
			{/*<!-- Content Row Products-->*/}
			<ContentRowProducts />
            {/*<!--Product By Categories -->*/}
            <ProductsByCategories />
			{/*<!-- Last Product in DB -->*/}
			<LastProductInDb />

					</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;