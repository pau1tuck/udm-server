cd /app/udm-server
docker build -t udm-server-node .
docker run -p 5000:5000 -v $(pwd):/app/udm-server-node udm-server-node