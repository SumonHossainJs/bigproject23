import './Product.scss';
import { Single } from '../../components/Export';

import { singleProduct } from '../../Data';


const Product = () => {
  return (
    <div className='product'>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product