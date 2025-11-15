import Hero from "@/components/Hero";
import Header from "@/components/Header";
import FeatureList from "@/components/FeatureList";

export default function VirtualOfficeCard() {
  return (
    <div className="max-w-[1280px] mx-auto bg-white px-[32px] py-[12px]">
      <Header />

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Image + Location Info */}
        <Hero />

        {/* Right: Features List */}
        <FeatureList />
      </div>
    </div>
  );
}
