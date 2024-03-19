import React, { useState, useContext } from "react";
// @ts-ignore
import { createFormEditor } from "@bpmn-io/form-js";

import "@bpmn-io/form-js/dist/assets/form-js.css";
import "@bpmn-io/form-js/dist/assets/form-js-editor.css";
import "@bpmn-io/form-js/dist/assets/dragula.css";
import "@bpmn-io/form-js/dist/assets/form-js-base.css";
import "@bpmn-io/form-js/dist/assets/form-js-playground.css";

import { useSchema } from './SchemaContext';

import "./editor.css";

import schema from "./schema.json";

import { useEffect } from "react";
import { Schema } from "@/types/types";

interface Props {
  setSchema: VoidFunction,
  schema: Schema
}

export default function Editor() {
  const { schema, setSchema } = useSchema();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import and use any module or code that uses KeyboardEvent here
      (async () => {
        const formEditor = await createFormEditor({
          container: document.getElementById("editor"),
          schema,
          exporter: {
            name: "Avertra  Editor",
            version: "1.0.0",
          },
        });

        formEditor.on("changed", () => {
          setSchema(formEditor.saveSchema())
        });
      })();
    }
  }, []);

  return (
    <div>
      <div id="editor"></div>
    </div>
  );
}
