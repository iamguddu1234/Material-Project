import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import { CiShare1 } from "react-icons/ci";


function UpcommingEventsBlock2() {
  return (
    <Card
      sx={{
        width: "95%",
        height: "140px",
        borderRadius: "10px",

        boxShadow: "none",
        background: "#ecf0fc",
        display: "flex",
        marginBottom: "20px",
      }}
    >
      <Card style={{ width: "250px" , height: "100%",objectFit:"cover"}}>
        <CardMedia
          component="img"
          height="140"
          image="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png"
          alt="Image"
        />
      </Card>
      <CardContent style={{ position: "relative" }}>
        <CiShare1
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: "14px", // Adjust image width as needed
            height: "14px", // Adjust image height as needed
          }}
        />

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            marginTop: "10px",
            fontSize: "16px", color: "#222c36", fontWeight: "500"
          }}
        >
          Republic Day Celebration
        </Typography>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{  fontSize: "14px",
          color: "#434d5d",
          fontWeight: "400",
          fontStyle: "italic", }}
        >
          26 jun 2024
        </Typography>
        <Typography
          variant="body1"
          color="#464c52"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "500" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UpcommingEventsBlock2;
