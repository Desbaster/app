import React from "react";
import { Spinner } from "react-bootstrap";

const SpinNer = () => {
  return (
    <>
      <Spinner
        className="mt-5"
        animation="border"
        size="lg"
        variant="warning"
        id="spinner"
      />
    </>
  );
};

export default SpinNer;
