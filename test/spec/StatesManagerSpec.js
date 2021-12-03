import StatesManager from '../../src/states-manager.js'

describe('StatesManager', function() {
	fit('can be initialized with a CSS selector', () => {
		const mngr = new StatesManager('.menubar')
		
		expect(mngr.element).toBeDefined()
	})
	
	it('can be initialized wuith a DOM element', () => {
		
	})
	
	it('detects an existing state on the DOM element', () => {
		
	})
	
	it('detects any existing modifiers set with a data-modifiers attribute', () => {
		
	})
	
	it('detects any existing modifiers set with CSS classes', () => {
		
	})
	
	describe('setState', () => {
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
