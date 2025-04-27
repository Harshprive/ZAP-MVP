import React from "react";
import { Card, CardContent } from "@mui/material";
import { Button } from "@mui/material";
import { MapPin, Mail, Phone, Instagram, Edit2 } from "lucide-react";

const ProviderProfile = ({ profile }) => {
  return (
    <Card className="bg-sky-50">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-sky-800">{profile.name}</h2>
          <Button
            variant="outline"
            size="sm"
            className="border-sky-500 text-sky-500 hover:bg-sky-100"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-600">{profile.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-3 bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-sky-700 mb-3">
                Contact Information
              </h3>

              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-sky-500" />
                <span className="text-gray-600">{profile.address}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-sky-500" />
                <span className="text-gray-600">{profile.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-sky-500" />
                <span className="text-gray-600">{profile.contact}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Instagram className="w-5 h-5 text-sky-500" />
                <span className="text-gray-600">{profile.instagram}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-sky-700">Work Portfolio</h3>
          <div className="grid grid-cols-3 gap-4">
            {profile.workPhotos.map((photo, index) => (
              <div key={index} className="relative">
                <img
                  src={photo}
                  alt={`Work ${index + 1}`}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProviderProfile;
