import React from "react";
import Infos from "./Infos";
import CreateArea from "./CreateArea";

function Top(props) {
  return (
    <div className="background">
      <CreateArea onAdd={props.onAdd} />
      <Infos />
    </div>
  );
}

export default Top;
