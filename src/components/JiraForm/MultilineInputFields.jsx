import React from "react";
import Textarea from "./styles";

export default function MultilineInputFields({ register, step }) {
  return (
    <>
      {step.isMultilineInput && (
        <Textarea
          aria-label="minimum height"
          minRows={3}
          name={step.id}
          {...register(step.id)}
        />
      )}
    </>
  );
}
