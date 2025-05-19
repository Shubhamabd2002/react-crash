import { createContext, type Dispatch, type SetStateAction } from 'react';

export type DataContext = {
    data: string;
    setData: Dispatch<SetStateAction<string>>;
}

const initialData: DataContext = {
    data: '',
    setData: () => {}
}

const DataContext = createContext(initialData)

export default DataContext