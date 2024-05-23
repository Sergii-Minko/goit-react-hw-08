import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import axios from "axios";
import { contactsApi } from "../../config/contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await contactsApi.get("/contacts");
      return response.data;
    } catch (e) {
      toast.error("Something went wrong. Please try again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await contactsApi.post("/contacts", { name, number });
      toast.success(`${name} was added to the contact list!`);
      return response.data;
    } catch (e) {
      toast.error("Something went wrong. Please try again!");
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await contactsApi.delete(`/contacts/${contactId}`);
      toast.success(`${response.data.name} was deleted!`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (credentials, thunkAPI) => {
    const contactId = credentials.id;
    try {
      const response = await contactsApi.patch(`/contacts/${contactId}`, {
        name: credentials.name,
        number: credentials.number,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
