'use client';

import { useState, useContext } from "react";

import Editor from "./components/Editor";
import { Schema } from "@/types/types";
import { useRouter } from 'next/navigation'
import FormViewer from "./components/FormViewer";
import { SchemaProvider } from './components/SchemaContext';


export default function Home() {
  const router = useRouter()
 
  return (

      <div>
        <Editor></Editor>
        <button onClick={() => {
          router.push("/form")
        }}>Show Form</button>
      </div>
  );
}
