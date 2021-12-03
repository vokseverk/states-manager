import StatesManager from '../../src/states-manager.js'

describe('StatesManager', function() {
	it('can be initialized with a CSS selector', () => {
		const mngr = new StatesManager('#menubarSimple')
		
		expect(mngr.element.id).toBe('menubarSimple')
	})
	
	it('can be initialized with a DOM element', () => {
		const testNode = document.querySelector('#menubarSimple')
		const mngr = new StatesManager(testNode)
		
		expect(mngr.element.id).toBe('menubarSimple')
	})
	
	it('accepts an options object with a states array when initialized', () => {
		const mngr = new StatesManager('#menubarSimple', {
			states: ['compact', 'regular']
		})
		
		expect(mngr.states).toEqual(['compact', 'regular'])
	});
	
	it('detects an existing state on the DOM element', () => {
		const testNode = document.querySelector('#menubarWithState')
		
		const mngr = new StatesManager(testNode, {
			states: ['compact', 'regular']
		})
		
		expect(mngr.currentState).toBe('compact')
	})
	
	xit('detects any existing modifiers set with a data-modifiers attribute', () => {
		
	})
	
	xit('detects any existing modifiers set with CSS classes', () => {
		
	})
	
	xdescribe('setState', () => {
		it('can set state by index', () => {
			
		})
		
		it('detects an out of range index and doesn\'t apply a state', () => {
			
		});
		
		it('can set state by string', () => {
			
		})
		
		it('does not apply the state if it isn\'t one of the registered options', () => {
			
		});
	})
})
