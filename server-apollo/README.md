# UDM Apollo Server

You must install PM2 globally on your machine:
`npm install -g pm2`

## Start Docker

Grant execution permission to `startDocker.sh` (Linux / Mac OS only):
`chmod +x ./scripts/startDocker.sh`

Linux / Mac OS:
`./scripts/startDocker.sh`

Windows:
`.\scripts\startDocker.bat`

Note: The PostgreSQL database is stored in `./backup.sql`

## Start development server

(sudo) npm install -g typescript nodemon concurrently
pnpm install
chmod +x ./scripts/startDev.sh
./scripts/startDev.sh
