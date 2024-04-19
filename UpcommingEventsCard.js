import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import { CiShare1 } from "react-icons/ci";

function UpcommingEventsCard() {
  return (
    <Card
      sx={{
        width: 250,
        minWidth: "250px",
        borderRadius: "10px",
        marginLeft: "20px",
        marginRight: "5px",
        boxShadow: "none",
      }}
    >
      <CardMedia
        component="img"
        height="130"
        image="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png" // Replace this with your image URL
        alt="Image"
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "14px",
              color: "#434d5d",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            28 Jan 2024
          </Typography>

          <CiShare1
            style={{
              marginLeft: "5px",
              width: "10px", // Adjust image width as needed
              height: "10px", // Adjust image height as needed
            }}
          />
        </div>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontSize: "16px", color: "#222c36", fontWeight: "500" }}
        >
          Republic Day Celebration
        </Typography>
        <Typography
          variant="body1"
          color="#464c52"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "500" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam ac urna eu felis
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UpcommingEventsCard;
