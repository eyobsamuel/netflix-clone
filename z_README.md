<!-- ----------------------------------------------------------------------- -->
<!--                            1. install nextJs                            -->
<!-- ----------------------------------------------------------------------- -->
<!-- ----------------------------------------------------------------------- -->
<!--                          2. install taiwinCss                           -->
<!-- ----------------------------------------------------------------------- -->
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
<!-- ----------------------- (+) tailwind.config.js ------------------------ -->
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

<!-- --------------------------- (+) globals.css --------------------------- -->
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-zinc-900 h-full overflow-x-hidden;
}

#__next {
  @apply h-full;
}

html {
  @apply h-full;
}
<!-- ----------------------------------------------------------------------- -->
<!--                            3. install prisma                            -->
<!-- ----------------------------------------------------------------------- -->
- npm install -D prisma
- npx prisma init
+ Next steps:
    1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started  
    2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.       
    3. Run prisma db pull to turn your database schema into a Prisma schema. //npx prisma db push 
    4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
- npm i @prisma/client
- npm i next-auth
- npm i @next-auth/prisma-adapter
- npm i swr
