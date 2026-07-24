import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState } from "react";
import { Plus, Search, Trash } from "lucide-react";
const items = [
    {
        id: 1,
        label: "Website",
        value: "website"
    },
    {
        id: 1,
        label: "Landing Page",
        value: "landing_page"
    },
    {
        id: 1,
        label: "Web App",
        value: "web_app"
    },
]
const CreateProject = () => {
    const [challenge, setChallenge] = useState("");
    const [challengeItems, setChallengeItems] = useState([])
    const chlng = useRef(null)
    const add = () => {
        setChallengeItems([...challengeItems, challenge])
        console.log(challengeItems);

    }
    const remove = (id) => {
        setChallengeItems(challengeItems.filter((_, i) => i != id))
    }
    const createProject = () => {
        console.log(challengeItems);

    }
    return (
        <div className="py-5">

            <div className="bg-white px-3 py-5 max-w-4xl rounded-md" >
                <div className="flex gap-4 w-full">
                    <div className="w-full">
                        <Label htmlFor="title">Project name</Label>
                        <Input
                            name="name"
                            id="title"
                            placeholder="Enter Project name"
                            type="text"
                        />
                    </div>
                    <div className="w-full">
                        <Label htmlFor="technologies">Used Technologies</Label>
                        <Input
                            id="technologies"
                            name="technologies"
                            placeholder="Used Technologies of your project (HTML,CSS,JS etc.)"
                            type="text"
                        />
                    </div>
                </div>
                <br />
                <div className="flex gap-4">
                    <div className="w-full">
                        <Label htmlFor="categories">Website categories</Label>
                        <Select defaultValue="website" >
                            <SelectTrigger className="w-full ">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                    {items.map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.label}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-full">
                        <Label htmlFor="url">Website URL</Label>
                        <Input
                            id="url"
                            name="url"
                            placeholder="Website or Web App URL"
                            type="url"
                        />
                    </div>
                </div>
                <br />
                <div className="flex gap-4 w-full">
                    <div className="w-full">
                        <div>

                            <InputGroup className="max-w-xl">
                                <InputGroupInput
                                    className="h-full p-5 w-full"
                                    value={challenge}
                                    onChange={(e) => setChallenge(e.target.value)}
                                    name="name"
                                    placeholder="Challenges you faced"
                                />
                                {/* <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon> */}
                                <InputGroupAddon align="inline-end" className=" w-12  p-2">
                                    <button onClick={add} > <Plus size={"20"} /> </button>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        <div className="p-3">
                            <ol>
                                {
                                    challengeItems.map((data, index) => (
                                        <li className="flex justify-between gap-1 items-center" key={index}>
                                            {data}
                                            {"  "}
                                            <Button variant="outline" size="icon" className="rounded-full" onClick={() => remove(index)}>
                                                <Trash className="size-2 w-full" />
                                            </Button>
                                        </li>
                                    )
                                    )
                                }
                            </ol>
                            <LearningField />
                        </div>
                    </div>
                    <div className="w-full">
                        <Label htmlFor="challenge"> Challenges You Faced</Label>
                        <Input placeholder="What do you learned?" />
                        <div className="p-3">
                            <ul>
                                <li>Hello</li>
                                <li>Hello</li>
                                <li>Hello</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <br />
                <div className="">
                    <Textarea rows={10} placeholder="Write Your Project Description" ></Textarea>
                </div>
                <Button onClick={createProject} >Create </Button>
            </div >
        </div>
    );
};



export function LearningField() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (!text.trim()) return;

        setTodos([...todos, text]);
        setText("");
        console.log(text, todos);

    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div style={{ maxWidth: "400px", margin: "40px auto" }}>
            <h2>Todo List</h2>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default CreateProject;

