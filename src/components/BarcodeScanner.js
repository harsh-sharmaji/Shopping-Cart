// BarcodeScanner.js

import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga';
import './BarcodeScanner.css'; // Ensure you have the required CSS for styling

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    // QuaggaJS configuration
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          facingMode: 'environment', // Use the back camera
        },
        target: scannerRef.current, // Attach the video stream to this element
      },
      decoder: {
        readers: ['code_128_reader', 'ean_reader', 'ean_8_reader'], // Barcode types
      },
      locate: true, // Try to locate the barcode in the image
    }, (err) => {
      if (err) {
        console.error('Error initializing Quagga:', err);
        return;
      }
      Quagga.start(); // Start the barcode scanner
    });

    // Handle detected barcodes
    Quagga.onDetected((result) => {
      const code = result.codeResult.code;
      if (code) {
        onDetected(code); // Call the function passed from parent component
        Quagga.stop(); // Stop scanning after a successful detection
      }
    });

    // Cleanup function to stop the scanner
    return () => {
      Quagga.stop();
    };
  }, [onDetected]);

  return (
    <div className="scanner-container">
      <h2 className="text-primary mb-4">Scan the Barcode</h2>
      <div ref={scannerRef} className="viewport">
        <video className="w-100" autoPlay={true} muted />
      </div>
      <p className="text-muted mt-3">Point your camera at the barcode to scan.</p>
    </div>
  );
};

export default BarcodeScanner;
