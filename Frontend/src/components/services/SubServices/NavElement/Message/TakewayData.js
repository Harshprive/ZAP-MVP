const repairData = {
    customer: {
      name: 'John Doe',
      phone: '+1 (555) 123-4567',
      email: 'johndoe@example.com',
    },
    shopLocation: 'Tech Repair Center - Downtown Branch',
    timeline: {
      received: '2024-02-15',
      completion: '2024-02-22',
    },
    device: {
      type: 'Laptop',
      brand: 'Dell',
      model: 'XPS 15',
      serialNumber: 'SN2024XPS123456',
    },
    issues: [
      { id: 1, description: 'Broken Screen', replacedParts: ['Display Panel'], cost: 250 },
      { id: 2, description: 'Battery Replacement', replacedParts: ['Lithium Battery'], cost: 120 },
    ],
  };
  
  export default repairData;