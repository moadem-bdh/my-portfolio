
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Outline({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  const target = 98; // final value

  // Tailwind v4 breakpoints: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1200; // ms

    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const percent = Math.min(target, (elapsed / duration) * target);
      // setProgress(percent);
      if (percent < target) {
        frame = requestAnimationFrame(animate);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <Stack spacing={2} direction="row">
      <CircularProgress
        variant="determinate"
        value={-1 * percentage}
        sx={{ color: color }}
        size={md ? 84:42}
      />
    </Stack>
  );
}
