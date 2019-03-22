package main

import (
	"context"
	"errors"
	"fmt"
	"net"

	"github.com/golang/protobuf/ptypes/empty"
	api "github.com/mt-coff/grpc-web-todo-list/server/pb"
	"github.com/rs/xid"
	"google.golang.org/grpc"
)

type server struct{}

var todos = make([]*api.Todo, 0)

func (s *server) AddTodo(ctx context.Context, req *api.AddTodoRequest) (*api.Todo, error) {
	if req.Title == "" || req.Detail == "" {
		fmt.Println(req.Title)
		return nil, errors.New("Title or Detail are required")
	}
	todo := api.Todo{
		Id:     xid.New().String(),
		Title:  req.Title,
		Detail: req.Detail,
	}
	todos = append(todos, &todo)
	return &todo, nil
}

func (s *server) GetTodo(ctx context.Context, req *api.GetTodoRequest) (*api.Todo, error) {
	res := api.Todo{}
	for _, todo := range todos {
		if todo.Id == req.Id {
			res = *todo
			return &res, nil
		}
	}

	return nil, errors.New("Cannot find id")
}

func (s *server) GetTodoList(ctx context.Context, in *empty.Empty) (*api.TodoListResponse, error) {
	return &api.TodoListResponse{Todo: todos}, nil
}

func RunServer(port string) error {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		return err
	}

	s := grpc.NewServer()
	api.RegisterTodoListServiceServer(s, &server{})

	return s.Serve(lis)
}
