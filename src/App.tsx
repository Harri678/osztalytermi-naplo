import { useState } from 'react'

import './App.css'
import OsztalyAdatok from './components/OsztalyAdatok';
import OsztalyVezerlo from './components/OsztalyVezerlo'

function App() {
  const [jelenlevok, setJelenlevok] = useState<number>(24);
  const [hangulat, setHangulat] = useState<"Átlagos" | "Jó" | "Kiváló">("Átlagos");

  const jelenletNovelese = () => {
    if(jelenlevok < 30) {
      setJelenlevok(jelenlevok + 1);
    }
  };

    const jelenletCsokkentese = () => {
    if(jelenlevok > 0) {
      setJelenlevok(jelenlevok - 1);
    }
  };

  const hangulatValtoztatas = () => {
    setHangulat((aktualisHangulat) => {
      if (aktualisHangulat === "Átlagos") return "Jó";
      if (aktualisHangulat === "Jó") return "Kiváló";
      return "Átlagos";
    });
  };

  return (
    <div>
      <h1>Osztálytermi napló</h1>

      <OsztalyAdatok
        jelenlevok={jelenlevok}
        hangulat={hangulat}
      />

      <OsztalyVezerlo
        jelenletNovelese={jelenletNovelese}
        jelenletCsokkentese={jelenletCsokkentese}
        hangulatValtoztatas={hangulatValtoztatas}
      />
    </div>
  );
}

export default App
