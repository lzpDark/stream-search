import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchVideo} from "../api/api"

const Manage = () => {

    const navigate = useNavigate();

    const titleRef = useRef()
    const urlRef = useRef()

    const addVideo = async ()=> {
        const response = await fetchVideo(
            '' + Math.random(),
            {
                title: titleRef.current.value,
                url: urlRef.current.value,
            }
        );
        if(response.ok) {
            navigate('/');
        } else {
            navigate('/fail');
        }
    }

    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col justify-start">
                <p>Add Video</p>
                <div className="flex flex-row p-2 gap-2">
                    <label>title</label>
                    <input ref={titleRef} type="text" placeholder="input title" />
                </div>

                <div className="flex flex-row p-2 gap-2">
                    <label>url</label>
                    <input ref={urlRef} type="text" placeholder="input url" />
                </div>

                <button onClick={addVideo}> Add </button>
            </div>
        </div>
    );
}

export default Manage;