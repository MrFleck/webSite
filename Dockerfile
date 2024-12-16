# FROM node:alpine

# WORKDIR /var/www/html

# COPY ./www/package.json ./
# COPY ./www/package-lock.json ./

# RUN npm install



# Usando a imagem base do Node.js
FROM node:alpine

# Define o diretório de trabalho dentro do container
WORKDIR /var/www/html

# Copia os arquivos de dependências do Node.js para o diretório de trabalho
COPY ./www/package.json ./
COPY ./www/package-lock.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia os arquivos do projeto para o diretório de trabalho do container
COPY ./www /var/www/html

# Define a porta exposta pelo container
EXPOSE 8000

# Define o comando padrão para iniciar a aplicação
CMD ["npm", "start"]
