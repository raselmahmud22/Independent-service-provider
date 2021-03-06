import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowCircleRight } from "react-icons/hi";

const Services = ({ service }) => {
  const { title, price, picture, description, id } = service;
  const navigate = useNavigate();
  const handleOnClick = (value) => {
    navigate(`/single_service/${value.target.id}`);
  };
  return (
    <div className="my-3 px-3 w-full overflow-hidden xl:my-4 sm: my-3 xl:px-4 xl:w-1/3">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link to={"/"} data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg" src={picture} alt="" />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <p className="pb-3">Price {price} $</p>
          <button
            id={id}
            type="button"
            onClick={handleOnClick}
            className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Sign Up
            <HiArrowCircleRight className="text-xl ml-3" />
          </button>
        </div>
      </div>
      </div>
  );
};

export default Services;
