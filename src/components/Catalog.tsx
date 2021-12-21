import api from '../services/api'
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { IProduct } from "../store/modules/cart/types";
import { addProductToCart } from '../store/modules/cart/actions'

export const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, []);

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <strong>{product.price}</strong> {"  "}

          <button
            type="button"
            onClick={() => handleAddProductToCart(product)}  
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  )
}
