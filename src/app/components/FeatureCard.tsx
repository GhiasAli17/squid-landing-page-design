import React from "react";
type FeatureCardProps = {
  icon: React.ReactNode;
  className?: string;
};
const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <div className="bg-[#18181C] px-6 hover:scale-[1.01] cursor-pointer transition-all ease-in-out duration-300 rounded-[20px] flex justify-center flex-col items-center py-12">
      <div
        className={`${
          props.className ? props.className : "bg-[#222228]"
        } rounded-[30px] size-[104px] grid place-items-center`}
      >
        {props.icon}
      </div>
      <h3 className="text-white text-xl mt-10 mb-4 text-center">
        Fully Customizable
      </h3>
      <p className="text-sm text-center">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem
      </p>
    </div>
  );
};

export default FeatureCard;
