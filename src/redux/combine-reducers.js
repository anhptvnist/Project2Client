import { IntlReducer as Intl } from 'react-redux-multilingual';
import { clearStorage } from '../config';
import { combineReducers } from 'redux';
import { auth } from '../modules/auth/redux/reducers';
import { admin } from '../modules/admin/redux/reducers';
import { lecturer } from '../modules/lecturer/redux/reducers';
import { student } from '../modules/student/redux/reducers';
const appReducer = combineReducers(Object.assign({
   auth,
   admin,
   lecturer,
   student
}, { Intl }));

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
        clearStorage();
    }

    return appReducer(state, action);
}

export default rootReducer;