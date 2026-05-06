import { useEffect } from "react";
import { useLocation } from "react-router";

const PAGE_TITLES: Record<string, string> = {
  "/": "Moadem Boudehane | Portfolio",
  "/projetcs": "Projects | Moadem Boudehane",
  "/experience": "Experience | Moadem Boudehane",
};

const DEFAULT_TITLE = "Moadem Boudehane | Portfolio";

export function usePageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? DEFAULT_TITLE;
  }, [pathname]);
}
