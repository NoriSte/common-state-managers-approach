# React State Management

This project contains a possible approach for unified management of different State Managers.

## Goals

- Transparently using more State Managers in the same application
- Ease removing/adding/replacing the used State Managers

## How

- by hiding every State Manager-related implementation from the consumers
- exposing common APIs to manage the states (get-only APIs, set-only APIs, etc.)

## Description

In this project, two different sections—books and songs— are rendered. Their implementations look identical even if they use two completely different State Managers: a simple React Context and Recoil.

The `src/states/` directory is the core of the project, where the code strictly bound to the State Managers is completely hidden and some common APIs are exposed.
