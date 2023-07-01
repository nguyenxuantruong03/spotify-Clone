import {create} from "zustand"

interface UploadMOdalProps{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useUploadModal =create<UploadMOdalProps>((set)=>({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose:() => set({isOpen: false}),
}));

export default useUploadModal