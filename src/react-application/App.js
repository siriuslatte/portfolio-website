/* Application css */
import './App.css';
import { NavigationBar } from "../components/nav_bar"
import { Banner } from "../components/banner"
import { Projects } from "../components/projects"

/* Spline and bootstrap */
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Projects />
    </div>
  );
}