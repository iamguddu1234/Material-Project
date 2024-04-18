import logo from "./logo.svg";
import Button from "@mui/material/Button";
import "typeface-roboto";
import UpcommingEventsCard from "./UpcommingEventsCard";
import AssignmentCard from "./AssignmentCard";
import AssignmentCard2 from "./AssignmentCard2";
import ReminderBlock from "./ReminderBlock";

import AnnouncementBlock from "./AnnouncementBlock";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import RightSideMenu from "./RightSideMenu";
import UpcommingEventsBlock2 from "./UpcommingEventBlock2";

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
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Image}
                  alt="Top right image"
                  style={{
                    width: "20px", // Adjust image width as needed
                    height: "20px", // Adjust image height as needed
                  }}
                />
                <div>Announcement</div>
              </div>
              <div
                style={{
                  overflowX: "auto", // Allow horizontal scrolling if content overflows
                  overflowY: "auto", // Enable vertical scrolling if content overflows
                  borderRadius: "10px",
                  height: "355px",
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
              marginRight: "10px",
              boxShadow: "none",
            }}
          >
            <CardContent>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Image}
                  alt="Top right image"
                  style={{
                    width: "20px", // Adjust image width as needed
                    height: "20px", // Adjust image height as needed
                  }}
                />
                <div>Announcement</div>
              </div>
              <div
                style={{
                  overflowX: "auto", // Allow horizontal scrolling if content overflows
                  overflowY: "auto", // Enable vertical scrolling if content overflows
                  borderRadius: "10px",
                  height: "355px",
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
              width: "20%",
              borderRadius: "10px",
              marginLeft: "10px",
              boxShadow: "none",
              background: "#ecf0fc",
            }}
          >
            <CardContent>
              <div style={{}}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={Image}
                    alt="Top right image"
                    style={{
                      width: "20px", // Adjust image width as needed
                      height: "20px", // Adjust image height as needed
                    }}
                  />
                  <div>Announcement</div>
                </div>
                <div
                  style={{
                    overflowX: "auto", // Allow horizontal scrolling if content overflows
                    overflowY: "auto", // Enable vertical scrolling if content overflows
                    borderRadius: "10px",
                    height: "355px",
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

        <div style={{ width:"70%", marginLeft:"20px", }}>
          <div
            style={{ display: "flex", margin: "20px", alignItems: "center" }}
          >
            <img
              src={Image}
              alt="Top right image"
              style={{
                width: "20px", // Adjust image width as needed
                height: "20px", // Adjust image height as needed
                margin: "20px",
              }}
            />
            <div>Announcement</div>
          </div>

          <AnnouncementBlock />
        </div>
      </div>
    </div>
  );
}

export default App2;
