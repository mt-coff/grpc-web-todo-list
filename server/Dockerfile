FROM golang:1.12.1

ENV GO111MODULE=on
WORKDIR /go/src/server
COPY . .

RUN go get github.com/pilu/fresh
CMD [ "fresh" ]

EXPOSE 9090