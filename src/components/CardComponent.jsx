import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({
  name,
  dueDate,
  description,
  progress,
}) {
  // calculate days til deadline or sumthin like that
  const calculateDaysLeft = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0
      ? `${diffDays} day${diffDays > 1 ? "s" : ""} left`
      : "Due today";
  };

  return (
    <div>
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 h-full">
        <div className="flex justify-between mb-5">
          {/* date */}
          <p
            className={` font-medium ${
              progress == 25
                ? "text-custom-pink"
                : progress == 50
                ? "text-custom-yellow-500"
                : progress == 75
                ? "text-custom-carrot"
                : "text-custom-sky-blue"
            }`}
          >
            {dueDate}
          </p>
          <EllipsisVertical size={20} color="#374957" />
        </div>

        <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
          {!description ? (
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              vero, ea laudantium consequuntur porro fugit sunt magnam,
              similique neque harum recusandae ut dicta earum dolore repellendus
              ipsam optio. Ad, alias? Blanditiis eius et laborum quam dolor
              laboriosam praesentium similique commodi accusamus minima in nam
              ipsa ullam dolores tempora rerum, dignissimos ipsam dolorum maxime
              vero soluta dolorem nemo pariatur? Veritatis, voluptates.
            </span>
          ) : (
            <div>
              <span>{description}</span>
              <br />
            </div>
          )}
        </div>

        {/* progress bar */}
        <div className="w-full flex justify-between font-medium mb-1">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>

        <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className={`h-2.5 rounded-full ${
              progress < 25
                ? ""
                : progress < 50
                ? "bg-custom-pink"
                : progress < 75
                ? "bg-custom-yellow-500"
                : progress < 100
                ? "bg-custom-carrot"
                : "bg-custom-sky-blue"
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* deadline */}
        <div className="flex justify-end">
          <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-5xl text-center">
            {calculateDaysLeft(dueDate)}
          </p>
        </div>
      </div>
    </div>
  );
}
