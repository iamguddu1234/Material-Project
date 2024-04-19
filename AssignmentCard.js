import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import { CiShare1 } from "react-icons/ci";


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
            fontSize: "16px",
            backgroundColor: "#ccd9f9",
            border: "1px solid blue",
            color: "blue",
            padding: "3px 10px", // adding padding for better visibility
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
          sx={{ fontSize: "16px",color:"#222c36",fontWeight:"500",marginTop:"10px" }}
        >
          Assignment Title
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "14px", color: "red",fontStyle:"italic" }}
        >
          Due on 28 Jan 2024
        </Typography>

        <Typography
          variant="body1"
          color="#464c52"
          sx={{ fontSize: "14px",marginTop:"10px"  }}
        >
          <span style={{ fontWeight: "500" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Typography>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: "14px",marginTop:"10px" , fontWeight:"400"}}
        >
          By Rajesh Kishan
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AssignmentCard;
