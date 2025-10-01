import React, { useState } from "react";
import Dialog from "../../../components/Dialog/Dialog";
import { PlusCircle } from "lucide-react";
import { useHotkeys } from "react-hotkeys-hook";
function Home() {
    const [programs, setPrograms] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: "",
        program: [
            {
                name: "",
                score: {
                    f: [{ team: "", candidate: "", place: 1 }],
                    s: [{ team: "", candidate: "", place: 1 }],
                    t: [{ team: "", candidate: "", place: 1 }],
                },
            },
        ],
    });
    const resetForm = () => {
        setFormData({
            category: "",
            program: [
                {
                    name: "",
                    score: {
                        f: [{ team: "", candidate: "", place: 1 }],
                        s: [{ team: "", candidate: "", place: 1 }],
                        t: [{ team: "", candidate: "", place: 1 }],
                    },
                },
            ],
        });
    };

    useHotkeys(
        "esc",
        () => {
            if (isDialogOpen) {
                setIsDialogOpen(false);
                resetForm()
            }
        },
        [isDialogOpen]
    );

    // change handler
    const handleScoreChange = (section, index, field, value) => {
        setFormData((prev) => {
            const updated = [...prev.program[0].score[section]];
            updated[index][field] = value;
            return {
                ...prev,
                program: [
                    {
                        ...prev.program[0],
                        score: {
                            ...prev.program[0].score,
                            [section]: updated,
                        },
                    },
                ],
            };
        });
    };

    // add candidate row
    const addCandidateRow = (section) => {
        setFormData((prev) => {
            const updated = [...prev.program[0].score[section]];
            if (updated.length < 3) {
                updated.push({ team: "", candidate: "", place: updated.length + 1 });
            }
            return {
                ...prev,
                program: [
                    {
                        ...prev.program[0],
                        score: {
                            ...prev.program[0].score,
                            [section]: updated,
                        },
                    },
                ],
            };
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setFormData((prev) => ({
                ...prev,
                program: [{ ...prev.program[0], name: value }],
            }));
        }
        if (name === "category") {
            setFormData((prev) => ({
                ...prev,
                category: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("✅ Submitted:", formData);
        setPrograms((prev) => [...prev, formData.program[0]]);
        setIsDialogOpen(false);
        resetForm()
    };

    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* Header */}
            <div className="w-full h-20 flex border-b-2 border-gray-700 justify-center items-center bg-white shadow">
                <h1 className="text-4xl font-bold">Dashboard</h1>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <button
                        className="w-[150px] bg-green-400 hover:bg-green-500 text-white font-semibold border-2 border-green-300 rounded-xl py-2 mb-4"
                        onClick={() => setIsDialogOpen(true)}
                    >
                        <PlusCircle className="inline" />
                        Add Program
                    </button>

                    {/* Dialog */}
                    <Dialog
                        className="w-[100%]"
                        isOpen={isDialogOpen}
                        onClose={() => setIsDialogOpen(false)}
                        title="Add Program"
                    >
                        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-bold mb-4">Add Score</h2>
                            <div className="border flex items-center rounded-2xl p-3 mb-3">
                                {/* Program Name */}
                                <div className="m-3">
                                    <label className="block font-medium">Program Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-fit border rounded p-2"
                                        value={formData.program[0].name}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Category */}
                                <div className="m-3">
                                    <label className="block font-medium">Category</label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="border p-2 rounded w-fit"
                                    >
                                        <option value="">-- Choose --</option>
                                        <option value="sub_junior">Sub Junior</option>
                                        <option value="senior">Senior</option>
                                        <option value="super_senior">Super Senior</option>
                                        <option value="general">General</option>
                                    </select>
                                </div>
                            </div>

                            {/* Scores Sections */}
                            {["f", "s", "t"].map((section, i) => (
                                <div key={section} className="mb-4 border p-3 rounded">
                                    <label className="block font-bold mb-2">
                                        {i === 0 ? "First" : i === 1 ? "Second" : "Third"}
                                    </label>

                                    {formData.program[0].score[section].map((entry, index) => (
                                        <div key={index} className="flex items-center gap-2 mb-2">
                                            {/* Team */}
                                            <select
                                                className="border p-2 rounded w-32"
                                                value={entry.team}
                                                onChange={(e) => handleScoreChange(section, index, "team", e.target.value)}
                                            >
                                                <option value="">-- Team --</option>
                                                <option value="QUBA">Quba</option>
                                                <option value="THAIBA">Thaiba</option>
                                                <option value="MINA">Mina</option>
                                            </select>

                                            {/* Candidate */}
                                            <input
                                                type="text"
                                                placeholder="Candidate"
                                                className="border p-2 rounded w-32"
                                                value={entry.candidate}
                                                onChange={(e) =>
                                                    handleScoreChange(section, index, "candidate", e.target.value)
                                                }
                                            />

                                            {/* Place */}
                                            <input
                                                type="number"
                                                min="1"
                                                max="3"
                                                placeholder="Place"
                                                className="border p-2 rounded w-20"
                                                value={entry.place}
                                                onChange={(e) => handleScoreChange(section, index, "place", e.target.value)}
                                            />
                                        </div>
                                    ))}

                                    {/* Add candidate button */}
                                    {formData.program[0].score[section].length < 3 && (
                                        <button
                                            type="button"
                                            onClick={() => addCandidateRow(section)}
                                            className="text-blue-500 text-sm hover:underline mt-1"
                                        >
                                            + Add Candidate
                                        </button>
                                    )}
                                </div>
                            ))}

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white rounded py-2 mt-4 hover:bg-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </Dialog>

                    {/* List */}
                    <div className="space-y-3 mt-6">
                        {programs.length === 0 ? (
                            <p className="text-gray-500">No programs added yet.</p>
                        ) : (
                            programs.map((program, index) => (
                                <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm flex flex-col">
                                    <span className="font-medium">{program.name}</span>
                                    <span className="text-sm text-gray-400">{formData.category}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
