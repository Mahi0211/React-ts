// import { MouseEvent } from "react";
// passing data via props
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //passing function via props
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //Event handler
  // const handleClick = (event: MouseEvent)=> console.log(event)
  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>There is no item</p> : null} */}
      {items.length === 0 && <p>There is no item</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
