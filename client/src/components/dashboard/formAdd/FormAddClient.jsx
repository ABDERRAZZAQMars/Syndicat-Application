import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "./index";

function FormAddClient() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Ajouter Client</h1>
        <Link
          to={"/dashboard/client"}
          className="btn btn-active border-none hover:bg-color-primary"
        >
          Afficher Clients
        </Link>
      </div>
      <div className="overflow-auto flex flex-col items-center bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="w-1/2">
          <form>
            <div>
              <label className="label text-xs font-medium">Prénom</label>
              <Input type="text" name="prenom" id="prenom" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Nom de famille
              </label>
              <Input type="text" name="nom" id="nom" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">CIN</label>
              <Input type="text" name="cin" id="cin" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">Email</label>
              <Input type="email" name="email" id="email" />
            </div>
            <div>
              <label className="label text-xs font-medium">Téléphone</label>
              <Input type="text" name="phone" id="phone" />
            </div>
            <div>
              <label className="label text-xs font-medium">Appartement</label>
              <select className="select w-full block px-4 py-2 rounded-none text-gray-700 placeholder-gray-400 bg-white border border-gray-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                <option disabled selected>
                  Choisir un appartement
                </option>
                <option>App 01</option>
                <option>App 02</option>
                <option>App 24</option>
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

export default FormAddClient;
