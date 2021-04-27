import logo from "./logo.svg";
import "./App.css";
import JennyCarousel from "./lib/JennyCarousel";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <JennyCarousel
        NUM_OF_DATAS={10}
        NUM_OF_SLIDES={4}
        SLIDE_WIDTH={100}
        SLIDE_MARGIN={5}
        BUTTON_TYPE="VERTICAL"
      >
        {[
          { title: "good", content: 1 },
          { title: "good", content: 2 },
          { title: "good", content: 3 },
          { title: "good", content: 4 },
          { title: "good", content: 5 },
          { title: "good", content: 6 },
          { title: "good", content: 7 },
          { title: "good", content: 8 },
          { title: "good", content: 9 },
          { title: "good", content: 10 },
        ].map((el) => (
          <Card
            height={540}
            width={100}
            title={el.title}
            content={el.content}
            margin={10}
          />
        ))}
      </JennyCarousel>
    </div>
  );
}

export default App;
