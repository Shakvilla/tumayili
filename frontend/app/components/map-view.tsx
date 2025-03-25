"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Replace with your Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

interface Artisan {
  id: number;
  name: string;
  craft: string;
  rating: number;
  avatar: string;
  coordinates: [number, number]; // [longitude, latitude]
  specialty: string;
}

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Sample artisans data - in a real app, this would come from your backend
  // Coordinates are offset from user's location
  const [artisans, setArtisans] = useState<Artisan[]>([]);

  useEffect(() => {
    // Get user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);

          // Generate sample artisans around user's location
          const nearbyArtisans: Artisan[] = [
            {
              id: 1,
              name: "Emma Wood",
              craft: "Woodworking",
              rating: 4.9,
              avatar: "https://randomuser.me/api/portraits/women/1.jpg",
              coordinates: [longitude + 0.002, latitude + 0.002],
              specialty: "Custom furniture",
            },
            // Add more artisans with coordinates relative to user's location
            // ...
          ];
          setArtisans(nearbyArtisans);
        },
        (error) => {
          setError(
            "Unable to get your location. Please enable location services."
          );
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !userLocation) return;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: userLocation,
      zoom: 15,
    });

    // Add user marker
    new mapboxgl.Marker({ color: "#FF0000" })
      .setLngLat(userLocation)
      .setPopup(new mapboxgl.Popup().setHTML("<h3>You are here</h3>"))
      .addTo(map.current);

    // Add artisan markers
    artisans.forEach((artisan) => {
      // Create custom marker element
      const el = document.createElement("div");
      el.className = "artisan-marker";
      el.innerHTML = `
        <div class="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden">
          <img src="${artisan.avatar}" alt="${artisan.name}" class="w-full h-full object-cover" />
        </div>
      `;

      // Add marker to map
      new mapboxgl.Marker(el)
        .setLngLat(artisan.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <div class="p-2">
                <h3 class="font-bold">${artisan.name}</h3>
                <p>${artisan.craft}</p>
              </div>
            `)
        )
        .addTo(map.current);

      // Add click handler
      el.addEventListener("click", () => {
        setSelectedArtisan(artisan);
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [userLocation, artisans]);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (loading) {
    return <div className="p-4">Loading map...</div>;
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Selected Artisan Info */}
      {selectedArtisan && (
        <Card className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 p-4 z-10">
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={selectedArtisan.avatar}
                alt={selectedArtisan.name}
              />
              <AvatarFallback>
                {selectedArtisan.name.substring(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{selectedArtisan.name}</h3>
                <button
                  className="text-muted-foreground text-sm"
                  onClick={() => setSelectedArtisan(null)}
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedArtisan.craft}
              </p>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm ml-1">{selectedArtisan.rating}</span>
              </div>
              <Badge variant="outline" className="mt-2">
                {selectedArtisan.specialty}
              </Badge>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
