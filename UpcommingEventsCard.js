import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here


function UpcommingEventsCard() {
  return (
    <Card
      sx={{
        width: 250,
        minWidth: "250px",
        borderRadius: "10px",
        marginLeft: "20px",
        marginRight:"20px",
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
            sx={{ flexGrow: 1, fontSize: "16px" }}
          >
            28 Jan 2024
          </Typography>

          <img
            src={Image}
            alt="Image"
            style={{
              marginLeft: "5px",
              width: "14px", // Adjust image width as needed
              height: "14px", // Adjust image height as needed
            }}
          />
        </div>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontSize: "16px" }}
        >
          Republic Day Celebration
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "bold" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam ac urna eu felis
        
          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UpcommingEventsCard;
