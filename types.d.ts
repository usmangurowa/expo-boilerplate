interface InitialStateProps {
  user: Object | null;
  is_authenticated: boolean;
  fonts_loaded: boolean;
  is_app_ready: boolean;
  is_ui_loading: boolean;
}

interface NotificationType {
  _id: string;
  device: string;
  imei: string;
  company: string;
  note: string;
  type: string;
  value: string;
  status: string;
  notified: boolean;
  createdAt: number;
  __v: number;
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

interface UserProps extends RegisterProps {
  _id: string;
  token: string;
  createdAt: number;
  __v: number;
  password?: string;
  avatar?: string;
  username: string;
  dob?: string;
  settings?: {
    hasPaymentPin: boolean;
    hasAuthenticationPin: boolean;
    enabledBiometrics: boolean;
    enabledNotifications: boolean;
    enabledEmail: boolean;
  };
}

type RespionseType = {
  message: string;
  user?: UserProps;
  token?: string;
};
