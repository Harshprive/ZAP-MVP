import React, { useEffect, useRef, useState } from 'react';
import './serviceMap.css';

// Example service providers with position and names
const serviceProviders = [
  { id: 1, position: [21.1458, 79.0882], name: "Provider 1" },
  { id: 2, position: [21.1535, 79.0928], name: "Provider 2" },
  { id: 3, position: [21.1498, 79.0822], name: "Provider 3" },
  { id: 4, position: [21.1428, 79.0902], name: "Provider 4" },
];

const API_KEY = '5b3ce3597851110001cf6248ecc03c36aeb94c7f989701362249362c'; // OpenRouteService API Key

export default function ServiceMap() {
  const mapRef = useRef(null);
  const [directions, setDirections] = useState([]);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const initMap = async () => {
      // Initialize map with MapLibre GL
      const map = new window.maplibregl.Map({
        container: mapRef.current,
        style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
        center: [79.0882, 21.1458], // Default map center
        zoom: 13,
      });

      // Add markers for service providers
      serviceProviders.forEach((provider) => {
        new window.maplibregl.Marker()
          .setLngLat([provider.position[1], provider.position[0]]) // [longitude, latitude]
          .setPopup(new window.maplibregl.Popup().setHTML(`<strong>${provider.name}</strong>`))
          .addTo(map);
      });

      // Get route data from OpenRouteService
      const start = serviceProviders[0].position; // Start from Provider 1
      const end = serviceProviders[1].position; // End at Provider 2

      try {
        const response = await fetch(
          `https://api.openrouteservice.org/v2/directions/driving-car`,
          {
            method: 'POST',
            headers: {
              'Authorization': API_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              coordinates: [[start[1], start[0]], [end[1], end[0]]], // [lng, lat]
              instructions: true, // Turn-by-turn directions
            }),
          }
        );

        // Check if the response is valid
        const data = await response.json();
        if (data?.routes?.[0]?.geometry) {
          // Extract route geometry (coordinates) from the response
          const routeCoords = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lng, lat]);

          // Set the route coordinates to state
          setRouteCoordinates(routeCoords);

          // Add the route to the map once it's loaded
          map.on('load', () => {
            map.addSource('route', {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'LineString',
                  coordinates: routeCoords,
                },
              },
            });

            map.addLayer({
              id: 'route',
              type: 'line',
              source: 'route',
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': '#007bff', // Blue color for the route
                'line-width': 5,
                'line-opacity': 0.7,
              },
            });
          });

          // Extract turn-by-turn directions and set them to the state
          const steps = data.routes[0].segments?.[0]?.steps || [];
          setDirections(steps.map((step) => step.instruction));
        } else {
          console.error('No route found in the API response');
        }
      } catch (error) {
        console.error('Error fetching route data:', error);
      }
    };

    // Load MapLibre GL JS script dynamically
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/maplibre-gl/dist/maplibre-gl.js';
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    // Load MapLibre styles
    const loadMapStyles = () => {
      const link = document.createElement('link');
      link.href = 'https://unpkg.com/maplibre-gl/dist/maplibre-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    };

    loadMapStyles();
    loadMapScript();
  }, []);

  return (
    <div className="service-map-wrapper">
      
      <div ref={mapRef} className="service-map-container"></div>

      
    </div>
  );
}
