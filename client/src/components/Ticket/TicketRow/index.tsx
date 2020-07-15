import React from 'react';
import { connect } from 'react-redux';
import { firstNameOnly } from 'utils';
import { ITicket, getTicket, ISprint, setDisplayModal } from 'store/actions';

interface IProps {
  ticket: ITicket;
  sprint: ISprint;
  getTicket: Function;
  setDisplayModal: Function;
}

const Ticket: React.FC<IProps> = ({
  ticket,
  sprint,
  getTicket,
  setDisplayModal,
}) => {
  const handleClick = () => {
    getTicket(sprint, ticket._id);
    setDisplayModal(true, 'TICKET');
  };

  return (
    <>
      <tr className={`ticket ${ticket.status}`} onClick={handleClick}>
        <td className={`t-col ${ticket.priority}`}></td>
        <td className='t-col'>{ticket.title}</td>
        <td className='t-col'>{ticket.ticketType}</td>
        <td className='t-col'>
          {ticket.assignedTo ? firstNameOnly(ticket.assignedTo.name) : null}
        </td>
        <td className='t-col'>{ticket.status}</td>
        <td className='t-col'>{ticket.storyPoints}</td>
      </tr>
    </>
  );
};
const mapStateToProps = (state: any) => ({
  sprint: state.sprints.sprint,
});
export default connect(mapStateToProps, { getTicket, setDisplayModal })(Ticket);