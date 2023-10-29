import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function JiraStepsModal({ jiraData }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{ mt: 2 }}>
        Save
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"JIRA Replication Steps"}
        </DialogTitle>
        <DialogContent>
          <br></br>
          <Typography>
            <strong>Platform:</strong> {jiraData.platform}
          </Typography>
          <br></br>
          <br></br>
          <Typography>
            <strong>Organization Name:</strong> {jiraData.orgName}
          </Typography>
          <br></br>
          <br></br>
          {/* <Typography>
            <strong>Number of users affected:</strong> {jiraData.numberAffected}
          </Typography>
          <br></br>
          <br></br> */}
          <Typography>
            <strong>Username:</strong> {jiraData.username}
          </Typography>
          <Typography>
            <strong>Role:</strong> {jiraData.role}
          </Typography>
          <Typography>
            <strong>Organization PID:</strong> {jiraData.pid}
          </Typography>
          <br></br>
          <br></br>
          <Typography>
            <strong>Expected Result:</strong> {jiraData.expected}
          </Typography>
          <br></br>
          <br></br>
          <Typography>
            <strong>Actual Result:</strong> {jiraData.actual}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Copy</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
