const steps = [
    {
      id: "caseNumber",
      label: "Case Number",
      isInput: true,
    },
    {
      id: "platform",
      label: "Platform",
      isDropdownMenu: true,
      dropDownItems: ["ED", "ThinkCentral", "HRW", "HMHCO.COM"],
    },
    {
      id: "issue",
      label: "Issue",
      isMultilineInput: true
    },
    // {
    //   id: "numberAffected",
    //   label: "Number users affected",
    //   isInput: true,
    // },
    {
      id: "username",
      label: "Username",
      isInput: true,
    },
    {
      id: "role",
      label: "Role",
      isDropdownMenu: true,
      dropDownItems: ["Administrator", "Teacher", "Student"],
    },
    {
      id: "orgName",
      label: "Organization Name",
      isInput: true,
    },
    {
      id: "pid",
      label: "Organization PID",
      isInput: true,
    },
    {
      id: "replicationSteps",
      label: "Replication Steps",
      allowMultipleInputFields: true
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
  ];

  export default steps

