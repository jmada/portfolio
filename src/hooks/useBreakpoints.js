import { useMediaQuery } from "react-responsive";

export default function useBreakpoints() {
  const isXsmall = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isSmall = useMediaQuery({
    query: "(min-width: 481px) and (max-width: 736px)",
  });
  const isMedium = useMediaQuery({
    query: "(min-width: 737px) and (max-width: 1024px)",
  });
  const isLarge = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1280px)",
  });
  const isXlarge = useMediaQuery({
    query: "(min-width: 1281px) and (max-width: 1680px)",
  });

  return {
    isXsmall,
    isSmall,
    isMedium,
    isLarge,
    isXlarge,
  };
}
