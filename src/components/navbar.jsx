/**
 * @function: Navbar Component with integrated routes for navigation.
 *            User can navigate to Register, Slider or Filter route.
 * 
 * @version: 1.0
 * @author: Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import { useState } from "react";
import { Link } from "react-router-dom";

/* Function to set tailwindcss classes on Navbar item. */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  const [navigation, setNavigation] = useState([
    { name: "Register", href: "/register", current: false },
    { name: "Slider", href: "/slider", current: false },
    { name: "Filter", href: "/filter", current: false },
  ]);

  return (
    <div as="nav" className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <p className="hidden sm:block text-white px-3 py-2 rounded-md font-bold">
                    Springwood Assignment
                  </p>
                </div>
                <div className="sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => { ////👈️ Set current element to true on clicking the item. ////
                          const current_href = item.href;
                          setNavigation(
                            navigation.map((item) => {
                              item.current = item.href === current_href;
                              return item;
                            })
                          );
                        }}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>  
        </div>
    </div>
  );
}