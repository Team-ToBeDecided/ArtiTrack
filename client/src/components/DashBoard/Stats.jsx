import { Box, Typography } from "@mui/material";
import ProgressCircle from "./ProgressCircle";
import { Card } from "@material-tailwind/react";

import { blueGrey, purple, red } from "@mui/material/colors";

function Stats({ title, subtitle, icon, progress, increase }) {
  // const theme = useTheme()
  // const colors = tokens(theme.palette.mode)
  return (
    // <Box width="100%" m="0 30px" className="p-3" >
      <Card className=" p-3 bg-[#FFE5D6]" >
      <Box display="flex" justifyContent="space-between" >
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
              color: blueGrey[900],
              fontFamily: "var(--font-heading)",
            }}
            // className=""
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="h5"
          sx={{
            color: "black",
            fontFamily: "var(--font-heading)",
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{
            color: red,
          }}
        >
          {increase}
        </Typography>
      </Box>
      </Card>
    // </Box>
  );
}

export default Stats;
