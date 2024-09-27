import { MemberType } from '../App';

type Props = {
  members: MemberType[];
};

const Members = (props: Props) => {
  const imgstyle = { width: 90, height: 80 };
  const list = props.members.map((member) => {
    return (
      <div key={member.name} className='col-6 col-md-4 col-lg-3'>
        <img src={member.photo} alt={member.name} className='img-thumbnail' style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className='m-4'>
      <div className='container'>
        <div className='row'>{list}</div>
      </div>
    </div>
  );
};

export default Members;