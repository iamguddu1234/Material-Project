import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here

function AssignmentCard() {
  return (
    <Card
      sx={{
        width: "300px",
        maxWidth: "300px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "none",
      }}
    >
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
            backgroundColor: "blue",
            border: "1px solid red",
            color: "white",
            padding: "5px 10px", // adding padding for better visibility
            display: "inline-block", // Limit width to the size of the text
            borderRadius: "20px", // Set border radius
          }}
        >
          math
        </Typography>

        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontSize: "16px" }}
        >
          Republic Day Celebration
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "16px", color: "red" }}
        >
          Due on 28 Jan 2024
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "bold" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam ac urna eu felis
          dapibus condimentum sit amet a nunc. Duis porttitor lorem eu faucibus
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "16px" }}
        >
          By Rajesh Kishan
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AssignmentCard;
