import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "./index";

function FormAddImmeuble() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Ajouter Immeuble</h1>
        <Link
          to={"/dashboard/immeuble"}
          className="btn btn-active border-none hover:bg-color-primary"
        >
          Afficher Immeubles
        </Link>
      </div>
      <div className="overflow-auto flex flex-col items-center bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="w-1/2">
          <form>
            <div>
              <label className="label text-xs font-medium">
                Name de Immeuble
              </label>
              <Input type="text" name="number" id="number" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Zone de Immeuble
              </label>
              <Input type="text" name="immeuble" id="immeuble" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">Adresse</label>
              <Input type="text" name="client" id="client" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">Ville</label>
              <Input type="text" name="client" id="client" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Number d'étages
              </label>
              <Input type="text" name="client" id="client" placeholder="" />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Number d'appartements
              </label>
              <Input type="text" name="client" id="client" placeholder="" />
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

export default FormAddImmeuble;
