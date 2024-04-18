import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "typeface-roboto";
import UpcommingEventsCard from "./UpcommingEventsCard";
import AssignmentCard from "./AssignmentCard";
import AnnouncementBlock from "./AnnouncementBlock";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import RightSideMenu from "./RightSideMenu";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        // maxHeight:"100vh",
        // minHeight:"100vh",
        display: "flex",
        // width:"100%",
        background: "#ecf0fc",
      }}
    >
      <RightSideMenu />

      <div style={{ width: "99%", height: "100vh" }}>
        <div
          style={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            background: "white",
            borderBottom: "1px solid black",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{ flexGrow: 1, textAlign: "center" }}
          >
            math
          </Typography>
          <img
            src={Image}
            alt="Top right image"
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
              marginRight: "20px",
            }}
          />
        </div>

        <div style={{ display: "flex", margin:"20px"}}>
          <img
            src={Image}
            alt="Top right image"
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
              marginRight: "20px",
            }}
          />
          <div>Upcomming Event</div>
        </div>




        <div style={{ display: "flex", flex: 1, overflowX: "auto" }}>

          <div style={{ width: "500px", display: "flex" }}>
            
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
            <UpcommingEventsCard />
          </div>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          
          <div>
          <div style={{ display: "flex", margin:"20px"}}>
          <img
            src={Image}
            alt="Top right image"
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
              marginRight: "20px",
            }}
          />
          <div>Upcomming Event</div>
        </div>
          <div
            style={{
              width: "350px",
              overflowX: "auto", // Allow horizontal scrolling if content overflows
              overflowY: "auto", // Enable vertical scrolling if content overflows
              borderRadius: "10px",
              boxShadow: "none",
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "20px",
              height: "355px", // Set fixed height
            }}
          >
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
            <AssignmentCard />
          </div>
          </div>

          <div>
          <div style={{ display: "flex", margin:"20px"}}>
          <img
            src={Image}
            alt="Top right image"
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
              marginRight: "20px",
            }}
          />
          <div>Announcement</div>
        </div>

            <AnnouncementBlock />
          </div>


        </div>
      </div>
    </div>
  );
}

export default App;
