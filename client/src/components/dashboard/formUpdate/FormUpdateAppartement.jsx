import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "../formAdd/index";

const LINK = "http://localhost:8000/api/admin";

function FormUpdateAppartement() {
  const [data, setData] = useState({
    Name_Immeuble: "",
    Number_Appartement: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(LINK + "/appartement/" + id).then((res) => setData(res.data));
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(LINK + "/appartement/" + id, data);
    navigate("/dashboard/appartement");
  };

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
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label text-xs font-medium">
                Name de Immeuble
              </label>
              <Input
                value={data.Name_Immeuble}
                onChange={handleChange}
                type="text"
                name="Name_Immeuble"
                id="Name_Immeuble"
                placeholder=""
              />
            </div>
    
            <div>
              <label className="label text-xs font-medium">
                Number de Appartement
              </label>
              <Input
                value={data.Number_Appartement}
                onChange={handleChange}
                type="text"
                name="Number_Appartement"
                id="Number_Appartement"
                placeholder=""
              />
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

export default FormUpdateAppartement;
