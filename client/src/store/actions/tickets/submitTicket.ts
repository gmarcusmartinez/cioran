import { Dispatch } from 'redux';
import { ActionTypes } from '../types';
import { ITicket } from './createTicket';
import tickets from '../../../api/tickets';

export interface SubmitTicketAction {
  type: ActionTypes.SUBMIT_TICKET;
  payload: ITicket;
}
interface FormState {
  sprintId: string;
  projectId: string;
}

export const submitTicket = (formData: FormState, ticket_id: string) => async (
  dispatch: Dispatch
) => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await tickets.put(`/${ticket_id}/submit`, formData, config);
    dispatch<SubmitTicketAction>({
      type: ActionTypes.SUBMIT_TICKET,
      payload: res.data,
    });
  } catch (err) {
    console.log('ran');
    console.log(err);
  }
};
