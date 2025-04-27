import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Star, Clock, ThumbsUp, Medal, Send } from 'lucide-react';


const ServiceProviderReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');

  const provider = {
    name: "John Smith",
    service: "Plumbing Services",
    image: "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg",
    completedJobs: 158,
    responseTime: "Under 30 mins",
    satisfaction: "98%"
  };

  const presetReviews = [
    "Very professional and completed the job efficiently",
    "Arrived on time and provided excellent service",
    "Clean work and great attention to detail",
    "Friendly, knowledgeable, and helpful",
    "Fair pricing and transparent communication"
  ];

  const handlePresetClick = (preset) => {
    setReview(preset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, review });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8 mt-16">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Rate Your Experience</h1>
          <p className="text-blue-600">Your feedback helps improve our service quality</p>
        </div>

        <div className="gap-6 flex flex-col">
          {/* Provider Info Card */}
          <Card className="md:col-span-1 border-blue-100">
          <div className="bg-blue-50 rounded-t-lg h-[80px] flex items-center">
  <h1 className="text-xl h-26 font-semibold text-blue-900 pl-3 ">Service Provider</h1>
</div>

            <CardContent>
              <div className="flex flex-col items-center">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-24 h-24 rounded-full mb-4 border-2 border-blue-200 object-cover"
                />
                <h3 className="text-lg font-semibold text-blue-900">{provider.name}</h3>
                <p className="text-blue-600 mb-4">{provider.service}</p>
                
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Completed Jobs</span>
                    <span className="font-medium text-blue-900">{provider.completedJobs}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Response Time</span>
                    <span className="font-medium text-blue-900">{provider.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-700">Satisfaction</span>
                    <span className="font-medium text-blue-900">{provider.satisfaction}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review Form Card */}
          <Card className="md:col-span-2 border-blue-100">
            <CardHeader className="bg-blue-50 rounded-t-lg">
              <Typography className="text-xl font-semibold text-blue-900">Write Your Review</Typography>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Star Rating */}
                <div className="flex flex-col space-y-2">
                  <label className="text-sm font-medium text-blue-700">Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            (hover || rating) >= star
                              ? 'text-blue-400 fill-blue-400'
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>


                {/* Preset Reviews */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">
                    Quick Suggestions
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {presetReviews.map((preset, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handlePresetClick(preset)}
                        className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition duration-200"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-700">
                    Your Review
                  </label>
                  <textarea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 bg-white"
                    placeholder="Share your experience with this service provider..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit Review
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderReview;
