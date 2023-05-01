import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { React, Fragment, useState, useEffect } from "react";
import Select from "react-dropdown-select";

function ActivityDialog({ dateOptions }) {
  console.log("date ne", dateOptions);
  const [open, setOpen] = useState(false);

  const [type, setType] = useState([]);

  const [dateActivity, setDateActivity] = useState();

  const options = [
    {
      value: 1,
      label: "Type 1",
    },
    {
      value: 2,
      label: "Type 2",
    },
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {}, [dateOptions]);

  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Add Activity
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add Activity</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col items-center">
            <div className="flex">
              <Select options={options} onChange={(type) => setType(type)} />
            </div>
            <div>
              <label>Name</label>
              <input name="name" type="text" />
            </div>
            <div>
              <label>Destination</label>
              <input name="name" type="text" />
            </div>
            <div className="w-1/3">
              <label htmlFor="date" className="block text-gray-500 font-bold">
                Date
              </label>
            </div>
            <div className="w-2/3">
              <Select
                options={dateOptions}
                value={dateActivity}
                onChange={(date) => setDateActivity(date)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default ActivityDialog;
