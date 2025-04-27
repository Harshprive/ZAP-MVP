import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Header from './components/TakewayHeader';
import CustomerDetails from './components/CustomerDetails';
import DeviceDetails from './components/TakewayDeviceDetails';
import RepairDetailsTable from './components/RepairsDetailsTable';
import AdditionalDetails from './components/TakewayAdditionalDetails';
import repairData from './TakewayData';

const RepairTakeAwayScreen = () => {
  const contentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const content = contentRef.current;

    // Convert the HTML content to canvas
    const canvas = await html2canvas(content, {
      scale: 2, // Increase scale for better quality
    });

    // Convert the canvas to an image
    const imageData = canvas.toDataURL('image/png');

    // Create a new jsPDF instance
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Calculate the width and height for the PDF page
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    // Add the image to the PDF
    pdf.addImage(imageData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save('Repair-Takeaway-Slip.pdf');
  };

  return (
    <div className="flex flex-col h-full w-full  text-gray-800 p-6  ">
      <Header onPrint={handlePrint} onDownload={handleDownloadPDF} />
      <div ref={contentRef}>
        <div className="grid grid-cols-2 gap-4 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
          <CustomerDetails customer={repairData.customer} />
          <DeviceDetails device={repairData.device} />
        </div>
        <RepairDetailsTable issues={repairData.issues} />
        <AdditionalDetails
          shop={repairData.shopLocation}
          timeline={repairData.timeline}
        />
      </div>
    </div>
  );
};

export default RepairTakeAwayScreen;
