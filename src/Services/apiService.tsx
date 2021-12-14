import axios from 'axios'

const URL = `${process.env.REACT_APP_SERVER_ADDRESS}/api/`

export const addThing = async (thing : ThingModel) =>{
    const res = await axios.post(URL, {...thing/});
    if (res.status !== 200){
        throw Error("Error adding ... with API")
    }
    return res
};

export const getAllThings = async () => {
    const res = await axios.get(URL);
    if (res.status !== 200){
        throw Error("Error getting all from API")
    }
    return res.data;
};

export const getThingById = async (id: number) => {
    const res = await axios.get(URL+ '/' + id);
    if (res.status !== 200) {
        throw Error("Error getting a single by ID")
    }
    return res.data;
};

export const updateThing = async (thing : ThingModel) => {
    const res = await axios.put(URL + '/', thing);
    if (res.status !== 200){
        throw Error("Error updating thing")
    }
    return res.data;
};

export const deleteThing = async (id : number) => {
    const res = await axios.delete(URL + "/" + id);
    if(res.status !=200){
        throw Error("Cannot delete thing!")
    }
    return res.data;
}

