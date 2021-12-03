class StatesManager {
	constructor(element) {
		this.element = typeof element === 'string' ? document.querySelector(element) : element
	}
}

export default StatesManager
