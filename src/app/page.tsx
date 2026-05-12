import LandingFooter from "@/components/landing-footer";
import LandingHeader from "@/components/landing-header";
import LandingSectionFive from "@/components/landing-section-five";
import LandingSectionFour from "@/components/landing-section-four";
import LandingSectionOne from "@/components/landing-section-one";
import LandingSectionThree from "@/components/landing-section-three";
import LandingSectionTwo from "@/components/landing-section-two";

export default function Home() {
	return (
		<div className="min-h-screen bg-[#fcf5eb]">
			<LandingHeader />
			<LandingSectionOne />
			<LandingSectionTwo />
			<LandingSectionThree />
			<LandingSectionFour />
			<LandingSectionFive />
			<LandingFooter />
		</div>
	);
}
