"use client";

import { useEffect, useState } from "react";
import Map, { Marker, Popup, NavigationControl } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface Artisan {
  id: number;
  name: string;
  craft: string;
  rating: number;
  avatar: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  specialty: string;
}

export default function MapView() {
  const [viewState, setViewState] = useState({
    latitude: 6.6018, // Default to Lagos, Nigeria coordinates
    longitude: 3.3515,
    zoom: 12,
  });
  const [selectedArtisan, setSelectedArtisan] = useState<Artisan | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // console.log(`artisan location, ${userLocation}`);

  // Sample artisans data
  // Replace your existing artisans array with this:
  const artisans: Artisan[] = [
    {
      id: 1,
      name: "Emma Wood",
      craft: "Woodworking",
      rating: 4.9,
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      coordinates: {
        latitude: 5.7322641728288986,
        longitude: -0.1570770261818076,
      },
      specialty: "Custom furniture",
    },
    {
      id: 2,
      name: "John Smith",
      craft: "Plumbing",
      rating: 4.8,
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      coordinates: {
        latitude: 5.8022641728288986, // ~5 miles north
        longitude: -0.1570770261818076,
      },
      specialty: "Emergency repairs",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      craft: "Electrician",
      rating: 4.7,
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      coordinates: {
        latitude: 5.7322641728288986,
        longitude: -0.2270770261818076, // ~5 miles west
      },
      specialty: "Wiring & Installation",
    },
    {
      id: 4,
      name: "Michael Chen",
      craft: "Painting",
      rating: 4.9,
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      coordinates: {
        latitude: 5.6622641728288986, // ~5 miles south
        longitude: -0.1570770261818076,
      },
      specialty: "Interior & Exterior",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      craft: "Cleaning",
      rating: 4.6,
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      coordinates: {
        latitude: 5.7322641728288986,
        longitude: -0.0870770261818076, // ~5 miles east
      },
      specialty: "Deep Cleaning",
    },
    {
      id: 6,
      name: "David Wilson",
      craft: "Carpentry",
      rating: 4.8,
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
      coordinates: {
        latitude: 5.7822641728288986, // ~3.5 miles northeast
        longitude: -0.1070770261818076, // ~3.5 miles northeast
      },
      specialty: "Cabinet Making",
    },
    {
      id: 7,
      name: "Grace Lee",
      craft: "Beauty",
      rating: 4.9,
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
      coordinates: {
        latitude: 5.6822641728288986, // ~3.5 miles southwest
        longitude: -0.2070770261818076, // ~3.5 miles southwest
      },
      specialty: "Hair & Makeup",
    },
    {
      id: 8,
      name: "James Brown",
      craft: "HVAC",
      rating: 4.7,
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
      coordinates: {
        latitude: 5.6822641728288986, // ~3.5 miles southeast
        longitude: -0.1070738942828912, // ~3.5 miles southeast
      },
      specialty: "AC Repair",
    },
  ];

  // Changed from useState to useEffect
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          console.log("lalong", latitude, longitude);

          setUserLocation({ latitude, longitude });
          setViewState((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="relative w-full h-full">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* Navigation Controls */}
        <NavigationControl position="top-right" />

        {/* User Location Marker */}
        {userLocation && (
          <Marker
            latitude={userLocation.latitude}
            longitude={userLocation.longitude}
            anchor="bottom"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg pulse" />
          </Marker>
        )}

        {/* Artisan Markers */}
        {artisans.map((artisan) => (
          <Marker
            key={artisan.id}
            latitude={artisan.coordinates.latitude}
            longitude={artisan.coordinates.longitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setSelectedArtisan(artisan);
            }}
          >
            <div className="cursor-pointer transform transition-transform hover:scale-110">
              <Avatar className="w-8 h-8 border-2 border-white shadow-lg">
                <AvatarImage src={artisan.avatar} alt={artisan.name} />
                <AvatarFallback>{artisan.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
            </div>
          </Marker>
        ))}

        {/* Popup for selected artisan */}
        {selectedArtisan && (
          <Popup
            latitude={selectedArtisan.coordinates.latitude}
            longitude={selectedArtisan.coordinates.longitude}
            anchor="bottom"
            onClose={() => setSelectedArtisan(null)}
            closeButton={true}
            closeOnClick={false}
          >
            <Card className="p-4 min-w-[200px]">
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
                  <h3 className="font-medium">{selectedArtisan.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedArtisan.craft}
                  </p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm ml-1">
                      {selectedArtisan.rating}
                    </span>
                  </div>
                  <Badge variant="outline" className="mt-2">
                    {selectedArtisan.specialty}
                  </Badge>
                </div>
              </div>
            </Card>
          </Popup>
        )}
      </Map>
    </div>
  );
}
