import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";

const MyList = () => {
  const landmarks = useLoaderData();
  const [lists, setLists] = useState(landmarks);
  const { user } = useAuth();

  const filteredLandmarks = lists.filter(
    (landmark) => landmark.email === user.email
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/lists/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The information is deleted",
                icon: "success",
              });
              const remainingList = lists.filter((list) => list._id !== id);
              setLists(remainingList);
            }
          });
      }
    });
  };

  return (
    <main>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Location</th>
              <th>Seasonality</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredLandmarks.map((landmark, index) => (
              <tr key={landmark._id}>
                <th>{index + 1}</th>
                <td>{landmark.spot_name}</td>
                <td>{landmark.country_name}</td>
                <td>{landmark.location}</td>
                <td>{landmark.seasonality}</td>
                <td>
                  <Link to={`/update/${landmark._id}`}>
                    <button className="btn glass bg-[#165D66]">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(landmark._id)}
                    className="btn glass bg-[#165D66]"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MyList;
