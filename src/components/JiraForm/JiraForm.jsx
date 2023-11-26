import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import steps from "../../constants/jiraSteps";
import JiraStepsModal from "../JiraStepsModal";
import ResetAlertDialog from "../ResetAlertDialog";
import { toast } from "react-toastify";
import Schools from "./Schools";
import Troubleshooting from "./Troubleshooting";
import AffectedUsers from "./AffectedUsers";
import ReplicationSteps from "./ReplicationSteps";
import PlatformDropdownMenu from "./PlatformDropdownMenu";
import SingleInputFields from "./SingleInputFields";
import MultilineInputFields from "./MultilineInputFields";

export default function JiraForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { register, handleSubmit, control, setValue, getValues, watch, reset } =
    useForm({
      defaultValues: {
        stepsInputFields: [],
        schoolsInputFields: [],
        troubleshootingInputFields: [],
        affectedUsersInputFields: [],
      },
    });

  useEffect(() => {
    watch(); // Force a re-render after updating the input state
    const savedFormData = localStorage.getItem("jiraFormData");

    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      // Set form data using setValue for each field
      Object.keys(parsedData).forEach((fieldName) => {
        setValue(fieldName, parsedData[fieldName]);
      });
    }

    // console.log(savedFormData);
  }, [control, reset]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    localStorage.removeItem("jiraFormData");
    reset();
    setActiveStep(0);
    toast.success("All fields cleared");
  };

  const saveData = (data) => {
    // Save form data to local storage
    localStorage.setItem("jiraFormData", JSON.stringify(data));
    console.log(getValues());
  };

  return (
    <Box
      component="form"
      sx={{ maxWidth: 400, marginBottom: 5 }}
      onSubmit={handleSubmit(saveData)}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              optional={
                index === steps.length ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>

            <StepContent>
              {/* Regular Inpufields */}
              <SingleInputFields {...{ step, register }} />

              {/* Dynamic Input fields */}
              <Troubleshooting {...{ control, step, register }} />
              <AffectedUsers {...{ control, step, register }} />
              <Schools {...{ control, step, register }} />
              <ReplicationSteps {...{ control, step, register }} />

              {/* Platform drop-down menu */}
              <PlatformDropdownMenu {...{ control, step }} />

              {/* Multiline input fields */}
              <MultilineInputFields {...{ step, register }} />

              {/* Finish and Continue buttons */}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <JiraStepsModal steps={steps} jiraData={getValues()} />
          <Button onClick={handleBack} sx={{ mt: 3, mr: 2 }}>
            Edit
          </Button>
          <ResetAlertDialog handleReset={handleReset} />
        </Paper>
      )}
    </Box>
  );
}
