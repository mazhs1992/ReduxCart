# Async Redux With Maximillian S.

### For Starters
    1.  Create store file, store will have the state of the app. 
    2.  Inside of it we create ui-slice, cart-slice to handle the state for ui and the cart.
    3.  Create createSlice and export it along with the actions.
    4.  Inside index  create store with configureStore  and initialize reducers.
    5.  Inside main index import Provider,  pass it the store and wrap the App.
    6.  Import inside the Component you need an action  uiActions (your action), useDispatch to dispatch and action.
    7.  Import inside the component you need the state useSelector() in order to have access .

### Handle Promices

    1. Try inside the App component with useEffect
    2. Added notification to handle error and for UI purposes