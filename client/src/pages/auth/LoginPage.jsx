import React from "react";
import { Link } from "react-router-dom";
import BackgroundAuth from "../../assets/images/BackgoundAuth.jpg";
import { Button, Input } from "../../components/auth/indexComponentsAuth";

function LoginPage() {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${BackgroundAuth})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
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
              <div>
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
            </form>
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
