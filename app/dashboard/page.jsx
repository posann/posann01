import Theming from "@/components/providers/Theme";
import React from "react";
import Homepage from "./profile/page";
import Information from "./information/page";

function Dashboard() {
  return (
    <div className="">
      <Theming>
          <div className="mx-auto w-full">
            <div className="gap-2 w-full my-2 flex justify-center flex-col md:flex-row">
              <Homepage />
              <Information />
            </div>
          </div>
        </Theming>
    </div>
  );
}

export default Dashboard;
