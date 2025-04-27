import { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Button } from '@mui/material';
import { Wallet, CreditCard, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';


const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentModes = [
    {
      id: 'cash',
      title: 'Cash on Delivery',
      icon: Wallet,
      description: 'Pay when service is completed',
      colorClass: 'bg-green-100 text-green-600'
    },
    {
      id: 'online',
      title: 'Online Payment',
      icon: CreditCard,
      description: 'Pay securely with card or UPI',
      colorClass: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'advance',
      title: 'Advance Payment',
      icon: DollarSign,
      description: 'Pay 50% in advance',
      colorClass: 'bg-purple-100 text-purple-600'
    }
  ];

  const handleConfirm = () => {
    alert(`Selected payment mode: ${selectedPayment}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8  flex items-center">
      <div className="max-w-2xl w-[100%] md:w-[70%] mx-auto px-4  ">
        <Card>
          <CardHeader style={{ textAlign: 'center' }}>
            <Typography variant="h5" component="div">
              Choose Payment Mode
            </Typography>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 w-[100%]">
              {paymentModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={mode.id}
                    className={`p-4 rounded-lg border-2 transition-all cursor-pointer
                      ${selectedPayment === mode.id ? 'border-purple-500 bg-blue-50' : 'border-gray-200 hover:border-blue-200'}
                    `}
                    onClick={() => setSelectedPayment(mode.id)}
                    aria-selected={selectedPayment === mode.id}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedPayment(mode.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2 rounded-full ${mode.colorClass}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <Typography variant="subtitle1" component="h3" fontWeight="bold">
                          {mode.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {mode.description}
                        </Typography>
                      </div>
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {selectedPayment === mode.id && (
                          <div className="w-3 h-3 rounded-full bg-purple-500" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="pt-6">
                <Link to='/search-booking/otp-screen'>
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{backgroundColor:'purple'}}
                  onClick={handleConfirm} 
                  disabled={!selectedPayment}
                >
                  Confirm Payment Mode
                </Button></Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPage;
