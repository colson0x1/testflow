import tv4 from 'tv4';
import stateSchema from 'middlewares/stateSchema';

const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if (!tv4.validate(getState(), stateSchema)) {
      console.log('Invalid state schema detected!');
    }
  };

export default stateValidator;
