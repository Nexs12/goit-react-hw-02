import Feedback from "../Feedback/Feedback.jsx";

import Description from "../Description/Description.jsx";

import Options from "../Options/Options.jsx";

import { useState, useEffect } from 'react';

import Notification from "../Notification/Notification.jsx";


const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

 useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
 }, []);
  

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (

    <>
      <Description />
      <div>
        <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
        {totalFeedback > 0 ? (
          <Feedback totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} feedback={feedback} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    </>
  );
};


export default App;
