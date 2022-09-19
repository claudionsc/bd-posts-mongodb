#!/bin/bash

# Baixa a imagem
docker pull mongo

# Remove o container, se existir
docker stop node-mongoose2
docker container rm node-mongoose2

# Gera o container
docker run --name node-mongoose2 -p 27017:27017 -d mongo
