import React from "react";
import { Alert } from "react-bootstrap";

const Success = ({ success }) => {
  return (
    <>
      <Alert variant={"success"} style={{ margin: "auto" }}>
        {success}
      </Alert>
    </>
  );
};

export default Success;
