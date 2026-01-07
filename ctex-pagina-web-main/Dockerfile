# -- FASE 1: BUILD (Compilación de la aplicación React) --
# Usa una imagen base con Node.js para compilar el código fuente.
FROM node:18-alpine AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package.json .
COPY package-lock.json .

# Instala todas las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Genera la versión de producción del sitio (archivos estáticos)
RUN npm run build

# -- FASE 2: RUN (Servidor de los archivos estáticos) --
# Usa una imagen base ligera de Nginx para servir los archivos
FROM nginx:alpine

# Copia los archivos estáticos generados desde la fase 'builder'
COPY --from=builder /app/build /usr/share/nginx/html

# Elimina la configuración por defecto de Nginx y copia una personalizada
# (Asumimos que la configuración por defecto es suficiente para un SPA simple)
# Si necesitas un archivo nginx.conf personalizado, lo deberías añadir aquí.

# Expone el puerto por defecto de Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]