import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    async function handleRegister() {
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                import.meta.env.VITE_BACKEND_URL + "/api/user/",
                {
                    email,
                    firstName,
                    lastName,
                    phone,
                    password,
                }
            );

            toast.success("Registration successful");
            navigate("/login");
        } catch (error) {
            console.log("Registration failed", error.response?.data);
            toast.error(error.response?.data?.message || "Registration failed");
        }

        setLoading(false);
    }

    return (
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[700px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Register</h2>

                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="First Name"
                    />

                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="Last Name"
                    />

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="Email"
                    />

                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="Phone"
                    />

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="Password"
                    />

                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
                        placeholder="Confirm Password"
                    />

                    <button
                        onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-green-600 text-white rounded-xl cursor-pointer"
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                    <p className="text-gray-200 text-center m-[10px]">
                        Already have an account?
                        &nbsp;
                        <span className="text-green-400 cursor-pointer hover:text-green-200">
                            <Link to={"/login"}>Login Here</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
