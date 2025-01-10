import React from "react";

const Activities = () => {
  const activitiesData = [
    {
      title: "Resorts",
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Resorts",
      image:
        "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "Resorts",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];
  return (
    <div className="container m-auto w-full md:flex mt-[-75px]">
      {activitiesData.map((activity, index) => (
        <div key={index} className="relative p-4">
          <h3 className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            {activity.title}
          </h3>
          <img
            className="border-4 border-white object-cover shadow-lg h-full w-full"
            src={activity.image}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Activities;
