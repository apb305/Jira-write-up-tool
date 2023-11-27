import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

export default function SingleInputFields({ register, step }) {
  return (
    <>
      {step.isInput && (
        <FormControl fullWidth sx={{mt: 1}}>
          <TextField size="small" name={step.id} {...register(step.id)} />
        </FormControl>
      )}
    </>
  );
}
