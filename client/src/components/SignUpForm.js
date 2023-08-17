import React from "react";
import { useFormik } from "formik"
import { basicSchema } from "../schemas";

function SignUpForm({ setUser }) {

    const onSubmit = () => {
        console.log("submitted");
    }    

    const { values, errors, touched, handleChange, handleSubmit} = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    console.log(errors);

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className="w-[400px]">
            <div className="">
                <label className="text-white text-4xl font-bold">Username</label>
                <input 
                    className={`mt-1 w-full h-full border-2 border-black rounded-xl p-2 text-xl bg-gray-400 placeholder-black focus:outline-blue-400 ${errors.username && touched.username ? "border-red-700 focus:outline-red-700" : ""}`}
                    type="text"
                    id="username"
                    value={values.username}
                    placeholder="Enter a username..."
                    onChange={handleChange}
                    
                />
                {errors.username && touched.username ? <p className="text-red-700">{errors.username}</p> : <p>.</p>}
            </div>
            <div >
                <label className="text-4xl font-bold text-white">Password</label>
                <input  
                    className={`mt-1 w-full h-full border-2 border-black rounded-xl p-2 text-xl bg-gray-400 placeholder-black focus:outline-blue-400 ${errors.password && touched.password ? "border-red-700 focus:outline-red-700" : ""}`}
                    type="password"
                    id="password"
                    value={values.password}
                    placeholder= "Enter a password..."
                    onChange={handleChange}
                />
                {errors.password && touched.password ? <p className="text-red-700">{errors.password}</p> :  <p>.</p>}
            </div>
            <div >
                <label className="text-4xl font-bold text-white">Confirm Password</label>
                <input 
                    className={`mt-1 w-full h-full border-black border-2 rounded-xl p-2 text-xl bg-gray-400 placeholder-black focus:outline-blue-400 ${errors.confirmPassword && touched.confirmPassword ? "border-red-700 focus:outline-red-700" : ""}`}
                    type="password"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    placeholder= "Confirm password..."
                    onChange={handleChange}
                />
                {errors.confirmPassword && touched.confirmPassword ? <p className="text-red-700">{errors.confirmPassword}</p> : <p>.</p>}
            </div>
            <div >
                <button type="submit" className="flex w-full items-center justify-center font-bold border-2 border-black p-[10px] rounded-xl bg-orange-300 hover:bg-gray-500 text-xl">
                    Sign Up
                </button>
            </div>
        </form>
    )
}
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("Signup Submit")
    //     fetch("/signup", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password,
    //             password_confirmation: passwordConfirmation,
    //         }),
    //     })
    //         .then((r) => {
    //             if (r.ok) {
    //                 r.json().then((user) => {
    //                     setUser(user)}
    //                 )
    //             } else {
    //                 r.json().then((err) => console.log(err))
    //             }
    //         })
    // }

//     return (
//         <form onSubmit={handleSubmit} className="w-[400px]">
//             <div className="mb-4">
//                 <label className="text-4xl font-bold">Username</label>
//                 <input 
//                     className="w-full h-full border-2 border-black rounded p-2 text-xl bg-gray-400"
//                     type="text"
//                     id="username"
//                     autoComplete="off"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="text-4xl font-bold">Password</label>
//                 <input 
//                     className="w-full h-full border-2 border-black rounded p-2 text-xl bg-gray-400"
//                     type="password"
//                     id="password"
//                     autoComplete="off"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <div className="mb-4">
//                 <label className="text-4xl font-bold">Confirm Password</label>
//                 <input 
//                     className="w-full h-full border-2 border-black rounded p-2 text-xl bg-gray-400"
//                     type="password"
//                     id="password_confirmation"
//                     autoComplete="off"
//                     value={passwordConfirmation}
//                     onChange={(e) => setPasswordConfirmation(e.target.value)}
//                 />
//             </div>
//             <div >
//                 <button type="submit" className="flex w-full items-center justify-center font-bold border-2 border-black p-[10px] rounded bg-orange-300 hover:bg-gray-500">
//                     Sign Up
//                 </button>
//             </div>
//         </form>
//     )
// }

export default SignUpForm;