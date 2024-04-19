import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./st.jpg"; // Import your image here
import {
  MdOutlineHome,
  MdOutlinePersonAdd,
  MdOutlineSettings,
  MdOutlineAccessTime,
} from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineRead } from "react-icons/ai";
import { GrNotes } from "react-icons/gr";
import { SlGraph } from "react-icons/sl";
import { PiBowlFoodBold } from "react-icons/pi";

function RightSideMenu() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "250px", // Fixed width
          height: "100vh", // 100% viewport height
          background: "white",
          minWidth: "250px",
          borderRight: "1px solid #eeeded",
        }}
      >
        <div
          style={{
            // justifyContent: "center",
            alignItems: "center",
            height: "50px",
            display: "flex",
            cursor: "pointer",
            borderBottom: "1px solid #eeeded",
          }}
        >
          <img
            src={Image}
            style={{
              marginLeft: "10px",
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Logo And Name
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <MdOutlineHome
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Dashboard
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <MdOutlinePersonAdd
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Admission
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <GiNetworkBars
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Progress Report
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <AiOutlineRead
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Lesson Plan
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <GrNotes
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Exam Management
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <SlGraph
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Summary
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <MdOutlineAccessTime
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Student Report
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <PiBowlFoodBold
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography
            variant="body1"
            style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
          >
            Canteen Management
          </Typography>
        </div>

        <div
          style={{
            width: "93%",
            borderBottom: "1px solid #eeeded",
            margin: "10px",
          }}
        ></div>

        <div
          style={{ marginTop: "auto" }} // Align "Setting" div to the bottom
        >
          <div
            style={{
              display: "flex",
              margin: "10px",
              cursor: "pointer",
              marginTop: "auto",
              marginBottom: "50px", // Align "Setting" div to the bottom
            }}
          >
            <MdOutlineSettings
              style={{
                width: "20px", // Adjust image width as needed
                height: "20px", // Adjust image height as needed
              }}
            />
            <Typography
              variant="body1"
              style={{ marginLeft: "10px", color: "#273039", fontSize: "14px" }}
            >
              Setting
            </Typography>
          </div>

          <div
            style={{
              width: "93%",
              borderBottom: "1px solid #eeeded",
              margin: "10px",
            }}
          ></div>

          <div
            style={{
              display: "flex",
              marginTop: "10px",
              marginLeft: "10px",

              marginRight: "10px",
              marginBottom: "30px",

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
    </div>
  );
}

export default RightSideMenu;
