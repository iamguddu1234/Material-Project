import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import { CiShare1 } from "react-icons/ci";


function AssignmentCard2() {
  return (
    <Card
      sx={{
        width: "95%",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "none",
        background: "#ecf0fc",
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
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "bold" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis porttitor lorem eu faucibus
        </Typography>

        <div style={{ display: "flex", justifyContent: "space-between",marginTop:"10px"}}>
          <Typography variant="h6" component="div" sx={{ fontSize: "14px", fontWeight:"400" }}>
            By Rajesh Kishan
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "14px", color: "red", fontStyle:"italic" }}
          >
            Due on 28 Jan 2024
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default AssignmentCard2;
