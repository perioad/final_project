import React from "react";
import { UserServices } from "../components/UserServices";
import store from "../store/configureStore";

export default function UserServicesContainer() {
  const { appointments } = store.getState();

  return (
    <>
      <UserServices personalAppointments={appointments} />
    </>
  );
}
