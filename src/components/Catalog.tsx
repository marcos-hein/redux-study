import { useEffect, useState } from "react"
import api from '../services/api'
import { IProduct } from "../store/modules/cart/types";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data)
    })
  }, [])

  console.log(catalog)

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <strong>{product.price}</strong> {"  "}

          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  )
}
