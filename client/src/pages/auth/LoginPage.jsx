import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundAuth from "../../assets/images/BackgoundAuth.jpg";
import { Button, Input } from "../../components/auth/indexComponentsAuth";
import { ToastContainer, toast } from "react-toastify";

function LoginPage() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${BackgroundAuth})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-3/6">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="my-5 mx-3 px-3">
            <p className="text-2xl mb-6 font-bold">Connexion</p>
            <form>
              <div>
                <label className="label text-xs font-medium">
                  Adresse email - Format: exemple@mail.com
                </label>
                <Input type="email" name="email" id="email" placeholder="" />
              </div>
              <div>
                <label className="label text-xs font-medium">
                  Mot de passe
                </label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
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
