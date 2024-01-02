import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    // tasks: [],
  });

  function handleStartAddProject(projectId) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    
    });
  }

  console.log(projectsState);

  let conten;
  if(projectsState.selectedProjectId === null) {
    conten = <NewProject onAdd={handleAddProject}/>
  }else{
    conten = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  function handleAddProject(projectData){
    setProjectsState(prevState=>{
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        projects: [...prevState.projects,newProject]
      }
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject}/>
      {conten}
    </main>
  );
}

export default App;
