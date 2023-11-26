import React from "react";
import { Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function PlatformDropdownMenu({ control, step }) {
  return (
    <>
      {step.isPlatformDropdownMenu && (
        <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small-label">{step.label}</InputLabel>
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
    </>
  );
}
