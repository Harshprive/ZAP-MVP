

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Upload } from 'lucide-react';

const CreateServiceForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Card className=" bg-green-900 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <h2 className="text-2xl font-semibold text-purple-600">Create your Service</h2>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600">Basic Information</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Title</label>
              <Input placeholder="Text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea placeholder="Text" className="min-h-[100px]" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600">Contact Information</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone size={16} />
                Primary Contact
              </label>
              <Input placeholder="Text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Alternative Contact</label>
              <Input placeholder="Text" />
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600">Location Details</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin size={16} />
                Location
              </label>
              <Input placeholder="Text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Address</label>
              <Input placeholder="Text" />
            </div>
          </div>

          {/* Legal Documents */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-purple-600">Legal Documents</h3>
            <div className="bg-purple-100 p-3 rounded-md text-sm text-purple-700">
              Please upload relevant legal document (business registration, licenses, certificate)
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Upload className="text-gray-400" />
                <span className="text-sm text-gray-500">Click to upload document</span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
            Submit Service Profile
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateServiceForm;

