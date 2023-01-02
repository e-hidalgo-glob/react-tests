import React from "react";

import { useGlobalContext } from "./context";
import Story from "./Story";
const Stories = () => {
  const { isLoading, hits } = useGlobalContext();
  const stories = hits.map((story) => <Story story={story} />);

  return isLoading ? (
    <div className="loading"></div>
  ) : (
    <section className="stories">{stories}</section>
  );
};

export default Stories;
