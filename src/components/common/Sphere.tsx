import React from "react";

type SphereProps = {
  className?: string;
};

const Sphere: React.FC<SphereProps> = (props) => {
  return (
    <div
      className={`${
        props.className ?? ""
      } bg-gradient-radial rounded-full filter blur-md`}
    />
  );
};

export default Sphere;
