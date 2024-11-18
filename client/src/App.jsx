import { useEffect, useRef } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Ensure you import Locomotive Scroll styles

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
