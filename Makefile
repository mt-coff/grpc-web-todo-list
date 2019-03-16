proto:
	protoc --proto_path=proto todo.proto \
		--js_out=import_style=commonjs:./client/pb \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/pb \
		--go_out=plugins=grpc:./server/pb

.PHONY: proto