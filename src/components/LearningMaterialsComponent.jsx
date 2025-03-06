import { useState } from "react";
import { Star } from "lucide-react";
import FilterComponent from "./FilterComponent";
import { learningMaterials } from "../data/learningMaterials";

export default function LearningMaterialsComponent() {
  const [materials, setMaterials] = useState(learningMaterials);
  const [order, setOrder] = useState("A-Z");

  // sort function
  const sortMaterials = (materials, order) => {
    return [...materials].sort((a, b) =>
      order === "A-Z"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  };

  // handle sorting from FilterComponent
  const handleSort = (selectedOrder) => {
    setOrder(selectedOrder);
    setMaterials(sortMaterials(materials, selectedOrder));
  };

  const toggleFavorite = (id) => {
    setMaterials(
      materials.map((material) =>
        material.id === id
          ? { ...material, isFavorite: !material.isFavorite }
          : material
      )
    );
  };

  return (
    <div className="bg-white drop-shadow-lg rounded-2xl overflow-auto h-[80vh]">
      {/* sort component ig */}
      <FilterComponent onSortChange={handleSort} />

      {/* title */}
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Learning Materials</h2>
        <img src="/more.svg" alt="three dot" width={30} height={30} />
      </div>

      {/* materials list */}
      <div className="space-y-3">
        {materials?.map((material) => (
          <div
            className="bg-light-gray px-4 py-2 flex gap-5 items-center"
            key={material.id}
          >
            <img
              src={material.image}
              alt={material.title}
              width={50}
              height={50}
              className="rounded-xl"
            />

            <div className="w-full">
              <div className="flex justify-between">
                <p className="text-base font-medium">{material.title}</p>

                <Star
                  size={20}
                  className={
                    material.isFavorite ? `text-custom-pink` : `text-gray-400`
                  }
                  fill={material.isFavorite ? "currentColor" : "none"}
                  onClick={() => toggleFavorite(material.id)}
                />
              </div>
              <p className="text-gray-400 text-sm">
                Posted at: {material.postedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
