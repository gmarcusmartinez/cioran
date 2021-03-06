import React, { ChangeEvent } from 'react';

interface IProps {
  label: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextArea: React.FC<IProps> = ({
  label,
  value,
  name,
  onChange,
}) => {
  return (
    <div className='form-field'>
      <label>Description</label>
      <textarea
        value={value}
        onChange={onChange}
        rows={2}
        name={name}
      ></textarea>
    </div>
  );
};
