const fetchVideo = (uniqueOpsId, body)=> {
    return fetch(`${import.meta.env.VITE_API_BASE_URL}/video`, {
        method: "POST",
        headers: {
            "X-Unique-Ops-Id": uniqueOpsId,
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    });
}

export {
    fetchVideo
};