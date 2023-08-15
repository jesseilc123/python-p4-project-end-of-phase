import React, { useState }from "react";
import { useHistory } from "react-router-dom";

function NewArticle() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [body, setBody] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/articles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                "title": title, 
                "category": category, 
                "body": body,
            }),
          }).then(r => {
              if (r.ok) {
                  r.json().then(history.push("articles/:id"));
              } else {
                  r.json().then((err) => console.log(err))
              }
          })
    }

    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-slate-300">
            <form onSubmit={handleSubmit} className="m-4">
                <div className="mb-4">
                    <label className="text-4xl font-bold">Title</label>
                    <input 
                        className="w-full h-full mt-4 border-2 border-black rounded p-2 text-2xl bg-gray-400"
                        type="text"
                        id="title"
                        autoComplete="off"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="text-4xl font-bold">Category</label>
                    <select
                        className="w-[10%] h-full mt-4 border-2 border-black rounded p-2 text-xl bg-gray-400"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Business">Business</option>
                        <option value="Finance">Finance</option>
                        <option value="Economics">Economics</option>
                        <option value="Computers">Computers</option>
                        <option value="Science">Science</option>
                        <option value="Technology">Technology</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Health">Health</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select> 
                </div>
                <div className="mb-4 h-[500px]">
                    <label className="text-4xl font-bold">Body</label>
                    <textarea 
                        className="w-full h-full mt-4 mb-4 border-2 border-black rounded p-2 text-2xl bg-gray-400"
                        type="textarea"
                        id="body"
                        autoComplete="off"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="mt-[100px]">
                    <button type="submit" className="flex w-full items-center justify-center font-bold border-2 border-black p-[10px] rounded bg-orange-300 hover:bg-slate-500">
                        Create Article
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewArticle;