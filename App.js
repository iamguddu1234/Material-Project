import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "typeface-roboto";
import UpcommingEventsCard from "./UpcommingEventsCard";
import AssignmentCard from "./AssignmentCard";
import AnnouncementBlock from "./AnnouncementBlock";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import RightSideMenu from "./RightSideMenu";
import { BsCalendar4 } from "react-icons/bs";
import {
  MdOutlineStickyNote2,
  MdDateRange,
  MdOutlineWifiTethering,
  MdNotificationsNone,
} from "react-icons/md";

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
            borderBottom: "1px solid #eeeded",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{
              flexGrow: 1,
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            School Icon And Name
          </Typography>

          <div style={{ marginRight: "40px", position: "relative" }}>
            <MdNotificationsNone
              style={{
                width: "20px", // Adjust image width as needed
                height: "20px", // Adjust image height as needed
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "3px", // Adjust the top position to align the dot properly
                left: "14px", // Adjust the left position to position the dot to the left side
                width: "6px",
                height: "6px",
                background: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </div>

        <div style={{ display: "flex", margin: "20px" }}>
          <MdOutlineStickyNote2
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
              marginRight: "10px",
            }}
          />
          <div style={{ color: "#263238", fontWeight: "bold" }}>
            Upcomming Event
          </div>
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
            <div style={{ display: "flex", margin: "20px" }}>
              <MdDateRange
                style={{
                  width: "20px", // Adjust image width as needed
                  height: "20px", // Adjust image height as needed
                  marginRight: "10px",
                }}
              />
              <div style={{ color: "#263238", fontWeight: "bold" }}>
                Assignments
              </div>
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
            <div style={{ display: "flex", marginTop: "20px" }}>
              <MdOutlineWifiTethering
                style={{
                  width: "20px", // Adjust image width as needed
                  height: "20px", // Adjust image height as needed
                  marginRight: "10px",
                }}
              />
              <div style={{ color: "#263238", fontWeight: "bold" }}>
                Announcement
              </div>
            </div>

            <AnnouncementBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
