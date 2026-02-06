import { useState, useEffect, useRef } from "react";
import { X, Send, Loader2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearChat } from "../app/features/chatSlice";
import { format } from "date-fns";

const ChatBox = () => {
    const { listing, isOpen } = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    // Mock User ID for frontend simulation
    const currentUserId = "user_123"; 

    // State
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null);

    // Initial Dummy Data Load
    useEffect(() => {
        if (listing && isOpen) {
            setIsLoading(true);
            // Simulate API delay
            const timer = setTimeout(() => {
                setMessages([
                    {
                        id: 1,
                        message: `Hi! Is this ${listing.title} still available?`,
                        sender_id: currentUserId,
                        createdAt: new Date(Date.now() - 100000).toISOString(),
                    },
                    {
                        id: 2,
                        message: "Yes, it is! Let me know if you have any questions.",
                        sender_id: "seller_456",
                        createdAt: new Date(Date.now() - 80000).toISOString(),
                    }
                ]);
                setIsLoading(false);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, [listing, isOpen]);

    // Auto Scroll
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages.length, isOpen]);

    // Cleanup on close
    useEffect(() => {
        if (!isOpen) {
            setMessages([]);
            setNewMessage("");
            setIsLoading(true);
        }
    }, [isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        // Create a local message object
        const tempMessage = {
            id: Date.now(),
            message: newMessage,
            sender_id: currentUserId,
            createdAt: new Date().toISOString(),
        };

        // Update state immediately (Optimistic UI)
        setMessages((prev) => [...prev, tempMessage]);
        setNewMessage("");
        
        // Optional: Simulate a reply from the "seller" after 2 seconds
        setTimeout(() => {
            const replyMessage = {
                id: Date.now() + 1,
                message: "This is a demo reply since there is no backend!",
                sender_id: "seller_456",
                createdAt: new Date().toISOString(),
            };
            setMessages((prev) => [...prev, replyMessage]);
        }, 2000);
    };

    if (!isOpen || !listing) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-50 flex items-center justify-center sm:p-4">
            <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-2xl h-screen sm:h-[600px] flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg truncate">{listing?.title}</h3>
                        <p className="text-sm text-indigo-100 truncate">
                            Chatting with seller ({listing?.owner?.name || 'Seller'})
                        </p>
                    </div>
                    <button onClick={() => dispatch(clearChat())} className="ml-4 p-1 hover:bg-white/20 hover:bg-opacity-20 rounded-lg transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <Loader2Icon className="size-6 animate-spin text-indigo-600" />
                        </div>
                    ) : messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-center">
                                <p className="text-gray-500 mb-2">No messages yet</p>
                                <p className="text-sm text-gray-400">Start the conversation!</p>
                            </div>
                        </div>
                    ) : (
                        messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender_id === currentUserId ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[70%] rounded-lg p-3 pb-1 ${message.sender_id === currentUserId ? "bg-indigo-600 text-white" : "bg-white border border-gray-200 text-gray-800"}`}>
                                    <p className="text-sm break-words whitespace-pre-wrap">{message.message}</p>
                                    <p className={`text-[10px] mt-1 ${message.sender_id === currentUserId ? "text-indigo-200" : "text-gray-400"}`}>{format(new Date(message.createdAt), "MMM dd 'at' h:mm a")}</p>
                                </div>
                            </div>
                        ))
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
                    <div className="flex items-end space-x-2">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendMessage(e);
                                }
                            }}
                            placeholder="Type your message..."
                            className="flex-1 resize-none border border-gray-300 rounded-lg px-4 py-2 focus:outline-indigo-500 max-h-32"
                            rows={1}
                        />
                        <button type="submit" disabled={!newMessage.trim()} className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg disabled:opacity-50 transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Press Enter to send, Shift+Enter for new line</p>
                </form>
            </div>
        </div>
    );
};

export default ChatBox;