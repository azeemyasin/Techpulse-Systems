import "./App.css";

function App() {
  return (
    <>
      <div className="bg-black relative">
        <img
          className="h-screen w-full object-contain"
          src="misc/placeholder.png"
          alt=""
        />
        <div className="sm:w-56 w-40 sm:h-56 h-40 bg-[#F7F7F7] rounded-[0_0_30%_0] absolute top-0 left-0 flex items-center justify-center">
        <img src="/logo-white.jpeg" alt="" className="w-11/12" />
        </div>
      </div>
    </>
  );
}

export default App;
