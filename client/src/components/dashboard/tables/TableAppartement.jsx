import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

function TableAppartement() {
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
              <th>étage</th>
              <th>Number</th>
              <th>Status</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A10000000029</td>
              <td>Imm YASSMINE</td>
              <td>étage 10</td>
              <td>App 24</td>
              <td>Occupied</td>
              <td className="flex flex-row gap-2">
                <button className="btn btn-ghost btn-xs bg-color-primary text-white">
                  Modifier
                </button>
                <button className="btn btn-ghost btn-xs bg-red-600 text-white">
                  Suprimer
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableAppartement;
