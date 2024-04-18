import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here

function UpcommingEventsBlock2() {
  return (
    <Card
      sx={{
        width: "99%",
        height: "150px",
        borderRadius: "10px",

        boxShadow: "none",
        background: "#ecf0fc",
        display: "flex",
        marginBottom: "10px",
      }}
    >
      <Card style={{ width: "250px" , height: "100%",objectFit:"cover"}}>
        <CardMedia
          component="img"
          height="150"
          image="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png"
          alt="Image"
        />
      </Card>
      <CardContent style={{ position: "relative" }}>
        <img
          src={Image}
          alt="Top right image"
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
            fontSize: "16px",
          }}
        >
          Republic Day Celebration
        </Typography>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontSize: "13px" }}
        >
          26 jun 2024
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

export default UpcommingEventsBlock2;
