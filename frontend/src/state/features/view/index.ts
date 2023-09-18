import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { viewPayload } from '../../../types';

export const viewSlice = createSlice({
    name: 'view',
    initialState: {
        page: 'home',
        language: 'FR',
        darkMode: true
    },
    reducers: {
        updatePage: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.page !== undefined) {
                state.page = action.payload.page || state.page
            }
        },
        updateLanguage: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.language !== undefined) {
                state.language = action.payload.language || state.language
            }
        },
        updateTheme: (state, action: PayloadAction<viewPayload>) => {
            if (action.payload.dark !== undefined) {
                state.darkMode = action.payload.dark
            }
        },
    },
})

export const selectPage = (state: RootState) => state.view.page
export const selectLanguage = (state: RootState) => state.view.language
export const selectDarkMode = (state: RootState) => state.view.darkMode

export const {updatePage, updateLanguage, updateTheme} = viewSlice.actions
export default viewSlice.reducer