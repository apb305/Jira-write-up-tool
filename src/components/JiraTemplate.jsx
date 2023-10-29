import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function JiraTemplate({jira}) {

  return (
    <Box sx={{ width: '100%', maxWidth: 500, marginTop: 5 }}>
        <Typography variant='h5' gutterBottom>
      JIRA
    </Typography>
    <Typography gutterBottom>
      <strong>Case Number</strong>: {jira.caseNumber}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Platform:</strong> {jira.platform}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Number of users affected:</strong> {jira.numberAffected}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Username:</strong> {jira.username}
    </Typography>
    <Typography gutterBottom>
      <strong>Role:</strong> {jira.role}
    </Typography>
    <Typography gutterBottom>
      <strong>Organization PID:</strong> {jira.pid}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Organization Name:</strong> {jira.orgName}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Expected Result:</strong> {jira.expected}
    </Typography>
    <br></br>
    <Typography gutterBottom>
      <strong>Actual Result:</strong> {jira.actual}
    </Typography>
  </Box>
  )
}
