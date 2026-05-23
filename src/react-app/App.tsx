// src/App.tsx

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
	return (
		<div className="min-h-screen" style={{ background: "#111111" }}>
			<Nav />
			<Hero />
			<Stats />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}
