package main

import (
	"context"
	"log"
	"net"

	"github.com/golang/protobuf/ptypes/empty"
	pb "github.com/mt-coff/grpc-web-todo-list/server/pb"
	"google.golang.org/grpc"
)

const (
	port = ":9090"
)

type server struct{}

func (s *server) AddTodo(ctx context.Context, in *pb.AddTodoRequest) (*pb.Todo, error) {
	log.Printf("Recieved: %v", in.Title)
	return &pb.Todo{}, nil
}

func (s *server) GetTodo(ctx context.Context, in *pb.GetTodoRequest) (*pb.Todo, error) {
	return &pb.Todo{}, nil
}

func (s *server) GetTodoList(ctx context.Context, in *empty.Empty) (*pb.TodoListResponse, error) {
	return &pb.TodoListResponse{}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failt to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterTodoListServiceServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failt to serve: %v", err)
	}
}
