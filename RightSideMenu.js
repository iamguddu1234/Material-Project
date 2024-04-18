import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here

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
          borderRight: "1px solid grey",
        }}
      >
        <div
          style={{
            // justifyContent: "center",
            alignItems: "center",
            height: "50px",
            display: "flex",
            cursor: "pointer",
            borderBottom: "1px solid black",
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
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
            Excel
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
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
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
            Canteen Management
          </Typography>
        </div>

        <div
          style={{
            width: "93%",
            borderBottom: "1px solid grey",
            margin: "10px",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            margin: "10px",
            cursor: "pointer",
            marginTop: "auto", // Align "Setting" div to the bottom
          }}
        >
          <img
            src={Image}
            style={{
              width: "20px", // Adjust image width as needed
              height: "20px", // Adjust image height as needed
            }}
          />
          <Typography variant="body1" style={{ marginLeft: "10px" }}>
            Setting
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default RightSideMenu;
