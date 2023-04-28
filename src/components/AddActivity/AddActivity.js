import * as Yup from "yup";
import React from "react";
import Select from "react-dropdown-select";
import { useFormik } from "formik";

export default function AddActivity() {
  const options = [
    {
      value: 1,
      label: "Leanne Graham",
    },
    {
      value: 2,
      label: "Ervin Howell",
    },
  ];

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
      alert("Your successfully submit the form ");
    },
  });

  return (
    <div>
      <form
        className="flex flex-col w-full justify-center max-w-sm"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col items-center">
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label>
          </div>
          <div className="w-2/3">
            <input
              name="destination"
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
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Destination
            </label>
          </div>
          <div className="w-2/3">
            <input
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
        <div className="flex flex-col items-center">
          <div className="w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Date
            </label>
          </div>
          <div className="w-2/3">
            <Select
              options={options}
              onChange={(values) => this.setValues(values)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
