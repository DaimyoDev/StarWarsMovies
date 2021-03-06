import RenderMovies from "./components/RenderMovies";

function App() {
  return (
    <div className="bg-slate-600 w-screen h-auto box-border overflow-hidden">
      <div className="w-screen h-35 bg-zinc-500 flex align-text-center shadow-2xl">
        <h1 className="text-orange-500 font-bold text-4xl text-center drop-shadow-lg m-auto p-5">
          Star Wars Movies
        </h1>
      </div>
      <RenderMovies />
    </div>
  );
}

export default App;
