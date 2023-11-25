import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Controller, useFieldArray } from "react-hook-form";
import { IconButton, Stack, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Schools({ control, step }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "schoolsInputFields",
  });

  return (
    <>
      {step.isMultipleInputFieldsOne && (
        <>
          {fields.map((field, index) => (
            <div key={field.id}>
              <Stack direction="row">
                <Controller
                  name={`schoolsInputFields[${index}]`}
                  control={control}
                  defaultValue={{ school: "", pid: "" }}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <TextField
                        label={`School ${index + 1}`}
                        size="small"
                        value={field.value.school || ""}
                        onChange={(event) =>
                          field.onChange({
                            ...field.value,
                            school: event.target.value,
                          })
                        }
                      />
                      <TextField
                        sx={{ mt: 1 }}
                        label={`PID`}
                        size="small"
                        value={field.value.pid || ""}
                        onChange={(event) =>
                          field.onChange({
                            ...field.value,
                            pid: event.target.value,
                          })
                        }
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
            Add School
          </Button>
        </>
      )}
    </>
  );
}
