import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { forgotPassword } from "../Firebase/Firebase"
import { auth } from "../Firebase/Firebase"
import { sendPasswordResetEmail } from "firebase/auth"




function ForgotPassword() {
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const user = auth.currentUser;

    const changedPassword = async () => {
        forgotPassword(user, newpassword)
    }
    const handleResetPassword = async () => {
        await sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // Handle success, e.g., show a success message to the user
                console.log("Password reset email sent successfully");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle error, e.g., show an error message to the user
                console.error("Error sending password reset email: ", errorMessage);
            });
        console.log(email);
    };
    return (
        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 overflow-y-hidden">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Set New Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}

                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleResetPassword}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Verify
                        </button>
                       
                    </div>



                </div>
            </div>
        </>
    )
}


export default ForgotPassword