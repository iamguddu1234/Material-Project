import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here

function ReminderBlock() {
  return (
    <Card
      sx={{
        width: "92%",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "none",
      }}
    >
      <CardContent style={{ position: "relative" }}>
      

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{fontSize: "16px",color:"#222c36",fontWeight:"500"}}
        >
          Reminder
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "14px", color: "#464c52" , fontStyle:"italic"}}
        >
          28 Jan 2024
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "bold" }}>Description:</span> Lorem ipsum
          dolor sit amet
        </Typography>

     
      </CardContent>
    </Card>
  );
}

export default ReminderBlock;
