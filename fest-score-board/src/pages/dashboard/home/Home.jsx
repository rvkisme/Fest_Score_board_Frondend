import React, { useState } from "react";
import Dialog from "../../../components/Dialog/Dialog"; // Custom modal dialog component
import { PlusCircle, Trash2, Edit2 } from "lucide-react"; // Icons
import { useHotkeys } from "react-hotkeys-hook"; // For keyboard shortcuts
import toast, { Toaster } from "react-hot-toast"; // Toast notifications

function Home() {
  // --------------------------
  // State Management
  // --------------------------
  const [programs, setPrograms] = useState([]); // List of all programs
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Controls modal open/close
  const [editingIndex, setEditingIndex] = useState(null); // Stores index when editing
  const [search, setSearch] = useState(""); // Search query
  const [filterCategory, setFilterCategory] = useState(""); // Category filter

  // Form state: contains category and scores for each program
  const [formData, setFormData] = useState({
    category: "",
    program: [
      {
        name: "",
        score: {
          f: [{ team: "", candidate: "", grade: "" }],
          s: [{ team: "", candidate: "", grade: "" }],
          t: [{ team: "", candidate: "", grade: "" }],
        },
      },
    ],
  });

  // Tracks which sections are enabled/disabled
  const [sectionEnabled, setSectionEnabled] = useState({
    f: true,
    s: true,
    t: true,
  });

  // --------------------------
  // Helper Functions
  // --------------------------
  // Reset form and sections
  const resetForm = () => {
    setFormData({
      category: "",
      program: [
        {
          name: "",
          score: {
            f: [{ team: "", candidate: "", grade: "" }],
            s: [{ team: "", candidate: "", grade: "" }],
            t: [{ team: "", candidate: "", grade: "" }],
          },
        },
      ],
    });
    setSectionEnabled({ f: true, s: true, t: true });
    setEditingIndex(null);
  };

  // Close modal with ESC key
  useHotkeys(
    "esc",
    () => {
      if (isDialogOpen) {
        setIsDialogOpen(false);
        resetForm();
      }
    },
    [isDialogOpen]
  );

  // Handle score changes in form
  const handleScoreChange = (section, index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev.program[0].score[section]];
      updated[index][field] = value;
      return {
        ...prev,
        program: [
          {
            ...prev.program[0],
            score: { ...prev.program[0].score, [section]: updated },
          },
        ],
      };
    });
  };

  // Add a new candidate row to a section
  const addCandidateRow = (section) => {
    setFormData((prev) => {
      const updated = [...prev.program[0].score[section]];
      if (updated.length < 3) {
        updated.push({ team: "", candidate: "", grade: "" });
      }
      return {
        ...prev,
        program: [
          {
            ...prev.program[0],
            score: { ...prev.program[0].score, [section]: updated },
          },
        ],
      };
    });
  };

  // Handle program name and category changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setFormData((prev) => ({
        ...prev,
        program: [{ ...prev.program[0], name: value }],
      }));
    }
    if (name === "category") {
      setFormData((prev) => ({ ...prev, category: value }));
    }
  };

  // Toggle section enabled/disabled
  const toggleSection = (section) => {
    setSectionEnabled((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // --------------------------
  // Form Submission
  // --------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const program = formData.program[0];

    // Basic validation: name & category
    if (!program.name || !formData.category) {
      toast.error("Program name and category are required!");
      return;
    }

    // Validate only enabled sections
    const sections = ["f", "s", "t"];
    for (let section of sections) {
      if (!sectionEnabled[section]) continue;
      for (let i = 0; i < program.score[section].length; i++) {
        const entry = program.score[section][i];
        if (!entry.team || !entry.candidate || !entry.grade) {
          toast.error(`All fields are required in ${section.toUpperCase()} section!`);
          return;
        }
      }
    }

    // If editing, update existing program
    if (editingIndex !== null) {
      const updated = [...programs];
      updated[editingIndex] = { ...program, category: formData.category };
      setPrograms(updated);
      toast.success("Program updated!");
    } else {
      // Otherwise, add new program
      setPrograms((prev) => [...prev, { ...program, category: formData.category }]);
      toast.success("New Result Added!");
    }

    setIsDialogOpen(false);
    resetForm();
  };

  // --------------------------
  // Edit & Delete Functions
  // --------------------------
  const handleEdit = (index) => {
    const prog = programs[index];
    setFormData({
      category: prog.category,
      program: [{ ...prog }],
    });
    setSectionEnabled({ f: true, s: true, t: true }); // reset sections on edit
    setEditingIndex(index);
    setIsDialogOpen(true);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      const updated = [...programs];
      updated.splice(index, 1);
      setPrograms(updated);
      toast.success("Result deleted!");
    }
  };

  // --------------------------
  // Filtering Programs
  // --------------------------
  const filteredPrograms = programs.filter((p) => {
    return (
      (!filterCategory || p.category === filterCategory) &&
      (!search || p.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // --------------------------
  // Calculate Grand Totals
  // --------------------------
  const grandTotals = { QUBA: 0, THAIBA: 0, MINA: 0 };
  programs.forEach((program) => {
    ["f", "s", "t"].forEach((section) => {
      const sectionMark = section === "f" ? 5 : section === "s" ? 3 : 1;
      program.score[section].forEach((entry) => {
        const gradeMark = entry.grade === "A" ? 5 : entry.grade === "B" ? 3 : 0;
        const total = sectionMark + gradeMark;
        if (entry.team && grandTotals[entry.team] !== undefined) {
          grandTotals[entry.team] += total;
        }
      });
    });
  });

  // --------------------------
  // JSX Rendering
  // --------------------------
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 font-poppins">
      <Toaster /> {/* Toast notifications */}

      {/* Header: Dashboard Title + Add Button */}
      <div className="w-full flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Dashboard</h1>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          onClick={() => setIsDialogOpen(true)}
        >
          <PlusCircle size={20} /> Add New Result
        </button>
      </div>

      {/* Filters: Search + Category */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by program name"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="sub_junior">Sub Junior</option>
          <option value="senior">Senior</option>
          <option value="super_senior">Super Senior</option>
          <option value="general">General</option>
        </select>
      </div>

      {/* Grand Totals */}
      <div className="mb-6 bg-blue-800 rounded-xl shadow-lg p-6 flex justify-around text-center">
        {["QUBA", "THAIBA", "MINA"].map((team) => (
          <div key={team}>
            <h3 className="font-bold text-lg text-white">{team}</h3>
            <p className="text-2xl text-white">{grandTotals[team]}</p>
          </div>
        ))}
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPrograms.length === 0 ? (
          <p className="text-gray-500 col-span-full text-lg">No programs found.</p>
        ) : (
          filteredPrograms.map((program, index) => (
            <div key={index} className="bg-blue-500 rounded-2xl shadow-xl p-6 flex flex-col gap-4">
              {/* Program Header with Edit/Delete */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-xl text-white">{program.name}</h2>
                  <p className="text-sm text-white">{program.category}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-700 hover:text-blue-800 transition"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Program Scores */}
              {["f", "s", "t"].map(
                (section, i) =>
                  sectionEnabled[section] && (
                    <div key={section} className="bg-gray-50 rounded-lg p-3">
                      <h3 className="font-semibold text-lg mb-2">
                        {i === 0 ? "First" : i === 1 ? "Second" : "Third"}
                      </h3>
                      {program.score[section].map((entry, idx) => {
                        const sectionMark = section === "f" ? 5 : section === "s" ? 3 : 1;
                        const gradeMark = entry.grade === "A" ? 5 : entry.grade === "B" ? 3 : 0;
                        const totalMark = sectionMark + gradeMark;

                        return (
                          <div key={idx} className="grid grid-cols-4 gap-2 text-sm mb-1 items-center">
                            <span className="font-medium text-gray-700">{entry.team || "-"}</span>
                            <span className="text-gray-600">{entry.candidate || "-"}</span>
                            <span className="text-gray-600">Grade: {entry.grade || "-"}</span>
                            <span className="font-semibold text-blue-600 text-center">{totalMark}</span>
                          </div>
                        );
                      })}
                    </div>
                  )
              )}
            </div>
          ))
        )}
      </div>

      {/* Dialog Form */}
      <Dialog
        className="max-w-4xl w-full"
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title={editingIndex !== null ? "Edit Result" : "Add New Result"}
      >
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-6">
          {/* Name & Category Input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Program Name</label>
              <input
                type="text"
                name="name"
                value={formData.program[0].name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">-- Choose --</option>
                <option value="sub_junior">Sub Junior</option>
                <option value="senior">Senior</option>
                <option value="super_senior">Super Senior</option>
                <option value="general">General</option>
              </select>
            </div>
          </div>

          {/* Scores Section with Toggle Switch */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["f", "s", "t"].map((section, i) => (
              <div key={section} className="border rounded-lg p-4 space-y-3 bg-gray-50 relative">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{i === 0 ? "First" : i === 1 ? "Second" : "Third"}</h3>
                  {/* Rounded Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={sectionEnabled[section]}
                      onChange={() => toggleSection(section)}
                    />
                    <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all duration-300"></div>
                  </label>
                  <span className="ml-2 text-sm">{sectionEnabled[section] ? "Enabled" : "Disabled"}</span>
                </div>

                {/* Disabled section info */}
                {!sectionEnabled[section] && (
                  <p className="text-gray-500 italic text-sm">This section is disabled</p>
                )}

                {/* Score input rows */}
                {sectionEnabled[section] &&
                  formData.program[0].score[section].map((entry, index) => (
                    <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                      <select
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={entry.team}
                        onChange={(e) =>
                          handleScoreChange(section, index, "team", e.target.value)
                        }
                      >
                        <option value="">-- Team --</option>
                        <option value="QUBA">Quba</option>
                        <option value="THAIBA">Thaiba</option>
                        <option value="MINA">Mina</option>
                      </select>

                      {/* Candidate input */}
                      {["MINA", "QUBA", "THAIBA"].includes(entry.team) ? (
                        <select
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={entry.candidate}
                          onChange={(e) =>
                            handleScoreChange(section, index, "candidate", e.target.value)
                          }
                        >
                          <option value="">-- Chest Number --</option>
                          {(() => {
                            let start = 0, end = 0;
                            if (entry.team === "MINA") start = 300, end = 345;
                            if (entry.team === "QUBA") start = 100, end = 145;
                            if (entry.team === "THAIBA") start = 200, end = 245;
                            return Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
                              (num) => <option key={num} value={num}>{num}</option>
                            );
                          })()}
                        </select>
                      ) : (
                        <input
                          type="text"
                          placeholder="Candidate"
                          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={entry.candidate}
                          onChange={(e) =>
                            handleScoreChange(section, index, "candidate", e.target.value)
                          }
                        />
                      )}

                      {/* Grade select */}
                      <select
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={entry.grade || ""}
                        onChange={(e) =>
                          handleScoreChange(section, index, "grade", e.target.value)
                        }
                      >
                        <option value="">-- Grade --</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                      </select>

                      {/* Calculated score */}
                      <span className="text-center font-medium text-blue-600">
                        {(section === "f" ? 5 : section === "s" ? 3 : 1) +
                          (entry.grade === "A" ? 5 : entry.grade === "B" ? 3 : 0)}
                      </span>
                    </div>
                  ))}

                {/* Add candidate button */}
                {sectionEnabled[section] && formData.program[0].score[section].length < 3 && (
                  <button
                    type="button"
                    onClick={() => addCandidateRow(section)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    + Add Candidate
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300"
          >
            {editingIndex !== null ? "Update Result" : "Add Result"}
          </button>
        </form>
      </Dialog>
    </div>
  );
}

export default Home;
