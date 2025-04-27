import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const ActivityCard = ({ name, activity, distance, timePosted, onAccept, onDecline }) => {
  return (
    <Card
      elevation={3}
      sx={{
        padding: 2,
        borderRadius: "16px",
        "&:hover": { transform: "translateY(-4px)", transition: "0.3s" },
      }}
    >
      <CardContent>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Avatar
            alt={name}
            src="/api/placeholder/60/60"
            sx={{ width: 64, height: 64 }}
          />
          <div>
            <Typography variant="h6" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary">{activity}</Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: 1 }}>
              <Typography
                variant="body2"
                color="success.main"
                sx={{
                  backgroundColor: "green.50",
                  padding: "4px 12px",
                  borderRadius: "16px",
                }}
              >
                {distance} miles away
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Posted {timePosted}
              </Typography>
            </Stack>
          </div>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => onAccept(name)}
            >
              Accept
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDecline(name)}
            >
              Decline
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
