const Notification = ({ message, className }) => {
  if (message === null) {
    return null;
  }
  if (message.startsWith("Information")) {
    return <div className='error'>{message}</div>;
  } else {
    return <div className='success'>{message}</div>;
  }
};

export default Notification;
