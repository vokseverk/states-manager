# States Manager

A JavaScript class for managing states on a DOM node.

## Usage

The `StatesManager` handles _states_ and _modifiers_ - states being mutually exclusive, so an element is always in one of its available states. Modifiers are optional sub-states that can be applied with any of the available states.

### States

Given the following piece of HTML

```html
<nav class="menubar">
	...
</nav>
```

You can attach a `StatesManager` to it and handle its states like this:

```javascript
const menubarManager = new StatesManager('.menubar', {
	states: ['compact', 'regular'],
	modifiers: ['collapsed', 'dark']
})

// Set state by index
menubarManager.setState(0)

// Set state by value (will only apply if it matches)
menubarManager.setState('regular')

```

State is set on the DOM element as a `data-state=""` attribute, and is picked up on initialization, if present, e.g.:

```html
<nav class="menubar" data-state="compact">
	...
</nav>
```

### Modifiers

Any state can have a set of modifiers applied - either via a `data-modifiers=""` attribute or directly as CSS classes:

```html
<nav id="menu" class="menubar" data-state="regular" data-modifiers="dark collapsed">
	...
</nav>

<nav id="tools" class="menubar dark" data-state="compact">
	...
</nav>

```

These are also applied on initialization, if present in the DOM.


