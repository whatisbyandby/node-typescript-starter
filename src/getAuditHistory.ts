export const getAuditHistory = {
  tags: ["Audit Records"],
  description:
    "Returns all audit records from the system that the user has access to",
  operationId: "getAuditRecords",
  responses: {
    "200": {
      description: "A list of Audit Records",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              objectId: {
                type: "string",
                description:
                  "Unique Id the Object assocaiated with the Audit Record",
              },
              changes: {
                type: "string",
                description: "Changes",
              },
            },
          },
        },
      },
    },
  },
};
