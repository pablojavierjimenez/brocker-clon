## Create Next.js Project

*Nota:* este proyecto esta creado con

- [Ubuntu 24.04 LTS x86_64](#)
- [Node JS v20.13.01](#)
- [NPM v10.8.0](#)

```bash
:~$ npx create-next-app@latest
# (latest vesion 15-07-2024: create-next-app@14.2.5)

# What is your project named? … inviu-clon
# Would you like to use TypeScript? … No / Yes✔
# Would you like to use ESLint? … No / Yes✔
# Would you like to use Tailwind CSS? … No / Yes✔
# Would you like to use `src/` directory? … No / Yes✔
# Would you like to use App Router? (recommended) … No / Yes✔
# Would you like to customize the default import alias (@/*)? … No✔  / Yes

```

-----------

## Git config

1. Instalar git
2. crear ssh key
   `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
3. configurar git globals
    ```
    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com
    ```
----

## Setting up Jest and Testing Library

- [Link To NextJS Jest Documentation](https://nextjs.org/docs/app/building-your-application/testing/jest)
- [NextJS Jest video](https://www.youtube.com/watch?v=u5A7GnQEKbg&ab_channel=FaztCode) *(just in case)*
- [TestingLibrary - Docu 🐙](https://testing-library.com/docs/)
```bash
:~$ npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom ts-node @types/jest
# Generate a basic Jest configuration file by running the following command:
:~$ npm init jest@latest

# The following questions will help Jest to create a suitable configuration for your project

# ✔ Would you like to use Jest when running "test" script in "package.json"? … yes
# ✔ Would you like to use Typescript for the configuration file? … yes
# ✔ Choose the test environment that will be used for testing › jsdom (browser-like)
# ✔ Do you want Jest to add coverage reports? … yes
# ✔ Which provider should be used to instrument code for coverage? › v8
# ✔ Automatically clear mock calls, instances, contexts and results before every test? … no

# Then add a ESLint plugins
:~$ npm i -D eslint-plugin-jest-dom eslint-plugin-testing-library
```
then on this file _**jest.setup.ts**_ add this import `import '@testing-library/jest-dom'`.
and on the _**package.json**_ add this `"test:watch": "jest --watchAll"` as an other test script.

----

## Setting up Jest and Testing Library
