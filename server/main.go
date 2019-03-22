package main

import (
	"log"
)

const (
	port = ":9090"
)

func main() {
	err := RunServer(port)
	if err != nil {
		log.Fatalf("Faild: %v", err)
	}
	log.Printf("Listen: %v", port)
}
