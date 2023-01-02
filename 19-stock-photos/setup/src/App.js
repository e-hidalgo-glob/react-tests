import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import ApiConnector from "./network/api-connector";

import Photo from "./Photo";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const mounted = useRef(false);
  const [newImages, setNewImages] = useState(false);
  const fetchImages = async () => {
    setLoading(true);
    try {
      const connector = new ApiConnector();
      const data = await connector.fetchImages(query, page);
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        }
        return query
          ? [...oldPhotos, ...data.results]
          : [...oldPhotos, ...data];
      });
      setNewImages(false);
      setLoading(false);
    } catch (error) {
      setNewImages(false);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return;
    if (loading) return;
    setPage((oldPage) => oldPage + 1);
  }, [newImages]);

  const event = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 20
    ) {
      setNewImages(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      fetchImages();
    }
    setPage(1);
  };
  const handleChange = (e) => setQuery(e.target.value);
  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => (
            <Photo key={index} {...image} />
          ))}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
