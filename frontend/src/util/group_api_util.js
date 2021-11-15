import axios from 'axios';

export const fetchGroup = id => (
    axios.get(`/api/groups/${id}`)
)

export const fetchGroups = () => (
    axios.get('/api/groups/')
)

export const createGroup = group => (
    axios.post('/api/groups/create', group)
)

export const addUserToGroup = group => (
    axios.patch('/api/groups/add_user', group)
)

export const deleteGroup = id => (
    axios.delete(`/api/groups/${id}`)
)