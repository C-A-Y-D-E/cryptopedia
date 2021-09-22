import { useState } from "react";
import { Tab } from "@headlessui/react";
import Chart from "components/cmc/Chart";
import Information from "components/cmc/Information";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ symbol }) {
  return (
    <div className="w-full  sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 max-w-md space-x-1 bg-blue-900/20 rounded-xl">
          <Tab
            key={2}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium  rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-dark ring-dark/20 ",
                selected
                  ? "bg-accent text-white shadow"
                  : "text-blue-100 hover:bg-accent hover:text-white"
              )
            }
          >
            Information
          </Tab>
          <Tab
            key={3}
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-sm leading-5 font-medium  rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-dark ring-dark/20 ",
                selected
                  ? "bg-accent text-white shadow"
                  : "text-blue-100 hover:bg-accent hover:text-white"
              )
            }
          >
            Chart
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-6 w-full ">
          <Tab.Panel key={2}>
            <Information />
          </Tab.Panel>
          <Tab.Panel key={3}>
            <Chart symbol={symbol} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
