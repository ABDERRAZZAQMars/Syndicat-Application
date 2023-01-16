import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../formAdd/index";

const LINK = "http://localhost:8000/api/admin";

function FormPaye() {
    const [data, setData] = useState({
        CIN: "",
        Number_Appartement: "",
        Date: "",
        Montant: "",
        Statut_Payment: "",
      });
    
      const navigate = useNavigate();
      const { id } = useParams();
    
      useEffect(() => {
        axios.get(LINK + "/payment/" + id).then((res) => setData(res.data));
      }, []);
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(LINK + "/payment", data);
        navigate("/dashboard/facture");
      };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center align-middle bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <h1 className="text-2xl font-bold">Ajouter Payment</h1>
        <Link
          to={"/dashboard/facture"}
          className="btn btn-active border-none hover:bg-color-primary"
        >
          Afficher Payments
        </Link>
      </div>
      <div className="overflow-auto flex flex-col items-center bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <div className="w-1/2">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label text-xs font-medium">Client</label>
              <Input
                value={data.CIN}
                onChange={handleChange}
                type="text"
                name="CIN"
                id="CIN"
              />
            </div>
            <div>
              <label className="label text-xs font-medium">Appartement</label>
              <Input
                value={data.Number_Appartement}
                onChange={handleChange}
                type="text"
                name="Number_Appartement"
                id="Number_Appartement"
              />
            </div>
            <div>
              <label className="label text-xs font-medium">
                La date de payment
              </label>
              <Input
                value={data.Date}
                onChange={handleChange}
                type="date"
                name="Date"
                id="Date"
              />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Montant de payment
              </label>
              <Input
                value={data.Montant}
                onChange={handleChange}
                type="text"
                name="Montant"
                id="Montant"
              />
            </div>
            <div>
              <label className="label text-xs font-medium">
                Statut de payment
              </label>
              <select
                value={data.Statut_Payment}
                onChange={handleChange}
                name="Statut_Payment"
                id="Statut_Payment"
                className="select w-full block px-4 py-2 rounded-none placeholder-gray-400 bg-green-500 text-white border border-gray-200 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option>Payé</option>
              </select>
            </div>
            <div className="mt-2 font-main">
              <Button type="submit" text="Submit" textColor={false} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormPaye