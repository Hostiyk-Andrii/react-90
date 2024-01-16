import { MdOutlineEmail, MdManageAccounts } from 'react-icons/md';
import { FaUserNinja } from 'react-icons/fa';

export const Profile = ({ imgUrl, username, email, age }) => {
  return (
    <div>
      <img src={imgUrl} alt={username} width="120" height="120" />
      <p>
        <b>
          User name:
          <FaUserNinja />
        </b>
        {username}
      </p>
      <p>
        <b>
          Email:
          <MdOutlineEmail />
        </b>
        {email}
      </p>
      <p>
        <b>
          Age:
          <MdManageAccounts size="20" />
        </b>
        {age}
      </p>
    </div>
  );
};
