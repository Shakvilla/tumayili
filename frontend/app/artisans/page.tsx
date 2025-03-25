"use client";
import React, { useState } from "react";
import MapView from "./components/map-view";
import ProfileView from "../dashboard/components/profile-view";
import BottomNav from "../components/bottom-nav";
import TopNav from "../components/top-nav";

const ArtisanPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <main className="h-screen">
      <div>
        <TopNav />
      </div>
      <div>
        <MapView />
      </div>

      <div>
        <ProfileView show={showProfile} onClose={() => setShowProfile(false)} />
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t z-50">
        <BottomNav onProfileClick={() => setShowProfile(true)} />
      </div>
    </main>
  );
};

export default ArtisanPage;
