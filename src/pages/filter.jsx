/**
 * @function: Filter Component Displays all registered users(students) in a table.
 *            User can filter the students based on current year and branch.
 * 
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import { useState, useRef, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export default function Filter() {

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const yearInputRef = useRef();
  const branchInputRef = useRef();

  const ref = collection(firestore, 'users');


  /* Method to filter Students based on Current Year and Branch. 
   * Method is invoked on submitting the form.
   * Query is generated based on filters provided and the filtered users are fetched from firestore.
   */
  const filterUsers = async (e) => {
    e.preventDefault();
    
    let list = [];
    let q = "";
    const year = yearInputRef.current.value;
    const branch = branchInputRef.current.value.toUpperCase();

    if(year && branch) {
        q = query(ref, where("year", "==", year), where("branch", "==", branch));
    } else if(year) {
        q = query(ref, where("year", "==", year));
    } else {
        q = query(ref, where("branch", "==", branch));
    }

    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => { ////👈️ Iteratively add each user in the list array. ////
            list.push({id:doc.id, ...doc.data()});
        })

        setUser(list);
        console.log(list);
    } catch(err) {
        console.log(err);
    }

  }


  /* UseEffect Hook is called when the Filter component is initialized or any dependencies are modified. 
   * Fetches Registered users from firestore and stores them using setUser hook.
   */
  useEffect(() => {
    
    const fetchUsers = async () => {
        let list = [];

        try {
            const querySnapshot = await getDocs(ref);
            querySnapshot.forEach((doc) => { ////👈️ Iteratively add each user in the list array. ////
                list.push({id:doc.id, ...doc.data()});
            })
            
            setUser(list);
            console.log(list);

        } catch(err) {
            console.log(err);
        }
    }

    fetchUsers();
    setIsLoading(false);
  },[]);

  return (
    <div>
        {/* Form to filter users(students) based on branch and year. */}
      <form className="w-full max-w-8xl	mx-16 my-16" onSubmit={filterUsers}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Current Year
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="number"
              ref={yearInputRef}
            />
          </div>

          <div className="w-full md:w-1/5 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Branch
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              ref={branchInputRef}
            />
          </div>
          
          <div className="w-full my-5 md:w-auto px-3 bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded">
            <button>Search</button>
          </div>
        </div>
      </form>

        {/* Table to display registered students. */}
      <div className="flex flex-col mx-16 mb-24">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Branch
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <div>Fetching Users from database...</div>
                ) : (
                  <tbody className="bg-white divide-y divide-gray-200">
                    {user.map((u) => (
                      <tr key={u.id}>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {u.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {u.email}
                          </div>
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                          {u.phoneNumber}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                            {u.year}
                        </td>
                        <td className="px-3 py-4 whitespace-nowrap">
                          {u.branch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}