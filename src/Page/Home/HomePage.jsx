import React from "react";
import UserComponent from "../../Components/UserComponent/UserComponent";
import HomeComponent from "./HomeComponent";

export default function HomePage() {
  return <UserComponent component={<HomeComponent />} />;
}
