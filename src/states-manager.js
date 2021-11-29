class StatesManager {
	constructor(items, states, monostatic = true) {
		this.items = []
		this.singleStateMode = monostatic
		
		let itemsArray = typeof items.length != 'undefined' ? items : [ items ]
		let statesArray = typeof states == 'string' ? [ null, states ] : [ null, ...states ]
		
		itemsArray.forEach(item => {
			this.items.push({ item: item, state: null })
		})
		
		this.states = statesArray
	}
	
	setStateForItem(itemIndex, stateIndex) {
		if (this.isValidItem(itemIndex)) {
			if (this.singleStateMode) {
				this.items.map((item, index) => {
					item.state = index == itemIndex ? stateIndex : 0;
				})
			} else {
				this.items[itemIndex].state = stateIndex
			}
		}
	}
	
	getStateForItem(itemIndex) {
		if (this.isValidItem(itemIndex)) {
			let item = typeof itemIndex == 'number' ? this.items[itemIndex] : itemIndex
			
			if (typeof item.getState == 'function') {
				return item.getState()
			} else if (item.state !== undefined) {
				return item.state
			}
		}
	}
	
	isValidItem(item) {
		if (typeof item == 'number') {
			return (item >= 0 && item < this.items.length && this.items[item] != 'undefined')
		} else  {
			return this.items.includes(item)
		}
	}
}

export default StatesManager
