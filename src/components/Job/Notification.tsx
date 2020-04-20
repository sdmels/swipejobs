import React from 'react';
import LinkToDashboad from 'components/LinkToDashboad';

interface Props {
  color: String;
  message: string;
}
const Notification = ({ color, message }: Props) => {
  return (
    <div className={`text-white p-4 mb-4 ${color}`}>
      {message} <LinkToDashboad />
    </div>
  );
};

export default Notification;
