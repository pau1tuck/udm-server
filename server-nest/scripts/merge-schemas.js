const fs = require("fs");
const path = require("path");

const schemaDir = path.resolve(__dirname, "../prisma/schemas");
const schemaFiles = fs.readdirSync(schemaDir);

let fullSchema = `
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DB_URL")
}

`;

for (const file of schemaFiles) {
    const schema = fs.readFileSync(path.join(schemaDir, file), "utf-8");
    fullSchema += schema + "\n\n";
}

fs.writeFileSync(
    path.resolve(__dirname, "../prisma/schema.prisma"),
    fullSchema,
);
