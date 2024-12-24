dc := "docker compose"

file_app := "--file docker-compose.app.yml"

container_app := "app"

command := dc + " " + file_app

default:
  just --list

install:
    rm -rf ./node_modules
    rm yarn.lock
    yarn

up args="":
  {{command}} up --build --remove-orphans {{args}}

down args="":
  {{command}} down {{args}}
