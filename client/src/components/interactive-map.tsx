import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface OfficeLocation {
  id: string;
  title: string;
  address: string;
  phone: string;
  coordinates: [number, number]; // [latitude, longitude]
}

const officeLocations: OfficeLocation[] = [
  {
    id: 'head-office',
    title: 'Head Office',
    address: 'Ikota shopping complex, Road 3, opp. Union Bank, Suite E167, 150/151, VGC Ajah Lagos.',
    phone: '08118887425',
    coordinates: [6.5244, 3.3792] // Lagos coordinates
  },
  {
    id: 'ilorin-branch',
    title: 'Ilorin Branch Office',
    address: 'Shop 4B samtosh plaza, No. 171, Ibrahim Taiwo Rd. Opp. access Bank, Ilorin',
    phone: '09156082923',
    coordinates: [8.4961, 4.5521] // Ilorin coordinates
  },
  {
    id: 'abeokuta-branch',
    title: 'Abeokuta Branch Office',
    address: 'Alhaji Mulikat sonekan (oosele) House, Opposite NNPC Filling Station, Somorin Obantoko Abeokuta, Ogun state.',
    phone: '08118887425',
    coordinates: [7.1557, 3.3451] // Abeokuta coordinates
  }
];

export default function InteractiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
    link.crossOrigin = '';
    document.head.appendChild(link);

    // Dynamically load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
    script.crossOrigin = '';
    
    script.onload = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // @ts-ignore - Leaflet is loaded dynamically
        const L = (window as any).L;
        
        // Create map centered on Nigeria
        const map = L.map(mapRef.current).setView([7.4916, 4.5521], 6);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 18
        }).addTo(map);

        // Add markers for each office
        officeLocations.forEach((office) => {
          const marker = L.marker(office.coordinates).addTo(map);
          
          const popupContent = `
            <div style="min-width: 200px;">
              <h3 style="font-weight: bold; color: #ff6b35; margin-bottom: 8px;">${office.title}</h3>
              <p style="margin: 4px 0; font-size: 14px;">${office.address}</p>
              <div style="margin-top: 8px;">
                <a href="tel:${office.phone}" style="color: #ff6b35; text-decoration: none; display: flex; align-items: center; gap: 4px;">
                  📞 ${office.phone}
                </a>
              </div>
            </div>
          `;
          
          marker.bindPopup(popupContent);
        });

        mapInstanceRef.current = map;
      }
    };

    document.head.appendChild(script);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div 
        ref={mapRef} 
        className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
        style={{ zIndex: 1 }}
      />
      
      {/* Map Instructions */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-bold text-[hsl(0,0%,10%)] mb-2">How to Use the Map</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Click on map markers to see office details</li>
          <li>• Drag to pan and scroll to zoom in/out</li>
          <li>• All locations are marked with our brand colors</li>
        </ul>
      </div>
    </div>
  );
} 