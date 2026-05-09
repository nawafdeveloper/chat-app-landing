import LandingHeader from "@/components/landing-header";
import LandingSectionOne from "@/components/landing-section-one";

export default function Home() {
	return (
		<div className="flex flex-col">
			<LandingHeader />
			<LandingSectionOne />
		</div>
	);
}
