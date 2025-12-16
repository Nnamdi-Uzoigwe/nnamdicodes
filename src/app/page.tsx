// import { ThemeToggle } from "./components/ThemeToggle";
// import Home from "./home/page";

// export default function App() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }


'use client'

import { useEffect, useState } from 'react'
import Home from './home/page';

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <Home />
      </div>
    );
  }

  return (
    <div>
      <Home />
    </div>
  );
}