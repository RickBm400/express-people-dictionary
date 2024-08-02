# Usar una imagen base de Node.js
FROM node:20

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
# Instalar dependencias

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY . .
# Copiar el resto del código de la aplicación

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]