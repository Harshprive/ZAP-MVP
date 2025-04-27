import React from 'react';
import { CardHeader, CardContent, CardActions, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';



const PricingCard = ({ planType, features }) => (
  <div className='bg-white  w-[75%] border-solid hover:border-purple-800 border-[3px] border-transparent border shadow-lg rounded-lg mb-5'>
    <CardHeader
      title={
        <Typography variant="h6" color="#4F23B8" fontWeight="700">
          {planType}
        </Typography>
      }
      subheader={
        <div>
          <Typography variant="h4" component="span" color="text.primary">
            Rs .60
          </Typography>
          <Typography
            variant="body2"
            component="span"
            color="text.secondary"
            sx={{ marginLeft: 1 }}
          >
            /month
          </Typography>
        </div>
      }
    />
    <CardContent>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <CheckCircleIcon fontSize="small" color="action" style={{ marginRight: 8 }} />
            <Typography variant="body2" color="text.secondary">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardActions>
      <Link to='/create-service/service-profile' className="w-[100%]"><button className='w-[100%] bg-[#4F23B8] p-[5px] rounded-sm text-white'>
        Get Started →
      </button></Link>
    </CardActions>
  </div>
);

export default PricingCard;
