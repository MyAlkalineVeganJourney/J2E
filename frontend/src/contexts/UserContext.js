import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const saveQuizScore = async (quizType, score, metadata) => {
    setIsLoading(true);
    console.log(`Saving quiz score: ${quizType} - ${score}`, metadata);
    // In a real app, this would make an API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    return { success: true };
  };
  
  const saveFormData = async (formData) => {
    setIsLoading(true);
    console.log('Saving form data:', formData);
    // In a real app, this would make an API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    return { success: true };
  };
  
  const sendEmailReport = async (email, data) => {
    setIsLoading(true);
    console.log('Sending email to:', email, data);
    // In a real app, this would make an API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    return { success: true };
  };
  
  return (
    <UserContext.Provider value={{
      user,
      saveQuizScore,
      saveFormData,
      sendEmailReport,
      isLoading
    }}>
      {children}
    </UserContext.Provider>
  );
};
