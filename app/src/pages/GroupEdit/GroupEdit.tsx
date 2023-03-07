import React from "react";
import { TextInputField } from "../../components/TextInputField/TextInputField";
import "./GroupEdit.scss";

export const GroupEdit = () => {
  const [name, setName] = React.useState("");
  return (
    <div className="group-edit">
      <h1>Edit Group</h1>
      <TextInputField
        name="name"
        placeholder="Name"
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
