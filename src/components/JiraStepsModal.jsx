import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { List, ListItem } from "@mui/material";

export default function JiraStepsModal({ jiraData }) {
  const [open, setOpen] = React.useState(false);
  const dialogContentRef = React.useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipboard = () => {
    const content = dialogContentRef.current;
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
        <DialogContent ref={dialogContentRef}>
          <Typography variant="h5">
            <strong>JIRA Replication Steps</strong>
          </Typography>
          {""}
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
            <strong>Username:</strong> {jiraData.username}
          </Typography>
          <Typography>
            <strong>Role:</strong> {jiraData.role}
          </Typography>
          <Typography>
            <strong>Organization PID:</strong> {jiraData.pid}
          </Typography>
          {""}
          <Typography>
            <strong>Replication Steps:</strong>
          </Typography>
          <List>
            {jiraData.inputs.map((item, index) => (
              <ListItem key={index}>{index + 1}: {item}</ListItem>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={copyToClipboard}>Copy</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
