import axios from 'axios';

export interface ThunkExtraArg {
  api: typeof axios;
}