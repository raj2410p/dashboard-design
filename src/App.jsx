import "./App.css";
import ProjectCard from "./components/projectcard";
import Header from "./components/header";
import { useState } from "react";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Default Project",
      storyboard: "../src/assets/unplash.jpg",
      updatedAt: "19 Mar 3:54",
    },
  ]);

  const handleUpdateProject = (updatedProject) => {
    const updatedProjects = projects.map((p) =>
      p.id === updatedProject.id ? updatedProject : p
    );
    setProjects(updatedProjects);
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [newProjectData, setNewProjectData] = useState({
    title: "",
    aspectRatio: "landscape", // Set a default aspect ratio
    useAIAssistant: false,
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleInputChange = (event) => {
    setNewProjectData({
      ...newProjectData,
      [event.target.name]: event.target.value,
      useAIAssistant: event.target.checked || false, // Update checkbox value
    });
  };

  const createNewProject = () => {
    // Implement logic to create and add new project to state
    // e.g., using an API call or local storage
    const newProject = {
      id: projects.length + 1, // Generate unique ID
      title: newProjectData.title,
      storyboard: "", // Placeholder until actual storyboard is created
      aspectRatio: newProjectData.aspectRatio,
      useAIAssistant: newProjectData.useAIAssistant,
      updatedAt: new Date().toLocaleString(), // Set creation date
    };
    setProjects([...projects, newProject]);
    setNewProjectData({ title: "", aspectRatio: "landscape", useAIAssistant: false }); // Reset form
    closeModal();
  };

  return (
    <>
      <Header />
      {/* for project card */}
      <div className="min-h-screen bg-gray-100 p-8">
        <header className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-x-1">
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
              src="/src/assets/canva.jpg"
              alt="User"
            />
            <h1 className="text-lg font-bold sm:text-2xl">Adam Cooper Team</h1>
          </div>
          <button
            className="sm-2 bg-black text-white px-4 py-2 rounded hover:bg-slate-800"
            onClick={openModal}
          >
            New Project
          </button>
        </header>
        <div className="flex h-full justify-start w-100 bg-white">
          <main className="flex w-full h-full w-90 rounded-lg">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onUpdate={handleUpdateProject}
              />
            ))}
          </main>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="New Storyboard Modal"
        >
          <h2 className="text-xl font-semibold mb-4">New Storyboard</h2>
          <input
          i
            type="text"
            placeholder="Storyboard Name"
            className="w-full mb-2 p-2 border rounded border-gray-300"
          />
          <select className="w-full mb-4 p-2 border rounded-lg border-gray-300">
            <option value="landscape">Landscape (16:9)</option>
            <option value="portrait">Portrait (9:16)</option>
            <option value="square">Square (1:1)</option>
            <option value="custom">Custom</option>
          </select>
          <label className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            AI Assistant
          </label>
          <button
            className="bg-black text-white px-4 py-2 rounded hover:bg-slate-800"
            onClick={() => {
              // Implement logic to create new storyboard
              closeModal();
            }}
          >
            Create Storyboard
          </button>
        </Modal>
      </div>
    </>
  );
}

export default App;
