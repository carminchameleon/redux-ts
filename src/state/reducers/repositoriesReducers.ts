interface RepositoriesState {
  loading: boolean;
  error: string | null;
  // 메세지이거나 없을 거니까
  data: string[];
}

// 각각의 action에 해당하는 type을 지정해준다.

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

//우리가 내보내는 것도 위의 interface와 일치하게 나가게 하기 위해서

const reducer = (
  state: RepositoriesState,
  action: /// action은 세가지 중에 하나가 될 것이기 때문에
  Action
): RepositoriesState => {
  //   switch로 할 수도 있지만 이런 방식으로도 가능
  //   if (action.type === 'search_repositories_success') {
  //     action.payload;
  //   }

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
