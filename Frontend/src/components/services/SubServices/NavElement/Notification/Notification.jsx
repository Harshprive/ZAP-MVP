// NotificationDrawer.js
import React from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const notifications = [
  { title: "New Message", message: "You have a new message", time: "2 mins ago" },
  { title: "Update", message: "Your profile was updated", time: "1 hour ago" }
];

const NotificationDrawer = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
      <div className="w-80">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <Typography variant="h6">Notifications</Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Notification List */}
        <div className="overflow-y-auto h-full pb-20">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {notifications.map((notification, index) => (
                <div key={index} className="p-4 hover:bg-gray-50">
                  <Typography variant="subtitle1" fontWeight="bold">
                    {notification.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {notification.message}
                  </Typography>
                  <Typography variant="caption" color="gray">
                    {notification.time}
                  </Typography>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">No new notifications</div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default NotificationDrawer;
