import React from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

function TableClient() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Liste Clients</h1>
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
            to={"/dashboard/formaddclient"}
            className="btn btn-active border-none hover:bg-color-primary"
          >
            Ajouter Client
          </Link>
        </div>
      </div>
      <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom de famille</th>
              <th>CIN</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Appartement</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABDERRAZZAQ</td>
              <td>MARS</td>
              <td>HA215650</td>
              <td>abderrazzaqmars99@gmail.com</td>
              <td>+212660082403</td>
              <td>A10000000029</td>
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

export default TableClient;
