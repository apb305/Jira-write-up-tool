import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Controller, useFieldArray } from "react-hook-form";
import { IconButton, Stack, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Troubleshooting({ control, step }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "troubleshootingInputFields",
  });

  return (
    <>
      {step.isTroubleShooting && (
        <>
          <Controller
            name={step.id}
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <FormControl fullWidth sx={{ mt: 1 }}>
                <FormGroup>
                  {step.checkboxItems && step.checkboxItems.map((item, index) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={(e) => {
                            const updatedValue = e.target.checked
                              ? [...field.value, item]
                              : field.value.filter((value) => value !== item);
                            field.onChange(updatedValue);
                          }}
                          checked={field.value.includes(item)}
                        />
                      }
                      label={item}
                      key={index}
                    />
                  ))}
                </FormGroup>
              </FormControl>
            )}
          />

          {fields.map((field, index) => (
            <div key={field.id}>
              <Stack direction="row">
                <Controller
                  name={`troubleshootingInputFields[${index}]`}
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ mt: 1 }}>
                      <TextField
                        placeholder="Troubleshooting"
                        size="small"
                        {...field}
                      />
                    </FormControl>
                  )}
                />
                <IconButton
                  aria-label="delete"
                  color="error"
                  onClick={() => remove(index)}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Stack>
            </div>
          ))}

          <Button
            variant="outlined"
            type="button"
            size="small"
            sx={{ marginY: 3 }}
            onClick={() => {
              append([""]);
            }}
          >
            Add Troubleshooting
          </Button>
        </>
      )}
    </>
  );
}
