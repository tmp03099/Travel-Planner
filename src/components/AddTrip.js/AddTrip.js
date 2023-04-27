import { useFormik } from "formik";
import * as Yup from "yup";
// import React, { useState } from "react";

export default function AddTrip() {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      destination: "",
      startDate: "",
      endDate: "",
      attract: "",
      food: "",
      activities: "",
      note: "",
      isBooking: false,
    },
    validationSchema: Yup.object({
      destination: Yup.string().min(2, "Too Short!").required("Required"),
      //   startDate: Yup.date().max(new Date()).required(),
      //   endDate: Yup.date()
      //     .min(new Date(startDate.startDate))
      //     .max(new Date())
      //     .required(),
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
          className="flex flex-col w-full max-w-sm"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex items-center mb-6">
            <div className="w-1/3">
              <label
                htmlFor="destination"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
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
          <div className="flex items-center mb-6">
            <div className="w-1/3">
              <label
                htmlFor="startDate"
                className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                START DATE
              </label>
            </div>
            <div className="w-2/3">
              {/* <DatePicker
                selected={startdate}
                onChange={(date) => setStartDate(date)}
              /> */}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/3">
              <label
                htmlFor="endDate"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                END DATE
              </label>
            </div>
            <div className="w-2/3">
              {/* <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              /> */}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-1/3">
              <label
                htmlFor="attrack"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                ATTRACTION
              </label>
            </div>
            <div className="w-2/3">
              <input
                id="attrack"
                name="attrack"
                type="attrack"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.attrack}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="w-full">
              <textarea
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-text"
                type="text"
                placeholder="Your text here"
              />
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
