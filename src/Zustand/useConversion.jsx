// import { create } from "zustand";

// const useConversion = create((set) => ({
//     selectedConversion: null,
//     setSelectedConversion: (selectedConversion) => set({ selectedConversion }),

//     messages: [],
//     setMessages: (messages) => set({ messages })
// }));

// export default useConversion;

// Zustand/useConversion.js
import { create } from 'zustand';

const useConversion = create((set) => ({
  selectedConversion: null,
  setSelectedConversion: (conversion) => set({ selectedConversion: conversion }),
  
  messages: [],
  setMessages: (msgs) => set({ messages: msgs }),
  appendMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
}));

export default useConversion;
