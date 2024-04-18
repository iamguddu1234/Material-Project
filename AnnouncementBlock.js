import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "./edit.png"; // Import your image here
import AnnouncementBlockContent from "./AnnouncementBlockContent";

function AnnouncementBlock() {
  return (
    <Card
      sx={{
        // minWidth: "99%",

        overflowX: 'auto', // Allow horizontal scrolling if content overflows
        borderRadius: '10px',
        marginTop: '20px',
        marginBottom:"20px",
        marginRight:"20px",
        boxShadow: 'none',
        height: '350px', // Set fixed height
      }}
    >
      <CardContent sx={{ overflowX: 'auto' ,        height: '100%', // Set fixed height
}}>
       
        <AnnouncementBlockContent />
        <AnnouncementBlockContent />
        <AnnouncementBlockContent />

        <AnnouncementBlockContent />
        <AnnouncementBlockContent />
     
      </CardContent>
    </Card>
  );
}

export default AnnouncementBlock;
