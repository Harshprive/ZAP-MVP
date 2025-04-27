import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Button, Typography, Box } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { Phone, MapPin } from 'lucide-react';

const CreateServiceForm = () => {
  const imageFileInputRef = useRef(null); // Reference for image file input
  const documentFileInputRef = useRef(null); // Reference for document file input
  const [uploadedImages, setUploadedImages] = useState([]); // State to store uploaded image files
  const [uploadedDocuments, setUploadedDocuments] = useState([]); // State to store uploaded document files
  const [serviceDetails, setServiceDetails] = useState({
    title: '',
    description: '',
    primaryContact: '',
    alternativeContact: '',
    location: '',
    fullAddress: '',
  }); // State to store form details

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data and file names to localStorage
    const formData = {
      ...serviceDetails,
      uploadedImages: uploadedImages.map((file) => file.name),
      uploadedDocuments: uploadedDocuments.map((file) => file.name),
    };
    localStorage.setItem('serviceFormData', JSON.stringify(formData));

    // Log the saved data
    console.log('Form Data Saved:', formData);
  };

  const handleFileChange = (e, fileType) => {
    const files = e.target.files;
    if (files.length > 0) {
      const filesArray = Array.from(files);
      if (fileType === 'image') {
        setUploadedImages(filesArray);
      } else if (fileType === 'document') {
        setUploadedDocuments(filesArray);
      }
    }
  };

  const handleBoxClick = (fileType) => {
    if (fileType === 'image') {
      imageFileInputRef.current.click(); // Trigger image file input on box click
    } else if (fileType === 'document') {
      documentFileInputRef.current.click(); // Trigger document file input on box click
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceDetails({
      ...serviceDetails,
      [name]: value,
    });
  };

  return (
    <>
      <div className="md:mt-10 p-[10px] md:p-[50px] shadow-lg ">
        <div className="pb-[10px] pt-[10px]">
          <h5>
            Home/<span className="text-red-600 text-green-700">Create Service</span>
          </h5>
        </div>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom color="primary">
              Create Your Service
            </Typography>

            <form
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* Basic Information */}
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Basic Information
                </Typography>
                <input
                  type="text"
                  name="title"
                  value={serviceDetails.title}
                  placeholder="Enter service title"
                  required
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    marginBottom: '16px',
                    border: '2px #D7BBF5 solid',outline:'none'
                  }}
                />
                <textarea
                  name="description"
                  value={serviceDetails.description}
                  placeholder="Enter description"
                  required
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    minHeight: '100px',
                    marginTop: '16px',
                    border: '2px #D7BBF5 solid',
                    outline:'none'
                  }}
                />
              </Box>

              {/* Contact Information */}
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Contact Information
                </Typography>
                <div style={{  width: '100%',border: '2px #D7BBF5 solid',display:'flex',alignItems:'center' }}>
                <PhoneIcon style={{ fontSize: '34px', paddingLeft:'10px'}} />
                  <input
                    type="text"
                    name="primaryContact"
                    value={serviceDetails.primaryContact}
                    placeholder="Enter primary contact"
                    required
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px 8px 8px 10px',
                      borderRadius: '4px',alignItems: 'center',
                      outline:'none'
                    }}
                  />
                  
                </div>
                <input
                  type="text"
                  name="alternativeContact"
                  value={serviceDetails.alternativeContact}
                  placeholder="Enter alternative contact"
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '16px',
                    border: '2px #D7BBF5 solid',
                    outline:'none'
                  }}
                />
              </Box>

              {/* Location Details */}
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Location Details
                </Typography>
                <div style={{ position: 'relative', width: '100%' }}>
                  <input
                    type="text"
                    name="location"
                    value={serviceDetails.location}
                    placeholder="Enter location"
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px 8px 8px 40px',
                      borderRadius: '4px',
                      border: '2px #D7BBF5 solid',
                      outline:'none'
                    }}
                  />
                  <MapPin
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      fontSize: '18px',
                      color: 'purple',
                    }}
                  />
                </div>
                <input
                  type="text"
                  name="fullAddress"
                  value={serviceDetails.fullAddress}
                  placeholder="Enter full address"
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    marginTop: '16px',
                    border: '2px #D7BBF5 solid',
                    outline:'none'
                  }}
                />
              </Box>
              <Box marginBottom={'0px'}>
                <Typography variant="subtitle1" color="primary">
                  Legal Documents
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    marginBottom: '16px',
                    color: '#7149C7',
                    justifyContent: 'center',
                    border: '2px #A188D9 solid',
                    height: '40px',
                    background: '#D7BBF5',
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '8px',
                  }}
                >
                  Please upload relevant legal documents (business registration, licenses, certificates)
                </Typography>
                </Box>

              {/* Image Upload */}
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Upload Images
                </Typography>
                <Box
                  className="border border-red-600"
                  border="1px dashed gray"
                  padding="16px"
                  textAlign="center"
                  borderRadius="8px"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleBoxClick('image')}
                >
                  <img
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt="Upload"
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'block',
                      margin: 'auto',
                    }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    Click to upload images
                  </Typography>
                </Box>
                <input
                  ref={imageFileInputRef}
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange(e, 'image')}
                  style={{ display: 'none' }}
                  accept="image/*"
                />
                {uploadedImages.length > 0 && (
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                    Uploaded Images: {uploadedImages.map((file) => file.name).join(', ')}
                  </Typography>
                )}
              </Box>

              {/* Document Upload */}
              <Box>
                <Typography variant="subtitle1" color="primary">
                  Upload Documents
                </Typography>
                <Box
                  className="border border-red-600"
                  border="1px dashed gray"
                  padding="16px"
                  textAlign="center"
                  borderRadius="8px"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleBoxClick('document')}
                >
                  <img
                    src="https://www.svgrepo.com/show/530408/upload.svg"
                    alt="Upload"
                    style={{
                      width: '40px',
                      height: '40px',
                      display: 'block',
                      margin: 'auto',
                    }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    Click to upload documents
                  </Typography>
                </Box>
                <input
                  ref={documentFileInputRef}
                  type="file"
                  multiple
                  onChange={(e) => handleFileChange(e, 'document')}
                  style={{ display: 'none' }}
                  accept="application/pdf, image/*"
                />
                {uploadedDocuments.length > 0 && (
                  <Typography variant="body2" color="textSecondary" style={{ marginTop: '8px' }}>
                    Uploaded Documents: {uploadedDocuments.map((file) => file.name).join(', ')}
                  </Typography>
                )}
              </Box>

              {/* Submit Button */}
              <Link to='/create-service/Pricing-plan'>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                style={{
                  backgroundColor: '#4F23B8',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Submit Service Profile
              </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CreateServiceForm;
