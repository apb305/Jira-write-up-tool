import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { List, ListItem } from "@mui/material";

export default function JiraStepsModal({ jiraData }) {
  const [open, setOpen] = React.useState(false);
  const jiraRef = React.useRef(null);
  const jiraReporterRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyStepsClipboard = () => {
    const content = jiraRef.current;
    if (content) {
      const textToCopy = content.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Text copied to clipboard");
        })
        .catch((error) => {
          toast.error("Failed to copy text");
          console.error("Failed to copy text: ", error);
        });
    }
  };

  const copyReporterToClipboard = () => {
    const content = jiraReporterRef.current;
    if (content) {
      const textToCopy = content.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Text copied to clipboard");
        })
        .catch((error) => {
          toast.error("Failed to copy text");
          console.error("Failed to copy text: ", error);
        });
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mt: 2 }}>
        View Steps
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent ref={jiraRef}>
          <Typography sx={{ marginBottom: 2 }}>
            <strong ref={jiraReporterRef}>
              {jiraData.agentName}{" "}
              {`(${jiraData.agentEmail})`} on behalf of {jiraData.reporterName}{" "}
              {`(${jiraData.reporterEmail})`}{" "}
            </strong>
          </Typography>
          <DialogActions>
          <Button onClick={copyReporterToClipboard}>Copy Reporter Details</Button>
        </DialogActions>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            <strong>JIRA Replication Steps</strong>
          </Typography>
          <Typography>
            <strong>Platform:</strong> {jiraData.platform}
          </Typography>
          {""}
          <Typography>
            <strong>Organization Name:</strong> {jiraData.orgName}
          </Typography>
          {""}
          <Typography>
            <strong>Issue:</strong> {jiraData.issue}
          </Typography>
          {""}
          <Typography>
            <strong>Affected User Information:</strong>
          </Typography>
          {""}
          <List>
            <ListItem>- Username: {jiraData.username}</ListItem>
            <ListItem>- Role: {jiraData.role}</ListItem>
            <ListItem>- PID: {jiraData.pid}</ListItem>
          </List>
          {""}
          <Typography>
            <strong>Replication Steps:</strong>
          </Typography>
          <List>
            {jiraData.inputs.map((item, index) => (
              <ListItem key={index}>
                {index + 1}: {item}
              </ListItem>
            ))}
          </List>
          {""}
          <Typography>
            <strong>Expected Result:</strong> {jiraData.expected}
          </Typography>
          {""}
          <Typography>
            <strong>Actual Result:</strong> {jiraData.actual}
          </Typography>
          {""}
          {jiraData.additionalInformation ? (
            <Typography>
              <strong>Additional Information:</strong>{" "}
              {jiraData.additionalInformation}
            </Typography>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={copyStepsClipboard}>Copy Steps</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
