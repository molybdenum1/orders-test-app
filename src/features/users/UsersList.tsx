import React from 'react';
import { useNavigate } from 'react-router';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  gender: string;
  country: string;
  city: string;
  state: string;
  postCode: string;
  street: string;
  streetNumber: string;
}

interface UsersListProps {
  users: User[];
  view?: 'grid' | 'list';
}

const UsersList: React.FC<UsersListProps> = ({ users, view = 'grid' }) => {
  const navigate = useNavigate();

  const handleUserClick = (user: User) => {
    if (user.id !== undefined) {
      navigate(`/users/${user.id}`);
    }
  };

  if (view === 'list') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {users.map((user: User) => (
          <div
            key={user.id}
            style={{ border: '1px solid #eee', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 12, background: '#fafafa', cursor: 'pointer' }}
            onClick={() => handleUserClick(user)}
          >
            <img src={user.avatar} alt={user.firstName} width={36} height={36} style={{ borderRadius: '50%' }} />
            <div>
              <div style={{ fontWeight: 600 }}>{user.firstName} {user.lastName}</div>
              <div style={{ color: '#555', fontSize: 14 }}>{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // grid view
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
      {users.map((user: User) => (
        <div
          key={user.id}
          style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, display: 'flex', alignItems: 'center', gap: 12, background: '#fafafa', cursor: 'pointer' }}
          onClick={() => handleUserClick(user)}
        >
          <img src={user.avatar} alt={user.firstName} width={48} height={48} style={{ borderRadius: '50%' }} />
          <div>
            <div style={{ fontWeight: 600 }}>{user.firstName} {user.lastName}</div>
            <div style={{ color: '#555', fontSize: 14 }}>{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
