import { useState, useEffect } from 'react';
import axios from 'axios';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);
    const [editTodoTitle, setEditTodoTitle] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteTodoId, setDeleteTodoId] = useState(null);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Errorrrrrr');
            }
        }
        fetchTodos();
    }, []);

    const addTodo = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: newTodoTitle,
                completed: false,
            });
            setTodos([...todos, response.data]);
            setNewTodoTitle('');
        } catch (error) {
            console.error('Something went wrong..');
        }
    };

    const handleEditTodo = async () => {
        try {
            await axios.put(`https://jsonplaceholder.typicode.com/todos/${editTodoId}`, {
                title: editTodoTitle,
            });
            const updatedTodos = todos.map((todo) =>
                todo.id === editTodoId
                    ? {
                          ...todo,
                          title: editTodoTitle,
                      }
                    : todo,
            );
            setTodos(updatedTodos);
            handleCloseDialog();
        } catch (error) {
            console.error('Something went wrong...');
        }
    };

    const handleOpenDialog = (id, title) => {
        setEditTodoId(id);
        setEditTodoTitle(title);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setEditTodoId(null);
        setEditTodoTitle('');
        setOpenDialog(false);
    };

    const handleDeleteTodo = async () => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${deleteTodoId}`);
            const updatedTodos = todos.filter((todo) => todo.id !== deleteTodoId);
            setTodos(updatedTodos);
            handleCloseDeleteDialog();
        } catch (error) {
            console.log('Something went wrong');
        }
    };

    const handleOpenDeleteDialog = (id) => {
        setDeleteTodoId(id);
    };
    const handleCloseDeleteDialog = () => {
        setDeleteTodoId(null);
    };

    return (
        <div>
            <h2>Todo List</h2>
            <TextField
                label="New title"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                variant="outlined"
                style={{ marginBottom: '1rem' }}
            ></TextField>
            <Button variant="contained" color="primary" onClick={addTodo}>
                Add todo
            </Button>
            <TableContainer
                component={Paper}
                style={{ background: 'black', textDecorationColorolor: 'white' }}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: 'white' }}>Id</TableCell>
                            <TableCell style={{ color: 'white' }}>Title</TableCell>
                            <TableCell style={{ color: 'white' }}>Completed</TableCell>
                            <TableCell style={{ color: 'white' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: 'white' }}>
                        {todos.map((todo) => (
                            <TableRow key={todo.id}>
                                <TableCell style={{ color: 'white' }}>{todo.id}</TableCell>
                                <TableCell style={{ color: 'white' }}>{todo.title}</TableCell>
                                <TableCell style={{ color: 'white' }}>
                                    {todo.completed ? 'YES' : 'NO'}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpenDialog(todo.id, todo.title)}>
                                        Edit
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpenDeleteDialog(todo.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Edit Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Todo Title"
                        value={editTodoTitle}
                        onChange={(e) => setEditTodoTitle(e.target.value)}
                        variant="outlined"
                        fullWidth
                    ></TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditTodo} variant="contained" color="primary">
                        Save
                    </Button>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={deleteTodoId !== null}>
                <DialogTitle>Delete Todo</DialogTitle>
                <DialogContent>Are you sure that you want to delete this todo?</DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteTodo} variant="contained" color="secondary">
                        Yes, I am sure
                    </Button>
                    <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default Todos;
