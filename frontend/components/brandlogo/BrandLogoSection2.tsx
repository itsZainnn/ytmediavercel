import Reveal from "../utils/Reveal";
import BrandLogo from "./BrandLogo";

export default function BrandLogoSection2({ brand }: any) {

	return (
		<section className="py-10 py-lg-15">
			<div className="container">
				<div className="row justify-center">
					<div className="col-lg-10">
						<div className="text-center">
							<Reveal el="h4" className="mb-10" delay={0.05}>
								{brand?.heading}
							</Reveal>
							<div className="row align-center justify-center row-cols-3 row-cols-md-5 g-6 g-lg-10 g-xl-20">
								{brand?.logos?.map((brandLogo: any) => (
									<BrandLogo key={brandLogo.id} data={brandLogo} />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
