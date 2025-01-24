import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListString =  localStorage.getItem('read-list');
    if(storedListString){
        const storedList = JSON.parse(storedListString);
        return storedList;
    } else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id)){
        console.log(id, 'Already exist in the read list');
    } else {
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
        toast('This book is added to your read list.')
    }
} 

export {addToStoredReadList, getStoredReadList}