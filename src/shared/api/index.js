import { useState } from "react";
import {
    useQuery,
} from '@tanstack/react-query';

const addVideo = (uniqueOpsId, body)=> {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    setIsPending(true);
    fetch(`${import.meta.env.VITE_API_BASE_URL}/video`, {
        method: "POST",
        headers: {
            "X-Unique-Ops-Id": uniqueOpsId,
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    })
    .then((res)=>{
        setIsPending(false);
        setData(res.json());
    })
    .catch((e)=>{
        setIsPending(false);
        setError(e);
    });

    return {
        isPending,
        error,
        data,
    }
}

const fetchVideos = ()=> {
    const { isPending, error, data } = useQuery({
        queryKey: ['videos'],
        queryFn: () =>
            fetch(`${import.meta.env.VITE_API_BASE_URL}/video`)
              .then((res) => res.json()),
    })

    return {
        isPending,
        error,
        data,
    }
}

const searchVideos = (search)=> {
    const {isPending, error, data} = useQuery({
        queryKey: ['search'],
        queryFn: ()=> fetch(`${import.meta.env.VITE_API_BASE_URL}/search?q=${search}`).then((res) =>
            res.json()),
    });
    return {
        isPending, 
        error, 
        data,
    }
}

export default {
    addVideo,
    fetchVideos,
    searchVideos,
}