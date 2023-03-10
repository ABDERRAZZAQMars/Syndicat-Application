import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiSearch } from "../../../assets/icons";

const LINK = "http://localhost:8000/api/admin";

function TableFacture({ factures, setDeleted }) {
  const deletefacture = (id) => {
    axios
      .delete(LINK + "/payment/" + id)
      .then(() => setDeleted((prev) => !prev));
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Liste Facture</h1>
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
            to={"/dashboard/paiement"}
            className="btn btn-active border-none hover:bg-color-primary"
          >
            Ajouter Payment
          </Link>
        </div>
      </div>
      <div className="overflow-auto bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>CIN</th>
              <th>Appartement</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Statut</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {factures.map((facture) => (
              <tr>
                <td>{facture._id}</td>
                <td>{facture.CIN.CIN}</td>
                <td>{facture.Number_Appartement._id}</td>
                <td>{facture.Date}</td>
                <td>{facture.Montant}DH</td>
                <td>{facture.Statut_Payment}</td>
                <td className="flex flex-row gap-2">
                  <Link
                    to={"/dashboard/formpaye/" + facture._id}
                    className="btn btn-ghost btn-xs bg-color-primary text-white"
                  >
                    Paiment
                  </Link>
                  <button
                    onClick={() => deletefacture(facture._id)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white"
                  >
                    Suprimer
                  </button>
                  <button className="btn btn-ghost btn-xs bg-color-secondary text-white">
                    Facture
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

export default TableFacture;
