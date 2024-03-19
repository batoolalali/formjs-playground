'use client'
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
// import AppContext from '../components/AppContext';
import FormViewer from '../components/FormViewer';

import { useSchema } from '../components/SchemaContext';



export default function Page() {
    const router = useRouter()
  

    return (

        <div>
            <h1>Form</h1>
            <button onClick={() => {
                router.push("/")
            }}>Continue editing..</button>
            <FormViewer></FormViewer>
        </div>
    )
}