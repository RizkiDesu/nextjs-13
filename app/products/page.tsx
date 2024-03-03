import AddProduct from "./addProduct"
import DeleteProduct from "./deleteProduct"
import UpdateProduct from "./updateProduct"

type Products = {
    id : number;
    title : string;
    price: number;
}

async function getProduct() {
    const res = await fetch('http://localhost:5000/product', {
      cache: 'no-store',
      // next: { revalidate: 10 },
    })
    return res.json()
}

export default async function ProductsList() {
    const products: Products[] = await getProduct()
    return (
      <div className="py-10 px-10">
        <div className="py-2">
          <AddProduct />
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Products Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index)=>(
              <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex">
                < UpdateProduct{...product} />
                < DeleteProduct{...product} />
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  