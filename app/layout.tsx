import "@/app/ui/global.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: {
		template: "%s | Dashboard App",
		default: "Dashboard App",
	},
	description: "A simple dashboard application.",
	metadataBase: new URL(
		"https://nextjs-dashboard-eqw1ir17k-jakob-pless-projects.vercel.app/",
	),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
