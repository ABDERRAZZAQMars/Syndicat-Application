import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

function TableImmeuble() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Liste Immeubles</h1>
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
            to={"/dashboard/formaddimmeuble"}
            className="btn btn-active border-none hover:bg-color-primary"
          >
            Ajouter Immeuble
          </Link>
        </div>
      </div>
      <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Zone</th>
              <th>Adresse</th>
              <th>Ville</th>
              <th>N° d'étages</th>
              <th>N° d'appartements</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C23000000060</td>
              <td>Imm YASMINE</td>
              <td>A1</td>
              <td>Rue 12 </td>
              <td>Casablanca</td>
              <td>24</td>
              <td>90</td>
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

export default TableImmeuble;
