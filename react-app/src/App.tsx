// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["Seoul", "Pyongyang", "Beijing", "Tokyo"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Alert from "./components/Alert";

// function App() {
//   return (
//     <div>
//       <Alert>
//         This is an <span>alert</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>Click me!</Button>
    </div>
  );
}

export default App;
