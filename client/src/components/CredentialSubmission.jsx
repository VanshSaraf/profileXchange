import { useState } from "react";
import { X, CirclePlus } from "lucide-react";
import { toast } from "react-hot-toast";

const CredentialSubmission = ({ onClose, listing }) => {
    const [newField, setNewField] = useState("");
    const [credential, setCredential] = useState([
        { type: "email", name: "Email", value: "" },
        { type: "password", name: "Password", value: "" },
    ]);

    const handleAddField = () => {
        const name = newField.trim();
        if (!name) return toast.error("Please enter a field name");
        
        // Prevent duplicate field names
        if (credential.some(c => c.name.toLowerCase() === name.toLowerCase())) {
            return toast.error("Field already exists");
        }

        setCredential((prev) => [...prev, { type: "text", name, value: "" }]);
        setNewField("");
    };

    const handleRemoveField = (index) => {
        setCredential((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmission = (e) => {
        e.preventDefault();

        // 1. Validation
        if (credential.length === 0) {
            return toast.error("Please add at least one field");
        }

        for (const cred of credential) {
            if (!cred.value.trim()) {
                return toast.error(`Please fill in the ${cred.name} field`);
            }
        }

        // 2. Mock Submission
        const confirm = window.confirm("Credential will be verified & changed post submission. Are you sure?");
        if (!confirm) return;

        // Simulate API call
        toast.success("Credentials submitted successfully (Simulation)");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-[100] flex items-center justify-center sm:p-4">
            <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-lg h-screen sm:h-[320px] flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{listing?.title}</h3>
                        <p className="text-sm text-indigo-100 truncate">
                            Adding Credentials for {listing?.username} on {listing?.platform}
                        </p>
                    </div>
                    <button onClick={onClose} className="ml-4 p-1 hover:bg-white/20 hover:bg-opacity-20 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmission} className="flex flex-col items-start gap-4 p-4 overflow-y-auto flex-1">
                    {credential.map((cred, index) => (
                        <div key={index} className="grid grid-cols-[2fr_3fr_1fr] items-center gap-2 w-full">
                            <label className="text-sm font-medium text-gray-800 truncate" title={cred.name}>{cred.name}</label>
                            
                            <input 
                                type={cred.name.toLowerCase().includes("password") ? "password" : "text"}
                                value={cred.value} 
                                onChange={(e) => setCredential((prev) => prev.map((c, i) => (i === index ? { ...c, value: e.target.value } : c)))} 
                                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded outline-indigo-400" 
                            />
                            
                            <div className="flex justify-center">
                                <X 
                                    className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" 
                                    onClick={() => handleRemoveField(index)} 
                                />
                            </div>
                        </div>
                    ))}

                    {/* Add More fields */}
                    <div className="flex items-center gap-2 mt-2 w-full">
                        <input 
                            value={newField} 
                            onChange={(e) => setNewField(e.target.value)} 
                            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddField())}
                            type="text" 
                            placeholder="Add field name..." 
                            className="outline-none border-b border-gray-200 text-sm py-1 flex-1 focus:border-indigo-500" 
                        />
                        <button type="button" onClick={handleAddField} className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer font-medium">
                            <CirclePlus className="w-5 h-5" />
                        </button>
                    </div>

                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 mt-auto rounded-md w-full sm:w-auto">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CredentialSubmission;