import React from "react";
import Punjab from "./Punjab";
import Himachal from "./Himachal";
import Jk from "./Jk";

export default function Gallery() {
  return (
    <div className="bg-fixed bg-[url('/img/gallerydesk.png')] bg-cover bg-center py-10">

      {/* Responsive Grid */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4">

        <Jk />
        <Himachal />
        <Punjab />

      </div>
    </div>
  );
}
