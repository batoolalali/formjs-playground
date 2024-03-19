'use client';
// @ts-ignore
import { Form } from "@bpmn-io/form-js-viewer";
import { useEffect, useMemo, useRef } from "react";
import { useSchema } from './SchemaContext';


import "@bpmn-io/form-js/dist/assets/form-js.css";
import "@bpmn-io/form-js/dist/assets/form-js-editor.css";
import "@bpmn-io/form-js/dist/assets/dragula.css";
import "@bpmn-io/form-js/dist/assets/form-js-base.css";
import "@bpmn-io/form-js/dist/assets/form-js-playground.css";
import "./editor.css";


export default function FormViewer() {

  const container = useRef<any>();
  // const form = useMemo(() => new Form(), []);
  let form = useMemo(() => (typeof window !== 'undefined' ? new Form() : null), []);

  const { schema } = useSchema();

  useEffect(() => {
    form.on("submit", (event: any) => {
      console.log("event.data", event.data);
      console.log("event.errors", event.errors);

    });
  }, [form]);

  useEffect(() => {
    form.attachTo(container.current);
    form.importSchema(schema);

    return () => form.detach();
  }, [form, schema, container]);
  
  return (
    <div>
      <div ref={container} />
    </div>
  );
}
