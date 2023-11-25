import * as React from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Controller, useFieldArray } from "react-hook-form";
import { IconButton, InputLabel, Stack, TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function AffectedUsers({ control, step }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "affectedUsersInputFields",
  });

  return (
    <>
      {step.isAffectedUserDropdownMenu && (
        <>
          {fields.map((field, index) => (
            <div key={field.id}>
              <Stack direction="row">
                <Controller
                  name={`affectedUsersInputFields[${index}]`}
                  control={control}
                  defaultValue={{ school: "", pid: "" }}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ m: 1 }}>
                      <TextField
                        label="Username"
                        size="small"
                        value={field.value.username || ""}
                        onChange={(event) =>
                          field.onChange({
                            ...field.value,
                            username: event.target.value,
                          })
                        }
                      />

                      <FormControl fullWidth sx={{ mt: 2 }}>
                        <InputLabel id="demo-select-small-label">
                          Role
                        </InputLabel>
                        <Select
                          label="Role"
                          value={field.value.role || ""}
                          onChange={(event) =>
                            field.onChange({
                              ...field.value,
                              role: event.target.value,
                            })
                          }
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {step.dropDownItems.map((item, index) => (
                            <MenuItem value={item} key={index}>
                              {item}
                            </MenuItem>
                          ))}
                          <MenuItem value="None">Other</MenuItem>
                        </Select>
                      </FormControl>

                      <TextField
                        sx={{ mt: 2 }}
                        label="PID"
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
            Add User
          </Button>
        </>
      )}
    </>
  );
}
