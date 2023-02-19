import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import {Projectitle,Allproject} from './Component/Ourproject';
import Footer from './Component/Footer';

const cards_css={
  display:"flex",
  justifyContent:"center",
  padding:"50px",
  flexWrap:"wrap",
}

function App() {
  return (
    <div className="App">
      <Header />
      <Projectitle />
      <div style={cards_css}>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/DWTC-99c4926050d82ed27239c4dfcd379292.jpg" title="DWTC" />
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/DxbAirportConcordeD-d5adef77d08a3c8a37325c08794892c8.jpg" title="Dxb Airport Concorde D"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/MauiRestaurant-111ecc4cac563b8477d39a9e7031a856.jpg" title="Maui-Restaurant"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/Nail-paint%20bar-861208074988c2bac603b43f493f4787.jpg" title="Nail-paint bar"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/OfficeB-f959878578d6f43ddce5f5302ddf6019.jpg" title="Office in Business Bay"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/AtlantisThePalm-578031b4ae2cf7b7cb98cc2532d58f46.jpg" title="Atlantis, The Palm"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/Office-69bc33b798e71227488717df5acd81e7.jpg" title="Office"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/residentialTower-f1b864e257da5eb086e14f93faa37522.jpg" title="Residential Tower"/>
      <Allproject img="https://www.urbansciencemep.com/_next/static/images/Sofitel-97bf54bd9cf3a6e45adc6842d7095668.jpg" title="Sofitel"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
