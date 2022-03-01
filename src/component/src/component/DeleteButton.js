import React from "react";

export default function Deletebutton({ handleDelete, title, description }) {
  return (
    <div>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
