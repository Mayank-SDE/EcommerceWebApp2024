import { useState } from "react"
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const [gender, setGender] = useState("");
    const [date, setDate] = useState("");

    const loginHandler = async () => {
        try {

        } catch (error) {
            toast.error("Sign in failed");
        }


    };
    return (
        <div className="login">
            <main>
                <h1 className="heading">Login</h1>
                <div>
                    <label htmlFor="">Gender</label>
                    <select value={gender} onChange={(event) => setGender(event.target.value)}>
                        <option value="">Select Gender :</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">Date of Birth</label>
                    <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
                </div>

                <div>
                    <p>Already Singed In Once?</p>
                    <button onClick={loginHandler}>
                        <FcGoogle />
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </main>

        </div>
    )
}

export default Login