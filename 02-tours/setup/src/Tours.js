import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  const tourList = tours.map((tour) => (
    <Tour key={tour.id} {...tour} removeTour={removeTour} />
  ));
  return (
    <section>
      <div className="title">
        <h2>Nuestros tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tourList}</div>
    </section>
  );
};
export default Tours;
