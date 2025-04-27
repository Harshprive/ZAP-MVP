import React from "react";

const NotesSection = ({ notes }) => (
  <div className="space-y-3">
    <h3 className="font-semibold">Please note</h3>
    <ul className="space-y-2">
      {notes.map((note, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-sm text-gray-600">{note}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default NotesSection;
