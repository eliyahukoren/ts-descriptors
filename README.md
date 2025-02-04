# TypeScript Decorators Example

This project demonstrates how to use decorators in TypeScript for both class methods and standalone functions.

## Installation

### 1. Clone the Repository
```sh
git clone https://github.com/eliyahukoren/ts-descriptors.git
cd ts-decorators
```

### 2. Initialize a Node.js Project
If you haven't already initialized a Node.js project, run:
```sh
npm init -y
```

### 3. Install Required Dependencies
```sh
npm install
```

### 4. Install TypeScript and Development Dependencies
```sh
npm install --save-dev typescript ts-node @types/node
```

### 5. Enable Decorators in TypeScript
Create a **`tsconfig.json`** file (if not already present) and ensure the following settings:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src"]
}
```

## Running the Project

### 1. Compile TypeScript
```sh
npx tsc
```

### 2. Run the Example
Using **ts-node** (recommended for development):
```sh
npx ts-node src/main.ts
```

## Usage
This project includes examples of:
- **Class Method Decorators**
- **Standalone Function Decorators**
- **Validation Decorators**

## License
MIT License

