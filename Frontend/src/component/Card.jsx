import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { useFetchUser } from "../hooks/useFetchUser";
import { Link } from "react-router-dom";
function Card({ name, email, age, id }) {
  const { fetchUser } = useFetchUser();
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (!response.ok) {
        console.log(data);
      }

      if (response.ok) {
        console.log("deleted sucessfully");
        fetchUser();
      }
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="w-[80%]  h-auto bg-white text-black text-2xl font-mono flex gap-8 p-2 rounded-md shadow-2xl mb-3 justify-between ">
      <span className="w-[30%]">name: {name}</span>
      <span className="w-[40%]">email: {email}</span>
      <span className="w-[20%]">age: {age}</span>
      <div className="flex gap-2 justify-start">
        <span onClick={handleDelete}>
          <MdDeleteSweep />
        </span>
        <span>
          <Link to={"/update/" + id}>
            <TfiWrite />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Card;
