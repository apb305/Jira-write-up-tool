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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Controller, useForm } from "react-hook-form";
import { OutlinedInput } from "@mui/material";
import steps from "../../constants/jiraSteps";
import JiraStepsModal from "../JiraStepsModal";
import Textarea from "./styles";

export default function JiraForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const { register, handleSubmit, control, setValue, getValues, watch, reset } =
    useForm({
      defaultValues: { inputs: [""] }, // Initial input state with one empty input field
    });
  const [data, setData] = React.useState({});

  useEffect(() => {
    watch("inputs"); // Force a re-render after updating the input state
  }, [control]);

  //Append inputs fields for replication steps
  const appendInput = () => {
    setValue("inputs", [...getValues("inputs"), ""]);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    const response = confirm("Are you sure you want to do that?");

    if (response) {
      reset();
      setActiveStep(0);
      alert("Steps Cleared");
    } else {
      return;
    }
  };

  const handleOnSubmit = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <Box
      component="form"
      sx={{ maxWidth: 400 }}
      onSubmit={handleSubmit(handleOnSubmit)}
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
              {step.isInput && (
                <FormControl fullWidth sx={{ m: 1 }}>
                  <OutlinedInput
                    size="small"
                    name={step.id}
                    {...register(step.id)}
                  />
                </FormControl>
              )}

              {/* Dynamic Input section */}
              {step.allowMultipleInputFields && (
                <>
                  {getValues("inputs").map((_, index) => (
                    <Controller
                      key={index}
                      name={`inputs[${index}]`}
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <FormControl fullWidth sx={{ m: 1 }} key={index}>
                          <OutlinedInput
                            label={`Input ${index + 1}`}
                            size="small"
                            {...field}
                          />
                        </FormControl>
                      )}
                    />
                  ))}

                  <Button
                    variant="outlined"
                    type="button"
                    onClick={appendInput}
                  >
                    Add More
                  </Button>
                </>
              )}

              {/* Drop-down menu Items */}
              {step.isDropdownMenu && (
                <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                  <InputLabel id="demo-select-small-label">
                    {step.label}
                  </InputLabel>

                  <Controller
                    control={control}
                    name={step.id}
                    defaultValue=""
                    render={({ field }) => (
                      <Select label={step.label} {...field}>
                        <MenuItem value="None">N/A</MenuItem>
                        {step.dropDownItems.map((item, index) => (
                          <MenuItem value={item} key={index}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              )}

              {/* Text multiline input fields */}
              {step.isMultilineInput && (
                <Textarea
                  aria-label="minimum height"
                  minRows={3}
                  name={step.id}
                  {...register(step.id)}
                />
              )}

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
          <JiraStepsModal steps={steps} jiraData={data} />
          <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
            Back
          </Button>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
