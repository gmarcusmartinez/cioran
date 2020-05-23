import React from 'react';
import { connect } from 'react-redux';
import { createTicket } from '../../../store/actions';
import { FormInput, FormSelect, FormTextArea } from '../../common/Form';

import {
  formInitialState,
  ticketTypeOptions,
  storyPointOptions,
  priorityOptions,
} from './options';

interface CreateTicketFormProps {
  sprint_id: string | null;
  project: string;
  createTicket: Function;
}
interface FormState {
  title: string;
  ticketType: string;
  storyPoints: number;
  description: string;
  priority: string;
  project: string;
}

const CreateTicketForm: React.FC<CreateTicketFormProps> = ({
  sprint_id,
  createTicket,
  project,
}) => {
  const [formData, setFormData] = React.useState<FormState>(formInitialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      project,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTicket(formData, sprint_id!);
    setFormData(formInitialState);
  };

  const renderOptions = (arr: any[]) => {
    return arr.map((el) => <option key={el.text}>{el.text}</option>);
  };
  const { title, ticketType, priority, storyPoints, description } = formData;

  return (
    <form onSubmit={handleSubmit} className='create-ticket-form'>
      <FormInput
        label='Ticket Title'
        name='title'
        value={title}
        onChange={handleChange}
      />
      <FormSelect
        label='Ticket Type'
        value={ticketType}
        name='ticketType'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={ticketTypeOptions}
      />
      <FormSelect
        label='Story Points'
        value={storyPoints}
        name='storyPoints'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={storyPointOptions}
      />
      <FormSelect
        label='Priority'
        value={priority}
        name='priority'
        onChange={handleChange}
        renderOptions={renderOptions}
        options={priorityOptions}
      />
      <FormTextArea
        label='description'
        value={description}
        name='description'
        onChange={handleChange}
      />
      <button className='btn-primary' style={{ marginBottom: '1rem' }}>
        Submit
      </button>
    </form>
  );
};
const mapStateToProps = (state: any) => ({
  project: state.projects.project._id,
});

export default connect(mapStateToProps, { createTicket })(CreateTicketForm);
