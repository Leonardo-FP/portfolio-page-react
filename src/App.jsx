import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";

function App() {

  return (
    <div className="portfolio">
      <h1>Leonardo Franca Paulelli</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
