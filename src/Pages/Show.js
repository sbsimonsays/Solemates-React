import React from "react";
import ApparelDetails from "../Components/ApparelDetails";
import NewSneakers from "../Components/NewSneakers";
import Sneakers from "../Components/Sneakers";

function Show() {
  return (
    <div className="ShowPage">
      <ApparelDetails />
      <NewSneakers />
    </div>
  );
}

export default Show;
