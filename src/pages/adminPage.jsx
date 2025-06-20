import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import AdminProductsPage from "./admin/products";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProduct";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="h-full w-[300px] ">
                <Link to="/admin/users" className="p-2 flex  items-center"><FaUsers className="mr-2" />Users</Link>
                <Link to="/admin/products" className="p-2  flex items-center"><MdWarehouse className="mr-2"/>Products</Link>
                <Link to="/admin/orders" className="p-2 flex items-center"><FaFileInvoice className="mr-2"/>Orders</Link>
            </div>

            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                <Routes path="/*">
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/products" element={<AdminProductsPage/>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                    <Route path="/addProduct" element={<AddProductForm/>}/>
                    <Route path="/editProduct" element={<EditProductForm/>}/>
                
                
                </Routes>

            </div>
        </div>
    )
}