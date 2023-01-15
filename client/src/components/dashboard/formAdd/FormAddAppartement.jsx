import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "./index";

function FormAddAppartement() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Ajouter Appartement</h1>
        <Link
          to={"/dashboard/appartement"}
          className="btn btn-active border-none hover:bg-color-primary"
        >
          Afficher Appartements
        </Link>
      </div>
      <div className="overflow-auto flex flex-col items-center bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="w-1/2">
          <form>
          <div>
              <label className="label text-xs font-medium">
                Name de Immeuble
              </label>
              <Input type="text" name="immeuble" id="immeuble" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                étage de appartement
              </label>
              <Input type="text" name="immeuble" id="immeuble" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Number de Appartement
              </label>
              <Input type="text" name="number" id="number" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Statut de Appartement
              </label>
              <select className="select w-full block px-4 py-2 rounded-none text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option>libre</option>
                <option>occupée</option>
              </select>
            </div>
            <div className="mt-2 font-main">
              <Button type="submit" text="Submit" textColor={false} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormAddAppartement;
