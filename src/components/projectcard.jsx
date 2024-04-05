import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed, faEdit } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(project.title);
  const [editedStoryboard, setEditedStoryboard] = useState(project.storyboard);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate({
      ...project,
      title: editedTitle,
      storyboard: editedStoryboard,
    });
    setIsEditing(false);
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 max-w-md "
      key={project.id}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full mb-2 border border-gray-300 rounded px-2 py-1"
          />
          <input
            type="text"
            value={editedStoryboard}
            onChange={(e) => setEditedStoryboard(e.target.value)}
            className="w-full mb-4 border border-gray-300 rounded px-2 py-1"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex  flex-col  ">
            <FontAwesomeIcon icon={faFolderClosed} className="w-10 h-10" />
            <h2 className="text-xl font-bold mb-5">{project.title}</h2>
          </div>
          <img
            src={project.storyboard}
            alt="Storyboard"
            className="w-full h-64 object-cover mb-4 rounded-lg"
          />
          <p className="text-gray-500 text-sm mb-2">Updated {project.updatedAt}</p>
          <button
            className="text-white px-3 py-1 rounded bg-gray-800 hover:bg-gray-700"
            onClick={handleEditClick}
          >
            <FontAwesomeIcon icon={faEdit} className="mr-1" />
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default ProjectCard;