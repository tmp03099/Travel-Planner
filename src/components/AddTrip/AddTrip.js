import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function AddTrip() {
  const [startDate, setStartDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [endDate, setEndDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setStartDate(newValue);
  };

  const handleValueEndDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setEndDate(newValue);
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
      startDate: Yup.date().max(new Date(), "Invalid date").required(),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      alert("Your successfully submit the form ");
    },
  });

  return (
    <main>
      <div>
        <h1>ADD TRIP</h1>
      </div>
      <div>
        <form
          className="flex flex-col w-full max-w-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col items-center">
            <div className="w-1/3">
              <label
                htmlFor="name"
                className="block text-gray-500 font-bold pr-4"
              >
                Name
              </label>
            </div>
            <div className="w-2/3">
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
            <div className="w-2/3">
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
              <label
                htmlFor="startDate"
                className="block text-gray-500 font-bold"
              >
                startDate
              </label>
            </div>
            <div className="w-2/3">
              <Datepicker
                id="startDate"
                primaryColor={"lime"}
                asSingle={true}
                useRange={false}
                value={startDate}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-1/3">
              <label
                htmlFor="endDate"
                className="block text-gray-500 font-bold  "
              >
                endDate
              </label>
            </div>
            <div className="w-2/3">
              <Datepicker
                id="endDate"
                primaryColor={"lime"}
                asSingle={true}
                useRange={false}
                value={endDate}
                onChange={handleValueEndDateChange}
              />
            </div>
          </div>
          <div>
            <div>
              <h2>Activities</h2>
            </div>
            <div>
              <p>Date</p>
              <p>Time</p>
              <p>Activities</p>
              <p>Name and URL</p>
              <p>Note</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
