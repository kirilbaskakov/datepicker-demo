import { DateInput, DatePicker } from "@kirillbaskakov/modsen-datepicker";


function App() {

  return (
    <>
    <h1>Datepicker with range and tasks</h1>
    <div style={{height: "300px"}}>
      <DatePicker tasks={true} select="range"/>
    </div>
    <h1>Dateinput</h1>
    <div style={{width: "400px"}}>
    <DateInput/>
    </div>
    </>
  )
}

export default App;
