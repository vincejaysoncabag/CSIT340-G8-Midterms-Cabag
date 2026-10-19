import Docs from "./components/Docs";
import Sidebar from "./components/Sidebar";
import Guide from "./components/Guide";
function App() {


  

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <nav className="row-span-3 flex flex-col bg-[#5C4F4A] p-12 text-[#EDE9E6]">
        <h1 className="text-3xl font-bold">Git Quickstart</h1>
        <ul className="mt-10 text-xl">
        <Sidebar/>
        </ul>
        <p className="mt-auto text-xl">Written by Vince Jayson C. Cabag</p>
      </nav>

      <Docs/>

      <Guide/>
    </div>
  );
}

export default App;