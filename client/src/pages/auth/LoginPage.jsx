import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAuth from "../../assets/images/BackgoundAuth.jpg";
import { Button, Input } from "../../components/auth/indexComponentsAuth";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../useContext/UserContext";
import { useContext } from "react";


const LINK = "http://localhost:8000/api/auth";

function LoginPage() {
  const {setAuth} = useContext(UserContext)

  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(LINK + "/login", data)
      .then((result) => {
        console.log(result.data.token);
        setAuth(result.data)
        const token = result.data.token;
        localStorage.setItem("token", token);
        toast.success(result.data.admin.Full_Name);
        navigate("dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        error = new Error();
      });
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${BackgroundAuth})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-3/6">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="my-5 mx-3 px-3">
            <p className="text-2xl mb-6 font-bold">Connexion</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label text-xs font-medium">
                  Adresse email - Format: exemple@mail.com
                </label>
                <Input
                  value={data.Email}
                  onChange={handleChange}
                  type="email"
                  name="Email"
                  id="Email"
                />
              </div>
              <div>
                <label className="label text-xs font-medium">
                  Mot de passe
                </label>
                <Input
                  value={data.Password}
                  onChange={handleChange}
                  type="password"
                  name="Password"
                  id="Password"
                />
              </div>
              <div className="mt-2">
                <Link
                  to={"/forgetpassword"}
                  className="text-blue-500 text-xs focus:outline-none text-color-primary font-medium hover:text-color-secondary focus:underline hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="mt-2 font-main">
                <Button type="submit" text="Se connecter" textColor={false} />
              </div>
              <div className="mt-2 flex flex-row gap-2">
                <span className="text-xs">Nouveau compte sur Syndicat ?</span>
                <Link
                  to={"/register"}
                  className="text-blue-500 text-xs focus:outline-none text-color-primary font-medium hover:text-color-secondary focus:underline hover:underline"
                >
                  S'inscrire
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-3/6 text-center lg:text-left">
          <h1 className="text-5xl text-white font-bold">Syndicat</h1>
          <p className="py-6 text-white">
            Application de syndicat pour gérer les paiement pour chaque
            appartement
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
