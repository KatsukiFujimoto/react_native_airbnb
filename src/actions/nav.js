import { NavigationActions } from 'react-navigation';

export function goBack() {
  return NavigationActions.back();
}

export function navigate(route) {
  return NavigationActions.navigate(route);
}

export function resetRoute(route) {
  return (dispatch, getState) => {
    const nav = getState().nav;
    dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [
        NavigationActions.navigate(route)
      ]
    }));
  };
}