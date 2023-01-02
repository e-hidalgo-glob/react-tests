import React, { useState, useEffect } from "react";
import Follower from "./Follower";
import Pagination from "./Pagination";
import { useGlobalContext } from "./context";
function App() {
  const { page, loading, data } = useGlobalContext();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const followersComponents = followers.map((follower) => (
    <Follower key={follower.id} {...follower} />
  ));

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">{followersComponents}</div>
        {!loading && <Pagination />}
      </section>
    </main>
  );
}

export default App;
