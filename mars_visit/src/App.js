import Title from './components/Title';
import './App.css';
import StageTitle from './components/StageTitile';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';
import Submit from './components/Submit';

function App() {
  
  const handleSubmit = (e) => alert('Form submitted successfully!');   

  return (
    <div className="App">
      <header>
        <Title/> 
        <nav className='nav-container'>
          <a href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
        </nav>
      </header>
      <form onSubmit={handleSubmit}>
        <section id="section1">
          <StageTitle stageNumber={1} stageContent={"Personal Information"} />
          <Stage1/>
        </section>

        <section id="section2">
          <StageTitle stageNumber={2} stageContent={"Travel Preference"} />
          <Stage2/>
        </section>

        <section id="section3">
          <StageTitle stageNumber={3} stageContent={"Health and Safety"} />
          <Stage3/>
        </section>

        <Submit/>
      </form>
    </div>
  );
}

export default App;
