import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import Sidebar from '../../components/common/SideBar';
import SprintSideBar from '../../components/Project/SprintSideBar/SprintSideBar';
import { fetchSprints, Sprint } from '../../store/actions';

interface ProjectProps {
  fetchSprints: Function;
  match: {
    params: {
      id: string;
    };
  };
  sprints: {
    loading: boolean;
    count: number;
    pagination: {};
    items: Sprint[];
  };
}

const Project: React.FC<ProjectProps> = ({ fetchSprints, match, sprints }) => {
  const projectId = match.params.id;

  React.useEffect(() => {
    fetchSprints(projectId);
  }, [fetchSprints, projectId]);

  console.log(sprints);

  return (
    <div className='projects-wrapper'>
      <Sidebar width={100} bg={'#66b2b2'} />
      <SprintSideBar />
      <div className='sprint-content'></div>
    </div>
  );
};
const mapStateToProps = (state: any) => ({
  sprints: state.sprints,
});

export default connect(mapStateToProps, { fetchSprints })(Project);
