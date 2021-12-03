class StatesManager {
	constructor(element, options = { states: [] }) {
		this.element = typeof element === 'string' ? document.querySelector(element) : element
		this.currentState = null
		
		if (this.element != null) {
			this.states = options.states
			this.currentState = this.getStateFromElement()
			
		}
	}

	// Get the element's current data-state value if it matches one of the allowed states,
	// otherwise, return `null`
	getStateFromElement() {
		const elm = this.element
		if ('state' in elm.dataset) {
			const currentState = elm.dataset.state
			
			if (this.states.includes(currentState)) {
				return currentState
			} else {
				return null
			}
		}
	}
}

export default StatesManager
