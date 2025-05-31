import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([])
    useEffect(
        () => {

            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then(
                (Response) => {
                    console.log(Response.data)
                    setProducts(Response.data)
                }
            )
        },
        []
    )

    return (
        <div className="w-full h-full rounded-lg relative">
            <Link to={"/admin/addProduct"} className="text-white absolute bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-700 right-5 bottom-5">
                <FaPlus />    
            </Link>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labeled Price</th>
                        <th className="p-2">Stock</th>
                    </tr>
                </thead>
                <tbody>
                     {
                products.map(
                    (products,index)=>{
                        console.log("mapping "+products.productID)

                        return(
                            <tr key={index} className="border-b-2 border-gray-300 text-center cursor-pointer hover:bg-gray-700 hover:text-white">
                                <td className="p-2">{products.productID}</td>
                                <td className="p-2">{products.name}</td>
                                <td className="p-2">{products.price}</td>
                                <td className="p-2">{products.labeledPrice}</td>
                                <td className="p-2">{products.stock}</td>

                            </tr>
                            
                        )
                    }
                )
           }
                    
                </tbody>
            </table>
          
        </div>
    )

}