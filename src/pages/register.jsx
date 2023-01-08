/**
 * @function: Students can register on the portal. 
 *            Form takes Student details as input and stores them in 'users' collection on firestore.
 * 
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import { useRef } from "react";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { firestore } from "../firebase";
import ReactGA from "react-ga";

export default function Register() {
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const yearInputRef = useRef();
    const branchInputRef = useRef();

    const ref = collection(firestore, "users");


    /* handleRegister Method is invoked when the user submits the form.
     * Stores usersDetails document in 'users' collection on firestore.
     */
  const handleRegister = async (e) => {
    e.preventDefault();

    const userDetails = {
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        phoneNumber: phoneNumberInputRef.current.value,
        year: yearInputRef.current.value,
        branch: branchInputRef.current.value,
        timestamp: serverTimestamp() ////👈️ Time of creation. ////
    }

    /* Interaction Event Logged when user registers on the system. */
    ReactGA.event({
        category: "FORM_SUBMITTED",
        action: "test action",
        label: "test label",
        value: userDetails
    });

    try {
        await addDoc(ref, userDetails);
        e.target.reset(); ////👈️ Clears all input values in the form. ////
    } catch(err) {
        console.log(err);
    }
  };

  return (
    <div className="w-full max-w-sm m-auto mt-4">
        {/* Form to submit user details to register on the system. */}
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleRegister}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter Name"
            ref={nameInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Email"
            ref={emailInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="number"
            placeholder="Enter Phone Number"
            ref={phoneNumberInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Year
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            type="number"
            placeholder="Enter Your current B.Tech Year"
            ref={yearInputRef}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Branch
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="branch"
            type="text"
            placeholder="Enter Your Branch"
            ref={branchInputRef}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}