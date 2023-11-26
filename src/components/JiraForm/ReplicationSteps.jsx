import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Controller, useFieldArray } from "react-hook-form";
import { IconButton, Stack, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ReplicationSteps({ control, step }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "stepsInputFields",
  });
  return (
    <>
      {step.isReplicationSteps && (
        <>
          {fields.map((field, index) => (
            <div key={field.id}>
              <Stack direction="row">
                <Controller
                  name={`stepsInputFields[${index}]`}
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <TextField
                        label={`Step ${index + 1}`}
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
            Add Step
          </Button>
        </>
      )}
    </>
  );
}
