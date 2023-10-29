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
      dropDownItems: ["ED", "ThinkCentral", "HRW"],
    },
    {
      id: "issue",
      label: "Issue",
      isMultilineInput: true
    },
    {
      id: "replicationSteps",
      label: "Replication Steps",
      isInput: true
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

