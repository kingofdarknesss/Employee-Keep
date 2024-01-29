import Card from "../component/Card";
import { useSelector } from "react-redux";
import { useFetchUser } from "../hooks/useFetchUser";
const Home = () => {
  useFetchUser();
  const data = useSelector((store) => store.user.allUser);

  if (data == null) return;

  return (
    <div className="bg-indigo-600 w-screen min-h-screen h-auto pr-4">
      <h1 className="text-3xl pt-4 pb-4 text-center text-white">
        Employee Record
      </h1>
      <div className="flex flex-wrap justify-center">
        {data.map((details) => (
          <Card
            key={details._id}
            name={details.name}
            email={details.email}
            age={details.age}
            id={details._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
