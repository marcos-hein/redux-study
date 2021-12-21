import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/actions'

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])
  
  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <strong>{product.price}</strong> {"  "}

      <button
        type="button"
        onClick={handleAddProductToCart}  
      >
        Comprar
      </button>
    </article>
  );
}

export default CatalogItem;