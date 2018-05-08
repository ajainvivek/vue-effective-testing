class: center, middle
# Effective Testing with .yellow[JEST]

---

class:bekk, center, middle

Hello, I am

## Ajain

.yellow[@ajainvivek]

---

class:agenda, middle

* Unit testing is a lot like going to the  .red[gym]

<p align="center">
  <img src="https://i.imgur.com/3CJzPN9.png" height="400" />
</p>

---

## Why JEST?

* Minimal setup or configuration
* Includes assertion library and mocking support
* Out of box snapshot testing and covergae support
* I still love Mocha, Chai & Sinon combo

---

class:nice, middle, center

".blue[Setup JEST]"

---

## Installation

* yarn add jest --save-dev
* yarn add babel babel-jest babel-preset-es2015 --save-dev

---

## Configuration

    module.exports = {
        rootDir: path.resolve(__dirname, "../../"),
        moduleFileExtensions: ["js", "vue"],
        moduleNameMapper: {
            "^@/(.*)$": "<rootDir>/src/$1"
        },
        testMatch: ["**/*.spec.(js)"],
        transform: {
            "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
            ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
        },
        snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
        setupFiles: ["<rootDir>/test/unit/setup"],
        coverageDirectory: "<rootDir>/test/unit/coverage",
        collectCoverageFrom: [
            "src/**/*.{js,vue}"
        ]
    };

---


## Questions?

Github: [Effective Unit Testing](https://github.com/ajainvivek/vue-effective-testing).