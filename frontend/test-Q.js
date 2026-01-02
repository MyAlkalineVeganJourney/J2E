// SIMPLE Q TEST - Just copy and paste this entire file

console.log('=== STARTING Q TEST ===\n');

// First, let's test if we can create a basic Q class
class SimpleQ {
  constructor() {
    console.log('Creating SimpleQ...');
    this.state = 'IDLE';
    this.whoIsSpeaking = 'Q-finity';
  }
  
  getStatus() {
    return `State: ${this.state}, Speaking: ${this.whoIsSpeaking}`;
  }
  
  handleInput(question) {
    console.log(`Question: "${question}"`);
    
    if (question.includes('store')) {
      return "The store is at /store";
    } else if (question.includes('product')) {
      return "We have sea moss and soursop leaves";
    } else if (question.includes('medical') || question.includes('medicine')) {
      return "I cannot provide medical advice";
    } else {
      return "I can help with store locations and product information";
    }
  }
}

// Run the test
console.log('1. Creating Q instance:');
const q = new SimpleQ();
console.log('Status:', q.getStatus());

console.log('\n2. Testing questions:');
console.log('Response:', q.handleInput('Where is the store?'));
console.log('Response:', q.handleInput('What products do you have?'));
console.log('Response:', q.handleInput('What medicine should I take?'));

console.log('\n=== TEST COMPLETE ===');
console.log('✅ If you see this, Q basics are working');