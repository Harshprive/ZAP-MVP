import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Package } from 'lucide-react';

const MaterialsList = () => {
  const materials = [
    { name: 'PVC Pipe (10mm)', quantity: '2', unit: 'meters', measurement: 'Length', brand: 'Supreme', amount: 120 },
    { name: 'Water Tap', quantity: '1', unit: 'pieces', measurement: 'Quantity', brand: 'Grohe', amount: 850 },
    { name: 'Steel Pipe (15mm)', quantity: '5', unit: 'feet', measurement: 'Length', brand: 'Tata Steel', amount: 475 },
    { name: 'Thread Seal Tape', quantity: '2', unit: 'rolls', measurement: 'Quantity', brand: 'Bosch', amount: 90 },
    { name: 'Basin Mixer', quantity: '1', unit: 'piece', measurement: 'Quantity', brand: 'Kohler', amount: 2200 }
  ];

  const materialTotal = materials.reduce((sum, item) => sum + item.amount, 0);
  const serviceCost = materialTotal * 0.20; // Assuming 20% of material cost for service
  const totalCost = materialTotal + serviceCost;

  return (
    <Card sx={{ width: '100%', maxWidth: 1200, margin: 'auto' }}>
      <CardHeader
        title="Required Materials List"
        action={<Button variant="contained" color="primary">Export List</Button>}
      />
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Quantity with Unit</TableCell>
                <TableCell>Measurement Type</TableCell>
                <TableCell>Brand Name</TableCell>
                <TableCell align="right">Amount (₹)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {materials.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity} {item.unit}</TableCell>
                  <TableCell>{item.measurement}</TableCell>
                  <TableCell>{item.brand}</TableCell>
                  <TableCell align="right">₹{item.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right"><strong>Materials Total:</strong></TableCell>
                <TableCell align="right"><strong>₹{materialTotal.toLocaleString()}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} align="right"><strong>Service Cost (20%):</strong></TableCell>
                <TableCell align="right"><strong>₹{serviceCost.toLocaleString()}</strong></TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={4} align="right"><strong>Total Cost:</strong></TableCell>
                <TableCell align="right"><strong>₹{totalCost.toLocaleString()}</strong></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MaterialsList;
