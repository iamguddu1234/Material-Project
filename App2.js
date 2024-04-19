import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "typeface-roboto";
import UpcommingEventsCard from "./UpcommingEventsCard";
import AssignmentCard from "./AssignmentCard";
import AssignmentCard2 from "./AssignmentCard2";
import ReminderBlock from "./ReminderBlock";

import AnnouncementBlock from "./AnnouncementBlock";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
// import Image from "./edit.png"; // Import your image here
import RightSideMenu from "./RightSideMenu";
import UpcommingEventsBlock2 from "./UpcommingEventBlock2";
import { BsCalendar4 } from "react-icons/bs";
import {
  MdOutlineStickyNote2,
  MdDateRange,
  MdOutlineWifiTethering,
  MdNotificationsNone,
} from "react-icons/md";
import AnnouncementBlock2 from "./AnnouncementBlock2";
import Image from "./st.jpg"; // Import your image here

function App2() {
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
            justifyContent:"space-between",
            background: "white",
            borderBottom: "1px solid #eeeded",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{ textAlign: "center", marginLeft:"20px" ,  textAlign: "center",
            fontSize: "18px",
            fontWeight: "bold",}}
          >
            School Icon And Name
          </Typography>

<div  style={{
            display: "flex",
            alignItems: "center",
            
          }}>
          <div style={{ marginRight: "10px", position: "relative" }}>
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

          <div
            style={{
              display: "flex",
              marginLeft: "10px",

              marginRight: "10px",

              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <img
              src={Image}
              style={{
                width: "35px", // Adjust image width as needed
                height: "35px",
                borderRadius: "50%",
                objectFit: "cover",

                border: "1px solid #eeeded",
                // Adjust image height as needed
              }}
            />

            <div>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "10px",
                  color: "#273039",
                  fontSize: "14px",
                }}
              >
                User Name
              </Typography>
              <Typography
                variant="body1"
                style={{
                  marginLeft: "10px",
                  color: "#273039",
                  fontSize: "10px",
                }}
              >
                Admin
              </Typography>
            </div>
          </div>
          </div>


        </div>

        <div style={{ display: "flex", marginTop: "10px" }}>
          <Card
            sx={{
              width: "40%",
              borderRadius: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <MdDateRange
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

              <div
                style={{
                  overflowX: "auto", // Allow horizontal scrolling if content overflows
                  overflowY: "auto", // Enable vertical scrolling if content overflows
                  borderRadius: "10px",
                  height: "340px",
                }}
              >
                <UpcommingEventsBlock2 />
                <UpcommingEventsBlock2 />
                <UpcommingEventsBlock2 />
              </div>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: "40%",
              borderRadius: "10px",
              marginLeft: "10px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <MdOutlineStickyNote2
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
                  overflowX: "auto", // Allow horizontal scrolling if content overflows
                  overflowY: "auto", // Enable vertical scrolling if content overflows
                  borderRadius: "10px",
                  height: "340px",
                }}
              >
                <AssignmentCard2 />
                <AssignmentCard2 />
                <AssignmentCard2 />
              </div>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: "25%",
              borderRadius: "10px",
              boxShadow: "none",
              background: "#ecf0fc",
            }}
          >
            <CardContent>
              <div style={{}}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <MdOutlineStickyNote2
                    style={{
                      width: "20px", // Adjust image width as needed
                      height: "20px", // Adjust image height as needed
                      marginRight: "10px",
                    }}
                  />
                  <div style={{ color: "#263238", fontWeight: "bold" }}>
                    Reminders
                  </div>
                </div>
                <div
                  style={{
                    overflowX: "auto", // Allow horizontal scrolling if content overflows
                    overflowY: "auto", // Enable vertical scrolling if content overflows
                    borderRadius: "10px",
                    height: "340px",
                  }}
                >
                  <ReminderBlock />
                  <ReminderBlock />

                  <ReminderBlock />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div style={{ width: "60%", margin: "10px" }}>
          <div style={{ background: "white", borderRadius: "10px" }}>
            <div style={{ alignItems: "center", display: "flex" }}>
              <MdOutlineStickyNote2
                style={{
                  marginTop: "15px",
                  marginLeft: "10px",
                  width: "20px", // Adjust image width as needed
                  height: "20px", // Adjust image height as needed
                  marginRight: "10px",
                }}
              />
              <div
                style={{
                  color: "#263238",
                  fontWeight: "bold",
                  marginTop: "15px",
                  fontSize: "16px",
                }}
              >
                Announcements
              </div>
            </div>
            <AnnouncementBlock2 style={{ height: "200px" }} />
            {/* Subtracting 50px to accommodate for the header */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;
