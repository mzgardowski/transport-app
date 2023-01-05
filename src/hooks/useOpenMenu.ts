import { useEffect, useState } from "react";
import useWindowSize from "./useWindowSize";

const useOpenMenu = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const { windowSize } = useWindowSize();

  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (windowSize.width >= 600) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [windowSize]);

  return { menuOpen, handleOpenMenu };
};

export default useOpenMenu;
