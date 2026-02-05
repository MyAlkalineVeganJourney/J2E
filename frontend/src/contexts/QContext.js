import React, { createContext, useState, useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import { getQResponse, saveConversation, getVoiceResponse } from '../services/qApi';

export const QContext = createContext();

export const QProvider = ({ children }) => {
  const { language, t } = useContext(LanguageContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  // Initialize with greeting in current language
  useEffect(() => {
    const greeting = t('q_greeting');
    setMessages([{ sender: 'q', text: greeting, timestamp: new Date().toISOString() }]);
  }, [language, t]);

  const askQ = async (question, options = {}) => {
    if (!question.trim()) return;
    
    // Add user message
    const userMessage = { 
      sender: 'user', 
      text: question, 
      timestamp: new Date().toISOString(),
      language 
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Get response from backend with language parameter
      const response = await getQResponse({
        question,
        language,
        sessionId,
        context: messages.slice(-5), // Last 5 messages as context
        ...options
      });

      const qMessage = { 
        sender: 'q', 
        text: response.text,
        data: response.data,
        timestamp: new Date().toISOString(),
        language
      };
      
      setMessages(prev => [...prev, qMessage]);

      // Save conversation to backend
      await saveConversation({
        sessionId,
        userMessage,
        qMessage,
        language
      });

      return response;
    } catch (error) {
      console.error('Q Error:', error);
      
      // Fallback to local translations
      const fallbackResponses = [
        t('q_response_1'),
        t('q_response_2'),
        t('q_response_3'),
        t('q_response_4'),
        t('q_response_5')
      ];
      
      const fallbackResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      const fallbackMessage = { 
        sender: 'q', 
        text: fallbackResponse,
        timestamp: new Date().toISOString(),
        language,
        isFallback: true
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
      return { text: fallbackResponse, isFallback: true };
    } finally {
      setIsLoading(false);
    }
  };

  const clearConversation = () => {
    const greeting = t('q_greeting');
    setMessages([{ sender: 'q', text: greeting, timestamp: new Date().toISOString() }]);
  };

  const getConversationHistory = () => {
    return messages;
  };

  const getVoiceResponse = async (text) => {
    try {
      const audio = await getVoiceResponse({ text, language });
      return audio;
    } catch (error) {
      console.error('Voice response error:', error);
      return null;
    }
  };

  return (
    <QContext.Provider value={{
      askQ,
      messages,
      isLoading,
      language,
      clearConversation,
      getConversationHistory,
      getVoiceResponse,
      sessionId
    }}>
      {children}
    </QContext.Provider>
  );
};
