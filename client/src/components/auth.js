import axios from 'axios'
import { useState } from 'react'


const server_add = `http://localhost:3000/api`

export async function handel_AllProduct() {
    try {
        const result = await axios.get(server_add + '/home', { withCredentials: true })
        return result.data
    } catch (err) {

    }
}

export async function handelLogin(email, password) {
    try {
        const response = await axios.post(server_add + "/login", { email, password }, { withCredentials: true });

        //data = response.data.data
        const { data } = response

        localStorage.setItem('authUser', JSON.stringify(data));
        //console.log(response.data.data);
        return { res: response.data, status: true }
    }
    catch (err) {
        //console.log(err)
        return { res: err.response.data, status: false }
    }
}

export async function handelSignup(name, email, phone_no, dob, address, password) {
    try {
        const result = await axios.post(server_add + "/signup", { name, email, phone_no, dob, address, password });
        console.log(result.data.message);
        return { res: result.data, status: true }
    }
    catch (err) {
        //console.log(err.response.data)

        return { res: err.response.data, status: false }
    }
}

// NEW: Get current logged-in user using cookie session
export async function handelGetMe() {
    try {
        const storedUser = JSON.parse(localStorage.getItem('authUser'));
        //console.log(storedUser.data);  // "Partha Singh"
        return storedUser.data
    } catch (err) {
        return { res: err.response?.data || "Not authenticated", status: false };
    }
}

export function handleLogout() {
  localStorage.removeItem('authUser'); // Clear saved user data
  window.location.href = '/login';    // Redirect to login page
}