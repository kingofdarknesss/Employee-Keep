import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adduser = { name, email, age };

    const responce = await fetch(
      import.meta.env.VITE_BACKEND_URL + "api/v1/create",
      {
        method: "POST",
        body: JSON.stringify(adduser),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await responce.json();

    if (!responce.ok) {
      setErr(data.massage);
    }
    if (responce.ok) {
      console.log("user created sucessfully");
      setAge(0);
      setEmail("");
      setName("");
    }
  };

  return (
    <div>
      {err ? (
        <h1 className="m-auto text-center text-xl bg-indigo-500 text-white font-mono">
          {err}
        </h1>
      ) : null}
      <form
        onSubmit={handleSubmit}
        className="text-gray-600 body-font relative"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Employee
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Fill out the form below to register a new employee.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="age" className="leading-7 text-sm text-gray-600">
                    Age
                  </label>
                  <input
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    id="age"
                    name="age"
                    type="number"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Add
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">example@email.com</a>
                <p className="leading-normal my-5">
                  49 Smith St.
                  <br />
                  29 year old
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
