import React, { useEffect } from "react";

function PreventNavigation() {
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Some browsers require a return value
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return <div>Page content</div>;
}

export default PreventNavigation;
