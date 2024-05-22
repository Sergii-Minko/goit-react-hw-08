import { createAsyncThunk } from '@reduxjs/toolkit'
import { goitApi } from '../../config/goitApi'

export const fetchTodosThunk = createAsyncThunk('todos/FetchAll', async (_, thunkApi) => {
	try {
		const { data } = await goitApi.get('tasks')
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const deleteTodoThunk = createAsyncThunk('tasks/Delete', async (id, thunkApi) => {
	try {
		const { data } = await goitApi.delete(`tasks/${id}`)
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const addTodoThunk = createAsyncThunk('tasks/Add', async (body, thunkApi) => {
	try {
		const { data } = await goitApi.post('tasks', body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const likeTodoThunk = createAsyncThunk('tasks/Like', async (body, thunkApi) => {
	try {
		const { data } = await goitApi.patch(`tasks/${body.id}`, { ...body, liked: !body.liked })
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const toggleTodoThunk = createAsyncThunk('tasks/Toggle', async (body, thunkApi) => {
	try {
		const { data } = await goitApi.patch(`tasks/${body.id}`, { ...body, completed: !body.completed })
		return data.id
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})

export const editTodoThunk = createAsyncThunk('todos/Edit', async (body, thunkApi) => {
	try {
		const { data } = await goitApi.patch(`todos/${body.id}`, body)
		return data
	} catch (error) {
		return thunkApi.rejectWithValue(error.message)
	}
})