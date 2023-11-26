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
          toast.success("Replication steps copied to clipboard");
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
          toast.success("Original reporter copied to clipboard");
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
        View
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            <strong>Original Reporter:</strong>
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            <strong ref={jiraReporterRef}>
              {jiraData.agentName} &#40;{jiraData.agentEmail}&#41; on behalf of{" "}
              {jiraData.reporterName} &#40;{jiraData.reporterEmail}&#41;{" "}
            </strong>
          </Typography>
          <DialogActions>
            <Button onClick={copyReporterToClipboard}>
              Copy Reporter Details
            </Button>
          </DialogActions>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            <strong>JIRA Replication Steps:</strong>
          </Typography>
          <div ref={jiraRef}>
            <Typography>
              <strong>Platform:</strong> {jiraData.platform}
            </Typography>
            {jiraData.schoolsInputFields.length > 0 ? ( // If there are schools, display them
              <>
                <Typography>
                  <strong>School Name&#40;s&#41;:</strong>
                </Typography>
                <List>
                  {jiraData.schoolsInputFields.map((item, index) => (
                    <ListItem key={index}>
                      {item.school}
                      <br></br>
                      PID: {item.pid}
                    </ListItem>
                  ))}
                </List>
              </>
            ) : null}
            <Typography>
              <strong>Issue:</strong> {jiraData.issue}
            </Typography>
            <Typography>
              <strong>Affected Users:</strong>
            </Typography>
            <List>
              {jiraData.affectedUsersInputFields.map((item, index) => (
                <ListItem key={index}>
                  Username: {item.username}
                  <br></br> Role: {item.role}
                  <br></br> PID: {item.pid}
                </ListItem>
              ))}
            </List>
            <Typography>
              <strong>Troubleshooting:</strong>
            </Typography>
            <List>
              {jiraData.troubleshooting.map((item, index) => (
                <ListItem key={index}>- {item}</ListItem>
              ))}
              {jiraData.troubleshootingInputFields.map((item, index) => (
                <ListItem key={index}>- {item}</ListItem>
              ))}
            </List>
            <Typography>
              <strong>Replication Steps:</strong>
            </Typography>
            <List>
              {jiraData.stepsInputFields.map((item, index) => (
                <ListItem key={index}>
                  {index + 1}: {item}
                </ListItem>
              ))}
            </List>
            <Typography>
              <strong>Expected Result:</strong> {jiraData.expected}
            </Typography>
            <Typography>
              <strong>Actual Result:</strong> {jiraData.actual}
            </Typography>
            {jiraData.additionalContext ? (
              <Typography>
                <strong>Additional Context:</strong>{" "}
                {jiraData.additionalContext}
              </Typography>
            ) : null}
          </div>
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
