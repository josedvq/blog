import React from 'react';
import Chip from '@mui/material/Chip';

type Props = {stack: Array<string>}
export const TechStacks: React.FC<Props> = ({ stack }: Props) => {
  return (
    <>
      {stack.map(tech => {
        return (
          <Chip
            label={tech}
            color="secondary"
            style={{ marginRight: 5 }}
            key={tech}
          />
        );
      })}
    </>
  );
};