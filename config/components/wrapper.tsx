import { Box } from "@mui/material";

export default function Wrapper(props) {
  return (
    <div className="m-3">
      <h1 className="m-5 text-xl">Visplay</h1>

      <Box sx={{ border: 1, borderColor: "divider" }}>
        <div>{props.children}</div>
      </Box>
    </div>
  );
}
