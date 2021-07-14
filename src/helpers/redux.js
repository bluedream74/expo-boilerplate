/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
*/
import Store from '../../Store';

export const dispatcher = (action) => {

  Store.dispatch(action);

};

export const getState = () => Store.getState();


