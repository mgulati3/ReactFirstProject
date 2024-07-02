import { useState } from "react";

interface Props {
  items: String[];
  heading: String;
}

function ListGroup({ items, heading }: Props) {
  const [SelectedIndex, SetSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((items, index) => (
          <li
            className={
              SelectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={items}
            onClick={() => {
              SetSelectedIndex(index);
            }}
          >
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
