import { useEffect } from 'react';

// Dummy hook for QR code scanning (replace with real logic as needed)
export function useQRCodeScanner(onScan: (data: string) => void) {
	useEffect(() => {
		// Placeholder: implement QR code scanning logic here
		// Call onScan(data) when a QR code is scanned
	}, [onScan]);
}
