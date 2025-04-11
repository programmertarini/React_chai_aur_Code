import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <h2 className="bg-green-500 text-white m-2 p-2 rounded-xl text-center">
        This is first tailwind css app
      </h2>
      <Card
        Cardname="poster 1"
        imagelink="https://i.pinimg.com/236x/6e/c2/4b/6ec24b55b8b57918d80b50b3368d75ff.jpg"
      />
      <Card
        Cardname="poater 2"
        imagelink="https://i.pinimg.com/236x/60/88/62/60886278bcc184c0cdbdca32e4379023.jpg"
      />
    </div>
  );
}

export default App;
