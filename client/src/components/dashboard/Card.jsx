import React from "react";
import {
  FiUsers,
  BsBuilding,
  AiOutlineHome,
  MdPayment
} from "../../assets/icons";

function Card() {
  const cards = [
    { icon: FiUsers, name: "Total Clients", total: "6389" },
    { icon: BsBuilding, name: "Total Immeubles", total: "6389" },
    { icon: AiOutlineHome, name: "Total Appartements", total: "6389" },
    { icon: MdPayment, name: "Total Paiements", total: "6389" },
  ];

  return (
    <div className="flex gap-4 justify-between">
      {cards?.map((card, i) => (
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-200">
            {React.createElement(card?.icon, { size: "24" })}
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              {card?.name}
            </span>
            <div className="flex items-center">
              <span className="text-xl text-gray-700 font-semibold">54232</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;