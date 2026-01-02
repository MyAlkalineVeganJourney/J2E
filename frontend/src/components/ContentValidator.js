// ContentValidator.js - Enforces what Q can and cannot say

class ContentValidator {
    constructor() {
      this.allowedPatterns = this.getAllowedPatterns();
      this.forbiddenPatterns = this.getForbiddenPatterns();
      this.boundaryLog = [];
    }
  
    getAllowedPatterns() {
      return [
        // Site navigation
        /navigate|where is|how to find/i,
        /home|journey|store|podcast|contact/i,
        
        // Product information
        /product|what is|tell me about|ingredients/i,
        /sea moss|soursop|castor oil|volcanic/i,
        
        // Educational content
        /quantum|physics|biology|frequency/i,
        /detox|reset|fasting|alkaline/i,
        /dr\.? sebi|ancestral|nutrition/i,
        
        // Platform features
        /platform|feature|how does|what does/i,
        /ai|assistant|q|chat/i,
        
        // Robin's story
        /robin|story|journey|experience/i,
        
        // Events
        /event|gala|retreat|11.*11/i
      ];
    }
  
    getForbiddenPatterns() {
      return [
        // Medical advice
        /diagnos|treat|cure|heal|fix|remedy/i,
        /medicine|drug|pill|supplement.*(take|dose)/i,
        /you should|you must|you need to|recommend.*treatment/i,
        
        // Health claims
        /cancer|disease|illness|sick|pain/i,
        /prevents|protects|fights|beats|eliminates/i,
        
        // Prescriptive language
        /take this|use that|apply.*(daily|regular)/i,
        /prescription|dosage|amount.*take/i,
        
        // Authority claims
        /i know.*(health|medical)/i,
        /trust me.*(body|health)/i,
        /believe me.*(cure|heal)/i,
        
        // Emotional manipulation
        /you will feel|guarantee|promise|definitely/i,
        /miracle|magic|wonder|amazing.*cure/i
      ];
    }
  
    isAllowed(input, state) {
      // First check for forbidden patterns
      for (const pattern of this.forbiddenPatterns) {
        if (pattern.test(input)) {
          this.logBoundary('FORBIDDEN', input, pattern);
          return false;
        }
      }
      
      // For idle state, also check if topic is allowed
      if (state === 'IDLE') {
        const hasAllowedPattern = this.allowedPatterns.some(pattern => pattern.test(input));
        if (!hasAllowedPattern) {
          this.logBoundary('NOT_ALLOWED_IN_IDLE', input, 'No matching allowed pattern');
          return false;
        }
      }
      
      return true;
    }
  
    validateResponse(response, state) {
      // Check response doesn't contain forbidden content
      for (const pattern of this.forbiddenPatterns) {
        if (pattern.test(response)) {
          this.logBoundary('RESPONSE_FORBIDDEN', response, pattern);
          return false;
        }
      }
      
      // Check response matches state authority level
      if (state === 'IDLE') {
        if (this.hasAuthorityClaims(response)) {
          this.logBoundary('AUTHORITY_IN_IDLE', response, 'Authority claim in idle state');
          return false;
        }
      }
      
      return true;
    }
  
    hasAuthorityClaims(text) {
      const authorityPatterns = [
        /i (know|believe|think).*(you|your)/i,
        /you should|you must|you need/i,
        /trust me|believe me/i,
        /i promise|i guarantee/i
      ];
      
      return authorityPatterns.some(pattern => pattern.test(text));
    }
  
    logBoundary(type, content, reason) {
      this.boundaryLog.push({
        type: type,
        content: content.substring(0, 100), // First 100 chars
        reason: reason.toString(),
        timestamp: new Date().toISOString()
      });
      
      console.warn(`Content boundary: ${type} - ${reason}`);
    }
  
    getBoundaryLog() {
      return this.boundaryLog;
    }
  }
  
  export default ContentValidator;