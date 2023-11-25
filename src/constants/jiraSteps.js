const steps = [
  // {
  //   id: "caseNumber",
  //   label: "Case Number",
  //   isInput: true,
  // },
  {
    id: "agentName",
    label: "Agent Name",
    isInput: true,
  },
  {
    id: "agentEmail",
    label: "Agent Email",
    isInput: true,
  },
  {
    id: "reporterName",
    label: "Reporter's Name",
    isInput: true,
  },
  {
    id: "reporterEmail",
    label: "Reporter's Email",
    isInput: true,
  },
  {
    id: "platform",
    label: "Platform",
    isPlatformDropdownMenu: true,
    dropDownItems: ["ED", "ThinkCentral", "HRW", "HMHCO.COM"],
  },
  {
    id: "issue",
    label: "Issue",
    isMultilineInput: true,
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    isCheckboxes: true,
    checkboxItems: [
      "Cleared cache and cookies",
      "Tried Incognito",
      "Tried different browser",
      "Tried different device",
    ],
  },
  {
    id: "affectedUsers",
    label: "Affected Users",
    isAffectedUserDropdownMenu: true,
    dropDownItems: ["Administrator", "Teacher", "Student"],
  },
  {
    id: "schoolNames",
    label: `School Name(s)`,
    isMultipleInputFieldsOne: true,
  },
  // {
  //   id: "pid",
  //   label: "Organization PID",
  //   isInput: true,
  // },
  {
    id: "replicationSteps",
    label: "Replication Steps",
    isMultipleInputFieldsTwo: true,
  },
  {
    id: "expected",
    label: "Expected Result",
    isMultilineInput: true,
  },
  {
    id: "actual",
    label: "Actual Result",
    isMultilineInput: true,
  },
  {
    id: "additionalContext",
    label: "Additional Context",
    isMultilineInput: true,
  },
];

export default steps;
