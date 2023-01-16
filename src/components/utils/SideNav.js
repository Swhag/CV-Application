import React, { useState, useEffect } from 'react';

function SideNav(props) {
  const {
    handleLoadMyCV,
    handleSaveCV,
    handleLoadEmptyCV,
    handleLoadExampleCV,
    handlePrint,
  } = props;

  const [notification, setNotification] = useState('hide');
  const [message, setMessage] = useState('Loaded "My Resume"');
  const [refreshTimer, SetRefreshTimer] = useState(null);

  function handleMessage(currentMessage) {
    if (currentMessage === message) {
      SetRefreshTimer(!refreshTimer);
      console.log(refreshTimer);
    }

    setMessage(currentMessage);
  }

  useEffect(() => {
    setNotification('hide');

    setTimeout(() => {
      setNotification('show');
    }, 150);

    const timer = setTimeout(() => {
      setNotification('hide');
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [refreshTimer]);

  useEffect(() => {
    setNotification('hide');

    setTimeout(() => {
      setNotification('show');
    }, 150);

    const timer = setTimeout(() => {
      setNotification('hide');
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return (
    <>
      <div className='side-btn-group'>
        <div className='side-btn-block'>
          <button
            className='side-btn'
            onClick={() => {
              handleLoadMyCV();
              setNotification('show');
              handleMessage(`Loaded "My Resume"`);
            }}
          >
            My Resume
          </button>

          <button
            className='side-btn'
            onClick={() => {
              handleLoadExampleCV();
              setNotification('show');
              handleMessage('Loaded Example Resume');
            }}
          >
            Load Example
          </button>
        </div>

        <div className='side-btn-block'>
          <button
            className='side-btn'
            onClick={() => {
              handleLoadEmptyCV();
              setNotification('show');
              handleMessage('Loaded New form');
            }}
          >
            New
          </button>
          <button
            className='side-btn'
            onClick={() => {
              if (window.confirm('Do you want to overwrite "My Resume"?')) {
                handleSaveCV();
                handleMessage(`Current input saved as "My Resume"`);
              }
            }}
          >
            Save
          </button>

          <button className='side-btn' onClick={handlePrint}>
            Generate PDF
          </button>
        </div>
      </div>

      <Notification
        notification={notification}
        message={message}
      ></Notification>
    </>
  );
}

function Notification(props) {
  const { notification, message } = props;
  return (
    <div className={`notification effect-9 ${notification}`}>{message}</div>
  );
}

export default SideNav;
