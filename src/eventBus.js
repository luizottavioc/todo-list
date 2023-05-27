import mitt from 'mitt'

const emitter = mitt()

export const addTodo = (newLine) => {
    emitter.emit('addTodo', newLine);
    refreshProgress();
}

export const onAddTodo = (callback) => {
    emitter.on('addTodo', callback);
}

export const changeTodo = (data) => {
    emitter.emit('changeTodo', data);
    refreshProgress();
}

export const onChangeTodo = (callback) => {
    emitter.on('changeTodo', callback);
}

export const removeTodo = (id) => {
    emitter.emit('removeTodo', id);
    refreshProgress();
}

export const onRemoveTodo = (callback) => {
    emitter.on('removeTodo', callback);
}

export const refreshProgress = () => {
    emitter.emit('refreshProgress');
}

export const onRefreshProgress = (callback) => {  
    emitter.on('refreshProgress', callback);
}