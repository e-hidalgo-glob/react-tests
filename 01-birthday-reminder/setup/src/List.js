import React from "react";

const List = ({ peopleBirthdays }) => {

  const generateListItem = (birthday) => {
    const { id, name, age, image } = birthday;
    return (
      <article key={id} className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  };

  const items = peopleBirthdays.map((bday) => generateListItem(bday));
  return (
    <>
      {items}
    </>
  );
};

export default List;
