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

  const handleEndValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setEndDate(newValue);
  };

  const formik = useFormik({
    initialValues: {
      destination: "",
    },
    validationSchema: Yup.object({
      destination: Yup.string().min(2, "Too Short!").required("Required"),
      Ddate: Yup.date().max(new Date()).required(),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm({ values: "" });
      console.log(values);
      alert("Your successfully submit the form ");
    },
  });

  return (
    <main>
      <div>
        <h1>ADD TRIP</h1>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col w-full justify-center max-w-sm"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col items-center">
            <div className="w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Destination
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="destination"
                name="destination"
                type="text"
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
          <div className="flex flex-col items-center mb-6">
            <div className="w-1/3">
              <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                START DATE
              </label>
            </div>
            <div className="w-2/3">
              <Datepicker
                primaryColor={"lime"}
                asSingle={true}
                useRange={false}
                value={startDate}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="w-1/3">
              <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                END DATE
              </label>
            </div>
            <div className="w-2/3">
              <Datepicker
                primaryColor={"lime"}
                asSingle={true}
                useRange={false}
                value={endDate}
                onChange={handleEndValueChange}
              />
            </div>
          </div>
          {/* loop the addactivities */}
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
                Save
              </button>
            </div>
            <div className="w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                <a href="trip/new/activities">Add</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
