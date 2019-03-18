/**
 * @fileoverview gRPC-Web generated client stub for todoList
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  Empty,
  AddTodoRequest,
  GetTodoRequest,
  Todo,
  TodoListResponse} from './todo_pb';

export class TodoListServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetTodoList = new grpcWeb.AbstractClientBase.MethodInfo(
    TodoListResponse,
    (request: Empty) => {
      return request.serializeBinary();
    },
    TodoListResponse.deserializeBinary
  );

  getTodoList(
    request: Empty,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: TodoListResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/todoList.TodoListService/GetTodoList',
      request,
      metadata,
      this.methodInfoGetTodoList,
      callback);
  }

  methodInfoGetTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    Todo,
    (request: GetTodoRequest) => {
      return request.serializeBinary();
    },
    Todo.deserializeBinary
  );

  getTodo(
    request: GetTodoRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Todo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/todoList.TodoListService/GetTodo',
      request,
      metadata,
      this.methodInfoGetTodo,
      callback);
  }

  methodInfoAddTodo = new grpcWeb.AbstractClientBase.MethodInfo(
    Todo,
    (request: AddTodoRequest) => {
      return request.serializeBinary();
    },
    Todo.deserializeBinary
  );

  addTodo(
    request: AddTodoRequest,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: Todo) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/todoList.TodoListService/AddTodo',
      request,
      metadata,
      this.methodInfoAddTodo,
      callback);
  }

}

