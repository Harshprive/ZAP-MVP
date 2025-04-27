import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Badge,
  Box,
  Grid,
} from "@mui/material";
import { Calendar, Clock, MapPin, Phone, User, CheckCircle } from "lucide-react";

const AppointmentViewer = () => {
  const appointments = [
    {
      id: 1,
      service: "Website Development",
      date: "2025-01-10",
      time: "10:00 AM",
      status: "confirmed",
      location: "Online Meeting",
      clientName: "John Smith",
      contact: "+1 234-567-8900",
      requirements: "E-commerce website with payment integration",
    },
    
  ];

  const getStatusColor = (status) => {
    const colors = {
      confirmed: "success",
      pending: "warning",
      cancelled: "error",
    };
    return colors[status] || "default";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Box sx={{  p: 4 ,minHeight:'70vh'}}>
      <Box sx={{ maxWidth: "800px", mx: "auto", mb: 4, }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          My Appointments
        </Typography>
        <Typography variant="body1" color="text.secondary">
          View and manage your scheduled web development services
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {appointments.map((appointment) => (
          <Grid item xs={12} key={appointment.id}>
            <Card elevation={3}>
              <CardHeader
                title={appointment.service}
                subheader={`Appointment #${appointment.id}`}
                titleTypographyProps={{ fontWeight: "bold" }}
                subheaderTypographyProps={{ color: "text.secondary" }}
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Date
                        </Typography>
                        <Typography variant="body1">
                          {formatDate(appointment.date)}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                      <Clock className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Time
                        </Typography>
                        <Typography variant="body1">
                          {appointment.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Location
                        </Typography>
                        <Typography variant="body1">
                          {appointment.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <User className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Client Name
                        </Typography>
                        <Typography variant="body1">
                          {appointment.clientName}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                      <Phone className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Contact
                        </Typography>
                        <Typography variant="body1">
                          {appointment.contact}
                        </Typography>
                      </Box>
                    </Box>

                    <Box display="flex" alignItems="center" gap={2} mt={2}>
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          Requirements
                        </Typography>
                        <Typography variant="body1">
                          {appointment.requirements}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AppointmentViewer;
