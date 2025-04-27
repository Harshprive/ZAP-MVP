import React, { useState } from "react";
import { Box, Typography, Button, Avatar, Grid, Card, CardContent } from "@mui/material";
import shopData from "./GallaryData";
import WorkRequestPopUp from "./WorkGallaryRequestPopUp";
import BookingConfirmation from "../Bookings/ConfirmBooking/ConfirmBooking";

const WorkGallery = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePopupSuccess = () => {
    setShowPopUp(false);
    setShowConfirmation(true);
  };

  return (
    <Box maxWidth={960} mx="auto" p={2}>
      {/* Header Section */}
      <Box mb={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={shopData.profileImage} sx={{ width: 64, height: 64 }} />
            <Box>
              <Typography variant="h5" fontWeight="bold">{shopData.name}</Typography>
              <Typography variant="body2" color="textSecondary">{shopData.address}</Typography>
              <Typography variant="body2" color="gray">{shopData.email}</Typography>
            </Box>
          </Box>
          <Button variant="contained" sx={{background:'#9333ea',borderRadius:'10px',boxShadow:'none'}} onClick={() => setShowPopUp(true)}>
            Request
          </Button>
        </Box>

        {/* Stats */}
        <Grid container spacing={2} mb={4}>
          {Object.entries(shopData.stats).map(([key, value], index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card sx={{boxShadow:'none'}}>
                <CardContent align="center">
                  <Typography variant="body2" fontWeight="medium">{key}</Typography>
                  <Typography variant="h6" fontWeight="bold">{value}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Services */}
        <Grid container spacing={2} mb={4}>
          {["Main Services", "Additional Services"].map((title, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>{title}</Typography>
                  <Box display="flex" flexWrap="wrap" gap={1}>
                    {(index === 0 ? shopData.services.main : shopData.services.sub).map((service, idx) => (
                      <Box key={idx} px={1} py={0.5} bgcolor="grey.300" borderRadius={1} fontSize={12}>
                        {service}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Gallery */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" mb={2}>Gallery</Typography>
        <Grid container spacing={2}>
          {shopData.images.map((image, index) => (
            <Grid item xs={4} key={index}>
              <Box component="img" src={image} alt={`Gallery ${index + 1}`} width="100%" borderRadius={1} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Reviews */}
      <Box>
        <Typography variant="h6" fontWeight="bold" mb={2}>Customer Reviews</Typography>
        <Box display="flex" flexDirection="column" gap={2}>
          {shopData.reviews.map((review) => (
            <Card key={review.id}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography variant="body2" fontWeight="medium">{review.user}</Typography>
                  <Box px={1} bgcolor="#6b21a8" color="white" borderRadius={1} fontSize={14}>{`${review.rating} ★`}</Box>
                </Box>
                <Typography variant="body2" color="textSecondary" mb={1}>{review.comment}</Typography>
                <Typography variant="caption" color="gray">{review.date}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Popups */}
      {showPopUp && <WorkRequestPopUp onClose={() => setShowPopUp(false)} onSuccess={handlePopupSuccess} />}
      {showConfirmation && <BookingConfirmation />}
    </Box>
  );
};

export default WorkGallery;
