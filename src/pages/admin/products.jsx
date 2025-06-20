import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    useEffect(
        () => {
            if (!loaded) {
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then(
                    (Response) => {
                        console.log(Response.data)
                        setProducts(Response.data)
                        setLoaded(true)
                    }
                )

            }


        }
        , [loaded]
    )

    async function deleteProduct(productID){
        const token = localStorage.getItem("token")
        if (token == null) {
            toast.error("Please login to delete a product")
            return
        }
        try {
            await axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/product/" + productID, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            setLoaded(false)
            toast.success("Product deleted successfully")
        } catch (error) {
            console.log(error)
            toast.error("Error deleting product")
            return

        }
    }





    return (
        <div className="w-full h-full rounded-lg relative">
            <Link to={"/admin/addProduct"} className="text-white absolute bg-gray-700 p-[12px] text-3xl rounded-full cursor-pointer hover:bg-gray-300 hover:text-gray-700 right-5 bottom-5">
                <FaPlus />
            </Link>
            {loaded && <table className="w-full">
                <thead>
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labeled Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(
                            (products, index) => {

                                return (
                                    <tr key={index} className="border-b-2 border-gray-300 text-center cursor-pointer hover:bg-gray-100">
                                        <td className="p-2">{products.productID}</td>
                                        <td className="p-2">{products.name}</td>
                                        <td className="p-2">{products.price}</td>
                                        <td className="p-2">{products.labeledPrice}</td>
                                        <td className="p-2">{products.stock}</td>
                                        <td className="p-2"><div className="w-full h-full flex justify-center">
                                            <FaRegTrashCan onClick={() => {
                                                deleteProduct(products.productID)

                                            }} className="text-[25px] m-[10px] hover:text-red-600" />
                                            <GrEdit
                                            onClick={
                                                ()=>{
                                                  navigate("/admin/editProduct",{
                                                    state:products
                                                  })
                                                }
                                            }
                                            className="text-[25px] m-[10px] hover:text-blue-600" />
                                        </div>
                                        </td>

                                    </tr>

                                )
                            }
                        )
                    }

                </tbody>
            </table>}
            {
                !loaded &&
                    <Loader/>
                
            }
        </div>

    )

}

//https://qthxzayyvaytbhdbbwqh.supabase.co

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0aHh6YXl5dmF5dGJoZGJid3FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzE0NDQsImV4cCI6MjA2NDk0NzQ0NH0.dRwyxlreqzrPZZ_4RtLwmHOuP1fEVAvSzWwOKEPFsf4