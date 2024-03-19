const schema = {
  components: [
    {
      key: "creditor",
      label: "Creditor",
      type: "textfield",
      validate: {
        required: true,
      },
    },
    {
      key: "amount",
      label: "Amount",
      type: "number",
      validate: {
        required: true,
      },
    },
    {
      description: "An invoice number in the format: C-123.",
      key: "invoiceNumber",
      label: "Invoice Number",
      type: "textfield",
      validate: {
        pattern: "^C-[0-9]+$",
      },
    },
    {
      key: "approved",
      label: "Approved",
      type: "checkbox",
    },
    {
      key: "approvedBy",
      label: "Approved By",
      type: "textfield",
    },
    {
      key: "submit",
      label: "Submit",
      type: "button",
    },
    {
      action: "reset",
      key: "reset",
      label: "Reset",
      type: "button",
    },
  ],
  schemaVersion: 2,
  exporter: {
    name: "Camunda Modeler",
    version: "5.0.0-alpha.1",
  },
  type: "default",
  id: "Form_1v99ha5",
  executionPlatform: "Camunda Platform",
  executionPlatformVersion: "7.16.0",
};
