import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

const LINK = "http://localhost:8000/api/admin";

function TableAppartement({ apartments, setDeleted }) {
  const deleteApartment = (id) => {
    axios
      .delete(LINK + "/appartement/" + id)
      .then(() => setDeleted((prev) => !prev));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Liste Appartements</h1>
        <div className="flex flex-row gap-2">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered  text-black"
              />
              <button className="btn btn-square ">
                <BiSearch size={24} />
              </button>
            </div>
          </div>
          <Link
            to={"/dashboard/formaddappartement"}
            className="btn btn-active border-none hover:bg-color-primary"
          >
            Ajouter Appartement
          </Link>
        </div>
      </div>
      <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Immeuble</th>
              <th>Number</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {apartments.map((apartment) => (
              <tr>
                <td>{apartment._id}</td>
                <td>{apartment.Name_Immeuble}</td>
                <td>{apartment.Number_Appartement}</td>
                <td className="flex flex-row gap-2">
                  <Link
                    to={"/dashboard/formupdateappartement/" + apartment._id}
                    className="btn btn-ghost btn-xs bg-color-primary text-white"
                  >
                    Modifier
                  </Link>
                  <button
                    onClick={() => deleteApartment(apartment._id)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white"
                  >
                    Suprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAppartement;
