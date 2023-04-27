interface InitialStateProps {
  user: any;
  is_authenticated: boolean;
  fonts_loaded: boolean;
  is_app_ready: boolean;
  is_online: boolean;
}

interface Action {
  type: ActionTypes;
  payload?: any;
}

type ReducerType = (state: InitialStateProps, action: Action) => State;

type ContextHook = () => {
  state: InitialStateProps;
  dispatch: (action: Action) => void;
};

type LoginProps = {
  email: string;
  password: string;
};

interface RegisterProps extends LoginProps {
  firstName: string;
  lastName: string;
  phone: string;
  confirmPassword?: string;
}
