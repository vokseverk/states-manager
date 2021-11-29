import StatesManager from '../../src/states-manager.js'

describe('StatesManager', function() {
	it('can be initialized with a single item & state', function() {
		const manager = new StatesManager({}, 'on')
		
		expect(manager.items.length).toBe(1)
		expect(manager.states.length).toBe(2) // 
		expect(manager.states).toEqual([null, 'on'])
	})
	
	it('can be initialized with a single item & multiple states', function() {
		const manager = new StatesManager([{}], ['on', 'disabled', 'zoned'])
		
		expect(manager.items.length).toBe(1)
		expect(manager.states.length).toEqual(4)
		expect(manager.states).toEqual([null, 'on', 'disabled', 'zoned'])
	})
	
	it('can be initialized with multiple items & a single state', function() {
		const manager = new StatesManager([{}, {}, {}], 'disabled')
		
		expect(manager.items.length).toBe(3)
		expect(manager.states.length).toEqual(2)
		expect(manager.states).toEqual([null, 'disabled'])
	})
	
	describe('accessing item state', function() {
		let testItems
		let testStates
		let manager
		
		beforeEach(function() {
			testItems = [ { name: 'One' }, { name: 'Two' }]
			testStates = ['selected', 'disabled']
			manager = new StatesManager(testItems, testStates)
		})
		
		describe('setStateForItem', function() {
			
			it('can change the state of an item by its index', function() {
				
				manager.setStateForItem(1, 0)
				expect(manager.items[1].state).toBe(0)
			})
		})
		
		describe('getStateForItem', function() {
			it("it reports an item's current state", function() {
				expect(manager.getStateForItem(1)).toBeNull()
				manager.setStateForItem(1, 1)
				expect(manager.getStateForItem(1)).toBe(1)
			})
		})
	})
})
