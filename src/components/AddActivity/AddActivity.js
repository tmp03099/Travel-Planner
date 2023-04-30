// import * as Yup from "yup";
// import React from "react";
// import Select from "react-dropdown-select";
// import { useFormik } from "formik";

// export default function AddActivity() {
//   const options = [
//     {
//       value: 1,
//       label: "Leanne Graham",
//     },
//     {
//       value: 2,
//       label: "Ervin Howell",
//     },
//   ];

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       destination: "",
//       startDate: Date.now(),
//     },

//     validationSchema: Yup.object({
//       name: Yup.string().min(2, "Too Short!").required("Required"),
//       destination: Yup.string()
//         .min(2, "Invalid destination")
//         .required("Required"),
//       startDate: Yup.date().max(new Date(), "Invalid date").required(),
//     }),
//     onSubmit: (values, { resetForm }) => {
//       resetForm({ values: "" });
//       alert("Your successfully submit the form ");
//     },
//   });

//   return (
//     <div>
//       <form
//         className="flex flex-col w-full max-w-md"
//         onSubmit={formik.handleSubmit}
//       >
//         <div className="flex flex-col items-center">
//           <div className="w-1/3">
//             <label
//               htmlFor="name"
//               className="block text-gray-500 font-bold pr-4"
//             >
//               Name
//             </label>
//           </div>
//           <div className="w-2/3">
//             <input
//               id="name"
//               name="name"
//               type="text"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.name}
//               className={
//                 "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
//                 (formik.touched.name && formik.errors.name
//                   ? "border-red-500"
//                   : null)
//               }
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <div style={{ color: "red" }}>{formik.errors.name}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="w-1/3">
//             <label
//               htmlFor="destination"
//               className="block text-gray-500 font-bold"
//             >
//               Destination
//             </label>
//           </div>
//           <div className="w-2/3">
//             <input
//               id="destination"
//               name="destination"
//               type="destination"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.destination}
//               className={
//                 "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " +
//                 (formik.touched.destination && formik.errors.destination
//                   ? "border-red-500"
//                   : null)
//               }
//             />
//             {formik.touched.destination && formik.errors.destination ? (
//               <div style={{ color: "red" }}>{formik.errors.destination}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="w-1/3">
//             <label
//               htmlFor="startDate"
//               className="block text-gray-500 font-bold"
//             >
//               startDate
//             </label>
//           </div>
//           <div className="w-2/3">
//             <Select
//               options={options}
//               onChange={(values) => this.setValues(values)}
//             />
//             ;
//           </div>
//         </div>
//         <div className="flex items-center mb-6">
//           <div className="w-full">
//             <textarea
//               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
//               id="inline-text"
//               type="text"
//               placeholder="Note here"
//             />
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="w-2/3">
//             <button
//               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//               type="submit"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
