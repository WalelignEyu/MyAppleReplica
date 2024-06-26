import Header from "./components/Header";
import logo from "../src/commonResource/images/icons/logo-sm.png";
import search from "../src/commonResource/images/icons/search-icon-sm.png";
import cart from "../src/commonResource/images/icons/cart-sm.png";
import FirstTsections from "./components/FirstTsections";
// import SectionFour from "./components/SectionFour";
// import SectionFive from "./components/SectionFive";
// import SectionSix from "./components/SectionSix";
import Main from './components/Main'
import Footer from "./components/Footer";
import flag from '../src/commonResource/images/icons/16.png'
import Alert from "./components/Alert";


const Learn = (
			<li>
				<a href="">Learn more</a>
			</li>
			
);
const buy = (
	<li>
		<a href="">Buy</a>
	</li>
);
const Applylink = (
	<li>
		<a href="">Apply now</a>
	</li>
);

const shop = [
"Mac",
"iPad",
"iPhone",
"Watch",
"TV",
"Music",
"AirPods",
"HomePod",
"iPod touch",
"Accessories",
"Gift Cards"
]
const serv = [
" Apple Music",
"Apple News+",
"Apple TV+",
"Apple Arcade",
"Apple Card",
"iCloud"
]
const Acc = [
  "Manage Your Apple ID",
"Apple Store Account",
"iCloud.com"
]
const app = [
  "Find a Store",
"Genius Bar",
"Today at Apple",
"Apple Camp",
"Field Trip",
"Apple Store App",
"Refurbished and Clearance",
"Financing",
"Apple Trade In",
"Order Status",
"Shopping Help",
"Nafiad",
"Robel"
]
const buss = [
" Apple and Business",
"Shop for Business"
]
const Edu = [
  "Apple and Education",
"Shop for College"
]
const health = [
  "Manage Your Apple ID",
"Apple Store Account",
"iCloud.com"
]
const Gov = [
  "Apple and Education",
"Shop for College"
]
const Val = [
"Find a Store",
"Genius Bar",
"Today at Apple",
"Apple Camp",
"Field Trip",
"Apple Store App"
]
const about = [
  "Find a Store",
"Genius Bar",
"Today at Apple",
"Apple Camp",
"Field Trip",
"Apple Store App"
]



function App() {
	return (
		<>
			<Header logo={logo} search={search} cart={cart} />
			<Alert />
			<FirstTsections
				title1="iPad Pro"
				title2="MacBook Pro"
				title3="iPhone 11 Pro"
				new="New"
				learn={Learn}
				buy={buy}
			/>
			<Main learn={Learn} buy={buy} Applylink={Applylink} />
			<Footer
				shop={shop}
				serv={serv}
				acc={Acc}
				app={app}
				buss={buss}
				edu={Edu}
				health={health}
				gov={Gov}
				val={Val}
				about={about}
				flag={flag}
			/>
		</>
	);
}

export default App;
