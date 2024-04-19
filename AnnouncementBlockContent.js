import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import { CiShare1 } from "react-icons/ci";


function AnnouncementBlockContent() {
  return (
   <div>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ fontSize: "16px" ,marginTop: '10px',fontWeight:"500"}}
        >
          Announcement Title
        </Typography>

        <div style={{ display: "flex", flexDirection: "row", fontStyle:"italic" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: "14px", color: "red"}}
          >
            Due on 28 Jan 2024
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "14px" , marginLeft: "20px"}}
          >
            By Rajesh Kishan
          </Typography>
        </div>

        <Typography
          variant="body1"
          color="#575f65"
          sx={{ fontSize: "14px" }}
        >
          <span style={{ fontWeight: "500" }}>Description:</span> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nullam ac urna eu felis
          dapibus condimentum sit amet a nunc. Duis porttitor lorem eu faucibus
        </Typography>

        <div style={{ width: '100%', borderBottom: '1px solid #eeeded', marginTop: '10px' }}></div>

        </div>
   
  );
}

export default  AnnouncementBlockContent;
