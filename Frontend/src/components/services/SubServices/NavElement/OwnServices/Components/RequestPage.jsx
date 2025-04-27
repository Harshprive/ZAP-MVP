import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityCards = () => {
  const activities = [
    {
      id: 1,
      name: "Sarah Parker",
      activity: "Looking for a running partner this evening",
      distance: "0.5",
      timePosted: "15 minutes ago",
    },
    {
      id: 2,
      name: "Mike Johnson",
      activity: "Basketball game at Central Park",
      distance: "1.2",
      timePosted: "30 minutes ago",
    },
    {
      id: 3,
      name: "Emma Wilson",
      activity: "Coffee and board games meetup",
      distance: "0.8",
      timePosted: "45 minutes ago",
    },
  ];

  const handleAccept = (name) => {
    console.log(`${name}'s activity was accepted.`);
  };

  const handleDecline = (name) => {
    console.log(`${name}'s activity was declined.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10 px-4 ">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Activity Requests
          </h1>
          <p className="text-gray-600">People near you want to connect</p>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              name={activity.name}
              activity={activity.activity}
              distance={activity.distance}
              timePosted={activity.timePosted}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
