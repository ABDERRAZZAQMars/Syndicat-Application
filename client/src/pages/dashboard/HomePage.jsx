import React from "react";
import Card from "../../components/dashboard/Card";
import LogoSyndicat from "../../assets/LogoSyndicat.png";

function HomePage() {
  return (
    <div className="flex flex-col">
      <Card />
      <div className="flex justify-center mt-12 bg-white rounded-sm p-4 flex-1 border border-gray-200 items-center">
        <img src={LogoSyndicat} width={"900"} />
      </div>
    </div>
  );
}

export default HomePage;
