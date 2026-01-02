// StateManager.js - Controls Q's state transitions

class StateManager {
    constructor() {
      this.currentState = 'IDLE';
      this.previousState = null;
      this.stateHistory = [];
      this.transitionLog = [];
    }
  
    transitionTo(state, trigger) {
      // Validate transition
      if (!this.isValidTransition(state, trigger)) {
        console.error('Invalid state transition:', state, 'triggered by:', trigger);
        return false;
      }
  
      // Log transition
      this.logTransition(state, trigger);
      
      // Update states
      this.previousState = this.currentState;
      this.currentState = state;
      this.stateHistory.push({
        state: state,
        trigger: trigger,
        timestamp: new Date().toISOString()
      });
  
      console.log(`State transition: ${this.previousState} -> ${state} via ${trigger}`);
      return true;
    }
  
    isValidTransition(newState, trigger) {
      // Governance: Only certain triggers can cause state changes
      const validTransitions = {
        'IDLE': {
          to: 'ENGAGED',
          validTriggers: ['admin_override', 'scheduled_broadcast', 'live_stream_start', 'manual_engagement']
        },
        'ENGAGED': {
          to: 'IDLE',
          validTriggers: ['session_end', 'admin_override', 'manual_disengage']
        }
      };
  
      const currentRule = validTransitions[this.currentState];
      if (!currentRule) return false;
      
      if (currentRule.to !== newState) return false;
      
      return currentRule.validTriggers.includes(trigger);
    }
  
    logTransition(state, trigger) {
      this.transitionLog.push({
        from: this.currentState,
        to: state,
        trigger: trigger,
        timestamp: new Date().toISOString(),
        identity: this.getIdentityForState(state)
      });
    }
  
    getIdentityForState(state) {
      return state === 'IDLE' ? 'Q-finity' : 'Robin';
    }
  
    getCurrentState() {
      return {
        state: this.currentState,
        identity: this.getIdentityForState(this.currentState),
        history: this.stateHistory.slice(-5) // Last 5 transitions
      };
    }
  
    enforceStateBehavior(state) {
      const behaviors = {
        'IDLE': {
          canInitiate: false,
          canAuthority: false,
          canPrescribe: false,
          function: 'assistive only'
        },
        'ENGAGED': {
          canInitiate: true,
          canAuthority: true,
          canPrescribe: false,
          function: 'relay only'
        }
      };
      
      return behaviors[state] || behaviors['IDLE'];
    }
  }
  
  export default StateManager;