const NoAvailableTours = ({ refresh }) => (
  <main>
    <div className="title">
      <h2>no tours left</h2>
      <button className="btn" onClick={refresh}>
        refresh
      </button>
    </div>
  </main>
);

export default NoAvailableTours;