import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to initialize the map
    const initializeMap = () => {
      if (window.google && mapRef.current) {
        // Chennai Vadapalani coordinates
        const chennai = { lat: 13.0490, lng: 80.2154 };
        
        // Create map
        const map = new window.google.maps.Map(mapRef.current, {
          center: chennai,
          zoom: 15,
          styles: [
            {
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#212121"}]
            },
            {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{"color": "#f2f2f2"}]
            },
            {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{"saturation": -100}, {"lightness": 45}]
            },
            {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{"visibility": "simplified"}]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{"visibility": "off"}]
            },
            {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{"color": "#1B5E20"}, {"visibility": "on"}]
            }
          ]
        });
        
        // Add marker
        const marker = new window.google.maps.Marker({
          position: chennai,
          map: map,
          title: 'VTV Enterprises'
        });
        
        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin-top: 0; color: #1B5E20; font-weight: bold;">VTV Enterprises</h3>
              <p style="margin-bottom: 5px;">No 63, First Floor Alagiri Nagar East Street</p>
              <p style="margin-bottom: 5px;">Vadapalani, Chennai 600026</p>
              <p style="margin-bottom: 0;">India</p>
            </div>
          `
        });
        
        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
        
        // Open info window by default
        infoWindow.open(map, marker);
      }
    };
    
    // Load Google Maps API if not already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
    
    return () => {
      // Clean up
      const googleMapsScript = document.querySelector('script[src*="maps.googleapis.com/maps/api"]');
      if (googleMapsScript) {
        googleMapsScript.remove();
      }
    };
  }, []);
  
  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg bg-gray-light flex items-center justify-center"
    >
      <p className="text-foreground">Loading Google Maps...</p>
    </div>
  );
};

export default GoogleMap;
