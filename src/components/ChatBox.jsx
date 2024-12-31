import React, { useState, useEffect } from "react";
import { model } from "../gemini/gemini.config.js";
import NewMarkdown from "./NewMarkdown.jsx";
import MarkdownViewer from './MarkdownViewer.jsx'

function ChatBox() {
	//TO STORE PROMPT STATE ENTERED BY USER
	const [prompt, setPrompt] = useState("");

	//TO STORE PREVIOUS CHAT
	const [geminiHistory, setGeminiHistory] = useState([]);
	const [prevChat, setprevChat] = useState(false);
	const [responseText, setResponseText] = useState("");

	//GET PREVIOUS CHAT FROM LOCAL STORAGE
	useEffect(() => {
		const mreaHistory =
			JSON.parse(window.localStorage.getItem("GeminiHistory")) || [];
		if (mreaHistory.length > 0) {
			setGeminiHistory(mreaHistory);
			setprevChat(true);
		}
		//REMOVE FOR UPDATE
		// window.localStorage.removeItem("GeminiHistory");
		// console.log(geminiHistory);
	}, []);

	const promptSubmit = async () => {
		if (!prompt.trim()) return;

		setPrompt("");

		//GIVE PREVIOUS CHAT TO MODEL

		const chatSession = model.startChat({
			history: geminiHistory.length > 1 ? geminiHistory : [],
		});

		try {
			setGeminiHistory((prev) => {
				const newHistory = [
					...prev,
					{
						role: "user",
						parts: [{ text: prompt }],
					},
				];
				return newHistory;
			});

			const result = await chatSession.sendMessage(prompt);
			const text = await result.response.text();
			setResponseText(text);
			console.log(text);

			setGeminiHistory((prev) => {
				const newHistory = [
					...prev,
					{
						role: "model",
						parts: [{ text: text }],
					},
				];
				window.localStorage.setItem(
					"GeminiHistory",
					JSON.stringify(newHistory)
				);
				return newHistory;
			});
		} catch (error) {
			console.log("ERROR AT ERROR", error);
		}
	};
	const check = (e) => {
		if ((e.code === "Enter" || e.code === "NumpadEnter") && !e.shiftKey) {
			e.preventDefault();

			//CALL FUNCTION TO GET RESPONSE
			promptSubmit();
		}
	};

	return (
		<>
			<div className="w-5/6 h-dvh pt-36">
				<div className="w-full h-full overflow-y-auto flex flex-col gap-4 bg-white px-4 py-2">
					{prevChat &&
						geminiHistory.map((chat, index) => (
							<div key={index} className="w-full ">
								<div
									className={`p-2 rounded ${
										chat.role === "user"
											? "bg-blue-200"
											: "bg-green-200"
									}`}
								>
									{chat.role}
									{chat.role === "user" ? <p>
										{chat.parts[0].text}
									</p> : 
										<NewMarkdown
											content={chat.parts[0].text}
										/>
									}
								</div>
							</div>
						))}
					{
						// prompt && <div className="w-full p-2 rounded bg-green-100 ">
						//     {/* <MarkdownViewer content={prompt} /> */}
						//     <NewMarkdown content={prompt} />
						// </div>
					}
					{responseText && (
						<div className="w-full p-2 rounded bg-green-100 ">
							{/* <MarkdownViewer content={responseText} /> */}

							<NewMarkdown content={responseText} />
						</div>
					)}
				</div>
			</div>

			<form
				onKeyDown={check}
				onSubmit={(e) => {
					e.preventDefault();
					promptSubmit();
				}}
				className="w-9/12 h-20 flex border rounded-lg items-center justify-between bg-[#3c3e42] py-2 "
			>
				<textarea name="" id="" cols="30" rows="10"
								
					type="text"
					placeholder="Enter Prompt"
					onChange={(e) => setPrompt(e.target.value)}
					value={prompt}
					className="custom-scroll w-11/12 h-full rounded-lg p-2 text-white resize-none focus:outline-none bg-[#3c3e42]"
					></textarea>
				<button
					type="submit"
					disabled={prompt.length}
					className="flex items-center justify-center md:p-2 md:w-1/12 h-full w-5"
				>
					<img
						src="https://drive.google.com/thumbnail?id=1QQcpVvaTYbbI5RbvyJAqixMKp-lKBp-C"
						alt="Send"
						className="filter contrast-200 blur-0 w-[4vw] h-[4vw]"
					/>
				</button>
			</form>

			<div>
				<p className="text-xs text-slate-400 pb-2 hidden md:block">
					Press Shift+Enter for a new line
				</p>
			</div>
		</>
	);
}

export default ChatBox;
