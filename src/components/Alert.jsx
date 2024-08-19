import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className=" absolute top-10 right-0 left-0 flex justify-center items-center">
      <div
        className={`${type === "danger" ? "bg-red-800" : "bg-blue-800"} 
        p-4 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={`${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } flex rounded-full uppercase
                px-2 py-1 mr-3 font-semibold text-xs`}
        >
          {type === "danger" ? "failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
