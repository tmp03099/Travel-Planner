import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import { createTrip } from "../../utilities/trip-service";

export default function AddTrip({ tripData, setTripData }) {
  const navigate = useNavigate();

  const [date, setDate] = useState({});

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDate(newValue);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      destination: "",
      startDate: Date.now(),
      endDate: Date.now(),
    },

    validationSchema: Yup.object({
      name: Yup.string().min(2, "Too Short!").required("Required"),
      destination: Yup.string()
        .min(2, "Invalid destination")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      console.log(values);
      createTrip(values);
      alert("Your successfully submit the form ");
      navigate("/");
    },
  });

  useEffect(() => {
    console.log(tripData);
    if (tripData.name) {
      formik.setValues(tripData);
      setDate({
        startDate: new Date(tripData.startDate),
        endDate: new Date(tripData.endDate),
      });
    }
  }, [tripData._id]);

  useEffect(() => {
    console.log(date);
    setTripData({
      ...tripData,
      name: formik.values.name,
      destination: formik.values.destination,
      startDate: date.startDate,
      endDate: date.endDate,
    });
  }, [date, formik.values.name, formik.values.destination]);

  return (
    <div className="flex w-1/2">
      <form className="flex flex-col w-full " onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-center">
          <div className="w-1/3">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold pr-4"
            >
              Name
            </label>
          </div>
          <div className="w-full">
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
                (formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : null)
              }
            />
            {formik.touched.name && formik.errors.name ? (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1/3">
            <label
              htmlFor="destination"
              className="block text-gray-500 font-bold"
            >
              Destination
            </label>
          </div>
          <div className="w-full">
            <input
              id="destination"
              name="destination"
              type="destination"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destination}
              className={
                "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
                (formik.touched.destination && formik.errors.destination
                  ? "border-red-500"
                  : null)
              }
            />
            {formik.touched.destination && formik.errors.destination ? (
              <div style={{ color: "red" }}>{formik.errors.destination}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-1/3">
            <label htmlFor="date" className="block text-gray-500 font-bold">
              Date
            </label>
          </div>
          <div className="w-full">
            <Datepicker
              id="date"
              primaryColor={"lime"}
              value={date}
              onChange={handleValueChange}
            />
          </div>
        </div>

        {/* <div className="flex items-center justify-center">
            <div className="w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div> */}
      </form>
    </div>
  );
}
