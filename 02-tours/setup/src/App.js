import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ApiConnector from "./network/api-connector";
import Tours from "./Tours";
import NoAvailableTours from "./NoAvailableTours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const loadTours = async () => {
    try {
      setLoading(true);
      const connector = new ApiConnector();
      const tours = await connector.fetchTours();
      setTours(tours);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    loadTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (Array.isArray(tours) && tours.length) {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  }
  return <NoAvailableTours refresh={loadTours} />;
}

export default App;
