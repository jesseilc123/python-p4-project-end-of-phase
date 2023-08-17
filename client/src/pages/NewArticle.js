import React, { useState }from "react";
import { useHistory } from "react-router-dom";

function NewArticle() {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Business")
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
                  r.json().then((e) => history.push(`/articles/${e.id}`));
              } else {
                  r.json().then((err) => console.log(err))
              }
          })
    }

    return (
        <div className="absolute inset-x-0 top-[90px] h-screen left-64 bg-gray-800 ">
            <form onSubmit={handleSubmit} autoComplete="off" className=" m-4">
                <div className="flex flex-col justify-center mb-4">
                    <label className="flex justify-start text-white text-4xl font-bold">Title</label>
                    <input 
                        className="w-full h-full mt-4 border-2 border-black rounded p-2 text-2xl bg-gray-400 placeholder-gray-600"
                        type="text"
                        id="title"
                        placeholder="Enter your title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4 flex flex-col">
                    <label className="text-white text-4xl font-bold">Category</label>
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
                    <label className="text-white text-4xl font-bold">Body</label>
                    <textarea 
                        className="w-full h-full mt-4 mb-4 border-2 border-black rounded p-2 text-2xl bg-gray-400 placeholder-gray-600"
                        type="textarea"
                        id="body"
                        placeholder="Enter your article..."
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>
                <div className="mt-[100px]">
                    <button type="submit" className="flex w-full h-[100px] items-center justify-center font-bold border-2 border-black p-[10px] rounded bg-orange-300 hover:bg-slate-500">
                        Create Article
                    </button>
                </div>
            </form>
        </div>
    )
};

export default NewArticle;