import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { Tag, Receipt, Check, X } from 'lucide-react';

import { billItems } from './Bill_Items'; // Import bill items
import { validCoupons } from './CouponCode'; // Import valid coupons

const BillScreen = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState({ type: null, value: 0 });
  const [error, setError] = useState('');
  const [showCouponDialog, setShowCouponDialog] = useState(false);

  const subtotal = billItems.reduce((sum, item) => sum + item.amount, 0);
  const discountAmount =
    discount.type === 'percentage'
      ? (subtotal * discount.value) / 100
      : discount.type === 'flat'
      ? discount.value
      : 0;
  const total = Math.max(subtotal - discountAmount, 0); // Ensure the total isn't negative

  const applyCoupon = () => {
    const coupon = validCoupons[couponCode];
    if (coupon) {
      setDiscount(coupon);
      setError('');
    } else {
      setDiscount({ type: null, value: 0 });
      setError('Invalid coupon code');
    }
  };

  const applyCouponFromDialog = (code) => {
    setCouponCode(code);
    setDiscount(validCoupons[code]);
    setError('');
    setShowCouponDialog(false);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8 flex justify-center items-center">
      <Card className="w-full max-w-2xl bg-white shadow-xl">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <Typography variant="h5" className="flex items-center gap-2">
            <Receipt className="w-6 h-6" />
            Service Bill
          </Typography>
        </CardHeader>

        <CardContent className="p-6">
          {/* Bill Items */}
          <div className="space-y-4 mb-6">
            {billItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b border-blue-100 pb-2"
              >
                <span className="text-gray-700">{item.service}</span>
                <span className="text-blue-600 font-semibold">
                  ${item.amount.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          {/* Coupon Section */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="text-blue-600" />
              <span
                className="font-semibold text-blue-800 cursor-pointer"
                onClick={() => setShowCouponDialog(true)}
              >
                Apply Coupon
              </span>
            </div>
            <div className="flex gap-2">
              <TextField
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                variant="outlined"
                fullWidth
              />
              <Button onClick={applyCoupon} variant="contained" color="primary">
                Apply
              </Button>
            </div>
            {error && (
              <div className="flex items-center gap-1 text-red-500 mt-2 text-sm">
                <X className="w-4 h-4" />
                {error}
              </div>
            )}
            {discount.type && (
              <div className="flex items-center gap-1 text-green-500 mt-2 text-sm">
                <Check className="w-4 h-4" />
                Coupon "{couponCode}" applied successfully!{' '}
                {discount.type === 'percentage'
                  ? `${discount.value}% off`
                  : `$${discount.value} off`}
              </div>
            )}
          </div>

          {/* Bill Summary */}
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>
                -$
                {discountAmount.toFixed(2)}
              </span>
            </div>
            <div className="h-px bg-blue-400 my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coupon Dialog */}
      <Dialog open={showCouponDialog} onClose={() => setShowCouponDialog(false)}>
        <DialogTitle>
          Available Coupons
          <IconButton
            style={{ position: 'absolute', right: 10, top: 10 }}
            onClick={() => setShowCouponDialog(false)}
          >
            <X />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {Object.entries(validCoupons).map(([code, { type, value }]) => (
            <div
              key={code}
              className="flex justify-between items-center py-2 cursor-pointer hover:bg-blue-100 px-2 rounded"
              onClick={() => applyCouponFromDialog(code)}
            >
              <span className="font-semibold">{code}</span>
              <span>
                {type === 'percentage' ? `${value}% off` : `$${value} off`}
              </span>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BillScreen;
