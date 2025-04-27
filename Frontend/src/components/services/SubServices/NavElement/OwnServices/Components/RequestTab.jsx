import React from 'react';
import { useState } from 'react';
import { TabsContent} from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import { MessageCircle, Phone, Camera, Edit2, Send, MapPin, Mail, Instagram } from 'lucide-react';




const RequestTab = () => {

    const [requests, setRequests] = useState([
        {
          id: 1,
          userName: "John Doe",
          description: "Need plumbing service for bathroom repair",
          contact: "+1234567890",
          status: "pending"
        },
        {
          id: 2,
          userName: "Jane Smith",
          description: "Kitchen sink installation required",
          contact: "+1987654321",
          status: "pending"
        }
      ]);


    const [acceptedRequests, setAcceptedRequests] = useState([
        {
            id: 1,
            userName: "John Doe",
            description: "Need plumbing service for bathroom repair",
            contact: "+1234567890",
            status: "pending"
          },
          {
            id: 2,
            userName: "Jane Smith",
            description: "Kitchen sink installation required",
            contact: "+1987654321",
            status: "pending"
          }
        
    ]);

    const handleAcceptRequest = (request) => {
        setRequests(requests.filter(r => r.id !== request.id));
        setAcceptedRequests([...acceptedRequests, { ...request, status: "accepted" }]);
      };

  return (
    <div value="requests">
          <div className="space-y-4">
            {requests.map((request) => (
              <Card key={request.id} className="bg-sky-50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-sky-800">{request.userName}</h3>
                      <p className="text-gray-600 mt-2">{request.description}</p>
                      
                    </div>
                    <Button
                      onClick={() => handleAcceptRequest(request)}
                      className="bg-sky-500 hover:bg-sky-600 hover:text-white"
                    >
                      Accept Request
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  )
}

export default RequestTab
