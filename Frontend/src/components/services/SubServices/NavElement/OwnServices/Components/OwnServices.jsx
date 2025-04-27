import React from 'react';
import {  Badge,Button, Typography,} from '@mui/material';
import { Star as StarIcon, LocationOn as MapPin, Phone as PhoneIcon, Mail as MailIcon, AccessTime as ClockIcon } from '@mui/icons-material';

import {  Edit2 } from "lucide-react";

const ServiceProfile = () => {
  return (
    <div className="max-w-[80vw] mx-auto py-10
    px-6 bg-red rounded-xl shadow-xl my-10 bg-white ">
      {/* Header */}
      <div className="space-y-4 border-b pb-4  ">
        <div className="flex justify-between items-start w-[88%] items-center">
          <Typography variant="h6" component="h1" color="primary">Service Profile</Typography>
         <div>
         {/*<Badge badgeContent="Active" color="primary" />*/}
          <Button
            variant="outline"
            size="sm"
            className="border-sky-500 text-sky-500 hover:bg-sky-600 hover:text-white hover:font"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
         </div>
        </div>

        <div className="flex items-center gap-2">
          <Typography variant="body1" component="h2" fontWeight="medium">Professional Cleaning Services</Typography>
          <div className="flex items-center gap-1">
            <StarIcon style={{ width: 16, height: 16, color: '#6a1b9a' }} />
            <Typography variant="body2" color="textSecondary">4.8</Typography>
            <Typography variant="body2" color="textSecondary">(127 reviews)</Typography>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-4 border-b">
        <Typography variant="h6" component="h3" gutterBottom>About</Typography>
        <Typography variant="body2" color="textSecondary">
          At Urbanservice, we believe in empowering communities through innovative solutions tailored to everyday 
          needs. Our services aim to bring convenience and quality directly to our customers' doors, with a focus on 
          sustainability, affordability, and ease of access.
        </Typography>
      </section>

      {/* Service Images */}
      <section className="py-4 border-b">
        <Typography variant="h6" component="h3" gutterBottom>Service Image</Typography>
        <div className="space-y-4">
          <img 
            src="https://th.bing.com/th/id/OIP.KyWO-QWizB0N6MNgXjl92wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain"
            alt="Service professional meeting client"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img 
            src="https://th.bing.com/th/id/OIP.KyWO-QWizB0N6MNgXjl92wHaEo?w=2560&h=1600&rs=1&pid=ImgDetMain"
            alt="Service professional cleaning"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-4">
        <Typography variant="h6" component="h3" gutterBottom>Location & Contact</Typography>
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin style={{ width: 20, height: 20, color: '#757575' }} />
            <div>
              <Typography variant="body1" fontWeight="medium">Home</Typography>
              <Typography variant="body2" color="textSecondary">At Urbanservice, we believe in empowering communities through</Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <PhoneIcon style={{ width: 20, height: 20, color: '#757575' }} />
            <Typography variant="body2" color="textSecondary">+91 1234567890</Typography>
          </div>

          <div className="flex items-center gap-2">
            <MailIcon style={{ width: 20, height: 20, color: '#757575' }} />
            <Typography variant="body2" color="textSecondary">Contact@gmail.com</Typography>
          </div>

          <div className="flex items-center gap-2">
            <ClockIcon style={{ width: 20, height: 20, color: '#757575' }} />
            <Typography variant="body2" color="textSecondary">Mon-Sat 9:00 AM - 6:00 PM</Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceProfile;
