import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    docInfo && (
      <div>
        {/* -------------Doctors Details---------------- */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[80px] sm:mt-0">
            {/* ------------Doc Info : Name , Degree, Experience */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name} <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div>
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button>{docInfo.experience}</button>
            </div>

            {/* ----------Doctor About----------- */}
            <div>
              <p>
                About <img src={assets.info_icon} alt="" />
              </p>
              <p>{docInfo.about}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
