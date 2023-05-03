import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { React, Fragment, useState } from "react";
import Select from "react-dropdown-select";
import { createActivity } from "../../utilities/activity-service";

function ActivityDialog({ dateOptions, activities, setActivities }) {
  const [open, setOpen] = useState(false);

  const [activity, setActivty] = useState({});

  const typeOptions = [
    {
      value: "food",
      label: "Food",
    },
    {
      value: "activity",
      label: "Activity",
    },
    {
      value: "attraction",
      label: "Attraction",
    },
  ];

  const onAddActivityClick = () => {
    setOpen(true);
  };

  const onCancelClick = () => {
    setOpen(!open);
  };

  const onAddClick = async () => {
    const newActivity = await createActivity(activity);

    setActivities([...activities, newActivity]);
    console.log(activity);
    setOpen(!open);
  };

  return (
    <Fragment>
      <Button onClick={onAddActivityClick} variant="gradient">
        Add Activity
      </Button>
      <Dialog open={open} handler={onCancelClick}>
        <DialogHeader>Add Activity</DialogHeader>
        <DialogBody divider>
          <div className="flex flex-col items-center">
            <div className="flex">
              <Select
                options={typeOptions}
                onChange={(type) =>
                  setActivty({
                    ...activity,
                    type: type[0].value,
                  })
                }
              />
            </div>
            <div>
              <label>Name</label>
              <input
                name="name"
                type="text"
                onChange={(event) => {
                  setActivty({
                    ...activity,
                    name: event.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label>Destination</label>
              <input
                name="name"
                type="text"
                onChange={(event) => {
                  setActivty({
                    ...activity,
                    destination: event.target.value,
                  });
                }}
              />
            </div>
            <div className="w-1/3">
              <label htmlFor="date" className="block text-gray-500 font-bold">
                Date
              </label>
            </div>
            <div className="w-2/3">
              <Select
                options={dateOptions}
                value={activity.date}
                onChange={(date) => {
                  setActivty({
                    ...activity,
                    date: date[0].value,
                  });
                }}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={onCancelClick}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={onAddClick}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default ActivityDialog;
