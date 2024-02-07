import React from "react";
import { logoutUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Confirm(props) {
  const dispatch = useDispatch();
  const { setConfirm, confirm } = props;
  const confirmHandler = () => {
    dispatch(logoutUser());
    setConfirm(false);
  };
  return (
    <>
      <Dialog open={confirm} handler={confirmHandler}>
        <DialogHeader>Confirm Logout</DialogHeader>
        <DialogBody>
          Are you sure you want to log out? This action will log you out of your
          account and end your session. If you're certain, you can click 'Yes'
          to log out. If you came here by mistake, you can close this window by
          clicking 'No
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setConfirm(false)}
            className="mr-1"
          >
            <span>No</span>
          </Button>
          <Button variant="gradient" color="blue" onClick={confirmHandler}>
            <span>Yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
