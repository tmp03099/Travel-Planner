import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function AddTrip({ tripData, setTripData }) {
  const [init, setInit] = useState(false);

  // validate formik form
  const { setValues, ...formik } = useFormik({
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
      alert("Your successfully submit the form ");
    },
  });

  useEffect(() => {
    console.log(init, tripData);
    //initalize first value of formik (to fix error run many times)
    if (!init) {
      //load the existing data value for edit trip
      if (tripData.name) {
        setValues(tripData);
        setInit(true);
      }
    }
  }, [tripData, setValues, init]);

  return (
    <div className="flex w-1/2 mt-12">
      <form className="flex flex-col w-full " onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <div className="w-1/3">
            <label
              htmlFor="name"
              className="block text-green-500 font-bold pr-4 text-left"
            >
              Name
            </label>
          </div>
          <div className="w-full">
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => {
                //update name
                setTripData({ ...tripData, name: e.target.value });
                formik.handleChange(e);
              }}
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
        <div className="flex flex-col">
          <div className="w-1/3">
            <label
              htmlFor="destination"
              className="block text-green-500 font-bold text-left"
            >
              Destination
            </label>
          </div>
          <div className="w-full">
            <input
              id="destination"
              name="destination"
              type="destination"
              onChange={(e) => {
                //update destination
                setTripData({ ...tripData, destination: e.target.value });
                formik.handleChange(e);
              }}
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
        <div className="flex flex-col">
          <div className="w-1/3">
            <label
              htmlFor="date"
              className="block text-green-500 font-bold text-left"
            >
              Date
            </label>
          </div>
          <div className="w-full ">
            <Datepicker
              id="date"
              primaryColor={"lime"}
              value={{
                startDate: tripData.startDate,
                endDate: tripData.endDate,
              }}
              onChange={(value) => {
                //update date
                setTripData({
                  ...tripData,
                  startDate: value.startDate,
                  endDate: value.endDate,
                });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
