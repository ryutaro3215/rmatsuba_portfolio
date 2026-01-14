import { useState } from "react";

export const TestComponent = () => {
  const [count, setCount] = useState(0);

  const onclick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button type="button" onClick={onclick}>
        Increment
      </button>
    </div>
  );
  // return <div>Test Component</div>;
};
