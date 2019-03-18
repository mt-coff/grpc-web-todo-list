export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class AddTodoRequest {
  constructor ();
  getTitle(): string;
  setTitle(a: string): void;
  getDetail(): string;
  setDetail(a: string): void;
  toObject(): AddTodoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => AddTodoRequest;
}

export namespace AddTodoRequest {
  export type AsObject = {
    Title: string;
    Detail: string;
  }
}

export class GetTodoRequest {
  constructor ();
  getId(): string;
  setId(a: string): void;
  toObject(): GetTodoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => GetTodoRequest;
}

export namespace GetTodoRequest {
  export type AsObject = {
    Id: string;
  }
}

export class Todo {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getTitle(): string;
  setTitle(a: string): void;
  getDetail(): string;
  setDetail(a: string): void;
  toObject(): Todo.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Todo;
}

export namespace Todo {
  export type AsObject = {
    Id: string;
    Title: string;
    Detail: string;
  }
}

export class TodoListResponse {
  constructor ();
  getTodoList(): Todo[];
  setTodoList(a: Todo[]): void;
  toObject(): TodoListResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => TodoListResponse;
}

export namespace TodoListResponse {
  export type AsObject = {
    TodoList: Todo[];
  }
}

